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
import java.util.concurrent.CompletableFuture;

/**
 * This class is a sample application that demonstrates how to use the Ziqni Admin API.
 */
public class AdminApiSampleApp {

    private static final Logger logger = LoggerFactory.getLogger(AdminApiSampleApp.class);

    private final static ZiqniAdminApiFactory factory;
    private final static AdminApiClientConfiguration config;

    static {
        config = AdminApiClientConfigBuilder.build("application.properties");
        logger.info("+++++++++++++++++++++++++++++++++");
        logger.info("Configuration: {}", config);
        logger.info("+++++++++++++++++++++++++++++++++");
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

        factory.getStreamingClient().stop().handle((aVoid, throwable) -> {
            if (throwable != null) {
                logger.error("Failed to stop the streaming client", throwable);
            } else {
                logger.info("Stopped the streaming client");
            }
            return null;
        }).join();

        System.exit(0);
    }

    public AdminApiSampleApp() throws Exception {


        // Start the streaming client
        factory.initialise();
        factory.getStreamingClient().start();

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
    }

    private void onWSClientConnected(StompOverWebSocketLifeCycle.WSClientConnected wsClientConnected) {
        logger.info("Connected to the Ziqni Admin API");
        CompletableFuture.runAsync(() -> {
            try {

                Thread.sleep(5_000);

                // Get members
                final var member = factory.getSpacesApi().getSpacesByName("21casino-staging",1,0)
                        .thenCompose(memberResponse -> {
                            logger.info("Member: {}", memberResponse);

                            return factory.getGoalsApi().getGoalMetrics(new GoalMetricsRequest()
                                    .addMemberIdsItem("tMjT0JEBqKAQUAl86l76")
                                    .addEntityIdsItem("ydKoPZUB_ZWnoZc9JTxp"));
                        }).handle( (memberResponse, throwable ) -> {
                            if(throwable != null) {
                                logger.error("Failed to get members", throwable);
                            }
                            logger.info("Members: {}", memberResponse);
                            return null;
                        });


                // Subscribe to entity changes
                subscribeToEntityChanges(Transformer.class);
                subscribeToEntityChanges(Connection.class);
                subscribeToEntityChanges(Member.class);
                subscribeToEntityChanges(Reward.class);
                subscribeToEntityChanges(Achievement.class);
                subscribeToEntityChanges(Competition.class);
                subscribeToEntityChanges(Contest.class);
                subscribeToEntityChanges(Award.class);
                subscribeToEntityChanges(Product.class);

            } catch (Exception e) {
                logger.error("Failed to get members", e);
                throw new RuntimeException(e);
            }

        });
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
    private void subscribeToEntityChanges(Class<?> clazz) {
        factory.getEntityChangesApi().manageEntityChangeSubscription(new EntityChangeSubscriptionRequest()
                .entityType(clazz.getSimpleName())
                .action(EntityChangeSubscriptionRequest.ActionEnum.SUBSCRIBE)
                .constraints(List.of())
        ).handle((aVoid, throwable) -> {
            if (throwable != null) {
                logger.error("Failed to subscribe to {}", clazz.getSimpleName(), throwable);
            } else {
                logger.info("Subscribed to {}", clazz.getSimpleName());
            }
            return null;
        });
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
