package com.ziqni.sdk.admin.util;

import com.ziqni.sdk.admin.ZiqniAdminApiFactory;
import com.ziqni.sdk.admin.configuration.AdminApiClientConfig;
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
