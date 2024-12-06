package com.ziqni.admin.sdk.eventbus;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

public class LocalEventBus {

    private final ConcurrentHashMap<Class<?>, List<Object>> subscribers = new ConcurrentHashMap<>();

    public LocalEventBus() {
    }

    public void post(Object event) {
        final var found  = subscribers.get(event.getClass());

        if(found != null) {
            found.forEach();
        }
    }

    public void register(Object object) {
        this.subscribers.compute(object.getClass(), (k, v) -> {
            if (v == null) {
                v = new ArrayList<>();
                v.add(object);
            } else {
                v.add(object);
            }
            return v;
        });
    }

    public void unregister(Object object) {
        this.subscribers.compute(object.getClass(), (k, v) -> {
            if (v != null) {
                v.remove(object);
            }
            return v;
        });
    }
}
