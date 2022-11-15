package com.ziqni.admin.sdk.util;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfiguration;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ApiClientFactoryUtil {

    private static final Logger logger = LoggerFactory.getLogger(ApiClientFactoryUtil.class);

    public static ZiqniAdminApiFactory factory;

    public static void initApiClientFactory(AdminApiClientConfiguration configuration) throws Exception {
        if(ApiClientFactoryUtil.factory != null)
            return;

        ApiClientFactoryUtil.factory = new ZiqniAdminApiFactory(configuration);
        ApiClientFactoryUtil.factory.initialise();

        if(configuration.isWebsocket()) {
            while (ApiClientFactoryUtil.factory.getStreamingClient() == null) {
                Thread.sleep(500);
                logger.info("Waiting for the streaming client to initialize");
            }

            final var started = ApiClientFactoryUtil.factory.getStreamingClient().start();
            while (!ApiClientFactoryUtil.factory.getStreamingClient().isConnected()) {
                Thread.sleep(500);
                logger.info("Waiting for the streaming client start");
            }
        }
    }

}
