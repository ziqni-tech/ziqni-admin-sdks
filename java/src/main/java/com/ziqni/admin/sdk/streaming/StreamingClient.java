package com.ziqni.admin.sdk.streaming;

import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;
import com.ziqni.admin.sdk.context.WsClientTransportError;
import com.ziqni.admin.sdk.ZiqniAdminSDKEventBus;
import com.ziqni.admin.sdk.streaming.handlers.RpcResultsEventHandler;
import com.ziqni.admin.sdk.streaming.handlers.CallbackEventHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.DefaultManagedTaskScheduler;

import java.net.URI;
import java.net.http.*;
import java.time.OffsetDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.AtomicReference;
import java.util.function.Consumer;

public class StreamingClient {

    private static final Logger logger = LoggerFactory.getLogger(StreamingClient.class);
    private static final TaskScheduler taskScheduler = new DefaultManagedTaskScheduler();

    private final ExecutorService websocketSendExecutor;
    public final LinkedBlockingDeque<Runnable> webSocketClientTasks;
    private final Map<String, Consumer<StreamingClient>> onStartHandlers = new HashMap<>();
    private final Map<String, Consumer<StreamingClient>> onStopHandlers = new HashMap<>();
    private final RpcResultsEventHandler rpcResultsEventHandler;
    private final CallbackEventHandler callbackEventHandler;
    private final ZiqniAdminSDKEventBus eventBus;
    private final String URL;
    private final AtomicLong reconnectCount = new AtomicLong(0);
    private final AtomicReference<OffsetDateTime> nextReconnect = new AtomicReference<>();
    private WebSocket webSocketClient;
    private final AtomicBoolean isWebSocketClosed = new AtomicBoolean(true);  // Track WebSocket connection status
    private final AtomicBoolean isFailed = new AtomicBoolean(false); // Track WebSocket failure status
    private final AdminApiClientConfiguration configuration;

    public StreamingClient(AdminApiClientConfiguration configuration, String URL, ZiqniAdminSDKEventBus eventBus) throws Exception {
        this.configuration = configuration;
        this.URL = URL;
        this.eventBus = eventBus;
        this.webSocketClientTasks = new LinkedBlockingDeque<>();
        this.websocketSendExecutor = new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS, webSocketClientTasks);
        this.rpcResultsEventHandler = RpcResultsEventHandler.create();
        this.callbackEventHandler = CallbackEventHandler.create();


