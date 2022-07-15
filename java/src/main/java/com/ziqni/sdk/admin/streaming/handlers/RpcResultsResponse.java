/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.sdk.admin.streaming.handlers;

import com.ziqni.sdk.admin.ApiException;
import com.ziqni.sdk.admin.JSON;
import org.springframework.messaging.simp.stomp.StompHeaders;

import java.nio.charset.StandardCharsets;
import java.util.concurrent.CompletableFuture;

public class RpcResultsResponse<TIN, TOUT> {

    private final static String OBJECT_TYPE_KEY = "objectType";
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
            var failed = headers.get(OBJECT_TYPE_KEY)
                    .stream()
                    .findFirst()
                    .map(value -> value.equals(ApiException.class.getSimpleName()))
                    .orElse(false);

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
