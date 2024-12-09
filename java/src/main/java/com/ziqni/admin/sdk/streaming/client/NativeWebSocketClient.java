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

    public NativeWebSocketClient() {
        this.httpClient = HttpClient.newHttpClient();
    }

    @Override
    public CompletableFuture<WebSocketSession> execute(WebSocketHandler webSocketHandler, String uriTemplate, Object... uriVariables) {
        URI uri = URI.create(uriTemplate);

        // Connect the WebSocket and wrap it into a session
        CompletableFuture<WebSocket> webSocketFuture = httpClient.newWebSocketBuilder()
                .buildAsync(uri, new NativeWebSocketHandlerAdapter(webSocketHandler));

        return webSocketFuture.thenApply(NativeWebSocketSession::new);
    }

    @Override
    public CompletableFuture<WebSocketSession> execute(WebSocketHandler webSocketHandler, WebSocketHttpHeaders headers, URI uri) {

        // Connect the WebSocket and wrap it into a session
        CompletableFuture<WebSocket> webSocketFuture = httpClient.newWebSocketBuilder()
                .buildAsync(uri, new NativeWebSocketHandlerAdapter(webSocketHandler));

        return webSocketFuture.thenApply(NativeWebSocketSession::new);
    }
}
