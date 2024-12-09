package com.ziqni.admin.sdk.eventbus;

import com.ziqni.admin.sdk.context.*;

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
        this.executor = new ThreadPoolExecutor(1, 4, 0L, TimeUnit.MILLISECONDS, tasks);
    }


    public void post(Object message) {
        if(message == null) {
            throw new IllegalArgumentException("Message cannot be null");
        }

        if(subscribers.isEmpty()) {
            return;
        }

        final MessageConsumers<?> found = subscribers.get(message.getClass());

        if (found != null) {
            found.notifyAll(message);
        }
    }

    // Register a subscriber for events of its class type
    public <T> void register(Class<T> type, Consumer<T> consumer) {
        subscribers.compute(type, (key, value) -> {
            if (value == null) {
                value = new MessageConsumers<>(type, executor);
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

    public void onWSClientConnected(Consumer<WSClientConnected> consumer){
        this.register(WSClientConnected.class, consumer);
    }

    public void onWSClientConnecting(Consumer<WSClientConnecting> consumer){
        this.register(WSClientConnecting.class, consumer);
    }

    public void onWSClientDisconnected(Consumer<WSClientDisconnected> consumer){
        this.register(WSClientDisconnected.class, consumer);
    }

    public void onWSClientSevereFailure(Consumer<WSClientSevereFailure> consumer){
        this.register(WSClientSevereFailure.class, consumer);
    }

    public void onWsClientTransportError(Consumer<WsClientTransportError> consumer){
        this.register(WsClientTransportError.class, consumer);
    }

    /**
     * MessageConsumers class to hold the event type and its subscribers
     * @param <T> the event type
     */
    public static class MessageConsumers<T> {

        final Class<T> type;
        final Set<Consumer<T>> consumers = new HashSet<>();
        private final ExecutorService ex;

        public MessageConsumers(Class<T> type, ExecutorService ex) {
            this.ex = ex;
            this.type = type;
        }

        public void notifyAll(Object event) {
            if (type.isInstance(event)) {
                consumers.forEach(subscriber ->
                        ex.submit( () ->
                            subscriber.accept(type.cast(event))
                    )
                );
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
