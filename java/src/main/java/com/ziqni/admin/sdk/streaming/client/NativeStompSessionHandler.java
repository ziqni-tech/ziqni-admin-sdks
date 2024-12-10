package com.ziqni.admin.sdk.streaming.client;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;

import java.lang.reflect.Type;

public class NativeStompSessionHandler extends StompSessionHandlerAdapter {

    private static final Logger logger = LoggerFactory.getLogger(NativeStompSessionHandler.class);

    @Override
    public void afterConnected(StompSession session, StompHeaders connectedHeaders) {
        logger.info("STOMP session connected: {}", session.getSessionId());
    }

    @Override
    public void handleFrame(StompHeaders headers, Object payload) {
        logger.info("Received message: {}", payload);
    }

    @Override
    public void handleTransportError(StompSession session, Throwable exception) {
        logger.error("Transport error in STOMP session: {}", exception.getMessage());
    }

    @Override
    public void handleException(StompSession session, StompCommand command, StompHeaders headers, byte[] payload, Throwable exception) {
        logger.error("STOMP session exception: {}", exception.getMessage());
    }

    public NativeStompSessionHandler() {
        super();
    }

    @Override
    public Type getPayloadType(StompHeaders headers) {
        return super.getPayloadType(headers);
    }
}

