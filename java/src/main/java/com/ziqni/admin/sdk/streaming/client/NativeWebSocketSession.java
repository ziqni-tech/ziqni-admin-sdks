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
    private final ConcurrentLinkedQueue<WebSocketMessage<?>> messageQueue = new ConcurrentLinkedQueue<>();

    public NativeWebSocketSession(WebSocket webSocket, URI uri) {
        this.webSocket = webSocket;
        this.uri = uri;
    }

    @Override
    public void sendMessage(WebSocketMessage<?> message) {
        if (message instanceof TextMessage) {
            webSocket.sendText(((TextMessage) message).getPayload(), true);
        } else if (message instanceof PingMessage) {
            webSocket.sendPing(java.nio.ByteBuffer.wrap(((PingMessage) message).getPayload().array()));
        } else {
            throw new UnsupportedOperationException("Unsupported message type");
        }
    }

    @Override
    public boolean isOpen() {
        return false;
    }

    @Override
    public void close() throws IOException {

    }

    @Override
    public void close(CloseStatus closeStatus) {
        webSocket.sendClose(closeStatus.getCode(), closeStatus.getReason());
    }

    // Implement remaining methods of WebSocketSession as needed

    @Override
    public String getId() {
        return "";
    }

    @Override
    public URI getUri() {
        return null;
    }

    @Override
    public HttpHeaders getHandshakeHeaders() {
        return null;
    }

    @Override
    public Map<String, Object> getAttributes() {
        return Map.of();
    }

    @Override
    public Principal getPrincipal() {
        return null;
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

    }

    @Override
    public int getTextMessageSizeLimit() {
        return 0;
    }

    @Override
    public void setBinaryMessageSizeLimit(int messageSizeLimit) {

    }

    @Override
    public int getBinaryMessageSizeLimit() {
        return 0;
    }

    @Override
    public List<WebSocketExtension> getExtensions() {
        return List.of();
    }
}
