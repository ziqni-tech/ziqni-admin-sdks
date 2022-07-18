package com.ziqni.admin.sdk.streaming.handlers;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.JSON;
import com.ziqni.admin.sdk.streaming.EventHandler;
import com.ziqni.admin.sdk.util.ClassScanner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.stomp.StompHeaders;

import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class CallbackEventHandler extends EventHandler<String> {
    private static final Logger logger = LoggerFactory.getLogger(CallbackEventHandler.class);

    public final static String DEFAULT_TOPIC = "/user/queue/callbacks";

    public final static String CLASS_TO_SCAN_FOR_PAYLOAD_TYPE = "com.ziqni.admin.sdk.model";
    private final ClassScanner classScanner;

    private static final ExecutorService executorService = Executors.newCachedThreadPool();

    protected static final ObjectMapper objectMapper = new ObjectMapper();

    public final static JavaType OBJECT_JAVA_TYPE = objectMapper.constructType(Object.class);
    public final Map<String,CallbackConsumer<?>> callbackConsumerMap = new ConcurrentHashMap<>();

    public CallbackEventHandler() {
        this.classScanner = new ClassScanner(CLASS_TO_SCAN_FOR_PAYLOAD_TYPE);
    }

    public <T> boolean registerCallbackHandler(CallbackConsumer<T> callbackConsumer){
        return this.callbackConsumerMap.putIfAbsent(callbackConsumer.getCallback(), callbackConsumer) == null;
    }

    @Override
    public String getTopic() {
        return DEFAULT_TOPIC;
    }

    @Override
    public JavaType getValType(StompHeaders headers) {
        return objectMapper.constructType(getPayloadType(headers));
    }

    @Override
    public Type getPayloadType(StompHeaders headers) {
        return this.classScanner.get(headers.getFirst("objectType")).orElse(Object.class);
    }

    @Override
    public void handleFrame(StompHeaders headers, Object payload) {
        var callbackName = getCallback(headers);

        if(callbackName.isPresent())
            executorService.submit( () ->
                    onCallBack(callbackName.get(), headers, payload)
            );
        else {
            logger.error("No callback header in the message");
        }
    }

    private static Optional<String> getCallback(StompHeaders headers){
        return Optional.ofNullable(headers.getFirst("callback"));
    }

    public void onCallBack(String callback, StompHeaders headers, Object response) {
        try {
            Optional<? extends CallbackConsumer<?>> consumer = Optional.ofNullable(this.callbackConsumerMap.get(callback));

            var failed = headers.get("callback")
                    .stream()
                    .findFirst()
                    .map(value -> value.equals(ApiException.class.getSimpleName()))
                    .orElse(false);

            if(consumer.isEmpty()){
                logger.error(" ++++ ERROR ERROR ERROR No callback consumer registered for {}", callback);
            }
            else if(failed)
                onApiExceptionCallBack(headers,response, consumer);
            else
                consumer.ifPresent(callbackConsumer ->
                        callbackConsumer.consumeCallback(headers,response)
                );
        }
        catch (Throwable throwable){
            logger.error("No callback header in the message", throwable);
        }
    }

    private void onApiExceptionCallBack(StompHeaders headers, Object response, Optional<? extends CallbackConsumer<?>> consumer) {
        final var json = new String((byte[])response, StandardCharsets.UTF_8);
        final var error = JSON.getDefault().getMapper().convertValue(json,ApiException.class);
        consumer.ifPresent(callbackConsumer ->
                        callbackConsumer.consumeApiExceptionCallBack(headers,error)
                );
    }

    public static CallbackEventHandler create(){
        return new CallbackEventHandler();
    }
}
