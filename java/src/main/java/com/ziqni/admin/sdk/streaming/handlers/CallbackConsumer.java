/*
 * Copyright (c) 2024. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */

package com.ziqni.admin.sdk.streaming.handlers;

import com.fasterxml.jackson.databind.JavaType;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.streaming.stomp.StompHeaders;

import java.util.function.BiConsumer;

public class CallbackConsumer<T> {

    private boolean completed = false;

    public final JavaType javaType;

    private final String callback;

    private final Class<T> tClass;

    private final BiConsumer<StompHeaders,T> onCallback;
    private final BiConsumer<StompHeaders, ApiException> onApiException;

    public CallbackConsumer(Class<T> tClass, String callback, BiConsumer<StompHeaders,T> onCallback, BiConsumer<StompHeaders,ApiException> onApiException) {
        this.tClass = tClass;
        this.javaType = CallbackEventHandler.objectMapper.constructType(tClass);
        this.callback = callback;
        this.onCallback = onCallback;
        this.onApiException = onApiException;
    }

    public JavaType getJavaType() {
        return javaType;
    }

    public String getCallback() {
        return callback;
    }

    public Class<T> gettClass() {
        return tClass;
    }

    public void consumeCallback(StompHeaders headers, Object response) {
        onCallback.accept(headers, (T) response);
    }

    public void consumeApiExceptionCallBack(StompHeaders headers, ApiException response) {
        onApiException.accept(headers, response);
    }

    public boolean isCompleted() {
        return completed;
    }

    public boolean isCompleted(boolean in) {
        completed = in;
        return completed;
    }
}
