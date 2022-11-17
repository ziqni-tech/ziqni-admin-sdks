package com.ziqni.admin.sdk.context;

import org.springframework.messaging.simp.stomp.StompSession;

public class WSClientSevereFailure {

    private final StompSession session;
    public WSClientSevereFailure(StompSession stompSession) {

        session = stompSession;
    }

    public StompSession getSession() {
        return session;
    }
}
