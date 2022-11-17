package com.ziqni.admin.sdk.context;

import org.springframework.messaging.simp.stomp.StompSession;

public class WSClientConnecting {

    private final StompSession session;
    public WSClientConnecting(StompSession stompSession) {

        session = stompSession;
    }

    public StompSession getSession() {
        return session;
    }
}
