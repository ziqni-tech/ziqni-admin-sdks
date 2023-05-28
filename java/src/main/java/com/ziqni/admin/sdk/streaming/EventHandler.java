/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.stomp.StompFrameHandler;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession.Subscription;

import java.lang.reflect.Type;

public abstract class EventHandler<T> implements StompFrameHandler {

    private static final Logger logger = LoggerFactory.getLogger(EventHandler.class);
    protected static final ObjectMapper objectMapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    private Subscription stompSubscription;
    private boolean active = true;

    /**
     * Get the Topic name this handler should attach to
     */
    public abstract String getTopic();

    /**
     * Jackson value type that is expected to be returned
     */
    public abstract JavaType getValType(StompHeaders headers);


    @Override
    public Type getPayloadType(StompHeaders headers) {
        return String.class;
    }

    public void unsubscribe() {
        this.active = false;
        if (getStompSubscription() != null) {
            getStompSubscription().unsubscribe();
        }
    }

    public Subscription getStompSubscription() {
        return stompSubscription;
    }

    public void setStompSubscription(Subscription stompSubscription) {
        this.stompSubscription = stompSubscription;
    }

    public boolean isActive() {
        return active;
    }
}
