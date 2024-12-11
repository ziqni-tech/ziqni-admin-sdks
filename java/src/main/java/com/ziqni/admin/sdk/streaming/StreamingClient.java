package com.ziqni.admin.sdk.streaming;

import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;
import com.ziqni.admin.sdk.context.WsClientTransportError;
import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import com.ziqni.admin.sdk.streaming.client.StompOverWebSocket;
import com.ziqni.admin.sdk.streaming.handlers.RpcResultsEventHandler;
import com.ziqni.admin.sdk.streaming.handlers.CallbackEventHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.OffsetDateTime;
import java.util.Objects;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.AtomicReference;

public class StreamingClient {

    private static final Logger logger = LoggerFactory.getLogger(StreamingClient.class);

    private final ExecutorService websocketSendExecutor;
    public final LinkedBlockingDeque<Runnable> webSocketClientTasks;
    private final RpcResultsEventHandler rpcResultsEventHandler;
    private final CallbackEventHandler callbackEventHandler;
    private final ZiqniSimpleEventBus eventBus;
    private final String URL;

    private final AtomicLong reconnectCount = new AtomicLong(0);
    private final AtomicReference<OffsetDateTime> nextReconnect = new AtomicReference<>();
    private StompOverWebSocket wsClient;

    private final AdminApiClientConfiguration configuration;

    public StreamingClient(AdminApiClientConfiguration configuration, String URL, ZiqniSimpleEventBus eventBus) throws Exception {

        this.configuration = configuration;
        this.URL = URL;
        this.eventBus = eventBus;
        this.webSocketClientTasks = new LinkedBlockingDeque<>();
        this.websocketSendExecutor = new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS, webSocketClientTasks);
        this.rpcResultsEventHandler = RpcResultsEventHandler.create();
        this.callbackEventHandler = CallbackEventHandler.create();

        // Implement shutdown hook
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            this.reconnectCount.set(-1);
            this.stop(true);
        }));

        // Listen to the event bus for transport errors
        this.eventBus.onWsClientTransportError(this::onWsClientTransportError);
    }

    private void onWsClientTransportError(WsClientTransportError wsClientTransportError) {
        this.stop(false).thenAccept(unused -> {
            if (Objects.nonNull(this.nextReconnect.get()))
                return;

            scheduleReconnect();
        });
    }

    private void scheduleReconnect() {
        if (this.reconnectCount.get() < 0) // Shutdown in progress
            return;

        this.reconnectCount.incrementAndGet();
        this.nextReconnect.set(OffsetDateTime.now().plusSeconds(10));

        CompletableFuture.runAsync(() -> {
            try {
                Thread.sleep(10_000); // Wait 10 seconds before attempting reconnect
                attemptReconnect();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                logger.warn("Reconnect sleep interrupted", e);
            }
        });
    }

    private void attemptReconnect() {
        try {
            if (this.reconnectCount.get() < 0) // Shutdown in progress
                return;

            this.start().thenAccept(connected -> {
                if (connected) {
                    this.reconnectCount.set(0);
                    this.nextReconnect.set(null);
                    logger.info("Reconnected successfully");
                } else {
                    scheduleReconnect();
                    logger.warn("Reconnect failed; scheduling another attempt");
                }
            }).exceptionally(throwable -> {
                logger.error("Reconnect attempt failed with error: {}", throwable.getMessage(), throwable);
                scheduleReconnect();
                return null;
            });
        } catch (Throwable throwable) {
            logger.error("Critical error during reconnect attempt", throwable);
            scheduleReconnect();
        }
    }

    public <TOUT, TIN> CompletableFuture<TOUT> sendWithApiCallback(String destination, TIN payload) {
        final var completableFuture = new CompletableFuture<TOUT>();

        if (Objects.isNull(this.wsClient)
                || this.wsClient.isNotConnected()
                || this.websocketSendExecutor.isTerminated()
                || this.websocketSendExecutor.isShutdown()) {
            completableFuture.completeExceptionally(new IllegalStateException("The session is not connected"));
            return completableFuture;
        }

        this.websocketSendExecutor.submit(() -> {
            try {
                RpcResultsEventHandler.submit(
                        destination,
                        payload,
                        completableFuture,
                        (stompHeaders, tPayload) -> {
                            if (Objects.nonNull(tPayload))
                                this.wsClient.prepareMessageToSend(stompHeaders, tPayload).run();
                            else
                                logger.warn("Message body is empty " + stompHeaders);
                        }
                );
            } catch (IllegalStateException t) {
                if (wsClient.isConnected())
                    logger.error("Broadcast failed", t);

                completableFuture.completeExceptionally(t);
            } catch (Throwable t) {
                completableFuture.completeExceptionally(t);
            }
        });

        return completableFuture;
    }

    public CompletableFuture<Void> stop() {
        return stop(true);
    }

    public CompletableFuture<Void> stop(boolean executorShutdown) {
        final var out = new CompletableFuture<Void>();
        if (this.wsClient != null)
            this.websocketSendExecutor.submit(() -> {
                this.wsClient.shutdown();
                this.wsClient = null;
                out.complete(null);
            });

        if (executorShutdown)
            this.websocketSendExecutor.shutdown();

        return out;
    }

    public CompletableFuture<Boolean> start() throws Exception{
        if (this.websocketSendExecutor.isShutdown() || this.websocketSendExecutor.isTerminated())
            throw new IllegalStateException("The websocket send executor has been terminated");

        if (this.reconnectCount.get() < 0) // Shutdown in progress
            throw new IllegalStateException("The client is shutting down");

        if (this.wsClient == null) {
            this.wsClient = new StompOverWebSocket(URL, "x-api-key", configuration.getAccessTokenString(), eventBus, this::onConnected);
        }

        return this.wsClient.connect()
                .thenApply(unused -> {
                    logger.info("Connection successful");
                    return true;
                })
                .exceptionally(throwable -> {
                    logger.error("Connection failed: {}", throwable.getMessage(), throwable);
                    return false;
                });
    }

    private void onConnected(StompOverWebSocket ws) {
        this.wsClient.subscribe(this.rpcResultsEventHandler);
        this.wsClient.subscribe(this.callbackEventHandler);
    }

    public CallbackEventHandler getCallbackEventHandler() {
        return callbackEventHandler;
    }

    public boolean isConnected() {
        return Objects.nonNull(wsClient) && wsClient.isConnected();
    }

    public boolean isNotConnected() {
        return Objects.isNull(wsClient) || wsClient.isNotConnected();
    }

    public boolean isConnecting() {
        return Objects.nonNull(wsClient) && wsClient.isConnecting();
    }

    public boolean isDisconnecting() {
        return Objects.nonNull(wsClient) && wsClient.isDisconnecting();
    }

    public boolean isFailure() {
        return Objects.nonNull(wsClient) && wsClient.isFailure();
    }
}
