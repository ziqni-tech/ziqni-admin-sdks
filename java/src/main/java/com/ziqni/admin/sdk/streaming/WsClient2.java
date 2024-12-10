package com.ziqni.admin.sdk.streaming;
import com.ziqni.admin.sdk.streaming.client.NativeWebSocketClient;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.simp.stomp.StompSessionHandler;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.web.socket.WebSocketHttpHeaders;
import org.springframework.web.socket.client.standard.StandardWebSocketClient;
import org.springframework.web.socket.messaging.WebSocketStompClient;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.atomic.AtomicBoolean;

public class WsClient2 {

    private static final Logger logger = LoggerFactory.getLogger(WsClient2.class);

    private final WebSocketStompClient stompClient;
    private final StompSessionHandler stompSessionHandler;
    private final String wsUri;
    private StompSession stompSession;

    private final AtomicBoolean isConnected = new AtomicBoolean(false);

    public WsClient2(String wsUri, StompSessionHandler stompSessionHandler) {
        this.wsUri = wsUri;
        this.stompSessionHandler = stompSessionHandler;

        // Initialize WebSocketStompClient
        this.stompClient = new WebSocketStompClient(new NativeWebSocketClient());
        this.stompClient.setMessageConverter(new MappingJackson2MessageConverter());

        // Optional: Add heartbeat support
        this.stompClient.setDefaultHeartbeat(new long[]{10000, 10000});

        // Optional: Use a custom task scheduler
        TaskScheduler taskScheduler = new ThreadPoolTaskScheduler();
        ((ThreadPoolTaskScheduler) taskScheduler).initialize();
        this.stompClient.setTaskScheduler(taskScheduler);
    }

    public CompletableFuture<StompSession> connect() {
        logger.info("Connecting to STOMP endpoint at {}", wsUri);


        StompHeaders stompHeaders = new StompHeaders();
        stompHeaders.setAcceptVersion("1.2"); // Use version supported by the server
        stompHeaders.setLogin("x-api-key");    // Set the username
        stompHeaders.setPasscode("eyJhbGciOiJIUzUxMiJ9.eyJhcGlfa2V5X2lkIjoidFhiRXFwTUJqU3laUktXbmtUcXIiLCJtZW1iZXJfcmVmZXJlbmNlX2lkIjoiWEFQSSIsImFjY291bnRfaWQiOiJGN204ZEh3QnN3LU9IM01Fb1cyMyIsInNwYWNlX25hbWUiOiJmaXJzdC1zcGFjZSIsIm5hbWUiOiJYQVBJIiwibWVtYmVyX3R5cGUiOiJYQVBJIiwibWVtYmVyX2lkIjoiZDEyZDJjYjUtZGM4Ni00MzEwLTk1NzctOGNhYjQ2N2ZkNmYyIiwicmVzb3VyY2VfYWNjZXNzIjp7InppcW5pLWFhcGkiOnsicm9sZXMiOlsiU3VwZXJBZG1pbiJdfX0sInR5cCI6IngtYXBpLWtleSIsInN1YiI6ImQxMmQyY2I1LWRjODYtNDMxMC05NTc3LThjYWI0NjdmZDZmMiIsImp0aSI6IjhjYTcwZGM1LTg5YjctNDQ0Zi1iMTU3LTVmZjRmYTJlNzcxZSIsImlhdCI6MTczMzczNjgyOSwiZXhwIjoxNzY1MjcyODI5LCJhenAiOiJmaXJzdC1zcGFjZS56aXFuaS5hcHAifQ.qbXH2x1hOUmcmwLttca7DPsnMq-JJ9kdTvEn4ymzaMZ_VLYbfW1qT7HsXEv6A2KJFfR5fDYbnGAHNRIHuQ8DeA"); // Set the password


        return stompClient.connectAsync(wsUri, new WebSocketHttpHeaders(), stompHeaders, stompSessionHandler)
                .thenApply(session -> {
                    this.stompSession = session;
                    isConnected.set(true);
                    logger.info("Connected to STOMP endpoint.");
                    return session;
                })
                .exceptionally(ex -> {
                    logger.error("Failed to connect to STOMP endpoint.", ex);
                    isConnected.set(false);
                    return null;
                });
    }

    public void disconnect() {
        if (stompSession != null && stompSession.isConnected()) {
            try {
                stompSession.disconnect();
                isConnected.set(false);
                logger.info("Disconnected from STOMP endpoint.");
            } catch (Exception e) {
                logger.error("Error during STOMP disconnection.", e);
            }
        }
    }

    public boolean isConnected() {
        return isConnected.get();
    }

    public void sendMessage(String destination, Object payload) {
        if (stompSession == null || !stompSession.isConnected()) {
            throw new IllegalStateException("STOMP session is not connected.");
        }

        stompSession.send(destination, payload);
        logger.info("Message sent to destination '{}': {}", destination, payload);
    }

    public void subscribe(String destination, StompSessionHandler handler) {
        if (stompSession == null || !stompSession.isConnected()) {
            throw new IllegalStateException("STOMP session is not connected.");
        }

        stompSession.subscribe(destination, handler);
        logger.info("Subscribed to destination '{}'.", destination);
    }
}
