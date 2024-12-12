package com.ziqni.admin.sdk.streaming.stomp;

import com.ziqni.admin.sdk.streaming.stomp.StompLifeCycleStateManager.*;
import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import com.ziqni.admin.sdk.streaming.handlers.EventHandler;
import com.ziqni.admin.sdk.streaming.runnables.MessageToSend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.fasterxml.jackson.core.JsonProcessingException;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;

import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;

import java.io.IOException;
import java.io.ByteArrayOutputStream;

import java.util.Objects;
import java.util.concurrent.*;
import java.util.function.Consumer;
import java.util.zip.GZIPOutputStream;

import static com.ziqni.admin.sdk.streaming.stomp.StompLifeCycleStateManager.STATE_CONNECTING;
import static com.ziqni.admin.sdk.streaming.stomp.StompLifeCycleStateManager.STATE_DISCONNECTING;

/**
 * This class is responsible for managing a STOMP connection over a WebSocket.
 * this implementation use the native java.net.http.WebSocket to make it compatible with Java 11 and later.
 * The absolute goals was to use the least amount of external dependencies possible.
 */
public class StompOverWebSocket { //implements WebSocket.Listener {

    private static final Logger logger = LoggerFactory.getLogger(StompOverWebSocket.class);


    private static final int MAX_RECONNECT_ATTEMPTS = 30;
    private static final long RECONNECT_DELAY_SECONDS = 5;
    private final StompLifeCycleStateManager lifeCycleStateManager;
    private static final ByteBuffer PING_MESSAGE = java.nio.ByteBuffer.wrap("Ping".getBytes(StandardCharsets.UTF_8));

    private final String wsUri;
    private final String username;
    private final String passcode;
    private final ZiqniSimpleEventBus eventBus;
    private final ScheduledExecutorService scheduler;
    private final StompOverWebSocketListener listener;
    private final StompHeartbeatManager heartbeatManager;
    private final Consumer<StompOverWebSocket> onConnect;

    private WebSocket webSocket;
    private int reconnectAttempts = 0;

    public StompOverWebSocket(String wsUri, String username, String passcode, ZiqniSimpleEventBus eventBus, Consumer<StompOverWebSocket> onConnect) {
        this.wsUri = wsUri;
        this.username = username;
        this.passcode = passcode;
        this.eventBus = eventBus;
        this.onConnect = onConnect;
        this.scheduler = Executors.newSingleThreadScheduledExecutor();
        this.eventBus.onWSClientHeartBeatMissed(this::onWSClientHeartBeatMissed);
        this.heartbeatManager = new StompHeartbeatManager(eventBus, 10000);
        this.lifeCycleStateManager = new StompLifeCycleStateManager(eventBus);
        this.listener = new StompOverWebSocketListener(eventBus, heartbeatManager, lifeCycleStateManager, this::onConnect, this::attemptReconnect);
    }

    public void shutdown() {
        scheduler.shutdown();
        heartbeatManager.stop();

        if (Objects.nonNull(webSocket)) {
            lifeCycleStateManager.setState(STATE_DISCONNECTING);
            webSocket.sendClose(WebSocket.NORMAL_CLOSURE, "Client shutdown");
        }
    }

    private void onWSClientHeartBeatMissed(WSClientHeartBeatMissed wsClientHeartBeatMissed) {
        try {
            // Check if the WebSocket connection is still open
            if (webSocket != null && webSocket.isOutputClosed()) {
                logger.warn("WebSocket output is closed. Attempting to reconnect...");
                attemptReconnect();
            } else {
                // Send a ping to verify the connection
                logger.info("WebSocket seems active. Sending ping...");
                webSocket.sendPing(PING_MESSAGE)
                        .thenRun(() -> logger.info("Ping sent successfully."))
                        .exceptionally(ex -> {
                            logger.error("Ping failed. Connection might be closed. Attempting to reconnect.", ex);
                            attemptReconnect();
                            return null;
                        });
            }
        } catch (Exception e) {
            logger.error("Error occurred during heartbeat missed handling. Attempting to reconnect.", e);
            attemptReconnect();
        }
    }

