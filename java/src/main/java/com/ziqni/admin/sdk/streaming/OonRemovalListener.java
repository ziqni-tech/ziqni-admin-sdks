package com.ziqni.admin.sdk.streaming;

import com.github.benmanes.caffeine.cache.RemovalCause;
import com.github.benmanes.caffeine.cache.RemovalListener;
import com.ziqni.admin.sdk.streaming.handlers.RpcResultsResponse;
import org.checkerframework.checker.nullness.qual.Nullable;
import org.slf4j.Logger;

public class OonRemovalListener implements RemovalListener<String, RpcResultsResponse<?,?>> {

    private final Logger logger;
    public OonRemovalListener(Logger logger) {
        this.logger=logger;
    }

    @Override
    public void onRemoval(@Nullable String key, @Nullable RpcResultsResponse<?, ?> value, RemovalCause cause) {
        if(value != null && !value.getCompletableFuture().isDone()){
            logger.warn("Evicting a message that hasn't completed. Reason:  {}, SequenceNumber: {}", cause, value.getSequenceNumberAsString());
            value.getCompletableFuture().completeExceptionally(new ApiCallbackResponseExpired());
        }
    }
}
