package com.ziqni.admin.sdk.context;

import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;

public class WSClientSevereFailure {

    private final StompSession session;
    private final StompCommand command;
    private final StompHeaders headers;
    private final byte[] payload;
    private final Throwable exception;

    public WSClientSevereFailure(StompSession stompSession, StompCommand command, StompHeaders headers, byte[] payload, Throwable exception) {

        session = stompSession;
        this.command = command;
        this.headers = headers;
        this.payload = payload;
        this.exception = exception;
    }

    public StompSession getSession() {
        return session;
    }

    public StompCommand getCommand() {
        return command;
    }

    public StompHeaders getHeaders() {
        return headers;
    }

    public byte[] getPayload() {
        return payload;
    }

    public Throwable getException() {
        return exception;
    }
}
