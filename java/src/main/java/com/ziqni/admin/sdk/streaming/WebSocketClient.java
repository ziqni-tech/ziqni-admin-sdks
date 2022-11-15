/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.streaming;

import com.google.common.collect.Iterables;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;
import com.ziqni.admin.sdk.util.Common;
import com.ziqni.admin.sdk.util.CoreClientObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandlerAdapter;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.util.concurrent.FailureCallback;
import org.springframework.util.concurrent.ListenableFuture;
import org.springframework.util.concurrent.SuccessCallback;
import org.springframework.web.socket.WebSocketHttpHeaders;
import org.springframework.web.socket.client.jetty.JettyWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;
import org.springframework.web.socket.sockjs.client.SockJsClient;
import org.springframework.web.socket.sockjs.client.Transport;
import org.springframework.web.socket.sockjs.client.WebSocketTransport;

import java.util.*;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Consumer;
import java.util.function.Supplier;

public class WebSocketClient {

    private static final Logger logger = LoggerFactory.getLogger(WebSocketClient.class);

    private static final long DEFAULT_RECONNECT_DELAY = 1000;
    private static final int DEFAULT_RECONNECT_ATTEMPTS = 5;

    private final static ExecutorService websocketSendExecutor = Executors.newFixedThreadPool(16);

    private final static ScheduledExecutorService scheduledExecutor = Executors.newSingleThreadScheduledExecutor();

    private final static ConcurrentHashMap<String, ScheduledFuture<?>> scheduledTasks = new ConcurrentHashMap<>();

    private final Timer reconnectTimer;

    private final long reconnectDelay;

    private final int reconnectAttempts;

    private final TaskScheduler taskScheduler;

    private final String wsUri;

    private final StompHeaders stompHeaders;

    private WebSocketStompClient stompClient;

    private StompSession stompSession;

    private final Map<String, List<EventHandler<?>>> topicHandlers;

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


    public WebSocketClient(AdminApiClientConfiguration configuration, String wsUri, Consumer<Integer> onStateChange) throws Exception {
        this(configuration, wsUri, DEFAULT_RECONNECT_DELAY, DEFAULT_RECONNECT_ATTEMPTS, makeAuthHeader(configuration), onStateChange);
    }

    protected WebSocketClient(AdminApiClientConfiguration configuration, String wsUri, StompHeaders stompHeaders, Consumer<Integer> onStateChange) {
        this(configuration, wsUri, DEFAULT_RECONNECT_DELAY, DEFAULT_RECONNECT_ATTEMPTS, stompHeaders, onStateChange);
    }

    protected WebSocketClient(AdminApiClientConfiguration configuration, String wsUri, long reconnectDelay, int reconnectAttempts, StompHeaders stompHeaders, Consumer<Integer> onStateChange) {
        this.configuration = configuration;
        this.wsUri = wsUri;
        this.reconnectAttempts = reconnectAttempts;
        this.taskScheduler = new ThreadPoolTaskScheduler();
        this.reconnectTimer = new Timer("ReconnectTimer");
        this.reconnectDelay = reconnectDelay;
        this.topicHandlers = new LinkedHashMap<>();
        this.connectListeners = new ArrayList<>();
        this.disconnectListeners = new ArrayList<>();
        this.stompHeaders = stompHeaders;
        this.onStateChange = onStateChange;
    }

    private static StompHeaders makeAuthHeader(AdminApiClientConfiguration configuration) throws Exception {
        StompHeaders stompHeaders = new StompHeaders();
        updateOauthToken(configuration,stompHeaders);
        return stompHeaders;
    }

    private static void updateOauthToken(AdminApiClientConfiguration configuration, StompHeaders stompHeaders) throws Exception {
        String oauthToken = configuration.getAccessTokenString();
        if (stompHeaders.containsKey("Authorization"))
            stompHeaders.remove("Authorization");

        stompHeaders.add("Authorization", "Bearer " + oauthToken);
    }

    public <T> void send(StompHeaders headers, T payload){
        send(headers,payload, (r)->{});
    }

