/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.sdk.admin.streaming;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.simp.stomp.StompHeaders;

import java.util.concurrent.CompletableFuture;

public class ApiCallbackResponse<TIN, TOUT> {

    private static final Logger logger = LoggerFactory.getLogger(ApiCallbackResponse.class);
    private final long sequenceNumber;
    private final TIN payload;
    private final CompletableFuture<TOUT> completableFuture;

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

    public Runnable onCallBack(StompHeaders headers, Object response) {
        logger.debug("handle callback response for sequence [{}] receipt id [{}] headers [{}] and response []", getSequenceNumberAsString(), headers.getReceiptId(), headers.toSingleValueMap());
        return () ->
                getCompletableFuture().complete((TOUT)response);
    }
}
