/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming;

import com.google.common.eventbus.Subscribe;
import com.ziqni.admin.sdk.ZiqniAdminSDKEventBus;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;
import com.ziqni.admin.sdk.context.WsClientTransportError;
import com.ziqni.admin.sdk.streaming.handlers.RpcResultsEventHandler;
import com.ziqni.admin.sdk.streaming.handlers.CallbackEventHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.DefaultManagedTaskScheduler;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.*;
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

    private WsClient wsClient;

    private final AdminApiClientConfiguration configuration;

    public StreamingClient(AdminApiClientConfiguration configuration, String URL, ZiqniAdminSDKEventBus eventBus) throws Exception {

        this.configuration = configuration;
        this.URL = URL;
        this.eventBus = eventBus;
        this.webSocketClientTasks = new LinkedBlockingDeque<>();
        this.websocketSendExecutor = new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS, webSocketClientTasks);
        this.rpcResultsEventHandler = RpcResultsEventHandler.create();
        this.callbackEventHandler = CallbackEventHandler.create();

        this.eventBus.managementEventBus.register(this);
    }

    @Subscribe
    public void onWsClientTransportError(WsClientTransportError wsClientTransportError){
        this.stop(false).thenAccept(unused -> {
            try {
                this.start();
            } catch (Exception e) {
                logger.error("Failed to reconnect using start", e);
            }
        });
    }

    public CompletableFuture<Void> asyncWebSocketClient(Consumer<WsClient> consumer) {
        final CompletableFuture<Void> result = new CompletableFuture<>();
        this.websocketSendExecutor.submit(() -> {
            try {
                consumer.accept(this.wsClient);
                result.complete(null);
            }catch (Throwable throwable){
                result.completeExceptionally(throwable);
            }
        });

        return result;
    }

    public <TOUT, TIN> CompletableFuture<TOUT> sendWithApiCallback(String destination, TIN payload){
        final var completableFuture = new CompletableFuture<TOUT>();

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
                                logger.warn("Message body is empty {}", stompHeaders);
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

    public CompletableFuture<Boolean> start() throws Exception {
        if(this.wsClient==null) {
            this.wsClient = new WsClient(configuration, URL, (integer) -> {}, eventBus);
            this.wsClient.setTaskScheduler(taskScheduler);
            this.wsClient.setDefaultHeartbeat(new long[] {1000, 1000});
        }

        final var result = new CompletableFuture<Boolean>();
        this.websocketSendExecutor.submit( () -> {
            this.wsClient.startClient(result).thenApply(isConnected -> {
                if(isConnected()) {
                    this.wsClient.subscribe( this.rpcResultsEventHandler);
                    this.wsClient.subscribe( this.callbackEventHandler );
                    executeOnStartHandlers();
                }
                return isConnected;
            });
        });
        return result;
    }

    public void subscribe(EventHandler<?> handler) {
        this.wsClient.subscribe(handler);
    }

    public void addOnStopHandler(String key, Consumer<StreamingClient> consumer){
        this.onStopHandlers.compute( key, (k,v) -> consumer);
    }

    public void addOnStartHandler(String key, Consumer<StreamingClient> consumer){
        this.onStartHandlers.compute( key, (k,v) -> consumer);
    }

    public void executeOnStopHandlers() {
        this.onStopHandlers.forEach((k, v) ->
                v.accept(this)
        );
    }

    public void executeOnStartHandlers() {
        this.onStartHandlers.forEach((k, v) ->
                v.accept(this)
        );
    }

    public CallbackEventHandler getCallbackEventHandler() {
        return callbackEventHandler;
    }

    /** Helper methods **/

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
