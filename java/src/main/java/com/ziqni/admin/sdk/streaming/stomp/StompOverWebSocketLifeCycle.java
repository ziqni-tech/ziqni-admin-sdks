package com.ziqni.admin.sdk.streaming.stomp;

import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;

import java.util.concurrent.atomic.AtomicReference;
/*
 * Copyright (c) 2024. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */

public class StompOverWebSocketLifeCycle {

    public enum State {
        FAILURE,
        DISCONNECTING,
        NOT_CONNECTED,
        CONNECTING,
        CONNECTED
    }

    private final AtomicReference<State> currentState = new AtomicReference<>(State.NOT_CONNECTED);
    private final ZiqniSimpleEventBus eventBus;

    public StompOverWebSocketLifeCycle(ZiqniSimpleEventBus eventBus) {
        this.eventBus = eventBus;
    }

    public void setState(State state) {
        setState(state, null, null, null);
    }

    public void setState(State state, StompHeaders headers, String payload, Throwable error) {
        currentState.set(state);

        switch (state) {
            case FAILURE -> eventBus.post(new WSClientSevereFailure(headers, payload, error));
            case DISCONNECTING -> eventBus.post(new WSClientDisconnecting());
            case NOT_CONNECTED -> eventBus.post(new WSClientDisconnected());
            case CONNECTING -> eventBus.post(new WSClientConnecting());
            case CONNECTED -> eventBus.post(new WSClientConnected());
            default -> throw new IllegalArgumentException("Unknown state: " + state);
        }
    }

    public boolean isConnected() {
        return currentState.get() == State.CONNECTED;
    }

    public boolean isNotConnected() {
        return currentState.get() == State.NOT_CONNECTED;
    }

    public boolean isConnecting() {
        return currentState.get() == State.CONNECTING;
    }

    public boolean isDisconnecting() {
        return currentState.get() == State.DISCONNECTING;
    }

    public boolean isFailure() {
        return currentState.get() == State.FAILURE;
    }

    // Event Records
    public record WSClientConnected() { }

    public record WSClientConnecting() { }

    public record WSClientDisconnecting() { }

    public record WSClientDisconnected() { }

    public record WSClientHeartBeatMissed() { }

    public record WSClientMessageError(StompHeaders headers, String payload, Throwable error) { }

    public record WSClientSevereFailure(StompHeaders headers, String payload, Throwable error) { }

    public record WSClientTransportError(Throwable exception) { }
}
