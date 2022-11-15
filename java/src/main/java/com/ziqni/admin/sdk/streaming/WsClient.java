/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming;

import com.ziqni.admin.sdk.ZiqniAdminEventBus;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;
import com.ziqni.admin.sdk.context.WSClientConnected;
import com.ziqni.admin.sdk.context.WSClientConnecting;
import com.ziqni.admin.sdk.context.WSClientDisconnected;
import com.ziqni.admin.sdk.context.WSClientSevereFailure;
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
import org.springframework.util.concurrent.FailureCallback;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.util.concurrent.ListenableFutureCallback;
import org.springframework.util.concurrent.SuccessCallback;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.WebSocketHttpHeaders;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.client.jetty.JettyWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;
import org.springframework.web.socket.sockjs.client.SockJsClient;
import org.springframework.web.socket.sockjs.client.Transport;
import org.springframework.web.socket.sockjs.client.WebSocketTransport;

import java.util.ArrayList;
import java.util.List;
import java.util.Timer;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Consumer;

public class WsClient extends WebSocketStompClient{

    private static final Logger logger = LoggerFactory.getLogger(WsClient.class);

    private final static ConcurrentHashMap<String, ScheduledFuture<?>> scheduledTasks = new ConcurrentHashMap<>();

    private final WsStompSessionHandler stompSessionHandler;

    private final Timer reconnectTimer;

    private final TaskScheduler taskScheduler;

    private final String wsUri;

    private final StompHeaders stompHeaders;

    private StompSession stompSession;
    private ZiqniAdminEventBus eventBus;

    private final List<SuccessCallback<StompSession>> connectListeners;

    private final List<FailureCallback> disconnectListeners;

    public static final int SevereFailure = -1;
    public static final int NotConnected = 0;

    public static final int Connecting = 1;
    public static final int Connected = 2;
    public static final int Disconnecting = 3;


    private final AtomicInteger connectionStateAtomic = new AtomicInteger(NotConnected);

    private final Consumer<Integer> onStateChange;
    private final AdminApiClientConfiguration configuration;

    public WsClient(final AdminApiClientConfiguration configuration, final String wsUri, final Consumer<Integer> onStateChange, ZiqniAdminEventBus eventBus) throws Exception {
        this(configuration, wsUri, makeAuthHeader(configuration), onStateChange, eventBus);
    }

    protected WsClient(final AdminApiClientConfiguration configuration, final String wsUri, final StompHeaders stompHeaders, final Consumer<Integer> onStateChange, ZiqniAdminEventBus eventBus) {
        super(makeSockJs());
        this.wsUri = wsUri;
        this.taskScheduler = new ThreadPoolTaskScheduler();
        this.reconnectTimer = new Timer("ReconnectTimer");
        this.stompSessionHandler = new WsStompSessionHandler();
        this.connectListeners = new ArrayList<>();
        this.disconnectListeners = new ArrayList<>();
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

    private static SockJsClient makeSockJs(){
        // setup transports & socksjs
        JettyWebSocketClient jettyWebSocketClient = new JettyWebSocketClient();
        List<Transport> transports = new ArrayList<>(2);
        transports.add(new WebSocketTransport(jettyWebSocketClient));
        var sockJsClient = new SockJsClient(transports);
        return sockJsClient;
    }

    public void subscribe(EventHandler<?> handler) {
        stompSessionHandler.subscribe(stompSession,handler);
    }

    private static StompHeaders makeAuthHeader(AdminApiClientConfiguration configuration) throws Exception{
        StompHeaders stompHeaders = new StompHeaders();
        updateOauthToken(configuration,stompHeaders);
        return stompHeaders;
    }

    private static void updateOauthToken(AdminApiClientConfiguration configuration, StompHeaders stompHeaders) throws Exception{
        String oauthToken = configuration.getAccessTokenString();
        stompHeaders.setLogin("Bearer");
        stompHeaders.setPasscode(oauthToken);
    }

    public <T> MessageToSend<T> prepareMessageToSend(StompHeaders headers, T payload){
        return new MessageToSend<>(headers, payload, stompSession);
    }

    /**
     * Add a listener to fire on successful WebSocket/Stomp connection
     * @param listener
     */
    public void addConnectListener(SuccessCallback<StompSession> listener) {
        connectListeners.add(listener);
    }

    /**
     * Add a listener which fires when the WebSocket/Stomp connection is broken (or fails to connect)
     * @param listener
     */
    public void addDisconnectListener(FailureCallback listener) {
        disconnectListeners.add(listener);
    }

    private void setConnectionState(Integer state){
        this.connectionStateAtomic.set(state);

        try {
            switch (state){
                case SevereFailure:
                    eventBus.managementEventBus.post(new WSClientSevereFailure());
                    break;

                case NotConnected:
                    eventBus.managementEventBus.post(new WSClientDisconnected());
                    break;

                case Connecting:
                    eventBus.managementEventBus.post(new WSClientConnecting());
                    break;

                case Connected:
                    eventBus.managementEventBus.post(new WSClientConnected());
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
        reconnectTimer.cancel();
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

            final ListenableFuture<StompSession> future = super.connect(wsUri, new WebSocketHttpHeaders(), stompHeaders, stompSessionHandler);

            future.completable()
                    .thenApply(newStompSession -> {
                        stompSession = newStompSession;
                        logger.info("Connection established successfully with the server.");
                        this.stompSessionHandler.reconnectAllTopics(stompSession);
                        notifyConnectListeners(newStompSession);
                        return future;
                    }).exceptionally(throwable -> {
                        logger.debug("Stomp client connection call back exception. [{}]", throwable.getMessage());
                        notifyDisconnectListeners(throwable);
                        return future;
                    });

            return future.completable();
        } catch (Exception e) {
            var future = new CompletableFuture<StompSession>().toCompletableFuture();
            future.completeExceptionally(e);
            return future;
        }
    }



    private void notifyConnectListeners(StompSession session) {
        for (SuccessCallback<StompSession> successCallback : connectListeners) {
            successCallback.onSuccess(session);
        }
    }

    private void notifyDisconnectListeners(Throwable throwable) {
        for (FailureCallback failCallback : disconnectListeners) {
            failCallback.onFailure(throwable);
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
