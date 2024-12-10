package com.ziqni.admin.sdk.streaming.client;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import com.ziqni.admin.sdk.streaming.EventHandler;
import com.ziqni.admin.sdk.streaming.runnables.MessageToSend;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Consumer;

public class StompOverWebSocket implements WebSocket.Listener {

    private static final Logger logger = LoggerFactory.getLogger(StompOverWebSocket.class);

    public static final int STATE_FAILURE = -2;
    public static final int STATE_DISCONNECTING = -1;
    public static final int STATE_NOT_CONNECTED = 0;
    public static final int STATE_CONNECTING = 1;
    public static final int STATE_CONNECTED = 2;

    private final String wsUri;
    private final String username;
    private final String passcode;
    private final ZiqniSimpleEventBus eventBus;
    private final Consumer<StompOverWebSocket> onConnect;

    private final AtomicInteger connected = new AtomicInteger(0);
    private final Map<String, EventHandler<?>> eventHandlers = new ConcurrentHashMap<>();

    private WebSocket webSocket;
    private StompHeartbeatManager heartbeatManager;

    public StompOverWebSocket(String wsUri, String username, String passcode, ZiqniSimpleEventBus eventBus, Consumer<StompOverWebSocket> onConnect) {
        this.wsUri = wsUri;
        this.username = username;
        this.passcode = passcode;
        this.eventBus = eventBus;
        this.onConnect = onConnect;
    }

    public CompletableFuture<Void> connect() {
        HttpClient client = HttpClient.newHttpClient();
        return client.newWebSocketBuilder()
                .buildAsync(URI.create(wsUri), this)
                .thenAccept(ws -> {
                    this.webSocket = ws;
                    this.heartbeatManager = new StompHeartbeatManager(webSocket, eventBus, 10000); // Client interval: 10 seconds
                    sendConnectFrame();
                });
    }

    private void sendConnectFrame() {
        connected.set(STATE_CONNECTING);
        StompHeaders connectHeaders = new StompHeaders();
        connectHeaders.setLogin(username);
        connectHeaders.setPasscode(passcode);
        connectHeaders.setAcceptVersion("1.2");
        connectHeaders.setHeartbeat(10000, 0);

        StringBuilder connectFrame = new StringBuilder("CONNECT\n");
        connectHeaders.toMap().forEach((key, value) -> connectFrame.append(key).append(":").append(String.join(",", value)).append("\n"));
        connectFrame.append("\n\0");

        webSocket.sendText(connectFrame.toString(), true);
        logger.debug("CONNECT frame sent.");

    }

    public void subscribe(String destination) {
        StompHeaders subscribeHeaders = new StompHeaders();
        subscribeHeaders.setDestination(destination);
        subscribeHeaders.setId("sub-0");

        StringBuilder subscribeFrame = new StringBuilder("SUBSCRIBE\n");
        subscribeHeaders.toMap().forEach((key, value) -> subscribeFrame.append(key).append(":").append(String.join(",", value)).append("\n"));
        subscribeFrame.append("\n\0");

        webSocket.sendText(subscribeFrame.toString(), true);
        logger.debug("SUBSCRIBE frame sent to: " + destination);
    }

    public void sendMessage(String destination, String payload) {
        StompHeaders sendHeaders = new StompHeaders();
        sendHeaders.setDestination(destination);

        StringBuilder sendFrame = new StringBuilder("SEND\n");
        sendHeaders.toMap().forEach((key, value) -> sendFrame.append(key).append(":").append(String.join(",", value)).append("\n"));
        sendFrame.append("\n").append(payload).append("\0");

        webSocket.sendText(sendFrame.toString(), true);
        logger.debug("SEND frame sent to: " + destination);
    }

    public void disconnect() {
        if (heartbeatManager != null) {
            heartbeatManager.stop();
        }
        logger.debug("Sending DISCONNECT frame.");
        String disconnectFrame = "DISCONNECT\n\n\0";
        webSocket.sendText(disconnectFrame, true);
        logger.debug("DISCONNECT frame sent.");
    }


    public void subscribe(EventHandler<?> handler) {
        eventHandlers.put(handler.getTopic(), handler);
        subscribe(handler.getTopic());
    }

