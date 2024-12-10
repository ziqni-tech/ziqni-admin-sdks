/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ziqni.admin.sdk.streaming.client.StompHeaders;

import java.lang.reflect.Type;

public abstract class EventHandler<T> {

    protected static final ObjectMapper objectMapper = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

    /**
     * Get the Topic name this handler should attach to
     * @return the topic name
     */
    public abstract String getTopic();

    /**
     * Jackson value type that is expected to be returned
     */
    public abstract JavaType getValType(StompHeaders headers);

    public Type getPayloadType(StompHeaders headers) {
        return String.class;
    }

    public void handle(String body) {

    }
}
