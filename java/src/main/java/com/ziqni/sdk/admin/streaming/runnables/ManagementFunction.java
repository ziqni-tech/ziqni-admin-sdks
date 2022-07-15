package com.ziqni.sdk.admin.streaming.runnables;

import java.util.concurrent.CompletableFuture;
import java.util.function.Supplier;

public class ManagementFunction <T> implements Runnable {

    private final Supplier<T> function;
    private final CompletableFuture<T> completableFuture = new CompletableFuture<>();
    private final String jobId;

    public ManagementFunction(Supplier<T> function, String jobId) {
        assert function != null;
        this.function = function;
        this.jobId = jobId;
    }

    @Override
    public void run() {
        try {
            completableFuture.complete(function.get());
        }
        catch (Throwable t) {
            completableFuture.completeExceptionally(t);
        }
    }

    public String getJobId() {
        return jobId;
    }

    public CompletableFuture<T> getCompletableFuture() {
        return completableFuture;
    }
}