package com.ziqni.admin.sdk.streaming.stomp;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ziqni.admin.sdk.context.*;
import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import com.ziqni.admin.sdk.streaming.handlers.EventHandler;
import com.ziqni.admin.sdk.streaming.runnables.MessageToSend;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Objects;
import java.util.concurrent.*;
import java.util.zip.GZIPOutputStream;
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
    private final Map<String, EventHandler> eventHandlers = new ConcurrentHashMap<>();

    private WebSocket webSocket;
    private StompHeartbeatManager heartbeatManager;

    private static final int MAX_RECONNECT_ATTEMPTS = 5;
    private static final long RECONNECT_DELAY_SECONDS = 5;

    private final ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();
    private int reconnectAttempts = 0;


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
        setState(STATE_CONNECTING);
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
        setState(STATE_DISCONNECTING);
        logger.debug("DISCONNECT frame sent.");
    }


    public void subscribe(EventHandler handler) {
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
        scheduler.shutdown();

        if (Objects.nonNull(webSocket)) {
            webSocket.sendClose(WebSocket.NORMAL_CLOSURE, "Client shutdown");
        }
    }

    public <T> MessageToSend<T> prepareMessageToSend(StompHeaders headers, T payload){
        return new MessageToSend<>(headers, payload, this);
    }

    /** Listener */

    @Override
    public void onOpen(WebSocket webSocket) {
        logger.info("WebSocket connection opened.");
        setState(STATE_CONNECTED);
        webSocket.request(1);
    }

    @Override
    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
        String message = data.toString().trim();

        if (message.isEmpty()) {
            // Handle server heartbeat
            heartbeatManager.updateLastServerHeartbeatTime();
        } else {
            // Parse the message into a StompFrame
            StompFrame frame = StompFrame.parse(message);

            try {

                // Handle specific frame types
                switch (frame.getCommand()) {
                    case CONNECTED -> {
                        setState(STATE_CONNECTED);
                        onConnect.accept(this);

                        String heartBeatHeader = frame.getHeaders().getHeartBeat();
                        if (heartBeatHeader != null) {
                            String[] parts = heartBeatHeader.split(",");
                            heartbeatManager.start(Long.parseLong(parts[1]));// Server's desired interval
                        }
                    }
                    case MESSAGE -> {
                        eventHandlers.get(frame.getDestination()).handleFrame(frame.getHeaders(),frame.getBody());
                    }
                    case ERROR -> {
                        logger.error("Error frame received: " + frame.getBody());
                    }
                    default -> {
                        logger.error("Unhandled command: " + frame.getCommand());
                    }
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
        setState(STATE_NOT_CONNECTED);

        if (heartbeatManager != null) {
            heartbeatManager.stop();
        }

        attemptReconnect();

        return CompletableFuture.completedFuture(null);
    }

    @Override
    public void onError(WebSocket webSocket, Throwable error) {
        logger.error("WebSocket error: " + error.getMessage());
        setState(STATE_FAILURE, null, null, error);

        attemptReconnect();
    }

    public <T> CompletableFuture<WebSocket> sendMessage(StompHeaders headers, T payload) {
        if(isNotConnected()){
            throw new IllegalStateException("Client is disconnected from the server.");
        }

        // Ensure the destination header is set
        if (headers.getDestination() == null || headers.getDestination().isEmpty()) {
            throw new IllegalArgumentException("Destination header is required for sending a message.");
        }

        // Serialize the payload if it's not already a string
        String body;
        if (payload instanceof String) {
            body = (String) payload;
        } else {
            body = serializeToJson(payload);
            headers.setContentType("application/json");
        }

        // Build the SEND frame
        StringBuilder sendFrame = new StringBuilder("SEND\n");
        headers.toMap().forEach((key, value) ->
                sendFrame.append(key).append(":").append(String.join(",", value)).append("\n")
        );
        sendFrame.append("\n").append(body).append("\0");

        // Send the frame over the WebSocket
        // Log the action
        logger.debug("SEND frame sent to: " + headers.getDestination() + ", payload: " + body);
        return webSocket.sendText(sendFrame.toString(), true);

    }


    /**
     * This requires server side tweaks to handle compressed payloads.
     * @param headers
     * @param payload
     * @param <T>
     */
    public <T> void sendMessageCompressed(StompHeaders headers, T payload) {
        // Ensure the destination header is set
        if (headers.getDestination() == null || headers.getDestination().isEmpty()) {
            throw new IllegalArgumentException("Destination header is required for sending a message.");
        }

        // Serialize and compress the payload
        String serializedPayload = serializeToJson(payload);
        String compressedPayload = compressPayload(serializedPayload);

        // Add a header to indicate compression
        headers.add("content-encoding", "gzip");

        // Build the SEND frame
        StringBuilder sendFrame = new StringBuilder("SEND\n");
        headers.toMap().forEach((key, value) ->
                sendFrame.append(key).append(":").append(String.join(",", value)).append("\n")
        );
        sendFrame.append("\n").append(compressedPayload).append("\0");

        // Send the frame over the WebSocket
        webSocket.sendText(sendFrame.toString(), true);

        // Log the action
        logger.debug("Compressed SEND frame sent to: " + headers.getDestination());
    }

    private String compressPayload(String payload) {
        try (ByteArrayOutputStream byteStream = new ByteArrayOutputStream();
             GZIPOutputStream gzipStream = new GZIPOutputStream(byteStream)) {
            gzipStream.write(payload.getBytes());
            gzipStream.finish();
            return byteStream.toString(StandardCharsets.ISO_8859_1); // Use a safe character encoding for WebSocket text
        } catch (IOException e) {
            throw new RuntimeException("Failed to compress payload", e);
        }
    }

    private String serializeToJson(Object payload) {
        try {
            return EventHandler.ziqniClientObjectMapper.serializingObjectMapper().writeValueAsString(payload);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to serialize payload to JSON", e);
        }
    }
    private void attemptReconnect() {
        if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
            logger.error("Max reconnection attempts reached. Giving up.");
            return;
        }

        reconnectAttempts++;
        logger.info("Attempting to reconnect (Attempt {} of " + MAX_RECONNECT_ATTEMPTS + ")...", reconnectAttempts);

        scheduler.schedule(() -> {
            if (isNotConnected()) {
                connect().thenAccept(ws -> {
                    reconnectAttempts = 0;
                    logger.info("Reconnected successfully.");
                }).exceptionally(e -> {
                    logger.error("Reconnection attempt failed: {}", e.getMessage());
                    attemptReconnect();
                    return null;
                });
            }
        }, RECONNECT_DELAY_SECONDS, TimeUnit.SECONDS);
    }


    private void setState(int state) {
        setState(state, null, null, null);
    }

    private void setState(int state, StompHeaders headers, String payload, Throwable error) {
        connected.set(state);

        if (state == STATE_FAILURE) {
            eventBus.post(new WSClientSevereFailure(headers, payload, error));
        }
        else if (state == STATE_DISCONNECTING) {
            eventBus.post(new WSClientDisconnecting());
        }
        else if (state == STATE_NOT_CONNECTED) {
            eventBus.post(new WSClientDisconnected());
        }
        else if (state == STATE_CONNECTING) {
            eventBus.post(new WSClientConnecting());
        }
        else if (state == STATE_CONNECTED) {
            eventBus.post(new WSClientConnected());
        }

    }
}
