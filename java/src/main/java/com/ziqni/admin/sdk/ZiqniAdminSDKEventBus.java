package com.ziqni.admin.sdk;


import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;

import java.util.function.Consumer;

public class ZiqniAdminSDKEventBus {

    public final ZiqniSimpleEventBus managementEventBus;

    public ZiqniAdminSDKEventBus() {
        this.managementEventBus = new ZiqniSimpleEventBus();
    }

    /**
     * Posts an event to all registered subscribers. This method will return successfully after the
     * event has been posted to all subscribers, and regardless of any exceptions thrown by
     * subscribers.
     *
     * @param event event to post.
     */
    public void post(Object event) {
        this.managementEventBus.post(event);
    }

    /**
     * Registers all subscriber methods on {@code object} to receive events.
     *
     * @param object object whose subscriber methods should be registered.
     */
    public <T> void register(Class<T> type, Consumer<T> consumer) {
        this.managementEventBus.register(type, consumer);
    }
}
