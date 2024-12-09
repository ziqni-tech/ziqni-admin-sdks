package com.ziqni.admin.sdk.eventbus;

import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.*;
import java.util.function.Consumer;

public class ZiqniSimpleEventBus {

    private final ExecutorService executor;
    public final LinkedBlockingDeque<Runnable> tasks;

    private final ConcurrentHashMap<Class<?>, MessageConsumers<?>> subscribers;

    public ZiqniSimpleEventBus() {
        this.subscribers = new ConcurrentHashMap<>();
        this.tasks = new LinkedBlockingDeque<>();
        this.executor = new ThreadPoolExecutor(2, 4, 0L, TimeUnit.MILLISECONDS, tasks);
    }


    public void post(Object message) {

        final MessageConsumers<?> found = subscribers.get(message.getClass());

        if (found != null) {
            found.notifyAll(message);
        }
    }

    // Register a subscriber for events of its class type
    public <T> void register(Class<T> type, Consumer<T> consumer) {
        subscribers.compute(type, (key, value) -> {
            if (value == null) {
                value = new MessageConsumers<>(type);
            }
            value.add(consumer);
            return value;
        });
    }

    // Unregister a subscriber
    public <T> void unregister(Consumer<T> consumer) {
        subscribers.values().forEach(messageConsumers ->
                messageConsumers.consumers.remove(consumer)
        );
    }

    /**
     * MessageConsumers class to hold the event type and its subscribers
     * @param <T> the event type
     */
    public static class MessageConsumers<T> {

        final Class<T> type;
        final Set<Consumer<T>> consumers = new HashSet<>();

        public MessageConsumers(Class<T> type) {
            this.type = type;
        }

        public void notifyAll(Object event) {
            if (type.isInstance(event)) {
                consumers.forEach(subscriber -> subscriber.accept(type.cast(event)));
            } else {
                throw new IllegalArgumentException(
                        "Invalid event type. Expected: " + type.getName() + ", but got: " + event.getClass().getName());
            }
        }

        @SuppressWarnings("unchecked")
        public void add(Consumer<?> subscriber) {
            // Wrap the unchecked cast with a type check
            if (subscriber instanceof Consumer<?>) {
                consumers.add(event -> ((Consumer<Object>) subscriber).accept(event));
            } else {
                throw new IllegalArgumentException("Subscriber must be of type Consumer<?>");
            }
        }
    }
}
