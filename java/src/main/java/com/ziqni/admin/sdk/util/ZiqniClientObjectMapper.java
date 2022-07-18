/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.util;


import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;

import java.io.IOException;
import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;

public class ZiqniClientObjectMapper {

    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("uuuu-MM-dd'T'HH:mm:ss.SSSXXXX");

    public ObjectMapper serializingObjectMapper() {
        ObjectMapper objectMapper = new ObjectMapper();
        JavaTimeModule javaTimeModule = new JavaTimeModule();
        javaTimeModule.addSerializer(OffsetDateTime.class, new OffsetDateTimeSerializer());
        javaTimeModule.addDeserializer(OffsetDateTime.class, new OffsetDateTimeDeserializer());
        javaTimeModule.addSerializer(LocalDate.class, new LocalDateSerializer());
        javaTimeModule.addDeserializer(LocalDate.class, new LocalDateDeserializer());
        objectMapper.registerModule(javaTimeModule);
        return objectMapper;
    }

    public static class OffsetDateTimeSerializer extends JsonSerializer<OffsetDateTime> {
        @Override
        public void serialize(OffsetDateTime arg0, JsonGenerator arg1, SerializerProvider arg2) throws IOException {
            var x = arg0.format(DateTimeFormatter.ofPattern("uuuu-MM-dd'T'HH:mm:ss.SSSXXX"));

            arg1.writeString(x);
        }
    }

    public static class OffsetDateTimeDeserializer extends JsonDeserializer<OffsetDateTime> {
        @Override
        public OffsetDateTime deserialize(JsonParser arg0, DeserializationContext arg1) throws IOException {
            return OffsetDateTime.parse(arg0.getText(), DateTimeFormatter.ofPattern("uuuu-MM-dd'T'HH:mm:ss.SSSXXX"));
        }
    }

    public static class LocalDateSerializer extends JsonSerializer<LocalDate> {
        @Override
        public void serialize(LocalDate arg0, JsonGenerator arg1, SerializerProvider arg2) throws IOException {
            arg1.writeString(arg0.toString());
        }
    }

    public static class LocalDateDeserializer extends JsonDeserializer<LocalDate> {
        @Override
        public LocalDate deserialize(JsonParser arg0, DeserializationContext arg1) throws IOException {
            return LocalDate.parse(arg0.getText());
        }
    }

}
