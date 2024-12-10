/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.ziqni.admin.sdk.streaming.client.StompHeaders;
import com.ziqni.admin.sdk.util.ClassScanner;
import org.checkerframework.checker.nullness.qual.NonNull;

import java.lang.reflect.Type;
import java.util.Optional;

public abstract class EventHandler<T> {

    public static final ObjectMapper objectMapper = new ObjectMapper()
            .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
            .registerModule(new JavaTimeModule()); // Register the JavaTimeModule

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

    public abstract void handleFrame(@NonNull StompHeaders headers, String payload);

    protected Object unpack(ClassScanner classScanner, StompHeaders headers, String payload){
        // Retrieve the target Type from the classScanner using the object type from headers
        final String objectType = headers.getObjectType(); // Ensure headers has getObjectType()
        final Optional<Type> optionalType = classScanner.get(objectType);

        if (optionalType.isPresent()) {
            // Extract the Type
            final Type t = optionalType.get();

            // Deserialize the payload into an object of the extracted Type
            final Object object;
            try {
                return  EventHandler.objectMapper.readValue(payload, EventHandler.objectMapper.constructType(t));
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        } else {
            throw new IllegalArgumentException("No Type found for objectType: " + objectType);
        }
    }
}
