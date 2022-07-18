/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.util;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;
import java.time.Instant;
import java.time.OffsetDateTime;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class CustomInstantDeserializer {

    public final static JsonDeserializer<Instant> INSTANT = new JsonDeserializer<Instant>(){

        @Override
        public Instant deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
            return null; //FIXME
        }
    };

    public final static JsonDeserializer<OffsetDateTime> OFFSET_DATE_TIME = new JsonDeserializer<OffsetDateTime>(){

        @Override
        public OffsetDateTime deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
            return OffsetDateTime.parse(p.getText(), DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSZ"));
        }
    };

    public final static JsonDeserializer<ZonedDateTime> ZONED_DATE_TIME = new JsonDeserializer<ZonedDateTime>(){
        @Override
        public ZonedDateTime deserialize(JsonParser p, DeserializationContext ctxt) throws IOException, JsonProcessingException {
            return null; //FIXME
        }
    };
}
