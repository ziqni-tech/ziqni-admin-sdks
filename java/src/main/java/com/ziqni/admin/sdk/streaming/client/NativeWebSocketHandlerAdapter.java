package com.ziqni.admin.sdk.streaming.client;

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
        delegate.afterConnectionEstablished(new NativeWebSocketSession(webSocket, webSocket.getSubprotocol()));
    }

    @Override
    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
        // Convert the received message to a Spring WebSocketMessage
        WebSocketMessage<?> message = new TextMessage(data.toString());
        delegate.handleMessage(new NativeWebSocketSession(webSocket, webSocket.getSubprotocol()), message);
        return WebSocket.Listener.super.onText(webSocket, data, last);
    }

    @Override
    public void onError(WebSocket webSocket, Throwable error) {
        // Notify Spring's WebSocketHandler
        delegate.handleTransportError(new NativeWebSocketSession(webSocket, webSocket.getSubprotocol()), error);
    }

    @Override
    public CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason) {
        // Notify Spring's WebSocketHandler
        delegate.afterConnectionClosed(new NativeWebSocketSession(webSocket, webSocket.getSubprotocol()), reason);
        return WebSocket.Listener.super.onClose(webSocket, statusCode, reason);
    }
}
