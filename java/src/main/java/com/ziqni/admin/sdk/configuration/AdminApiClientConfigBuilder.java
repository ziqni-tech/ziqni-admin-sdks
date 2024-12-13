/*
 * Copyright (c) 2024. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */

package com.ziqni.admin.sdk.configuration;

public abstract class AdminApiClientConfigBuilder {

    public static AdminApiClientConfiguration build() {
        final var config = new AdminApiClientConfiguration();

        config.setAdminClientServerBasePath( ConfigurationLoader.getParameter("admin.client.base.path").orElse("") );
        config.setAdminClientServerHost( ConfigurationLoader.getParameter("admin.client.server.host").orElse("api.ziqni.com") );
        config.setAdminClientServerPort( Integer.valueOf(ConfigurationLoader.getParameter("admin.client.server.port").orElse("443")) );
        config.setAdminClientServerScheme( ConfigurationLoader.getParameter("admin.client.server.scheme").orElse("wss") );

        var isValidScheme = config.getAdminClientServerScheme().equals("http") || config.getAdminClientServerScheme().equals("https")
                || config.getAdminClientServerScheme().equals("ws") || config.getAdminClientServerScheme().equals("wss");

        if(!isValidScheme)
            throw new RuntimeException("Invalid scheme " + config.getAdminClientServerScheme() + ". Valid schemes are http, https, ws, wss");

        config.setWebsocket( config.getAdminClientServerScheme().equals("ws") || config.getAdminClientServerScheme().equals("wss") );

        config.setAdminClientIdentityEndpoint( ConfigurationLoader.getParameter("admin.client.auth.server.url").orElse("https://identity.ziqni.com") );
        config.setAdminClientIdentityRealm( ConfigurationLoader.getParameter("admin.client.auth.realm").orElse("ziqni") );
        config.setAdminClientIdentityUser( ConfigurationLoader.getParameter("admin.client.auth.username").orElse("user-not-set") );
        config.setAdminClientIdentityPass( ConfigurationLoader.getParameter("admin.client.auth.password").orElse("password-not-set") );
        config.setAdminClientIdentityProjectUrl( ConfigurationLoader.getParameter("admin.client.auth.resource").orElse("resource-not-set") );

        final var apiKey = ConfigurationLoader.getParameter("admin.client.auth.api.key");
        config.setAdminClientIdentityApiKey(apiKey.orElse("resource-not-set") );
        config.setApiKey( apiKey.isPresent() );

        if(!config.isApiKey())
            config.initIdentityClient();

        return config;
    }
}
