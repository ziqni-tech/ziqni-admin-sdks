package com.ziqni.admin.sdk.context;


public class WSClientSevereFailure {

    private final byte[] payload;
    private final Throwable exception;

    public WSClientSevereFailure(byte[] payload, Throwable exception) {

        this.payload = payload;
        this.exception = exception;
    }

    public byte[] getPayload() {
        return payload;
    }

    public Throwable getException() {
        return exception;
    }
}
