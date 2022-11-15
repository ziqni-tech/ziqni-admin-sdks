/*
 * Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */
package com.ziqni.admin.sdk.configuration;

import com.ziqni.admin.sdk.util.ConfigurationLoader;
import org.keycloak.admin.client.Keycloak;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

public class AdminApiClientConfiguration {

    private final Logger logger = LoggerFactory.getLogger(AdminApiClientConfiguration.class);

    private String adminClientServerBasePath;
    private String adminClientServerHost;
    private Integer adminClientServerPort;
    private String adminClientServerScheme;

    private String adminClientIdentityEndpoint;
    private String adminClientIdentityRealm;
    private String adminClientIdentityUser;
    private String adminClientIdentityPass;
    private String adminClientIdentityProjectUrl;
    private boolean isWebsocket;

    private Keycloak identityClient;

    public AdminApiClientConfiguration() {
    }

    public String getAdminClientServerBasePath() {
        return adminClientServerBasePath;
    }

    public String getAdminClientServerHost() {
        return adminClientServerHost;
    }

    public Integer getAdminClientServerPort() {
        return adminClientServerPort;
    }

    public String getAdminClientServerScheme() {
        return adminClientServerScheme;
    }

    public String getAdminClientIdentityProjectUrl() {
        return adminClientIdentityProjectUrl;
    }

    public String getAdminClientIdentityUser() {
        return adminClientIdentityUser;
    }

    public boolean isWebsocket() {
        return isWebsocket;
    }

    public Keycloak getIdentityClient() {
        if(identityClient == null)
            initIdentityClient();
        return identityClient;
    }

    public String getAccessTokenString() throws Exception {
        return IdentityAuthorization.getAccessTokenString(getIdentityClient());
    }

    public Optional<String> getByName(String parameterName) {
        return ConfigurationLoader.getParameter(parameterName);
    }

    public AdminApiClientConfiguration setAdminClientServerBasePath(String adminClientServerBasePath) {
        this.adminClientServerBasePath = adminClientServerBasePath;
        return this;
    }

    public AdminApiClientConfiguration setAdminClientServerHost(String adminClientServerHost) {
        this.adminClientServerHost = adminClientServerHost;
        return this;
    }

    public AdminApiClientConfiguration setAdminClientServerPort(Integer adminClientServerPort) {
        this.adminClientServerPort = adminClientServerPort;
        return this;
    }

    public AdminApiClientConfiguration setAdminClientServerScheme(String adminClientServerScheme) {
        this.adminClientServerScheme = adminClientServerScheme;
        return this;
    }

    public AdminApiClientConfiguration setAdminClientIdentityEndpoint(String adminClientIdentityEndpoint) {
        this.adminClientIdentityEndpoint = adminClientIdentityEndpoint;
        return this;
    }

    public AdminApiClientConfiguration setAdminClientIdentityRealm(String adminClientIdentityRealm) {
        this.adminClientIdentityRealm = adminClientIdentityRealm;
        return this;
    }

    public AdminApiClientConfiguration setAdminClientIdentityUser(String adminClientIdentityUser) {
        this.adminClientIdentityUser = adminClientIdentityUser;
        return this;
    }

    public AdminApiClientConfiguration setAdminClientIdentityPass(String adminClientIdentityPass) {
        this.adminClientIdentityPass = adminClientIdentityPass;
        return this;
    }

    public AdminApiClientConfiguration setAdminClientIdentityProjectUrl(String adminClientIdentityProjectUrl) {
        this.adminClientIdentityProjectUrl = adminClientIdentityProjectUrl;
        return this;
    }

    public AdminApiClientConfiguration setWebsocket(boolean websocket) {
        isWebsocket = websocket;
        return this;
    }

    public void initIdentityClient() {
        logger.debug("Identity client initialised with information realm: [{}] project url [{}] and username [{}]", adminClientIdentityRealm, adminClientIdentityProjectUrl, adminClientIdentityUser);

        identityClient = Keycloak.getInstance(adminClientIdentityEndpoint,
                adminClientIdentityRealm,
                adminClientIdentityUser,
                adminClientIdentityPass,
                adminClientIdentityProjectUrl);
    }
}
