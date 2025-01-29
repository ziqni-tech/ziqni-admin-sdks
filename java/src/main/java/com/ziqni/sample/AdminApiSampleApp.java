package com.ziqni.sample;

import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfigBuilder;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;
import com.ziqni.admin.sdk.model.*;
import com.ziqni.admin.sdk.streaming.stomp.StompHeaders;
import com.ziqni.admin.sdk.streaming.stomp.StompOverWebSocketLifeCycle;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

/**
 * This class is a sample application that demonstrates how to use the Ziqni Admin API.
 */
public class AdminApiSampleApp {

    private static final Logger logger = LoggerFactory.getLogger(AdminApiSampleApp.class);

    private final static ZiqniAdminApiFactory factory;
    private final static AdminApiClientConfiguration config;

    static {
        config = AdminApiClientConfigBuilder.build();
        config.setApiKey(true);
        config.setAdminClientIdentityApiKey("your-api-key");
        factory = new ZiqniAdminApiFactory(config);
    }

    public static void main(String[] args) throws Exception {
        logger.info("+++++++++++++++++++++++++++++++++");
        logger.info("  ZIQNI Admin API Sample App");
        logger.info("+++++++++++++++++++++++++++++++++");

        new AdminApiSampleApp();

        logger.info("Press any key to exit");
        final var in = System.in.read();
        logger.info("Shutting down {} ", in);
    }

    public AdminApiSampleApp() throws Exception {

        // Initialise the Ziqni Admin API
        factory.initialise(() -> {
            try {
                return factory.getStreamingClient().start();
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        })
        .exceptionally(throwable -> {
            logger.error("Failed to connect", throwable);
            return null;
        })
        .thenAccept(started -> {
            logger.error("Connection is {}", started == null || !started ? "NOT_STARTED" : "RUNNING");
        });

        while (factory.getStreamingClient().isConnected()) {
            Thread.sleep(500);
            logger.info("+++ Waiting for the streaming client to start");
        }

        // Register event handlers
        factory.getStreamingClient().getEventBus().onWSClientConnected(this::onWSClientConnected);
        factory.getStreamingClient().getEventBus().onWSClientConnecting(this::onWSClientConnecting);
        factory.getStreamingClient().getEventBus().onWSClientDisconnected(this::onWSClientDisconnected);
        factory.getStreamingClient().getEventBus().onWSClientSevereFailure(this::onWSClientSevereFailure);

        // Register entity change handlers
        factory.getEntityChangesApi().entityChangedHandler(this::onEntityChanged, this::onEntityChangedException);
        factory.getEntityChangesApi().entityStateChangedHandler(this::onEntityStateChanged, this::onEntityStateChangedException);
        subscribeToEntityChanges();
    }

    private void onWSClientConnected(StompOverWebSocketLifeCycle.WSClientConnected wsClientConnected) {
        logger.info("Connected to the Ziqni Admin API");
    }

    private void onWSClientSevereFailure(StompOverWebSocketLifeCycle.WSClientSevereFailure wsClientSevereFailure) {
        logger.error("Severe failure in the Ziqni Admin API");
    }

    private void onWSClientDisconnected(StompOverWebSocketLifeCycle.WSClientDisconnected wsClientDisconnected) {
        logger.info("Disconnected from the Ziqni Admin API");
    }

    private void onWSClientConnecting(StompOverWebSocketLifeCycle.WSClientConnecting wsClientConnecting) {
        logger.info("Connecting to the Ziqni Admin API");
    }

    /**
     * Subscribe to entity changes
     */
    private void subscribeToEntityChanges(){

        // Entities to monitor for changes
        final var entitiesToMonitor = List.of(Member.class, Reward.class, Achievement.class, Competition.class, Contest.class, Award.class, Product.class);

        // Subscribe to entity changes
        for (Class<?> clazz : entitiesToMonitor) {
            factory.getEntityChangesApi().manageEntityChangeSubscription(new EntityChangeSubscriptionRequest()
                    .entityType(clazz.getSimpleName())
                    .action(EntityChangeSubscriptionRequest.ActionEnum.SUBSCRIBE)
            );
        }
    }

    /**
     * Handle entity changed events
     * @param stompHeaders - the STOMP headers
     * @param entityChanged - the entity changed event
     */
    private void onEntityChanged(StompHeaders stompHeaders, EntityChanged entityChanged) {
        logger.info("Entity changed: {}", entityChanged);
    }

    /**
     * Handle entity changed exceptions
     * @param stompHeaders - the STOMP headers
     * @param apiException - the API exception
     */
    private void onEntityChangedException(StompHeaders stompHeaders, ApiException apiException) {
        logger.error("", apiException.getCause());
    }

    /**
     * Handle entity state changed events
     * @param stompHeaders - the STOMP headers
     * @param entityStateChanged - the entity state changed event
     */
    private void onEntityStateChanged(StompHeaders stompHeaders, EntityStateChanged entityStateChanged) {
        logger.info("Entity state changed: {}", entityStateChanged);
    }

    /**
     * Handle entity state changed exceptions
     * @param stompHeaders - the STOMP headers
     * @param apiException - the API exception
     */
    private void onEntityStateChangedException(StompHeaders stompHeaders, ApiException apiException) {
        logger.error("onEntityStateChangedException", apiException.getCause());
    }
}
