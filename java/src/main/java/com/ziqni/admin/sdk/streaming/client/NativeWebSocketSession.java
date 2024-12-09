package com.ziqni.admin.sdk.streaming.client;

import org.springframework.http.HttpHeaders;
import org.springframework.web.socket.*;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.net.URI;
import java.net.http.WebSocket;
import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentLinkedQueue;

public class NativeWebSocketSession implements WebSocketSession {

    private final WebSocket webSocket;
    private final URI uri;
    private final String id = java.util.UUID.randomUUID().toString();
    private volatile boolean open;
    private final ConcurrentLinkedQueue<WebSocketMessage<?>> messageQueue = new ConcurrentLinkedQueue<>();

    private int textMessageSizeLimit = 64 * 1024 * 1_000; // Default 64,000 KB
    private int binaryMessageSizeLimit = 64 * 1024 * 1_000; // Default 64,000 KB

    public NativeWebSocketSession(WebSocket webSocket, URI uri) {
        this.webSocket = webSocket;
        this.uri = uri;
        this.open = true;
    }

    @Override
    public void sendMessage(WebSocketMessage<?> message) {
        try {
            if (message instanceof TextMessage) {
                webSocket.sendText(((TextMessage) message).getPayload(), true).join();
            } else if (message instanceof PingMessage) {
                webSocket.sendPing(java.nio.ByteBuffer.wrap(((PingMessage) message).getPayload().array())).join();
            } else {
                throw new UnsupportedOperationException("Unsupported message type");
            }
        } catch (Exception e) {
            throw new RuntimeException("Failed to send message: " + e.getMessage(), e);
        }
    }

    @Override
    public boolean isOpen() {
        return open;
    }

    @Override
    public void close() throws IOException {
        this.close(CloseStatus.NORMAL);
    }

    @Override
    public void close(CloseStatus closeStatus) {
        webSocket.sendClose(closeStatus.getCode(), closeStatus.getReason());
        open = false;
    }

    @Override
    public String getId() {
        return id;
    }

    @Override
    public URI getUri() {
        return uri;
    }

    @Override
    public HttpHeaders getHandshakeHeaders() {
        return new HttpHeaders(); // Return empty headers by default
    }

    @Override
    public Map<String, Object> getAttributes() {
        return Map.of();
    }

    @Override
    public Principal getPrincipal() {
        return null; // Return null for unauthenticated sessions
    }

    @Override
    public InetSocketAddress getLocalAddress() {
        return null;
    }

    @Override
    public InetSocketAddress getRemoteAddress() {
        return null;
    }

    @Override
    public String getAcceptedProtocol() {
        return "";
    }

    @Override
    public void setTextMessageSizeLimit(int messageSizeLimit) {
        this.textMessageSizeLimit = messageSizeLimit;
    }

    @Override
    public int getTextMessageSizeLimit() {
        return textMessageSizeLimit;
    }

    @Override
    public void setBinaryMessageSizeLimit(int messageSizeLimit) {
        this.binaryMessageSizeLimit = messageSizeLimit;
    }

    @Override
    public int getBinaryMessageSizeLimit() {
        return binaryMessageSizeLimit;
    }

    @Override
    public List<WebSocketExtension> getExtensions() {
        return List.of(); // Return empty list for no extensions
    }
}
