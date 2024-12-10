package com.ziqni.admin.sdk.context;

public class WsClientTransportError {

    private final Throwable exception;

    public Throwable getException() {
        return exception;
    }

    public WsClientTransportError(Throwable exception) {;
        this.exception = exception;
    }
}
