package com.ziqni.admin.sdk.streaming.runnables;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;

public final class MessageToSend <T> implements Runnable {

    private static final Logger logger = LoggerFactory.getLogger(MessageToSend.class);

    private final StompHeaders headers;
    private final T payload;
    private final StompSession stompSession;

    public MessageToSend(StompHeaders headers, T payload, StompSession stompSession) {
        this.headers = headers;
        this.payload = payload;
        this.stompSession = stompSession;
    }

    @Override
    public void run() {
        try {
            this.stompSession.send(this.headers, this.payload);
        }
        catch (IllegalStateException i){
            logger.error("Client is disconnected from the server. {}", i.getMessage());
            throw i;
        }
        catch (Throwable throwable){
            logger.error("Failed to send message over websocket", throwable);
            throw throwable;
        }
    }
}