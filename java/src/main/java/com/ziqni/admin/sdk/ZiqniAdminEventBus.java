package com.ziqni.admin.sdk;

import com.google.common.eventbus.EventBus;
import com.ziqni.admin.sdk.context.*;

public class ZiqniAdminEventBus {

    public EventBus managementEventBus = new EventBus();

    public void onStreamingClientConnected(WSClientConnected message){
        managementEventBus.post(message);
    }

    public void onStreamingClientDisconnected(WSClientDisconnected message){
        managementEventBus.post(message);
    }
}
