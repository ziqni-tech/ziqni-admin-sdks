package com.ziqni.admin.sdk.streaming.handlers;

import com.github.benmanes.caffeine.cache.RemovalCause;
import com.github.benmanes.caffeine.cache.RemovalListener;
import com.ziqni.admin.sdk.streaming.exceptions.ApiCallbackResponseExpired;
import org.checkerframework.checker.nullness.qual.Nullable;
import org.slf4j.Logger;

public class OnRemovalListener implements RemovalListener<String, RpcResultsResponse<?,?>> {

    private final Logger logger;
    public OnRemovalListener(Logger logger) {
        this.logger=logger;
    }

    @Override
    public void onRemoval(@Nullable String key, @Nullable RpcResultsResponse<?, ?> value, RemovalCause cause) {
        if(value != null && !value.getCompletableFuture().isDone()){
            logger.warn("Evicting a message that hasn't completed. SequenceNumber: {}, Reason:  {}", value.getSequenceNumberAsString(), cause);
            value.getCompletableFuture().completeExceptionally(new ApiCallbackResponseExpired());
        }
    }
}
