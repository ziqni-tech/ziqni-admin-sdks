/*
 * Copyright (c) 2024. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */

package com.ziqni.admin.sdk.streaming;

import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import com.ziqni.admin.sdk.streaming.stomp.StompHeaders;
import com.ziqni.admin.sdk.streaming.stomp.StompOverWebSocket;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;

import com.ziqni.admin.sdk.streaming.handlers.EventHandler;
import com.ziqni.admin.sdk.streaming.handlers.CallbackEventHandler;
import com.ziqni.admin.sdk.streaming.handlers.RpcResultsEventHandler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Objects;
import java.util.concurrent.*;

/**
 * StreamingClient is a client for connecting to the Ziqni Admin API using WebSockets.
 */
public class StreamingClient {

    private static final Logger logger = LoggerFactory.getLogger(StreamingClient.class);

    // Executors and Task Queues
    private final ExecutorService websocketSendExecutor;
    private final LinkedBlockingQueue<Runnable> queuedTasks;

    // Event Handlers
    private final RpcResultsEventHandler rpcResultsEventHandler;
    private final CallbackEventHandler callbackEventHandler;

    // Configuration and Resources
    private final AdminApiClientConfiguration configuration;
    private final ZiqniSimpleEventBus eventBus;
    private final String URL;

    // Stomp Over WebSocket
    private StompOverWebSocket stompOverWebSocket;

    // Constructor
    public StreamingClient(AdminApiClientConfiguration configuration, String URL, ZiqniSimpleEventBus eventBus) throws Exception {

        this.configuration = configuration;
        this.URL = URL;

        this.queuedTasks = new LinkedBlockingQueue<>();
        this.rpcResultsEventHandler = RpcResultsEventHandler.create();
        this.callbackEventHandler = CallbackEventHandler.create(eventBus);
        this.websocketSendExecutor = new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS, new LinkedBlockingDeque<>());

        this.eventBus = eventBus;
        this.eventBus.onWSClientConnected(unused -> this.onConnected());

        setupShutdownHook();
    }

    // Setup Methods
    private void setupShutdownHook() {
        Runtime.getRuntime().addShutdownHook(new Thread(() -> this.stop(true)));
    }


    // Task Management
    private void flushQueuedTasks() {
        Runnable task;
        while ((task = queuedTasks.poll()) != null) {
            websocketSendExecutor.submit(task);
        }
        logger.info("Flushed queued tasks after reconnection.");
    }

    public <TOUT, TIN> CompletableFuture<TOUT> sendWithApiCallback(String destination, TIN payload) {
        final var completableFuture = new CompletableFuture<TOUT>();

        if (isNotConnected()) {
            queueTask(() -> sendWithApiCallback(destination, payload).exceptionally(throwable -> {
                completableFuture.completeExceptionally(throwable);
                return null;
            }));
            return completableFuture;
        }

        websocketSendExecutor.submit(() -> {
            try {
                RpcResultsEventHandler.submit(destination, payload, completableFuture, (stompHeaders, tPayload) -> {
                    if (Objects.nonNull(tPayload)) {
                        stompOverWebSocket.prepareMessageToSend(stompHeaders, tPayload).run();
                    } else {
                        logger.warn("Message body is empty " + stompHeaders);
                    }
                });
            } catch (Throwable t) {
                completableFuture.completeExceptionally(t);
            }
        });

        return completableFuture;
    }

    private void queueTask(Runnable task) {
        logger.warn("Connection unavailable, queuing task.");
        queuedTasks.add(task);
    }

    // Lifecycle Methods
    public CompletableFuture<Boolean> start() throws Exception {
        validateStateForStart();

        return stompOverWebSocket.connect()
                .thenApply(unused -> {
                    onConnectionSuccess();
                    return true;
                })
                .exceptionally(throwable -> {
                    logger.error("Connection failed: {}", throwable.getMessage(), throwable);
                    return false;
                });
    }

    private void validateStateForStart() throws Exception {
        if (websocketSendExecutor.isShutdown()) {
            throw new IllegalStateException("Websocket executor is terminated");
        }
        else if (stompOverWebSocket == null) {
            stompOverWebSocket = new StompOverWebSocket(URL, "x-api-key", configuration.getAccessTokenString(), eventBus);
        }
    }

    public <T> CompletableFuture<Void> sendMessage(StompHeaders stompHeaders, T body) {
        CompletableFuture<Void> result = new CompletableFuture<>();

        if (isNotConnected()) {
            logger.warn("Connection unavailable, queuing sendMessage task.");
            queuedTasks.add(() ->
                    sendMessage(stompHeaders, body).thenAccept(result::complete).exceptionally(throwable -> {
                        result.completeExceptionally(throwable);
                        return null;
                    })
            );
            return result;
        }
        else {
            return this.stompOverWebSocket.sendMessage(stompHeaders, body).thenAccept(webSocket -> {
                if (Objects.isNull(webSocket))
                    throw new IllegalStateException("The session is not connected");
            });
        }
    }

    private void onConnectionSuccess() {
        flushQueuedTasks();
        logger.info("Connection successful");
    }

    public CompletableFuture<Void> stop() {
        return stop(true);
    }

    public CompletableFuture<Void> stop(boolean executorShutdown) {
        final var out = new CompletableFuture<Void>();

        if (stompOverWebSocket != null) {
            websocketSendExecutor.submit(() -> {
                stompOverWebSocket.shutdown();
                stompOverWebSocket = null;
                out.complete(null);
            });
        }

        if (executorShutdown) websocketSendExecutor.shutdown();

        return out;
    }

    // WebSocket State Queries
    public boolean isConnected() {
        return Objects.nonNull(stompOverWebSocket) && stompOverWebSocket.isConnected();
    }

    public boolean isNotConnected() {
        return !isConnected();
    }

    // Accessors
    public CallbackEventHandler getCallbackEventHandler() {
        return callbackEventHandler;
    }

    public ZiqniSimpleEventBus getEventBus() {
        return eventBus;
    }

    // Connection Handlers
    private void onConnected() {
        if (stompOverWebSocket.isConnected()) {
            stompOverWebSocket.subscribe(rpcResultsEventHandler);
            stompOverWebSocket.subscribe(callbackEventHandler);
        }
        else {
            CompletableFuture.runAsync(() -> {
                try {
                    Thread.sleep(500);
                    stompOverWebSocket.connect().thenRun(this::onConnected);
                } catch (InterruptedException e) {
                    logger.error("Error waiting for connection", e);
                }
            });
        }
    }

    public void subscribe(EventHandler handler) {
        stompOverWebSocket.subscribe(handler);
    }
}
