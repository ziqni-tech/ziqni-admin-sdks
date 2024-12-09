package com.ziqni.admin.sdk.streaming.client;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.TextMessage;

import java.net.URI;
import java.net.http.WebSocket;
import java.util.concurrent.CompletionStage;

public class NativeWebSocketHandlerAdapter implements WebSocket.Listener {

    private static final Log logger = LogFactory.getLog(NativeWebSocketHandlerAdapter.class);

    private final WebSocketHandler delegate;
    private final URI uri;
    private WebSocketSession webSocketSession;

    public NativeWebSocketHandlerAdapter(WebSocketHandler delegate, URI uri) {
        this.delegate = delegate;
        this.uri = uri;
    }

    @Override
    public void onOpen(WebSocket webSocket) {
        logger.debug("WebSocket connection established to: " + uri);
        this.webSocketSession = new NativeWebSocketSession(webSocket, uri);
        try {
            delegate.afterConnectionEstablished(webSocketSession);
        } catch (Exception e) {
            throw new RuntimeException("Error in afterConnectionEstablished: " + e.getMessage(), e);
        }
    }

    @Override
    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
        logger.debug("Received text message: " + data);
        try {
            delegate.handleMessage(webSocketSession, new TextMessage(data.toString()));
        } catch (Exception e) {
            logger.error("Error in handleMessage: " + e.getMessage(), e);
        }
        return null;
    }

    @Override
    public CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason) {
        logger.debug("WebSocket connection closed with status code: " + statusCode + ", reason: " + reason);
        try {
            delegate.afterConnectionClosed(webSocketSession, new CloseStatus(statusCode, reason));
        } catch (Exception e) {
            logger.error("Error in afterConnectionClosed: " + e.getMessage(), e);
        }
        return null;
    }

    @Override
    public void onError(WebSocket webSocket, Throwable error) {
        logger.error("WebSocket connection error: " + error.getMessage(), error);
        try {
            delegate.handleTransportError(webSocketSession, error);
        } catch (Exception e) {
            logger.error("Error in handleTransportError: " + e.getMessage(), e);
        }
    }
}
