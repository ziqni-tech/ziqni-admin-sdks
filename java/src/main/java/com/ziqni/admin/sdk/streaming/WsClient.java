/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming;

import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;
import com.ziqni.admin.sdk.context.WSClientConnected;
import com.ziqni.admin.sdk.context.WSClientConnecting;
import com.ziqni.admin.sdk.context.WSClientDisconnected;
import com.ziqni.admin.sdk.context.WSClientSevereFailure;
import com.ziqni.admin.sdk.eventbus.ZiqniSimpleEventBus;
import com.ziqni.admin.sdk.streaming.client.NativeWebSocketClient;
import com.ziqni.admin.sdk.streaming.runnables.MessageToSend;
import com.ziqni.admin.sdk.util.Common;
import com.ziqni.admin.sdk.util.ZiqniClientObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.simp.stomp.ConnectionLostException;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.web.socket.WebSocketHttpHeaders;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.messaging.WebSocketStompClient;

import java.util.List;
import java.util.Objects;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Consumer;

public class WsClient extends WebSocketStompClient{

    private static final Logger logger = LoggerFactory.getLogger(WsClient.class);

    private final static ConcurrentHashMap<String, ScheduledFuture<?>> scheduledTasks = new ConcurrentHashMap<>();

    private final WsStompSessionHandler stompSessionHandler;

    private final TaskScheduler taskScheduler;

    private final String wsUri;

    private final StompHeaders stompHeaders;

    private StompSession stompSession;
    private ZiqniSimpleEventBus eventBus;
    private final List<Consumer<StompSession>> connectListeners;
    private final List<Consumer<Throwable>> disconnectListeners;


    public static final int SevereFailure = -1;
    public static final int NotConnected = 0;
    public static final int Connecting = 1;
    public static final int Connected = 2;
    public static final int Disconnecting = 3;


    private final AtomicInteger connectionStateAtomic = new AtomicInteger(NotConnected);

    private final Consumer<Integer> onStateChange;
    private final AdminApiClientConfiguration configuration;

    public WsClient(final AdminApiClientConfiguration configuration, final String wsUri, final Consumer<Integer> onStateChange, ZiqniSimpleEventBus eventBus) throws Exception {
        this(configuration, wsUri, makeAuthHeader(configuration), onStateChange, eventBus);
    }

    protected WsClient(final AdminApiClientConfiguration configuration, final String wsUri, final StompHeaders stompHeaders, final Consumer<Integer> onStateChange, ZiqniSimpleEventBus eventBus) {
        super(new NativeWebSocketClient());
        this.wsUri = wsUri;
        this.taskScheduler = new ThreadPoolTaskScheduler();
        this.stompSessionHandler = new WsStompSessionHandler(eventBus);
        this.connectListeners  = new CopyOnWriteArrayList<>();
        this.disconnectListeners  = new CopyOnWriteArrayList<>();
        this.stompHeaders = stompHeaders;
        this.onStateChange = onStateChange;
        this.eventBus = eventBus;
        this.configuration = configuration;

        // create stomp client
        super.setTaskScheduler(taskScheduler);

        var mappingJackson2MessageConverter = new MappingJackson2MessageConverter();
        mappingJackson2MessageConverter.setObjectMapper(new ZiqniClientObjectMapper().serializingObjectMapper());
        super.setMessageConverter(mappingJackson2MessageConverter);
        super.setDefaultHeartbeat(new long[]{10000L, 10000L});
    }

    public void subscribe(EventHandler<?> handler) {
        stompSessionHandler.subscribe(stompSession,handler);
    }

    private static StompHeaders makeAuthHeader(AdminApiClientConfiguration configuration) throws Exception {
        StompHeaders stompHeaders = new StompHeaders();
        updateOauthToken(configuration,stompHeaders);
        return stompHeaders;
    }

    private static void updateOauthToken(AdminApiClientConfiguration configuration, StompHeaders stompHeaders) throws Exception {
        stompHeaders.setLogin(configuration.getWsStompClientLogin());
        configuration.verifyXApiKeyToken();
        stompHeaders.setPasscode(configuration.getAccessTokenString());
    }

    public <T> MessageToSend<T> prepareMessageToSend(StompHeaders headers, T payload){
        if(Objects.isNull(stompSession) || !stompSession.isConnected())
            throw new IllegalStateException("The stomp session is not connected");
        return new MessageToSend<>(headers, payload, stompSession);
    }

    /**
     * Adds a listener to be invoked on a successful WebSocket/STOMP connection.
     *
     * @param listener the listener to invoke on successful connection
     */
    public void addConnectListener(Consumer<StompSession> listener) {
        connectListeners.add(listener);
    }

    /**
     * Adds a listener to be invoked when the WebSocket/STOMP connection is disconnected
     * or if the connection attempt fails.
     *
     * @param listener the listener to invoke on disconnection or failure
     */
    public void addDisconnectListener(Consumer<Throwable> listener) {
        disconnectListeners.add(listener);
    }

