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
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.atomic.AtomicReference;
import java.util.function.Consumer;

public class StreamingClient {

    private static final Logger logger = LoggerFactory.getLogger(StreamingClient.class);

    private final ExecutorService websocketSendExecutor;

    public final LinkedBlockingDeque<Runnable> webSocketClientTasks;
    private final Map<String, Consumer<StreamingClient>> onStartHandlers = new HashMap<>();
    private final Map<String, Consumer<StreamingClient>> onStopHandlers = new HashMap<>();
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

        // implement shutdown hook
        Runtime.getRuntime().addShutdownHook(new Thread( () -> {
            this.reconnectCount.set(-1);
            this.stop(true);
        }));
    }

    public void onWsClientTransportError(WsClientTransportError wsClientTransportError){
        this.stop(false).thenAccept(unused -> {
            if(Objects.nonNull(this.nextReconnect.get()))
                return;

            scheduleReconnect();
        });
    }

    private void scheduleReconnect(){
        if(this.reconnectCount.get() < 0) // Shutdown in progress
            return;

        this.reconnectCount.incrementAndGet();
        this.nextReconnect.set(OffsetDateTime.now().plusSeconds(10));

//        taskScheduler.schedule(
//                this::attemptReconnect,
//                this.nextReconnect.get().toInstant()
//        );
    }

//    private void attemptReconnect(){
//        try {
//            if(this.reconnectCount.get() < 0) // Shutdown in progress
//                return;
//
//            this.start( connected -> {
//                try {
//                    if (connected) {
//                        this.reconnectCount.set(0);
//                        this.nextReconnect.set(null);
//                    } else {
//                        scheduleReconnect();
//                    }
//                } catch (Throwable throwable) {
//                    scheduleReconnect();
//                    logger.error("Reconnect failed", throwable);
//                }
//            }).exceptionally(throwable -> {
//                logger.warn("Reconnect failed with: {}", throwable.getMessage());
//                scheduleReconnect();
//                return null;
//            });
//        } catch (Throwable throwable) {
//            scheduleReconnect();
//            logger.error("Reconnect failed", throwable);
//        }
//    }

    public <TOUT, TIN> CompletableFuture<TOUT> sendWithApiCallback(String destination, TIN payload){
        final var completableFuture = new CompletableFuture<TOUT>();

        if(Objects.isNull(this.wsClient)
                || this.wsClient.isNotConnected()
                || this. websocketSendExecutor.isTerminated()
                || this. websocketSendExecutor.isShutdown()) {
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
                            if(Objects.nonNull(tPayload))
                                this.wsClient.prepareMessageToSend(stompHeaders, tPayload).run();
                            else
                                logger.warn("Message body is empty " + stompHeaders);
                        }
                );
            }
            catch (IllegalStateException t){
                if(wsClient.isConnected())
                    logger.error("Broadcast failed",t);

                completableFuture.completeExceptionally(t);
            }
            catch (Throwable t) {
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
        if(this.wsClient!=null)
            this.websocketSendExecutor.submit(() -> {
                this.wsClient.shutdown();
                this.wsClient=null;
                out.complete(null);
            });

        if(executorShutdown)
            this.websocketSendExecutor.shutdown();

        return out;
    }

    public CompletableFuture<Void> start() throws Exception {
        if(this.websocketSendExecutor.isShutdown() || this.websocketSendExecutor.isTerminated())
            throw new IllegalStateException("The websocket send executor has been terminated");

        if(this.reconnectCount.get() < 0) // Shutdown in progress
            throw new IllegalStateException("The client is shutting down");

        if(this.wsClient==null) {
            this.wsClient = new StompOverWebSocket(URL, "x-api-key", configuration.getAccessTokenString(), eventBus, this::onConnected);
        }

        return this.wsClient.connect();
    }

    private void onConnected(StompOverWebSocket ws) {

        this.wsClient.subscribe( this.rpcResultsEventHandler);
        this.wsClient.subscribe( this.callbackEventHandler );
        executeOnStartHandlers();
    }

    public void executeOnStartHandlers() {
        this.onStartHandlers.forEach((k, v) ->
                v.accept(this)
        );
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
