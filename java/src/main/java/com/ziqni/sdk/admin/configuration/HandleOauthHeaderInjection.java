package com.ziqni.sdk.admin.configuration;

import java.net.http.HttpRequest;

public abstract class HandleOauthHeaderInjection {

    public static void injectOauthToken(HttpRequest.Builder builder, String[] roles){
        if(roles.length > 0){
            final var token = AdminApiClientConfig.getAccessTokenString();
            if(token != null)
                builder.header("Authorization", "Bearer " + token);
        }
    }
}
