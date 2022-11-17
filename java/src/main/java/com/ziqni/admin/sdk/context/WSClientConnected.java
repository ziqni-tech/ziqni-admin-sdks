package com.ziqni.admin.sdk.context;

import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;

public class WSClientConnected {

    private final StompSession session;

    private final StompHeaders connectedHeaders;

    public WSClientConnected(StompSession session, StompHeaders connectedHeaders) {
        this.session = session;
        this.connectedHeaders = connectedHeaders;
    }

    public StompSession getSession() {
        return session;
    }

    public StompHeaders getConnectedHeaders() {
        return connectedHeaders;
    }
}
