/*
 * Copyright (c) 2024. ZIQNI LTD registered in England and Wales, company registration number-09693684
 */

package com.ziqni.admin.sdk.configuration;

import java.net.http.HttpRequest;

public abstract class HandleOauthHeaderInjection {

    public static void injectOauthToken(AdminApiClientConfiguration configuration, HttpRequest.Builder builder, String[] roles) throws Exception {
        if(roles.length > 0){
            final var token = configuration.getAccessTokenString();
            if(token != null)
                builder.header("Authorization", "Bearer " + token);
        }
    }
}
