package com.ziqni.admin.sdk.streaming.client;

import com.ziqni.admin.sdk.streaming.EventHandler;

import java.net.http.WebSocket;
import java.util.Map;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Supplier;

public class StompWebSocketListener implements WebSocket.Listener {

    private final Supplier<StompHeartbeatManager> heartbeatManager;

    private Map<String, EventHandler<?>> eventHandlers = new ConcurrentHashMap<>();

    public StompWebSocketListener(Supplier<StompHeartbeatManager> heartbeatManager) {
        this.heartbeatManager = heartbeatManager;
    }

    @Override
    public void onOpen(WebSocket webSocket) {
        System.out.println("WebSocket connection opened.");
        webSocket.request(1);
    }

    @Override
    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
        String message = data.toString().trim();

        if (message.isEmpty()) {
            // Handle server heartbeat
            heartbeatManager.get().updateLastServerHeartbeatTime();
        } else {
            try {
                // Parse the message into a StompFrame
                StompFrame frame = StompFrame.parse(message);
                System.out.println("Received STOMP frame: " + frame.getCommand());

                // Handle specific frame types
                switch (frame.getCommand()) {
                    case CONNECTED -> {
                        String heartBeatHeader = frame.getHeaders().get("heart-beat");
                        if (heartBeatHeader != null) {
                            String[] parts = heartBeatHeader.split(",");
                            heartbeatManager.get().setServerHeartbeatInterval(Long.parseLong(parts[1])); // Server's desired interval
                            heartbeatManager.get().start();
                        }
                    }
                    case MESSAGE -> {
                        System.out.println("Message body: " + frame.getBody());
                        System.out.println("Destination: " + frame.getDestination());
                        // Further processing for MESSAGE frames
                    }
                    case ERROR -> {
                        System.err.println("Error frame received: " + frame.getBody());
                    }
                    default -> System.out.println("Unhandled command: " + frame.getCommand());
                }
            } catch (Exception e) {
                System.err.println("Failed to parse STOMP frame: " + e.getMessage());
            }
        }

        webSocket.request(1);
        return CompletableFuture.completedFuture(null);
    }

    @Override
    public CompletionStage<?> onBinary(WebSocket webSocket, java.nio.ByteBuffer data, boolean last) {
        System.err.println("Unexpected binary data received.");
        return CompletableFuture.completedFuture(null);
    }

    @Override
    public CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason) {
        System.out.println("WebSocket closed: " + reason);
        if (heartbeatManager.get() != null) {
            heartbeatManager.get().stop();
        }
        return CompletableFuture.completedFuture(null);
    }

    @Override
    public void onError(WebSocket webSocket, Throwable error) {
        System.err.println("WebSocket error: " + error.getMessage());
    }


    public void subscribe(EventHandler<?> handler) {
        eventHandlers.put(handler.getTopic(), handler);
    }
}
