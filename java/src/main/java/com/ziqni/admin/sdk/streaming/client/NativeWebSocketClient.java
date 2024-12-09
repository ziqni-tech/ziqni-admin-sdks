package com.ziqni.admin.sdk.streaming.client;

import org.springframework.web.socket.WebSocketHttpHeaders;
import org.springframework.web.socket.client.WebSocketClient;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketSession;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.concurrent.CompletableFuture;

public class NativeWebSocketClient implements WebSocketClient {

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
                .buildAsync(uri, new NativeWebSocketHandlerAdapter(webSocketHandler,websocketUri));



        // Ensure completion on success or failure
        return webSocketFuture.thenApply(f -> {
                    WebSocketSession  webSocketSession = new NativeWebSocketSession(f,websocketUri);
                    try {
                        webSocketHandler.afterConnectionEstablished(webSocketSession);
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                    return webSocketSession;
                })
                .exceptionally(ex -> {
                    System.err.println("WebSocket connection failed: " + ex.getMessage());
                    throw new RuntimeException("Failed to connect WebSocket", ex);
                });
    }
}
