/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming.handlers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ziqni.admin.sdk.streaming.client.StompHeaders;
import com.ziqni.admin.sdk.util.ClassScanner;
import com.ziqni.admin.sdk.util.ZiqniClientObjectMapper;
import org.checkerframework.checker.nullness.qual.NonNull;

import java.lang.reflect.Type;
import java.util.Optional;

public abstract class EventHandler {

    public static final ZiqniClientObjectMapper ziqniClientObjectMapper = new ZiqniClientObjectMapper();

    /**
     * Get the Topic name this handler should attach to
     * @return the topic name
     */
    public abstract String getTopic();

    public abstract void handleFrame(@NonNull StompHeaders headers, String payload);

    public Object unpack(ClassScanner classScanner, StompHeaders headers, String payload){
        // Retrieve the target Type from the classScanner using the object type from headers
        final String objectType = headers.getObjectType(); // Ensure headers has getObjectType()
        final Optional<Type> optionalType = classScanner.get(objectType);

        if (optionalType.isPresent()) {
            // Extract the Type
            final Type t = optionalType.get();

            // Deserialize the payload into an object of the extracted Type
            final Object object;
            try {
                return  EventHandler.ziqniClientObjectMapper.serializingObjectMapper().readValue(payload, EventHandler.ziqniClientObjectMapper.serializingObjectMapper().constructType(t));
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        } else {
            throw new IllegalArgumentException("No Type found for objectType: " + objectType);
        }
    }
}