    public <T> void send(StompHeaders headers, T payload, Consumer<StompSession.Receiptable> onSent){
        try {
            if(isConnected())
                websocketSendExecutor.submit(new MessageToSend<>(headers, payload, stompSession, onSent)); // todo - change this add the message to local queue and executor should poll for messages from the queue and execute
            else
                logger.warn("Websocket client not connected. Connection state is [{}]. Do something useful with the incoming messages.", connectionStateAtomic.get()); // todo - add it to the local queue, publish them once connection is re-established
        } catch (Throwable t) {
            logger.error("Exception occurred while attempting to send message.", t);
            throw t;
        }
    }

    public void subscribe(EventHandler<?> handler) {
        if (topicHandlers.get(handler.getTopic()) == null) {
            topicHandlers.put(handler.getTopic(), Collections.synchronizedList(new ArrayList<>()));
        }
        topicHandlers.get(handler.getTopic()).add(handler);
        if (stompSession != null && stompSession.isConnected()) {
            logger.info("Subscribing to " + handler.getTopic());
            handler.setStompSubscription(stompSession.subscribe(handler.getTopic(), handler));
        }
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

    public CompletableFuture<Boolean> reconnect() {
        return reconnect(false);
    }

    public CompletableFuture<Boolean> reconnect(boolean force) {
        return reconnect(0, reconnectAttempts, reconnectDelay, force);
    }

    public CompletableFuture<Boolean> reconnect(final int retryCount, final int maxRetryCount, final long reconnectDelay, final boolean force) {
        logger.warn("Connection lost, attempting to reconnect to the server.");
        final var result = new CompletableFuture<Boolean>();
        reconnect(result, retryCount, maxRetryCount, reconnectDelay, force);
        return result;
    }

    public CompletableFuture<Boolean> reconnect(final CompletableFuture<Boolean> resultCompletableFuture, final int retryCount, final int maxRetryCount, final long reconnectDelay, final boolean force) {
        final String jobId = Common.getNextId();
        reconnect(resultCompletableFuture, jobId, retryCount, maxRetryCount, reconnectDelay, force);
        return resultCompletableFuture;
    }

    private void reconnect(final CompletableFuture<Boolean> resultCompletableFuture, final String jobId, final int retryCount, final int maxRetryCount, final long reconnectDelay, final boolean force) {
        logger.debug("Attempting to reconnect websocket client to server with details, jobId [{}], retryCount [{}], maxRetryCount [{}], reconnectDelay [{}], force [{}]", jobId, retryCount, maxRetryCount, reconnectDelay, force);
        if (this.isConnected() && !force) {
            cleanUpScheduledTasks(jobId);
            resultCompletableFuture.complete(this.isConnected());
        } else {
            setConnectionState(Disconnecting);
            disconnect(jobId);
            try {
                doScheduleManagement(() -> {
                    try {
                        return reconnectFunc(retryCount, maxRetryCount, jobId);
                    } catch (Exception e) {
                        throw new RuntimeException(e);
                    }
                },jobId , reconnectDelay, TimeUnit.MILLISECONDS)
                        .getCompletableFuture()
                        .thenApply((stompSession) -> {
                                    resultCompletableFuture.complete(stompSession.isConnected());
                                    cleanUpScheduledTasks(jobId);
                                    return stompSession.isConnected();
                                }
                        ).exceptionally((exception) -> {
                            if (retryCount < maxRetryCount) {
                                reconnect(resultCompletableFuture, retryCount + 1, maxRetryCount, reconnectDelay, false); // increment retry count
                            } else {
                                logger.error("Reconnect failure. Retry attempts exhausted for job id [{}] retry count [{}] of max attempts [{}]", jobId, retryCount, maxRetryCount, exception);
                                setConnectionState(SevereFailure);
                                resultCompletableFuture.complete(false);
                            }
                            return false;
                        })
                        .get(reconnectDelay, TimeUnit.MILLISECONDS);
            } catch (InterruptedException | ExecutionException | TimeoutException e) {
                logger.debug("Exception waiting reconnect for job to complete. [{}]", e.getMessage());
            }
        }
    }

    public StompSession reconnectFunc(final int retryCount, final int maxAttempts, final String jobId) throws Exception {
        if(isConnected()) {
            cleanUpScheduledTasks(jobId);
            return stompSession;
        } else if(retryCount >= maxAttempts && !isConnected()) {
            setConnectionState(SevereFailure);
            var connectErrorMessage = "Reconnect failure. Retry attempts exhausted for jobId [" + jobId + "] and retry attempts [" + retryCount + "], max attempts ["+ maxAttempts + "]";
            var t = new RuntimeException(connectErrorMessage);
            logger.error("connection failure", t);
            throw t;
        } else {
            try {
                createClient();
                var doConnectFuture = doConnect();
                var resToReturn = doConnectFuture.join();
                setIsConnected();
                return resToReturn;
            } catch (Throwable t) {
                logger.error("Exception occurred while attempting establish connection during reconnect operation [{}]", t.getMessage());
                throw t;
            }
        }
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

    public CompletableFuture<Boolean> startClient() {
        return startClient(new CompletableFuture<>());
    }

    public CompletableFuture<Boolean> startClient(CompletableFuture<Boolean> startResult) {
        if(isConnected()) {
            startResult.complete(isConnected());
            return startResult;
        }

        final String jobId = Common.getNextId();

        return doManagement(() -> {
            setConnectionState(Connecting);
            logger.info("Connecting");
            createClient();
            try {
                return doConnect().join().isConnected();
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }, jobId).getCompletableFuture().
                thenApply((connected) -> {
                    setIsConnected();
                    return connected;
                }).exceptionally((exception) -> {
                    setConnectionState(SevereFailure);
                    logger.error("[Start] [doConnect] Exception occurred", exception);
                    return false;
                });
    }

    public void shutdown() {

        if (isNotConnected())
            return;

        setConnectionState(Disconnecting);
        final String jobId = Common.getNextId();
        disconnect(jobId);
        reconnectTimer.cancel();
        // do not accept new work
        // finish what is in pipeline

        scheduledExecutor.shutdown();
        websocketSendExecutor.shutdown();
    }

    private void disconnect(final String jobId) {
        doManagement(() -> disconnectFunc(jobId), jobId );
        stompClient = null;
        stompSession = null;
    }

    private WebSocketStompClient disconnectFunc(String jobId) {
        if (stompClient != null && stompClient.isRunning()) {
            try {
                if(stompClient.isRunning())
                    try {
                        stompClient.stop();
                    } catch (RuntimeException e) {
                        logger.error("Stomp client stop operation exception [{}] produced result [{}] operation for jobId [{}] and connection state is [{}]", e.getMessage(), stompClient.isRunning(), jobId, connectionStateAtomic.get());
                    }
                setConnectionState(NotConnected);
                return stompClient;
            } catch (Throwable t) {
                setConnectionState(SevereFailure);
                logger.error("err stopping client: " + t);
                throw t;
            }
        } else
            return stompClient;
    }


    private <T> ManagementFunction<T> doManagement(Supplier<T> func, final String jobId) {
        var m = new ManagementFunction<T>(func, jobId);

        try {
            scheduledExecutor.submit(m);
        } catch (Exception e) {
            logger.error("Management task failed to submit to the executor for job id [{}] with error [{}]", m.getJobId(), e.getMessage());
        }

        return m;

    }

    private <T> ManagementFunction<T> doScheduleManagement(final Supplier<T> func, final String jobId, final long reconnectDelay, final TimeUnit timeUnit) {
        final var m = new ManagementFunction<T>(func, jobId);
        final ScheduledFuture<?> future = scheduledExecutor.scheduleWithFixedDelay(m, reconnectDelay, reconnectDelay, timeUnit);
        scheduledTasks.putIfAbsent(m.getJobId(), future);
        return m;
    }

    private void createClient() {
        // setup transports & socksjs
        JettyWebSocketClient jettyWebSocketClient = new JettyWebSocketClient();
        List<Transport> transports = new ArrayList<>(2);
        transports.add(new WebSocketTransport(jettyWebSocketClient));
        SockJsClient sockJsClient = new SockJsClient(transports);

        // create stomp client
        stompClient = new WebSocketStompClient(sockJsClient);
        var objectMapper = new MappingJackson2MessageConverter();
        objectMapper.setObjectMapper(new CoreClientObjectMapper().serializingObjectMapper());
        stompClient.setMessageConverter(objectMapper);
        stompClient.setTaskScheduler(taskScheduler);
        stompClient.start();
    }

    private CompletableFuture<StompSession> doConnect() throws Exception {

        updateOauthToken(configuration,stompHeaders);

        ListenableFuture<StompSession> future = stompClient.connect(wsUri, new WebSocketHttpHeaders(), stompHeaders, new StompSessionHandlerAdapter() {
            @Override
            public void handleException(StompSession session, StompCommand command, StompHeaders headers, byte[] payload, Throwable exception) {
                logger.debug("Stomp client connection exception. [{}] ", exception.getMessage());
            }

            @Override
            public void handleTransportError(StompSession session, Throwable exception) {
                logger.debug("Stomp client connection transport error. [{}] ", exception.getMessage());
            }
        });

        future.completable()
                .thenApply(newStompSession -> {
                    stompSession = newStompSession;
                    logger.info("Connection established successfully with the server.");
                    if (topicHandlers != null && !topicHandlers.isEmpty()) {
                        reconnectAllTopics();
                    }
                    notifyConnectListeners(newStompSession);
                    return future;
                }).exceptionally(throwable -> {
                    logger.debug("Stomp client connection call back exception. [{}]", throwable.getMessage());
                    notifyDisconnectListeners(throwable);
                    return future;
                });

        return future.completable();

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

    private void reconnectAllTopics() {
        if (topicHandlers == null || topicHandlers.isEmpty() || stompSession == null) {
            return;
        }

        pruneInactiveTopicHandlers(); // cleanup handlers before resubscribing

        for (String topic : topicHandlers.keySet()) {
            List<EventHandler<?>> handlers = topicHandlers.get(topic);
            for (EventHandler<?> handler : handlers) {
                if (handler.isActive()) {
                    logger.warn("Resubscribing to " + topic);
                    handler.setStompSubscription(stompSession.subscribe(topic, handler));
                }
            }
        }
    }

    private void pruneInactiveTopicHandlers() {
        for (String topic : topicHandlers.keySet()) {
            Iterables.removeIf(topicHandlers.get(topic), input -> !input.isActive());
        }
    }

    private void setIsConnected() {
        if (stompClient != null
                && stompClient.isRunning()
                && stompSession != null
                && stompSession.isConnected()
                && !isConnected()
        )
            setConnectionState(Connected);
    }

    private static class MessageToSend<T> implements Runnable {

        private final StompHeaders headers;
        private final T payload;
        private final StompSession stompSession;
        private final Consumer<StompSession.Receiptable> onSent;

        public MessageToSend(StompHeaders headers, T payload, StompSession stompSession, Consumer<StompSession.Receiptable> onSent) {
            this.headers = headers;
            this.payload = payload;
            this.stompSession = stompSession;
            this.onSent = onSent;
        }

        @Override
        public void run() {
            try {
                logger.debug("send remote request with headers [{}] and payload [{}]", this.headers, this.payload);
                var x = this.stompSession.send(this.headers, this.payload);
                onSent.accept(x);
                logger.debug("executed function for recieptable [{}]", x);
            } catch (IllegalStateException i){
                logger.error("Client is disconnected from the server.", i);
                throw i;
            } catch (Throwable throwable){
                logger.error("Failed to send message over websocket", throwable);
                throw throwable;
            }
        }
    }

    private static class ManagementFunction<T> implements Runnable {

        private final Supplier<T> function;
        private final CompletableFuture<T> completableFuture = new CompletableFuture<>();
        private final String jobId;

        public ManagementFunction(Supplier<T> function, String jobId) {
            assert function != null;
            this.function = function;
            this.jobId = jobId;
        }

        @Override
        public void run() {
            try {
                var funcRes = function.get();
                completableFuture.complete(funcRes);
            } catch (Throwable t) {
                logger.debug("Management function failed with exception [{}]", t.getMessage());
                completableFuture.completeExceptionally(t);
            }
        }

        public String getJobId() {
            return jobId;
        }

        public CompletableFuture<T> getCompletableFuture() {
            return completableFuture;
        }
    }
}
