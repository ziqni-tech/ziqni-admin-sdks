/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming;

import com.ziqni.admin.sdk.streaming.handlers.RpcResultsEventHandler;
import com.ziqni.admin.sdk.streaming.handlers.CallbackEventHandler;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Consumer;

public class StreamingClient {

    private final ExecutorService websocketSendExecutor;

    public final LinkedBlockingDeque<Runnable> webSocketClientTasks;
    private final Map<String, Consumer<StreamingClient>> onStartHandlers = new HashMap<>();
    private final Map<String, Consumer<StreamingClient>> onStopHandlers = new HashMap<>();
    private final AtomicInteger connectionState = new AtomicInteger(WsClient.NotConnected);

    private final WsClient wsClient;
    private final RpcResultsEventHandler rpcResultsEventHandler;
    private final CallbackEventHandler callbackEventHandler;

    public StreamingClient(String URL) throws ExecutionException, InterruptedException {

        this.webSocketClientTasks = new LinkedBlockingDeque<>();
        this.websocketSendExecutor = new ThreadPoolExecutor(1, 1, 0L, TimeUnit.MILLISECONDS, webSocketClientTasks);
        this.wsClient = new WsClient(URL, connectionState::set);
        this.rpcResultsEventHandler = RpcResultsEventHandler.create();
        this.callbackEventHandler = CallbackEventHandler.create();
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
                        (stompHeaders, tPayload) -> this.wsClient.prepareMessageToSend(stompHeaders, tPayload).run()
                );
            }
            catch (Throwable t) {
                completableFuture.completeExceptionally(t);
            }
        });

        return completableFuture;
    }

    public void stop() {
        this.websocketSendExecutor.submit(this.wsClient::shutdown);
        this.websocketSendExecutor.shutdown();
    }

    public CompletableFuture<Boolean> start() {
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
        return connectionState.get() == WsClient.Connected &&
                !websocketSendExecutor.isShutdown() &&
                !websocketSendExecutor.isTerminated() ;
    }

    public boolean isNotConnected() {
        return connectionState.get() == WsClient.NotConnected;
    }

    public boolean isConnecting() {
        return connectionState.get() == WsClient.Connecting;
    }

    public boolean isDisconnecting() {
        return connectionState.get() == WsClient.Disconnecting;
    }

    public boolean isFailure() {
        return connectionState.get() == WsClient.SevereFailure;
    }
}
