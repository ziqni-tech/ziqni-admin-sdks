package com.ziqni.admin.sdk.context;


import com.ziqni.admin.sdk.streaming.stomp.StompHeaders;

public record WSClientMessageError(StompHeaders headers, String payload, Throwable exception) {

}