    private void setConnectionState(Integer state){
        this.connectionStateAtomic.set(state);

        try {
            switch (state){
                case SevereFailure:
                    this.eventBus.post(new WSClientSevereFailure(stompSession,null,null,null, null));
                    break;

                case NotConnected:
                    this.eventBus.post(new WSClientDisconnected(stompSession));
                    break;

                case Connecting:
                    this.eventBus.post(new WSClientConnecting(stompSession));
                    break;

                case Connected:
                    this.eventBus.post(new WSClientConnected(stompSession, null));
                    break;

                default:
                    break;
            }
        } catch (Throwable t) {
            logger.error("Error while publishing to the event bus", t);
        }

        try {
            onStateChange.accept(state);
        } catch (Throwable t) {
            logger.error("Error during change notify", t);
        }
    }

    public boolean isConnected() {
        return connectionStateAtomic.get() == Connected;
    }

    public boolean isNotConnected() {
        return connectionStateAtomic.get() == NotConnected;
    }

    public boolean isConnecting() {
        return connectionStateAtomic.get() == Connecting;
    }

    public boolean isDisconnecting() {
        return connectionStateAtomic.get() == Disconnecting;
    }

    public boolean isFailure() {
        return connectionStateAtomic.get() == SevereFailure;
    }

    private void cleanUpScheduledTasks(String jobId) {
        scheduledTasks.computeIfPresent(jobId, (k, v) -> {
            try {
                v.cancel(true);
            } catch (Exception e) {
                logger.error("scheduled future cancelling jobId [{}] threw exception [{}]", k, e.getMessage());
            }
            return null;
        });
    }

    public CompletableFuture<Boolean> startClient(final CompletableFuture<Boolean> startResult) {
        if(isConnected()) {
            startResult.complete(isConnected());
            return startResult;
        }

        try {
            setConnectionState(Connecting);
            logger.info("Connecting");
            super.start();
            doConnect().thenAccept(stompSession1 -> {
                        setIsConnected();
                        setConnectionState(Connected);
                        startResult.complete(isConnected());
                    })
                    .exceptionally(throwable -> {
                        startResult.completeExceptionally(throwable);
                        logger.error("Failed to start the connection", throwable);
                        setConnectionState(SevereFailure);
                        return null;
                    });
        }
        catch (ConnectionLostException e){
            setConnectionState(SevereFailure);
            logger.error("[Start] [doConnect] Exception occurred: " + e.getMessage());
            startResult.completeExceptionally(e);
        }
        catch (Throwable throwable){
            setConnectionState(SevereFailure);
            startResult.completeExceptionally(throwable);
        }

        return startResult;
    }

    public void shutdown() {

        if (isNotConnected())
            return;

        setConnectionState(Disconnecting);
        final String jobId = Common.getNextId();
        disconnect(jobId);
    }

    private void disconnect(final String jobId) {
        disconnectFunc(jobId);
        stompSession = null;
    }

    private WebSocketStompClient disconnectFunc(String jobId) {
        if (super.isRunning()) {
            try {
                if(super.isRunning())
                    try {
                        super.stop();
                    } catch (RuntimeException e) {
                        logger.error("Stomp client stop operation exception [{}] produced result [{}] operation for jobId [{}] and connection state is [{}]", e.getMessage(), super.isRunning(), jobId, connectionStateAtomic.get());
                    }
                setConnectionState(NotConnected);
                return this;
            } catch (Throwable t) {
                setConnectionState(SevereFailure);
                logger.error("err stopping client: " + t);
                throw t;
            }
        } else
            return this;
    }

    private CompletableFuture<StompSession> doConnect() {

        try {
            updateOauthToken(configuration,stompHeaders);

            final CompletableFuture<StompSession> future = connectAsync(wsUri, new WebSocketHttpHeaders(), stompHeaders, stompSessionHandler);

            return future.handle((stompSession, throwable) -> {
                if (throwable != null) {
                    logger.error("Failed to connect WebSocket", throwable);
                    setConnectionState(SevereFailure);
                    return null;
                } else {
                    logger.info("Connection established successfully with the server.");
                    this.stompSessionHandler.reconnectAllTopics(stompSession);
                    notifyConnectListeners(stompSession);
                    return stompSession;
                }
            });

        } catch (Exception e) {
            var future = new CompletableFuture<StompSession>().toCompletableFuture();
            future.completeExceptionally(e);
            return future;
        }
    }

    private void notifyConnectListeners(StompSession session) {
        for (Consumer<StompSession> successCallback : connectListeners) {
            successCallback.accept(session);
        }
    }

    private void notifyDisconnectListeners(Throwable throwable) {
        for (Consumer<Throwable> failCallback : disconnectListeners) {
            failCallback.accept(throwable);
        }
    }

    private void setIsConnected() {
        if (super.isRunning()
                && stompSession != null
                && stompSession.isConnected()
                && !isConnected()
        )
            setConnectionState(Connected);
    }

}
