/*
 * Copyright (c) 2024. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */

package com.ziqni.admin.sdk.streaming.stomp;

import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import com.ziqni.admin.sdk.streaming.handlers.EventHandler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;

import java.net.http.WebSocket;

import static com.ziqni.admin.sdk.streaming.stomp.StompOverWebSocketLifeCycle.*;

public class StompOverWebSocketListener implements WebSocket.Listener {

    private static final Logger logger = LoggerFactory.getLogger(StompOverWebSocketListener.class);

    private final ZiqniSimpleEventBus eventBus;
    private final StompHeartbeatManager heartbeatManager;
    private final StompOverWebSocketLifeCycle lifeCycleStateManager;
    private final StringBuilder messageBuffer = new StringBuilder();
    private final Map<String, EventHandler> eventHandlers = new ConcurrentHashMap<>();

    public StompOverWebSocketListener(ZiqniSimpleEventBus eventBus, StompHeartbeatManager heartbeatManager, StompOverWebSocketLifeCycle lifeCycleStateManager) {
        this.eventBus = eventBus;
        this.heartbeatManager = heartbeatManager;
        this.lifeCycleStateManager = lifeCycleStateManager;
    }
    public void registerHandler(EventHandler handler) {
        eventHandlers.put(handler.getTopic(), handler);
    }

    @Override
    public void onOpen(WebSocket webSocket) {
        logger.info("WebSocket connection opened.");
        webSocket.request(1);
    }

    @Override
    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {

        String receivedData = data.toString();

        if ("\n".contentEquals(receivedData)) {
            logger.debug("Received heartbeat from server.");
            if (heartbeatManager != null) {
                heartbeatManager.updateLastServerHeartbeatTime();
            }
            webSocket.request(1); // Request the next message
            return CompletableFuture.completedFuture(null);
        }

        // Append data to message buffer for non-heartbeat messages
        messageBuffer.append(receivedData);

        // If this is the last frame in the message
        if (last) {
            if (heartbeatManager != null) {
                heartbeatManager.updateLastServerHeartbeatTime(); //Overkill but gets the job done
            }
            String completeMessage = messageBuffer.toString().trim();
            messageBuffer.setLength(0); // Clear the buffer

            if (!completeMessage.isEmpty()) {
                handleCompleteMessage(webSocket, completeMessage);
            }
        }

        webSocket.request(1); // Request the next message
        return CompletableFuture.completedFuture(null);
    }

    private void handleCompleteMessage(WebSocket webSocket, String message) {
        try {
            // Parse the message into a StompFrame
            StompFrame frame = StompFrame.parse(message);

            // Handle specific frame types
            switch (frame.getCommand()) {
                case CONNECTED -> {
                    lifeCycleStateManager.setState(State.CONNECTED);

                    String heartBeatHeader = frame.getHeaders().getHeartBeat();
                    if (heartBeatHeader != null) {
                        String[] parts = heartBeatHeader.split(",");
                        heartbeatManager.start(webSocket, Long.parseLong(parts[1])); // Server's desired interval
                    }
                }
                case MESSAGE -> {
                    final var handler = eventHandlers.get(frame.getDestination());

                    if (handler == null) {
                        logger.error("No handler found for destination: {}", frame.getDestination());
                        return;
                    }

                    handler.handleFrame(frame.getHeaders(), frame.getBody());
                }
                case ERROR -> logger.error("Error frame received: {}", message);
                case NOT_A_VALID_STOMP_COMMAND -> logger.error("Not a valid STOMP command: {}", frame);
                default -> logger.error("Unhandled command: {}", frame);
            }
        } catch (Exception e) {
            logger.error("Failed to parse STOMP frame: {}, {}", e.getMessage(), message);
        }
    }

    @Override
    public CompletionStage<?> onBinary(WebSocket webSocket, java.nio.ByteBuffer data, boolean last) {
        logger.error("Unexpected binary data received.");
        return CompletableFuture.completedFuture(null);
    }

    @Override
    public CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason) {
        logger.info("WebSocket closed: {}", reason);

        if (heartbeatManager != null) {
            heartbeatManager.stop();
        }

        lifeCycleStateManager.setState(State.NOT_CONNECTED);

        return CompletableFuture.completedFuture(null);
    }

    @Override
    public void onError(WebSocket webSocket, Throwable error) {
        logger.error("WebSocket error: {}", error.getMessage());
        eventBus.post(new WSClientTransportError(error));
    }
}
