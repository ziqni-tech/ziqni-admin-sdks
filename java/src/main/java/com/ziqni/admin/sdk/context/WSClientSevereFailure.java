package com.ziqni.admin.sdk.context;


import com.ziqni.admin.sdk.streaming.stomp.StompHeaders;

public record WSClientSevereFailure(StompHeaders headers, String payload, Throwable exception) {

}