        this.eventBus.register(this);
        // Implement shutdown hook
        Runtime.getRuntime().addShutdownHook(new Thread(() -> {
            this.reconnectCount.set(-1);
            this.stop(true);
        }));
    }

    public void onWsClientTransportError(WsClientTransportError wsClientTransportError) {
        this.stop(false).thenAccept(unused -> {
            if (Objects.nonNull(this.nextReconnect.get()))
                return;
            scheduleReconnect();
        });
    }

    private void scheduleReconnect() {
        if (this.reconnectCount.get() < 0) // Shutdown in progress
            return;

        // Exponential backoff: retry after 2, 4, 8 seconds, and so on.
        long backoffDelay = Math.min(60, (1L << reconnectCount.get()) * 5);
        this.reconnectCount.incrementAndGet();
        this.nextReconnect.set(OffsetDateTime.now().plusSeconds(backoffDelay));

        taskScheduler.schedule(this::attemptReconnect, this.nextReconnect.get().toInstant());
    }

    private void attemptReconnect() {
        try {
            start(connected -> {
                if (connected) {
                    reconnectCount.set(0);
                    nextReconnect.set(null);
                } else {
                    scheduleReconnect();
                }
            }).exceptionally(throwable -> {
                logger.warn("Reconnect attempt failed: {}", throwable.getMessage());
                scheduleReconnect();
                return null;
            });
        } catch (Throwable throwable) {
            logger.error("Error during reconnect attempt", throwable);
            scheduleReconnect();
        }
    }

    public CompletableFuture<Void> asyncWebSocketClient(Consumer<WebSocket> consumer) {
        final CompletableFuture<Void> result = new CompletableFuture<>();
        this.websocketSendExecutor.submit(() -> {
            try {
                consumer.accept(this.webSocketClient);
                result.complete(null);
            } catch (Throwable throwable) {
                result.completeExceptionally(throwable);
            }
        });

        return result;
    }

    public <TOUT, TIN> CompletableFuture<TOUT> sendWithApiCallback(String destination, TIN payload) {
        final var completableFuture = new CompletableFuture<TOUT>();

        if (Objects.isNull(this.webSocketClient) || isWebSocketClosed.get()) {
            completableFuture.completeExceptionally(new IllegalStateException("WebSocket is not connected"));
            return completableFuture;
        }

        this.websocketSendExecutor.submit(() -> {
            try {
                sendWebSocketMessage(destination, payload);
            } catch (Throwable t) {
                completableFuture.completeExceptionally(t);
            }
        });

        return completableFuture;
    }

    private void sendWebSocketMessage(String destination, Object payload) {
        // Placeholder logic to send a message via WebSocket
        this.webSocketClient.sendText(payload.toString(), true);
    }

    public CompletableFuture<Void> stop() {
        return stop(true);
    }

    public CompletableFuture<Void> stop(boolean executorShutdown) {
        final var out = new CompletableFuture<Void>();
        if (this.webSocketClient != null) {
            this.websocketSendExecutor.submit(() -> {
                try {
                    this.webSocketClient.sendClose(WebSocket.NORMAL_CLOSURE, "Closing");
                } catch (Exception e) {
                    logger.error("Error closing WebSocket", e);
                }
                out.complete(null);
            });
        }

        if (executorShutdown)
            shutdownExecutor();

        return out;
    }

    private void shutdownExecutor() {
        try {
            if (!this.websocketSendExecutor.awaitTermination(60, TimeUnit.SECONDS)) {
                this.websocketSendExecutor.shutdownNow();
            }
        } catch (InterruptedException e) {
            this.websocketSendExecutor.shutdownNow();
            Thread.currentThread().interrupt(); // Restore interrupted status
        }
    }

    public CompletableFuture<Boolean> start() throws Exception {
        return start((started) -> {});
    }

    public CompletableFuture<Boolean> start(Consumer<Boolean> onComplete) throws Exception {
        if (this.websocketSendExecutor.isShutdown() || this.websocketSendExecutor.isTerminated())
            throw new IllegalStateException("The websocket send executor has been terminated");

        if (this.reconnectCount.get() < 0) // Shutdown in progress
            throw new IllegalStateException("The client is shutting down");

        if (this.webSocketClient == null) {
            // Initialize WebSocket client if it's null
            HttpClient client = HttpClient.newHttpClient();
            WebSocket.Builder webSocketBuilder = client.newWebSocketBuilder();

            // Add access token as authorization header if it's set
            configuration.verifyXApiKeyToken();
            var accessTokenString = configuration.getAccessTokenString();
            if ( accessTokenString != null && ! accessTokenString.isEmpty()) {
                webSocketBuilder.header("Authorization", "Bearer " + accessTokenString);
            }

            // Now, build the WebSocket connection and pass in the listener
            this.webSocketClient = webSocketBuilder
                    .buildAsync(URI.create(this.URL), new WebSocket.Listener() {

                        @Override
                        public void onOpen(WebSocket webSocket) {
                            logger.info("WebSocket Opened");
                            webSocket.sendText("Hello, WebSocket!", true);
                            isWebSocketClosed.set(false); // Mark WebSocket as open
                        }

                        @Override
                        public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
                            logger.info("Received message: {}", data);
                            return WebSocket.Listener.super.onText(webSocket, data, last);
                        }

                        @Override
                        public void onError(WebSocket webSocket, Throwable error) {
                            logger.error("WebSocket error: ", error);
                            isFailed.set(true); // Mark WebSocket as failed
                            WebSocket.Listener.super.onError(webSocket, error);
                        }

                        @Override
                        public CompletionStage<?> onClose(WebSocket webSocket, int statusCode, String reason) {
                            logger.info("WebSocket Closed. Status: {}, Reason: {}", statusCode, reason);
                            isWebSocketClosed.set(true); // Mark WebSocket as closed
                            return WebSocket.Listener.super.onClose(webSocket, statusCode, reason);
                        }
                    }).join(); // Block until WebSocket is connected
        }

        final var result = new CompletableFuture<Boolean>();
        this.websocketSendExecutor.submit(() -> {
            boolean connected = this.webSocketClient != null && !isWebSocketClosed.get();
            result.complete(connected);
            onComplete.accept(connected);
        });

        return result;
    }

    public boolean isConnected() {
        return this.webSocketClient != null && !isWebSocketClosed.get();
    }

    public boolean isNotConnected() {
        return this.webSocketClient == null || isWebSocketClosed.get();
    }

    public boolean isConnecting() {
        return this.webSocketClient != null && isWebSocketClosed.get();
    }

    public boolean isDisconnecting() {
        return this.webSocketClient != null && isWebSocketClosed.get();
    }

    public boolean isFailure() {
        return this.isFailed.get();
    }
}
