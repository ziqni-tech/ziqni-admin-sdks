package com.ziqni.admin.sdk;

import com.google.common.eventbus.DeadEvent;
import com.google.common.eventbus.EventBus;

public class ZiqniAdminSDKEventBus {

    public final EventBus managementEventBus;

    public ZiqniAdminSDKEventBus() {
        this.managementEventBus = new EventBus();
    }

    /**
     * Posts an event to all registered subscribers. This method will return successfully after the
     * event has been posted to all subscribers, and regardless of any exceptions thrown by
     * subscribers.
     *
     * <p>If no subscribers have been subscribed for {@code event}'s class, and {@code event} is not
     * already a {@link DeadEvent}, it will be wrapped in a DeadEvent and reposted.
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
    public void register(Object object) {
        this.managementEventBus.register(object);
    }
}
