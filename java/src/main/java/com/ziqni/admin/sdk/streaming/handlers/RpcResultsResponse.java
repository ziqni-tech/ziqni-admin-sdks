/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming.handlers;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.JSON;
import com.ziqni.admin.sdk.streaming.stomp.StompHeaders;

import java.nio.charset.StandardCharsets;
import java.util.concurrent.CompletableFuture;

public class RpcResultsResponse<TIN, TOUT> {

    private final long sequenceNumber;
    private final TIN payload;
    private final CompletableFuture<TOUT> completableFuture;

    public RpcResultsResponse(long sequenceNumber, TIN payload, CompletableFuture<TOUT> completableFuture) {
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
        try {
            var failed = headers.getObjectType().equals(ApiException.class.getSimpleName());

            if(failed)
                return onApiExceptionCallBack(headers,response);
            else {
                final var result = (TOUT)response;
                return () -> getCompletableFuture().complete(result);
            }
        }
        catch (Throwable throwable){
            return () -> getCompletableFuture().completeExceptionally(throwable);
        }
    }

    private Runnable onApiExceptionCallBack(StompHeaders headers, Object response) {
        final var json = new String((byte[])response, StandardCharsets.UTF_8);
        final var error = JSON.getDefault().getMapper().convertValue(json,ApiException.class);
        return () -> getCompletableFuture().completeExceptionally(error);
    }
}
