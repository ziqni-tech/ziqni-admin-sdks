package com.ziqni.admin.sdk.streaming.stomp;

import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;

import java.util.concurrent.atomic.AtomicInteger;

public class StompLifeCycleStateManager {

    public static final int STATE_FAILURE = -2;
    public static final int STATE_DISCONNECTING = -1;
    public static final int STATE_NOT_CONNECTED = 0;
    public static final int STATE_CONNECTING = 1;
    public static final int STATE_CONNECTED = 2;

    private final AtomicInteger connected = new AtomicInteger(0);
    private final ZiqniSimpleEventBus eventBus;

    public StompLifeCycleStateManager(ZiqniSimpleEventBus eventBus) {
        this.eventBus = eventBus;
    }

    public void setState(int state) {
        setState(state, null, null, null);
    }

    public void setState(int state, StompHeaders headers, String payload, Throwable error) {
        connected.set(state);

        if (state == STATE_FAILURE) {
            eventBus.post(new WSClientSevereFailure(headers, payload, error));
        }
        else if (state == STATE_DISCONNECTING) {
            eventBus.post(new WSClientDisconnecting());
        }
        else if (state == STATE_NOT_CONNECTED) {
            eventBus.post(new WSClientDisconnected());
        }
        else if (state == STATE_CONNECTING) {
            eventBus.post(new WSClientConnecting());
        }
        else if (state == STATE_CONNECTED) {
            eventBus.post(new WSClientConnected());
        }
        else {
            throw new IllegalArgumentException("Invalid state: " + state);
        }
    }

    public boolean isConnected() {
        return connected.get() == STATE_CONNECTED;
    }

    public boolean isNotConnected() {
        return connected.get() != STATE_CONNECTED;
    }

    public boolean isConnecting() {
        return connected.get() == STATE_CONNECTING;
    }

    public boolean isDisconnecting() {
        return connected.get() == STATE_DISCONNECTING;
    }

    public boolean isFailure() {
        return connected.get() == STATE_FAILURE;
    }

    public record WSClientConnected() { }

    public record WSClientConnecting() { }

    public record WSClientDisconnecting() { }

    public record WSClientDisconnected() { }

    public record WSClientHeartBeatMissed() { }

    public record WSClientMessageError(com.ziqni.admin.sdk.streaming.stomp.StompHeaders headers, String payload, Throwable error) { }

    public record WSClientSevereFailure(com.ziqni.admin.sdk.streaming.stomp.StompHeaders headers, String payload, Throwable error) { }

    public record WSClientTransportError(Throwable exception) { }
}
