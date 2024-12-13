/*
 * Copyright (c) 2024. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.model;

import com.ziqni.admin.sdk.streaming.stomp.StompHeaders;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.CompletableFuture;

public class ApiCallbackResponse<TIN, TOUT> {

    private static final Logger logger = LoggerFactory.getLogger(ApiCallbackResponse.class);
    private final long sequenceNumber;
    private final TIN payload;
    private final CompletableFuture<TOUT> completableFuture;

    private boolean evictable = false;

    public ApiCallbackResponse(long sequenceNumber, TIN payload, CompletableFuture<TOUT> completableFuture) {
        this.sequenceNumber = sequenceNumber;
        this.payload = payload;
        this.completableFuture = completableFuture;
    }

    public long getSequenceNumber() {
        return sequenceNumber;
    }
    public String getSequenceNumberAsString() {
        return Long.toString(sequenceNumber);
    }

    public TIN getPayload() {
        return payload;
    }

    public CompletableFuture<TOUT> getCompletableFuture() {
        return completableFuture;
    }

    public boolean isEvictable() { return this.evictable; }

    public Runnable onCallBack(StompHeaders headers, Object response) {
        assert !isEvictable();
        this.evictable = true;
        return () ->
                getCompletableFuture().complete((TOUT)response);
    }
}
