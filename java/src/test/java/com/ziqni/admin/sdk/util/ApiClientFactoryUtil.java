package com.ziqni.admin.sdk.util;

import com.ziqni.admin.sdk.ZiqniAdminApiFactory;
import com.ziqni.admin.sdk.configuration.AdminApiClientConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class ApiClientFactoryUtil {

    private static final Logger logger = LoggerFactory.getLogger(ApiClientFactoryUtil.class);

    public static void initApiClientFactory() throws Exception {
        ZiqniAdminApiFactory.initialise();

        if(AdminApiClientConfig.isWebsocket()) {
            while (ZiqniAdminApiFactory.getStreamingClient() == null) {
                Thread.sleep(500);
                logger.info("Waiting for the streaming client to initialize");
            }

            final var started = ZiqniAdminApiFactory.getStreamingClient().start();
            while (!ZiqniAdminApiFactory.getStreamingClient().isConnected()) {
                Thread.sleep(500);
                logger.info("Waiting for the streaming client start");
            }
        }
    }

}
