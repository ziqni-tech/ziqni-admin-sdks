package com.ziqni.member.sdk.api;

import com.ziqni.admin.sdk.streaming.handlers.EventHandler;
import com.ziqni.member.sdk.model.MemberTokenRequest;
import com.ziqni.member.sdk.model.MemberTokenResponse;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Objects;
import java.util.concurrent.CompletableFuture;

/**
 * The Member Token Api is used to generate tokens for member to use with the member API
 * The service included in the admin API is being deprecated as it makes more sense to keep
 * member based services on the same compute clusters as the member data.
 * <a href="https://documentation.ziqni.com/member-api/#tag/member-token">Member API</a> *
 */
public abstract class MemberTokenApi {

    /**
     * Get Member Token
     * @param requestBody The request body
     * @return The response body
     * @throws Exception If the request fails
     */
    public static CompletableFuture<MemberTokenResponse> getMemberToken(MemberTokenRequest requestBody) throws Exception {
        return getMemberToken(requestBody, "https://member-api.ziqni.com/member-token");
    }

    /**
     * Get Member Token
     * @param requestBody The request body
     * @return The response body
     * @throws Exception If the request fails
     */
    public static CompletableFuture<MemberTokenResponse> getMemberToken(MemberTokenRequest requestBody, String uri) throws Exception {

        assert Objects.nonNull(requestBody) : "The requestBody parameter is required";
        assert !requestBody.getApiKey().isEmpty() : "The requestBody apiKey parameter";

        // Serialize the request body to JSON
        String requestJson = EventHandler.ziqniClientObjectMapper.serializingObjectMapper().writeValueAsString(requestBody);

        // Create HTTP client
        HttpClient client = HttpClient.newHttpClient();

        // Build the HTTP request
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(uri)) // Replace with the actual URL
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(requestJson))
                .build();

        // Send the HTTP request
        return client
                .sendAsync(request, HttpResponse.BodyHandlers.ofString())
                .thenApply(response -> {
                    try {
                        // Deserialize the response JSON
                        return EventHandler.ziqniClientObjectMapper.serializingObjectMapper().readValue(response.body(), MemberTokenResponse.class);
                    } catch (Exception e) {
                        throw new RuntimeException("Failed to deserialize response JSON", e);
                    }
                });
    }
}
