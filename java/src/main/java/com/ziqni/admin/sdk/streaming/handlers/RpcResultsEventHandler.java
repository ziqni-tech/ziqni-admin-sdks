/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming.handlers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JavaType;
import com.github.benmanes.caffeine.cache.AsyncCache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.ziqni.admin.sdk.streaming.EventHandler;
import com.ziqni.admin.sdk.streaming.Message;
import com.ziqni.admin.sdk.streaming.OnRemovalListener;
import com.ziqni.admin.sdk.streaming.client.StompHeaders;
import com.ziqni.admin.sdk.util.ClassScanner;
import org.checkerframework.checker.nullness.qual.NonNull;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Type;
import java.util.Objects;
import java.util.Optional;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicLong;
import java.util.function.BiConsumer;

public class RpcResultsEventHandler extends EventHandler<String> {

    public final static String DEFAULT_TOPIC = "/user/queue/rpc-results";
    public final static String CLASS_TO_SCAN_FOR_PAYLOAD_TYPE = "com.ziqni.admin.sdk.model";
    private static final Logger logger = LoggerFactory.getLogger(RpcResultsEventHandler.class);
    private static final AtomicLong sequenceNumber = new AtomicLong(0);

    public static final AsyncCache<String, RpcResultsResponse<?,?>> awaitingResponseCache = Caffeine.newBuilder()
            .maximumSize(250_000)
            .expireAfterWrite(5, TimeUnit.MINUTES)
            .evictionListener(new OnRemovalListener(logger))
            .buildAsync();
    private static final ExecutorService executorService = new ForkJoinPool(Runtime.getRuntime().availableProcessors()*4);

    private final String topic;
    private final ClassScanner classScanner;

    public RpcResultsEventHandler() {
        this(DEFAULT_TOPIC);
    }

    public RpcResultsEventHandler(String topic) {
        this.topic = topic;
        this.classScanner = new ClassScanner(CLASS_TO_SCAN_FOR_PAYLOAD_TYPE);
    }

    @Override
    public String getTopic() {
        return topic;
    }

    @Override
    public Type getPayloadType(StompHeaders headers) {
        return this.classScanner.get(headers.getFirst("objectType")).orElse(Object.class);
    }

    @Override
    public void handleFrame(@NonNull StompHeaders headers, String payload) {
        var messageId = headers.getMessageId();

        if(Objects.nonNull(messageId)){
            handleWithMessageId(messageId, headers, super.unpack(classScanner,headers,payload));
        }
        else {
            if(!payload.getClass().isInstance(Message.class))
                logger.error("No sequence number provided. Headers: " + headers + ". Payload: " + payload);
        }
    }

    public static  <TIN, TOUT> RpcResultsResponse<TIN, TOUT> submit(String destination, TIN payload, CompletableFuture<TOUT> completableFuture, BiConsumer<StompHeaders, TIN> doSend){

        final var messageId = sequenceNumber.incrementAndGet();
        final var streamingResponse = new RpcResultsResponse<>(messageId, payload, completableFuture);

        var nextSeq = Long.toString(messageId);
        StompHeaders headers = new StompHeaders();
        headers.setDestination(destination);
        headers.setMessageId(nextSeq);

        doSend.accept(headers, payload);
        final var in = new CompletableFuture<RpcResultsResponse<TIN, TOUT>>();
        in.complete(streamingResponse);
        awaitingResponseCache.put(streamingResponse.getSequenceNumberAsString(), in);
        return streamingResponse;
    }

    private static Optional<String> getMessageId(StompHeaders headers){
        return Optional.ofNullable(headers.getMessageId());
    }

    private static void handleWithMessageId(String messageId, StompHeaders headers, Object payload) {

        Optional.ofNullable(awaitingResponseCache.getIfPresent(messageId)).ifPresent( callback ->
                callback.thenAccept(rpcResultsResponse ->
                                executorService.submit(rpcResultsResponse.onCallBack(headers, payload))
                        )
        );
    }

    public static RpcResultsEventHandler create(){
        return new RpcResultsEventHandler();
    }
}
