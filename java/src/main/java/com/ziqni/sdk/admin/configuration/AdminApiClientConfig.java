/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.sdk.admin.configuration;

import com.ziqni.sdk.admin.util.ConfigurationLoader;
import org.keycloak.admin.client.Keycloak;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

public abstract class AdminApiClientConfig {

    private static final Logger logger = LoggerFactory.getLogger(AdminApiClientConfig.class);

    private static Boolean loaded = false;

    private static String adminClientServerBasePath;
    private static String adminClientServerHost;
    private static Integer adminClientServerPort;
    private static String adminClientServerScheme;

    private static String adminClientIdentityEndpoint;
    private static String adminClientIdentityRealm;
    private static String adminClientIdentityUser;
    private static String adminClientIdentityPass;
    private static String adminClientIdentityProjectUrl;
    private static boolean isWebsocket;

    private static Keycloak identityClient;

    public static void load() {
        if (loaded) return;

        adminClientServerBasePath = ConfigurationLoader.getParameter("admin.client.base.path").orElse("");
        adminClientServerHost = ConfigurationLoader.getParameter("admin.client.server.host").orElse("api.ziqni.com");
        adminClientServerPort = Integer.valueOf(ConfigurationLoader.getParameter("admin.client.server.port").orElse("443"));
        adminClientServerScheme = ConfigurationLoader.getParameter("admin.client.server.scheme").orElse("wss");

        var isValidScheme = adminClientServerScheme.equals("http") || adminClientServerScheme.equals("https")
                || adminClientServerScheme.equals("ws") || adminClientServerScheme.equals("wss");

        if(!isValidScheme)
            throw new RuntimeException("Invalid scheme " + adminClientServerScheme + ". Valid schemes are http, https, ws, wss");

        isWebsocket = adminClientServerScheme.equals("ws") || adminClientServerScheme.equals("wss");

        adminClientIdentityEndpoint = ConfigurationLoader.getParameter("admin.client.auth.server.url").orElse("https://identity.ziqni.com");
        adminClientIdentityRealm = ConfigurationLoader.getParameter("admin.client.auth.realm").orElse("ziqni");
        adminClientIdentityUser = ConfigurationLoader.getParameter("admin.client.auth.username").orElse("user-not-set");
        adminClientIdentityPass = ConfigurationLoader.getParameter("admin.client.auth.password").orElse("password-not-set");
        adminClientIdentityProjectUrl = ConfigurationLoader.getParameter("admin.client.auth.resource").orElse("resource-not-set");

        initIdentityClient();

        loaded = true;
    }

    public static String getAdminClientServerBasePath() {
        load();
        return adminClientServerBasePath;
    }

    public static String getAdminClientServerHost() {
        load();
        return adminClientServerHost;
    }

    public static Integer getAdminClientServerPort() {
        load();
        return adminClientServerPort;
    }

    public static String getAdminClientServerScheme() {
        load();
        return adminClientServerScheme;
    }

    public static String getAdminClientIdentityProjectUrl() {
        load();
        return adminClientIdentityProjectUrl;
    }

    public static String getAdminClientIdentityUser() {
        load();
        return adminClientIdentityUser;
    }

    public static boolean isWebsocket() {
        load();
        return isWebsocket;
    }

    public static Keycloak getIdentityClient() {
        load();
        return identityClient;
    }

    public static String getAccessTokenString() {
        try {
            return IdentityAuthorization.getAccessTokenString();
        } catch (Exception e) {
            logger.error("Access token error.", e);
            return null;
        }
    }

    public static Optional<String> getByName(String parameterName) {
        load();
        return ConfigurationLoader.getParameter(parameterName);
    }

    private static void initIdentityClient() {
        logger.debug("Identity client initialised with information realm: [{}] project url [{}] and username [{}]", adminClientIdentityRealm, adminClientIdentityProjectUrl, adminClientIdentityUser);

        identityClient = Keycloak.getInstance(adminClientIdentityEndpoint,
                adminClientIdentityRealm,
                adminClientIdentityUser,
                adminClientIdentityPass,
                adminClientIdentityProjectUrl);
    }
}
