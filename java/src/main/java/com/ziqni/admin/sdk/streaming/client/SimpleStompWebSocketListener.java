package com.ziqni.admin.sdk.streaming.client;

import java.net.http.WebSocket;
import java.util.concurrent.CompletionStage;

public class SimpleStompWebSocketListener implements WebSocket.Listener {

    @Override
    public void onOpen(WebSocket webSocket) {
        System.out.println("WebSocket connection opened.");
        webSocket.request(1); // Request the first message
        // Send CONNECT frame for STOMP
        String connectFrame = "CONNECT\naccept-version:1.2\nhost:server\n\n\0";
        webSocket.sendText(connectFrame, true);
    }

    @Override
    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
        System.out.println("Received STOMP frame: " + data);
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
        return null;
    }
}
