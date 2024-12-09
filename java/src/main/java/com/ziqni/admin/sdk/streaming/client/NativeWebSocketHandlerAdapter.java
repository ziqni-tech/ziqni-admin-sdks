package com.ziqni.admin.sdk.streaming.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.TextMessage;

import java.net.URI;
import java.net.http.WebSocket;
import java.util.concurrent.CompletionStage;

public class NativeWebSocketHandlerAdapter implements WebSocket.Listener {

    private static final Logger logger = LoggerFactory.getLogger(NativeWebSocketHandlerAdapter.class);

    private final WebSocketHandler delegate;
    private final URI websocketUri;

    public NativeWebSocketHandlerAdapter(WebSocketHandler delegate, URI websocketUri) {
        this.delegate = delegate;
        this.websocketUri = websocketUri;
    }

    @Override
    public void onOpen(WebSocket webSocket) {
        logger.info("WebSocket connection established");
        // Notify Spring's handler that the connection is established
        try {
            delegate.afterConnectionEstablished(new NativeWebSocketSession(webSocket,websocketUri));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
        logger.debug("Received message: " + data);
        try {
            delegate.handleMessage(new NativeWebSocketSession(webSocket,websocketUri), new TextMessage(data.toString()));
        } catch (Exception e) {
            System.err.println("Error handling message: " + e.getMessage());
        }
        return null;
    }

    @Override
    public CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason) {
        logger.info("WebSocket connection closed: " + statusCode + " " + reason);
        try {
            delegate.afterConnectionClosed(new NativeWebSocketSession(webSocket,websocketUri), new CloseStatus(statusCode, reason));
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return null;
    }

    @Override
    public void onError(WebSocket webSocket, Throwable error) {
        logger.error("WebSocket connection error: " + error.getMessage());
        try {
            delegate.handleTransportError(new NativeWebSocketSession(webSocket,websocketUri), error);
        } catch (Exception e) {
            logger.error("Error handling transport error: " + e.getMessage());
        }
    }
}
