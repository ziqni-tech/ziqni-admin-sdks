/*
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.ziqni.sdk.admin.model;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import com.ziqni.sdk.admin.model.EntityChanged;
import com.ziqni.sdk.admin.model.EntityStateChanged;
import com.ziqni.sdk.admin.model.Subscription;
import com.ziqni.sdk.admin.model.SubscriptionResponse;
import com.ziqni.sdk.admin.model.SubscriptionTypes;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;
import com.ziqni.sdk.admin.JSON;

@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
@JsonDeserialize(using=NotificationMessage.NotificationMessageDeserializer.class)
@JsonSerialize(using = NotificationMessage.NotificationMessageSerializer.class)
public class NotificationMessage extends AbstractOpenApiSchema {
    private static final Logger log = Logger.getLogger(NotificationMessage.class.getName());

    public static class NotificationMessageSerializer extends StdSerializer<NotificationMessage> {
        public NotificationMessageSerializer(Class<NotificationMessage> t) {
            super(t);
        }

        public NotificationMessageSerializer() {
            this(null);
        }

        @Override
        public void serialize(NotificationMessage value, JsonGenerator jgen, SerializerProvider provider) throws IOException, JsonProcessingException {
            jgen.writeObject(value.getActualInstance());
        }
    }

    public static class NotificationMessageDeserializer extends StdDeserializer<NotificationMessage> {
        public NotificationMessageDeserializer() {
            this(NotificationMessage.class);
        }

        public NotificationMessageDeserializer(Class<?> vc) {
            super(vc);
        }

        @Override
        public NotificationMessage deserialize(JsonParser jp, DeserializationContext ctxt) throws IOException, JsonProcessingException {
            JsonNode tree = jp.readValueAsTree();

            Object deserialized = null;
            // deserialize EntityChanged
            try {
                deserialized = tree.traverse(jp.getCodec()).readValueAs(EntityChanged.class);
                NotificationMessage ret = new NotificationMessage();
                ret.setActualInstance(deserialized);
                return ret;
            } catch (Exception e) {
                // deserialization failed, continue, log to help debugging
                log.log(Level.FINER, "Input data does not match 'NotificationMessage'", e);
            }

            // deserialize EntityStateChanged
            try {
                deserialized = tree.traverse(jp.getCodec()).readValueAs(EntityStateChanged.class);
                NotificationMessage ret = new NotificationMessage();
                ret.setActualInstance(deserialized);
                return ret;
            } catch (Exception e) {
                // deserialization failed, continue, log to help debugging
                log.log(Level.FINER, "Input data does not match 'NotificationMessage'", e);
            }

            // deserialize Object
            try {
                deserialized = tree.traverse(jp.getCodec()).readValueAs(Object.class);
                NotificationMessage ret = new NotificationMessage();
                ret.setActualInstance(deserialized);
                return ret;
            } catch (Exception e) {
                // deserialization failed, continue, log to help debugging
                log.log(Level.FINER, "Input data does not match 'NotificationMessage'", e);
            }

            // deserialize Subscription
            try {
                deserialized = tree.traverse(jp.getCodec()).readValueAs(Subscription.class);
                NotificationMessage ret = new NotificationMessage();
                ret.setActualInstance(deserialized);
                return ret;
            } catch (Exception e) {
                // deserialization failed, continue, log to help debugging
                log.log(Level.FINER, "Input data does not match 'NotificationMessage'", e);
            }

            // deserialize SubscriptionResponse
            try {
                deserialized = tree.traverse(jp.getCodec()).readValueAs(SubscriptionResponse.class);
                NotificationMessage ret = new NotificationMessage();
                ret.setActualInstance(deserialized);
                return ret;
            } catch (Exception e) {
                // deserialization failed, continue, log to help debugging
                log.log(Level.FINER, "Input data does not match 'NotificationMessage'", e);
            }

            // deserialize SubscriptionTypes
            try {
                deserialized = tree.traverse(jp.getCodec()).readValueAs(SubscriptionTypes.class);
                NotificationMessage ret = new NotificationMessage();
                ret.setActualInstance(deserialized);
                return ret;
            } catch (Exception e) {
                // deserialization failed, continue, log to help debugging
                log.log(Level.FINER, "Input data does not match 'NotificationMessage'", e);
            }

            throw new IOException(String.format("Failed deserialization for NotificationMessage: no match found"));
        }

        /**
         * Handle deserialization of the 'null' value.
         */
        @Override
        public NotificationMessage getNullValue(DeserializationContext ctxt) throws JsonMappingException {
            throw new JsonMappingException(ctxt.getParser(), "NotificationMessage cannot be null");
        }
    }

    // store a list of schema names defined in anyOf
    public static final Map<String, Class<?>> schemas = new HashMap<String, Class<?>>();

    public NotificationMessage() {
        super("anyOf", Boolean.FALSE);
    }

    public NotificationMessage(EntityChanged o) {
        super("anyOf", Boolean.FALSE);
        setActualInstance(o);
    }

    public NotificationMessage(EntityStateChanged o) {
        super("anyOf", Boolean.FALSE);
        setActualInstance(o);
    }

    public NotificationMessage(Object o) {
        super("anyOf", Boolean.FALSE);
        setActualInstance(o);
    }

    public NotificationMessage(Subscription o) {
        super("anyOf", Boolean.FALSE);
        setActualInstance(o);
    }

    public NotificationMessage(SubscriptionResponse o) {
        super("anyOf", Boolean.FALSE);
        setActualInstance(o);
    }

    public NotificationMessage(SubscriptionTypes o) {
        super("anyOf", Boolean.FALSE);
        setActualInstance(o);
    }

    static {
        schemas.put("EntityChanged", EntityChanged.class);
        schemas.put("EntityStateChanged", EntityStateChanged.class);
        schemas.put("Object", Object.class);
        schemas.put("Subscription", Subscription.class);
        schemas.put("SubscriptionResponse", SubscriptionResponse.class);
        schemas.put("SubscriptionTypes", SubscriptionTypes.class);
        JSON.registerDescendants(NotificationMessage.class, Collections.unmodifiableMap(schemas));
    }

    @Override
    public Map<String, Class<?>> getSchemas() {
        return NotificationMessage.schemas;
    }

    /**
     * Set the instance that matches the anyOf child schema, check
     * the instance parameter is valid against the anyOf child schemas:
     * EntityChanged, EntityStateChanged, Object, Subscription, SubscriptionResponse, SubscriptionTypes
     *
     * It could be an instance of the 'anyOf' schemas.
     * The anyOf child schemas may themselves be a composed schema (allOf, anyOf, anyOf).
     */
    @Override
    public void setActualInstance(Object instance) {
        if (JSON.isInstanceOf(EntityChanged.class, instance, new HashSet<Class<?>>())) {
            super.setActualInstance(instance);
            return;
        }

        if (JSON.isInstanceOf(EntityStateChanged.class, instance, new HashSet<Class<?>>())) {
            super.setActualInstance(instance);
            return;
        }

        if (JSON.isInstanceOf(Object.class, instance, new HashSet<Class<?>>())) {
            super.setActualInstance(instance);
            return;
        }

        if (JSON.isInstanceOf(Subscription.class, instance, new HashSet<Class<?>>())) {
            super.setActualInstance(instance);
            return;
        }

        if (JSON.isInstanceOf(SubscriptionResponse.class, instance, new HashSet<Class<?>>())) {
            super.setActualInstance(instance);
            return;
        }

        if (JSON.isInstanceOf(SubscriptionTypes.class, instance, new HashSet<Class<?>>())) {
            super.setActualInstance(instance);
            return;
        }

        throw new RuntimeException("Invalid instance type. Must be EntityChanged, EntityStateChanged, Object, Subscription, SubscriptionResponse, SubscriptionTypes");
    }

    /**
     * Get the actual instance, which can be the following:
     * EntityChanged, EntityStateChanged, Object, Subscription, SubscriptionResponse, SubscriptionTypes
     *
     * @return The actual instance (EntityChanged, EntityStateChanged, Object, Subscription, SubscriptionResponse, SubscriptionTypes)
     */
    @Override
    public Object getActualInstance() {
        return super.getActualInstance();
    }

    /**
     * Get the actual instance of `EntityChanged`. If the actual instanct is not `EntityChanged`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `EntityChanged`
     * @throws ClassCastException if the instance is not `EntityChanged`
     */
    public EntityChanged getEntityChanged() throws ClassCastException {
        return (EntityChanged)super.getActualInstance();
    }

    /**
     * Get the actual instance of `EntityStateChanged`. If the actual instanct is not `EntityStateChanged`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `EntityStateChanged`
     * @throws ClassCastException if the instance is not `EntityStateChanged`
     */
    public EntityStateChanged getEntityStateChanged() throws ClassCastException {
        return (EntityStateChanged)super.getActualInstance();
    }

    /**
     * Get the actual instance of `Object`. If the actual instanct is not `Object`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `Object`
     * @throws ClassCastException if the instance is not `Object`
     */
    public Object getObject() throws ClassCastException {
        return (Object)super.getActualInstance();
    }

    /**
     * Get the actual instance of `Subscription`. If the actual instanct is not `Subscription`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `Subscription`
     * @throws ClassCastException if the instance is not `Subscription`
     */
    public Subscription getSubscription() throws ClassCastException {
        return (Subscription)super.getActualInstance();
    }

    /**
     * Get the actual instance of `SubscriptionResponse`. If the actual instanct is not `SubscriptionResponse`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `SubscriptionResponse`
     * @throws ClassCastException if the instance is not `SubscriptionResponse`
     */
    public SubscriptionResponse getSubscriptionResponse() throws ClassCastException {
        return (SubscriptionResponse)super.getActualInstance();
    }

    /**
     * Get the actual instance of `SubscriptionTypes`. If the actual instanct is not `SubscriptionTypes`,
     * the ClassCastException will be thrown.
     *
     * @return The actual instance of `SubscriptionTypes`
     * @throws ClassCastException if the instance is not `SubscriptionTypes`
     */
    public SubscriptionTypes getSubscriptionTypes() throws ClassCastException {
        return (SubscriptionTypes)super.getActualInstance();
    }

}

