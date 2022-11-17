package com.ziqni.admin.sdk.context;

import org.springframework.messaging.simp.stomp.StompSession;

public class WSClientDisconnected {

    private final StompSession session;
    public WSClientDisconnected(StompSession stompSession) {

        session = stompSession;
    }

    public StompSession getSession() {
        return session;
    }
}
