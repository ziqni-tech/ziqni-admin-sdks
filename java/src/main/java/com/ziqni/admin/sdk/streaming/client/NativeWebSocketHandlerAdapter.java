package com.ziqni.admin.sdk.streaming.client;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.TextMessage;

import java.net.http.WebSocket;
import java.util.concurrent.CompletionStage;

public class NativeWebSocketHandlerAdapter implements WebSocket.Listener {

    private final WebSocketHandler delegate;

    public NativeWebSocketHandlerAdapter(WebSocketHandler delegate) {
        this.delegate = delegate;
    }

    @Override
    public void onOpen(WebSocket webSocket) {
        // Notify Spring's WebSocketHandler
        try {
            delegate.afterConnectionEstablished(new NativeWebSocketSession(webSocket));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
        // Convert the received message to a Spring WebSocketMessage
        WebSocketMessage<?> message = new TextMessage(data.toString());
        try {
            delegate.handleMessage(new NativeWebSocketSession(webSocket), message);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return WebSocket.Listener.super.onText(webSocket, data, last);
    }

    @Override
    public void onError(WebSocket webSocket, Throwable error) {
        // Notify Spring's WebSocketHandler
        try {
            delegate.handleTransportError(new NativeWebSocketSession(webSocket), error);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason) {
        // Convert the status code and reason to CloseStatus
        CloseStatus closeStatus = new CloseStatus(statusCode, reason);

        // Notify Spring's WebSocketHandler
        try {
            delegate.afterConnectionClosed(new NativeWebSocketSession(webSocket), closeStatus);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        return WebSocket.Listener.super.onClose(webSocket, statusCode, reason);
    }

}