    public boolean isConnected() {
        return connected.get() == STATE_CONNECTED;
    }

    public boolean isNotConnected() {
        return connected.get() != STATE_CONNECTED;
    }

    public boolean isConnecting() {
        return connected.get() == STATE_CONNECTING;
    }

    public boolean isDisconnecting() {
        return connected.get() == STATE_DISCONNECTING;
    }

    public boolean isFailure() {
        return connected.get() == STATE_FAILURE;
    }


    public void shutdown() {
        webSocket.sendClose(WebSocket.NORMAL_CLOSURE, "Client shutdown");
    }

    public <T> MessageToSend<T> prepareMessageToSend(StompHeaders headers, T payload){
        return new MessageToSend<>(headers, payload, this);
    }

    /** Listener */

    @Override
    public void onOpen(WebSocket webSocket) {
        logger.info("WebSocket connection opened.");
        connected.set(STATE_CONNECTED);
        webSocket.request(1);
    }

    @Override
    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
        String message = data.toString().trim();

        if (message.isEmpty()) {
            // Handle server heartbeat
            heartbeatManager.updateLastServerHeartbeatTime();
        } else {
            try {
                // Parse the message into a StompFrame
                StompFrame frame = StompFrame.parse(message);

                // Handle specific frame types
                switch (frame.getCommand()) {
                    case CONNECTED -> {
                        connected.set(STATE_CONNECTED);
                        onConnect.accept(this);
                        String heartBeatHeader = frame.getHeaders().get("heart-beat");
                        if (heartBeatHeader != null) {
                            String[] parts = heartBeatHeader.split(",");
                            heartbeatManager.setServerHeartbeatInterval(Long.parseLong(parts[1])); // Server's desired interval
                            heartbeatManager.start();
                        }
                    }
                    case MESSAGE -> {
                        // Further processing for MESSAGE frames
                        eventHandlers.get(frame.getDestination()).handle(frame.getBody());
                    }
                    case ERROR -> {
                        logger.error("Error frame received: " + frame.getBody());
                    }
                    default -> System.out.println("Unhandled command: " + frame.getCommand());
                }
            } catch (Exception e) {
                logger.error("Failed to parse STOMP frame: " + e.getMessage());
            }
        }

        webSocket.request(1);
        return CompletableFuture.completedFuture(null);
    }

    @Override
    public CompletionStage<?> onBinary(WebSocket webSocket, java.nio.ByteBuffer data, boolean last) {
        logger.error("Unexpected binary data received.");
        return CompletableFuture.completedFuture(null);
    }

    @Override
    public CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason) {
        logger.info("WebSocket closed: " + reason);
        connected.set(STATE_NOT_CONNECTED);
        if (heartbeatManager != null) {
            heartbeatManager.stop();
        }
        return CompletableFuture.completedFuture(null);
    }

    @Override
    public void onError(WebSocket webSocket, Throwable error) {
        logger.error("WebSocket error: " + error.getMessage());
    }

    public <T> void sendMessage(StompHeaders headers, T payload) {
        // Ensure the destination header is set
        if (headers.getDestination() == null || headers.getDestination().isEmpty()) {
            throw new IllegalArgumentException("Destination header is required for sending a message.");
        }

        // Serialize the payload if it's not already a string
        String body;
        if (payload instanceof String) {
            body = (String) payload;
        } else {
            // Use your favorite JSON library (e.g., Jackson, Gson) for serialization
            body = serializeToJson(payload); // Assuming you have this utility method
            headers.setContentType("application/json");
        }

        // Build the SEND frame
        StringBuilder sendFrame = new StringBuilder("SEND\n");
        headers.toMap().forEach((key, value) ->
                sendFrame.append(key).append(":").append(String.join(",", value)).append("\n")
        );
        sendFrame.append("\n").append(body).append("\0");

        // Send the frame over the WebSocket
        webSocket.sendText(sendFrame.toString(), true);

        // Log the action
        logger.debug("SEND frame sent to: " + headers.getDestination() + ", payload: " + body);
    }

    private String serializeToJson(Object payload) {
        // Example using Jackson (ensure you add Jackson dependency in your project)
        try {
            return EventHandler.objectMapper.writeValueAsString(payload);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to serialize payload to JSON", e);
        }
    }


}
