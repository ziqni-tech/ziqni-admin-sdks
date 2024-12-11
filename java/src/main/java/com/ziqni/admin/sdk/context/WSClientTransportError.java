package com.ziqni.admin.sdk.context;

public class WSClientTransportError {

    private final Throwable exception;

    public Throwable getException() {
        return exception;
    }

    public WSClientTransportError(Throwable exception) {;
        this.exception = exception;
    }
}
