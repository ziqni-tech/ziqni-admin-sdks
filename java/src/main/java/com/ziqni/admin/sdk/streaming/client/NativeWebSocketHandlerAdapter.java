package com.ziqni.admin.sdk.streaming.client;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.TextMessage;

import java.net.URI;
import java.net.http.WebSocket;
import java.util.concurrent.CompletionStage;

public class NativeWebSocketHandlerAdapter implements WebSocket.Listener {

    private final WebSocketHandler delegate;
    private final URI websocketUri;

    public NativeWebSocketHandlerAdapter(WebSocketHandler delegate, URI websocketUri) {
        this.delegate = delegate;
        this.websocketUri = websocketUri;
    }

    @Override
    public void onOpen(WebSocket webSocket) {
        System.out.println("WebSocket opened.");
        // Notify Spring's handler that the connection is established
        try {
            delegate.afterConnectionEstablished(new NativeWebSocketSession(webSocket,websocketUri));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
        System.out.println("Received message: " + data);
        try {
            delegate.handleMessage(new NativeWebSocketSession(webSocket,websocketUri), new TextMessage(data.toString()));
        } catch (Exception e) {
            System.err.println("Error handling message: " + e.getMessage());
        }
        return null;
    }

    @Override
    public CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason) {
        System.out.println("WebSocket closed with status: " + statusCode + ", reason: " + reason);
        try {
            delegate.afterConnectionClosed(new NativeWebSocketSession(webSocket,websocketUri), new CloseStatus(statusCode, reason));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return null;
    }

    @Override
    public void onError(WebSocket webSocket, Throwable error) {
        System.err.println("WebSocket error: " + error.getMessage());
        try {
            delegate.handleTransportError(new NativeWebSocketSession(webSocket,websocketUri), error);
        } catch (Exception e) {
            System.err.println("Error handling transport error: " + e.getMessage());
        }
    }
}
