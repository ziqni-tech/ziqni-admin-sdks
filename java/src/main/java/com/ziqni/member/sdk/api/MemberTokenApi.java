package com.ziqni.member.sdk.api;

import com.ziqni.admin.sdk.streaming.handlers.EventHandler;
import com.ziqni.member.sdk.model.MemberTokenRequest;
import com.ziqni.member.sdk.model.MemberTokenResponse;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

/**
 * The Member Token Api is used to generate tokens for member to use with the member API
 * The service included in the admin API is being deprecated as it makes more sense to keep
 * member based services on the same compute clusters as the member data.
 */
public abstract class MemberTokenApi {

    public static MemberTokenResponse getMemberToken(MemberTokenRequest requestBody) throws Exception {
        // Serialize the request body to JSON

        String requestJson = EventHandler.ziqniClientObjectMapper.serializingObjectMapper().writeValueAsString(requestBody);

        // Create HTTP client
        HttpClient client = HttpClient.newHttpClient();

        // Build the HTTP request
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://member-api.ziqni.com/member-token")) // Replace with the actual URL
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(requestJson))
                .build();

        // Send the HTTP request
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        // Deserialize the response JSON
        return EventHandler.ziqniClientObjectMapper.serializingObjectMapper().readValue(response.body(), MemberTokenResponse.class);
    }
}
