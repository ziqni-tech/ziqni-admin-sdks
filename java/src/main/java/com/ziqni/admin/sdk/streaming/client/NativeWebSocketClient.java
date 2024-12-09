package com.ziqni.admin.sdk.streaming.client;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.concurrent.CompletableFuture;

import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.simp.stomp.StompFrameHandler;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandler;

public class NativeWebSocketStompClient {

    private final String uri;
    private final HttpClient httpClient;
    private WebSocket webSocket;
    private StompSessionHandler stompSessionHandler;

    public NativeWebSocketStompClient(String uri) {
        this.uri = uri;
        this.httpClient = HttpClient.newHttpClient();
    }

    /**
     * Connects to the WebSocket server and initializes STOMP communication.
     *
     * @param sessionHandler the STOMP session handler to use
     */
    public CompletableFuture<Void> connect(StompSessionHandler sessionHandler) {
        this.stompSessionHandler = sessionHandler;

        CompletableFuture<Void> connectionFuture = new CompletableFuture<>();

        this.webSocket = httpClient.newWebSocketBuilder()
                .buildAsync(URI.create(uri), new WebSocket.Listener() {

                    @Override
                    public void onOpen(WebSocket webSocket) {
                        System.out.println("WebSocket connection established.");
                        webSocket.request(1); // Start receiving messages
                        stompSessionHandler.afterConnected(new StompSession() {
                            // Implement the StompSession interface methods here
                            @Override
                            public String getSessionId() {
                                return "native-session";
                            }

                            @Override
                            public boolean isConnected() {
                                return true;
                            }

                            @Override
                            public void send(String destination, Object payload) {
                                String stompFrame = buildSendFrame(destination, payload);
                                webSocket.sendText(stompFrame, true);
                            }

                            // Other methods can be implemented as needed
                        }, null);
                        connectionFuture.complete(null);
                    }

                    @Override
                    public CompletableFuture<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
                        // Parse and handle STOMP frames
                        stompSessionHandler.handleFrame(null, data.toString());
                        webSocket.request(1); // Request next message
                        return null;
                    }

                    @Override
                    public void onError(WebSocket webSocket, Throwable error) {
                        stompSessionHandler.handleTransportError(null, error);
                        connectionFuture.completeExceptionally(error);
                    }

                    @Override
                    public CompletableFuture<?> onClose(WebSocket webSocket, int statusCode, String reason) {
                        System.out.println("WebSocket closed. Code: " + statusCode + ", Reason: " + reason);
                        return CompletableFuture.completedFuture(null);
                    }
                }).join();

        return connectionFuture;
    }

    private String buildSendFrame(String destination, Object payload) {
        return "SEND\ndestination:" + destination + "\n\n" + payload + "\0";
    }

    public void disconnect() {
        if (webSocket != null) {
            webSocket.sendClose(WebSocket.NORMAL_CLOSURE, "Goodbye").join();
        }
    }
}
