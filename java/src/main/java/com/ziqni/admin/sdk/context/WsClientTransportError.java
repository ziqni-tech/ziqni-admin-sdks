package com.ziqni.admin.sdk.context;

import org.springframework.messaging.simp.stomp.StompSession;

public class WsClientTransportError {

    private final StompSession session;
    private final Throwable exception;

    public StompSession getSession() {
        return session;
    }

    public Throwable getException() {
        return exception;
    }

    public WsClientTransportError(StompSession session, Throwable exception) {
        this.session = session;
        this.exception = exception;
    }
}
