package com.ziqni.admin.sdk.streaming;

import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import com.ziqni.admin.sdk.context.WSClientTransportError;
import com.ziqni.admin.sdk.streaming.stomp.StompOverWebSocket;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;

import com.ziqni.admin.sdk.streaming.handlers.EventHandler;
import com.ziqni.admin.sdk.streaming.handlers.CallbackEventHandler;
import com.ziqni.admin.sdk.streaming.handlers.RpcResultsEventHandler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.OffsetDateTime;

import java.util.Objects;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.AtomicReference;

/**
 * StreamingClient is a client for connecting to the Ziqni Admin API using WebSockets.
 */
public class StreamingClient {

    private static final Logger logger = LoggerFactory.getLogger(StreamingClient.class);

    // Executors and Task Queues
    private final ExecutorService websocketSendExecutor;
    private final LinkedBlockingDeque<Runnable> webSocketClientTasks;
    private final LinkedBlockingQueue<Runnable> queuedTasks = new LinkedBlockingQueue<>();

    // Event Handlers
    private final RpcResultsEventHandler rpcResultsEventHandler;
    private final CallbackEventHandler callbackEventHandler;

    // Configuration and Resources
    private final AdminApiClientConfiguration configuration;
    private final ZiqniSimpleEventBus eventBus;
    private final String URL;

    // State Management
    private final AtomicLong reconnectCount = new AtomicLong(0);
    private final AtomicReference<OffsetDateTime> nextReconnect = new AtomicReference<>();
    private final AtomicBoolean isPaused = new AtomicBoolean(false);
    private StompOverWebSocket stompOverWebSocket;

    // Constructor
    public StreamingClient(AdminApiClientConfiguration configuration, String URL, ZiqniSimpleEventBus eventBus) throws Exception {
        this.configuration = configuration;
        this.URL = URL;
        this.eventBus = eventBus;
        this.webSocketClientTasks = new LinkedBlockingDeque<>();
        this.websocketSendExecutor = new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS, webSocketClientTasks);
        this.rpcResultsEventHandler = RpcResultsEventHandler.create();
        this.callbackEventHandler = CallbackEventHandler.create(eventBus);

        setupShutdownHook();
        setupEventBusListeners();
    }

    // Setup Methods
    private void setupShutdownHook() {
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            this.reconnectCount.set(-1);
            this.stop(true);
        }));
    }

    private void setupEventBusListeners() {
        this.eventBus.onWsClientTransportError(this::onWsClientTransportError);
    }

    // Connection Handlers
    private void onWsClientTransportError(WSClientTransportError wsClientTransportError) {
        this.stop(false).thenAccept(unused -> {
            if (Objects.nonNull(this.nextReconnect.get())) return;

            if (!stompOverWebSocket.isDisconnecting()) {
                scheduleReconnect();
            }
        });
    }

    private void scheduleReconnect() {
        if (this.reconnectCount.get() < 0) return; // Shutdown in progress

        this.reconnectCount.incrementAndGet();
        this.nextReconnect.set(OffsetDateTime.now().plusSeconds(10));

        CompletableFuture.runAsync(() -> {
            try {
                Thread.sleep(10_000); // Wait 10 seconds
                attemptReconnect();
            } catch (Throwable e) {
                Thread.currentThread().interrupt();
                logger.warn("Reconnect sleep interrupted", e);
            }
        });
    }

    private void attemptReconnect() throws Exception {
        if (this.reconnectCount.get() < 0) return; // Shutdown in progress

        isPaused.set(true); // Pause operations during reconnection attempt

        this.start().thenAccept(connected -> {
            if (connected) {
                reconnectSuccessful();
            } else {
                scheduleReconnect();
                logger.warn("Reconnect failed; scheduling another attempt");
            }
        }).exceptionally(throwable -> {
            logger.error("Reconnect attempt failed with error: {}", throwable.getMessage(), throwable);
            scheduleReconnect();
            return null;
        });
    }

    private void reconnectSuccessful() {
        this.reconnectCount.set(0);
        this.nextReconnect.set(null);
        isPaused.set(false); // Resume operations
        flushQueuedTasks();
        logger.info("Reconnected successfully");
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

        if (isPaused.get() || isNotConnected()) {
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

        isPaused.set(true); // Pause operations during connection attempt

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
        if (websocketSendExecutor.isShutdown()) throw new IllegalStateException("Websocket executor is terminated");
        if (reconnectCount.get() < 0) throw new IllegalStateException("Client is shutting down");

        if (stompOverWebSocket == null) {
            stompOverWebSocket = new StompOverWebSocket(URL, "x-api-key", configuration.getAccessTokenString(), eventBus, this::onConnected);
        }
    }

    private void onConnectionSuccess() {
        isPaused.set(false); // Resume operations
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
    private void onConnected(StompOverWebSocket ws) {
        stompOverWebSocket.subscribe(rpcResultsEventHandler);
        stompOverWebSocket.subscribe(callbackEventHandler);
    }

    public void subscribe(EventHandler handler) {
        stompOverWebSocket.subscribe(handler);
    }
}
