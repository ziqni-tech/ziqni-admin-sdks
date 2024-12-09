package com.ziqni.admin.sdk.streaming.client;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.time.Duration;
import java.util.concurrent.CompletableFuture;

public class NativeWebSocketClient {

    private final String uri;
    private WebSocket webSocket;

    public NativeWebSocketClient(String uri) {
        this.uri = uri;
    }

    /**
     * Connects to the WebSocket server.
     */
    public CompletableFuture<Void> connect() {
        HttpClient client = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();

        this.webSocket = client.newWebSocketBuilder()
                .buildAsync(URI.create(uri), new SimpleWebSocketListener())
                .join(); // Wait until the connection is established

        System.out.println("Connected to WebSocket server: " + uri);
        return CompletableFuture.completedFuture(null);
    }

    /**
     * Sends a text message to the WebSocket server.
     *
     * @param message the message to send
     */
    public void sendMessage(String message) {
        if (webSocket == null) {
            throw new IllegalStateException("WebSocket is not connected");
        }
        webSocket.sendText(message, true);
    }


    public void sendStompFrame(String stompFrame) {
        if (webSocket == null) {
            throw new IllegalStateException("WebSocket is not connected");
        }
        webSocket.sendText(stompFrame, true);
    }

    /**
     * Disconnects from the WebSocket server.
     */
    public void disconnect() {
        if (webSocket != null) {
            webSocket.sendClose(WebSocket.NORMAL_CLOSURE, "Disconnecting").join();
            System.out.println("Disconnected from WebSocket server.");
        }
    }

    /**
     * Checks if the WebSocket is connected.
     *
     * @return true if connected, false otherwise
     */
    public boolean isConnected() {
        return webSocket != null;
    }

    public WebSocket getWebSocket() {
        return webSocket;
    }
}
