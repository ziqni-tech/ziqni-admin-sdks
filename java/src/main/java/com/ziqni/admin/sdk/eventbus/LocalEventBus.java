package com.ziqni.admin.sdk.eventbus;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;

public class LocalEventBus {

    private final ConcurrentHashMap<Class<?>, List<Object>> subscribers = new ConcurrentHashMap<>();

    public LocalEventBus() {
    }


    public void post(Object event) {
        final List<Object> found = subscribers.get(event.getClass());
        if (found != null) {
            found.forEach(subscriber -> {
                try {
                    subscriber.getClass()
                            .getMethod("handleEvent", event.getClass())
                            .invoke(subscriber, event);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            });
        }
    }

    // Register a subscriber for events of its class type
    public void register(Object subscriber) {
        subscribers.compute(subscriber.getClass(), (key, value) -> {
            if (value == null) {
                value = new ArrayList<>();
            }
            value.add(subscriber);
            return value;
        });
    }

    // Unregister a subscriber
    public void unregister(Object subscriber) {
        subscribers.computeIfPresent(subscriber.getClass(), (key, value) -> {
            value.remove(subscriber);
            return value.isEmpty() ? null : value;
        });
    }
}
