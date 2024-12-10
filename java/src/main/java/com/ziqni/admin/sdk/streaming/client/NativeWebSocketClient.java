package com.ziqni.admin.sdk.streaming.client;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.web.socket.WebSocketHttpHeaders;
import org.springframework.web.socket.client.WebSocketClient;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.concurrent.CompletableFuture;

public class NativeWebSocketClient implements WebSocketClient {

    private static final Log logger = LogFactory.getLog(NativeWebSocketClient.class);

    private final HttpClient httpClient;
    private URI websocketUri;

    public NativeWebSocketClient() {
        this.httpClient = HttpClient.newHttpClient();
    }

    @Override
    public CompletableFuture<WebSocketSession> execute(WebSocketHandler webSocketHandler, String uriTemplate, Object... uriVariables) {
        this.websocketUri = URI.create(uriTemplate);
        return connectWebSocket(webSocketHandler, websocketUri);
    }

    @Override
    public CompletableFuture<WebSocketSession> execute(WebSocketHandler webSocketHandler, WebSocketHttpHeaders headers, URI uri) {
        return connectWebSocket(webSocketHandler, uri);
    }

    private CompletableFuture<WebSocketSession> connectWebSocket(WebSocketHandler webSocketHandler, URI uri) {
        CompletableFuture<WebSocket> webSocketFuture = httpClient
                .newWebSocketBuilder()
                .buildAsync(uri, new NativeWebSocketHandlerAdapter(webSocketHandler, websocketUri));

        return webSocketFuture.handle((webSocket, throwable) -> {
            if (throwable != null) {
                logger.error("Failed to connect WebSocket", throwable);
                throw new RuntimeException("Failed to connect WebSocket", throwable);
            } else {
                WebSocketSession webSocketSession = new NativeWebSocketSession(webSocket, websocketUri);
                return webSocketSession;
            }
        });
    }
}