    public CompletableFuture<Void> connect() {

        if(lifeCycleStateManager.isConnected()){
            throw new IllegalStateException("Client is already connected to the server.");
        }

        HttpClient client = HttpClient.newHttpClient();

        return client.newWebSocketBuilder()
                .buildAsync(URI.create(wsUri), this.listener)
                .thenAccept(ws -> {
                    this.webSocket = ws;
                    sendConnectFrame();
                });
    }

    private void onConnect(StompOverWebSocketListener stompOverWebSocketListener) {
        onConnect.accept(this);
    }

    public void disconnect() {
        if (heartbeatManager != null) {
            heartbeatManager.stop();
        }

        lifeCycleStateManager.setState(STATE_DISCONNECTING);
        logger.debug("Sending DISCONNECT frame.");
        String disconnectFrame = "DISCONNECT\n\n\0";
        webSocket.sendText(disconnectFrame, true);
        logger.debug("DISCONNECT frame sent.");
    }

    private void sendConnectFrame() {
        lifeCycleStateManager.setState(STATE_CONNECTING);
        StompHeaders connectHeaders = new StompHeaders();
        connectHeaders.setLogin(username);
        connectHeaders.setPasscode(passcode);
        connectHeaders.setAcceptVersion("1.2");
        connectHeaders.setHeartbeat(10000, 10000);

        StringBuilder connectFrame = new StringBuilder("CONNECT\n");
        connectHeaders.toMap().forEach((key, value) -> connectFrame.append(key).append(":").append(String.join(",", value)).append("\n"));
        connectFrame.append("\n\0");

        webSocket.sendText(connectFrame.toString(), true);
        logger.debug("CONNECT frame sent.");
    }

    public void subscribe(EventHandler handler) {
        listener.registerHandler(handler);
        subscribe(handler.getTopic());
    }

    private void subscribe(String destination) {
        StompHeaders subscribeHeaders = new StompHeaders();
        subscribeHeaders.setDestination(destination);
        subscribeHeaders.setId("sub-0");

        StringBuilder subscribeFrame = new StringBuilder("SUBSCRIBE\n");
        subscribeHeaders.toMap().forEach((key, value) -> subscribeFrame.append(key).append(":").append(String.join(",", value)).append("\n"));
        subscribeFrame.append("\n\0");

        webSocket.sendText(subscribeFrame.toString(), true);
        logger.debug("SUBSCRIBE frame sent to: {}", destination);
    }

    public <T> MessageToSend<T> prepareMessageToSend(StompHeaders headers, T payload) {
        return new MessageToSend<>(headers, payload, this);
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

    public <T> CompletableFuture<WebSocket> sendMessage(StompHeaders headers, T payload) {
        if (lifeCycleStateManager.isNotConnected()) {
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
     * @param headers StompHeaders
     * @param payload T
     * @param <T> T
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
        logger.debug("Compressed SEND frame sent to: {}", headers.getDestination());
    }

    private static String compressPayload(String payload) {
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

    private void attemptReconnect(StompOverWebSocketListener listener) {
        this.attemptReconnect();
    }

    private void attemptReconnect() {
        if (reconnectAttempts >= MAX_RECONNECT_ATTEMPTS) {
            logger.error("Max reconnection attempts reached. Giving up.");
            return;
        }

        reconnectAttempts++;
        logger.info("Attempting to reconnect (Attempt {} of " + MAX_RECONNECT_ATTEMPTS + ")...", reconnectAttempts);

        scheduler.schedule(() -> {
            if (lifeCycleStateManager.isNotConnected()) {
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

    public boolean isConnected() {
        return lifeCycleStateManager.isConnected();
    }
}
