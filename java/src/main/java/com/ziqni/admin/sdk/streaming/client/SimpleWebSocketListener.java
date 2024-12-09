package com.ziqni.admin.sdk.streaming.client;

import java.net.http.WebSocket;
import java.nio.ByteBuffer;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;

public class SimpleWebSocketListener implements WebSocket.Listener {

    @Override
    public void onOpen(WebSocket webSocket) {
        System.out.println("WebSocket connection opened.");
        webSocket.request(1); // Request to start receiving messages
    }

    @Override
    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
        webSocket.request(1); // Request the next message
        return null;
    }

    @Override
    public CompletionStage<?> onBinary(WebSocket webSocket, ByteBuffer data, boolean last) {
        webSocket.request(1); // Request the next message
        return null;
    }

    @Override
    public void onError(WebSocket webSocket, Throwable error) {
        System.err.println("WebSocket error: " + error.getMessage());
    }

    @Override
    public CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason) {
        System.out.println("WebSocket closed. Code: " + statusCode + ", Reason: " + reason);
        return CompletableFuture.completedFuture(null);
    }
}
