/*
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

package com.ziqni.sdk.admin.api;
import javax.ws.rs.core.GenericType;
import com.ziqni.sdk.admin.streaming.StreamingClient;
import com.ziqni.sdk.admin.streaming.EventHandler;
import com.ziqni.sdk.admin.streaming.handlers.CallbackConsumer;
import com.ziqni.sdk.admin.ApiException;
import org.springframework.messaging.simp.stomp.StompHeaders;
    import com.ziqni.sdk.admin.model.CreateTagRequest;
    import com.ziqni.sdk.admin.model.ModelApiResponse;
    import com.ziqni.sdk.admin.model.QueryRequest;
    import com.ziqni.sdk.admin.model.TagResponse;
    import com.ziqni.sdk.admin.model.UpdateTagRequest;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ziqni.sdk.admin.model.*;
import java.time.Duration;
    import java.util.*;
//asyncNative:true
import java.util.concurrent.CompletableFuture;
import java.io.IOException;
import java.io.InputStream;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.function.BiConsumer;
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
    public class TagsApiWs {

    private final Duration memberVarReadTimeout;
    private final StreamingClient streamingClient;

    public TagsApiWs(StreamingClient streamingClient, Duration readTimeout) {
    this.streamingClient = streamingClient;
    this.memberVarReadTimeout = readTimeout;
    }



            /**
            * Create tags
            * Create new Tags in the Ziqni database
                * @param body Create Tags in the Ziqni database (required)
                * @return CompletableFuture&lt;ModelApiResponse&gt;
            * @throws ApiException if fails to make API call
            */
            public CompletableFuture<ModelApiResponse> createTags(List<CreateTagRequest> body) {
                var request = new HashMap<String, Object>();
            
                        

            
                        

            request.put("body",body);

            CompletableFuture<ModelApiResponse> result = this.streamingClient.sendWithApiCallback("/gapi/createTags", request);
            return result;
        }



            /**
            * Delete tags
            * Delete Tags for a given identifier specified
                * @param id The unique identifiers of the resources (optional
                * @return CompletableFuture&lt;ModelApiResponse&gt;
            * @throws ApiException if fails to make API call
            */
            public CompletableFuture<ModelApiResponse> deleteTags(List<String> id) {
                var request = new HashMap<String, Object>();
            var queryParam = new HashMap<String, Object>();
            queryParam.put("id", id);
            request.put("query",queryParam);

            
                        

            

            CompletableFuture<ModelApiResponse> result = this.streamingClient.sendWithApiCallback("/gapi/deleteTags", request);
            return result;
        }



            /**
            * Delete tags by query
            * Delete Tags from Ziqni database by unique Tags ID&#39;s or any other POST body parameters using the POST method
                * @param body Delete Tags from Ziqni database by unique Tags ID&#39;s or any other POST body parameters using the POST method (optional)
                * @return CompletableFuture&lt;ModelApiResponse&gt;
            * @throws ApiException if fails to make API call
            */
            public CompletableFuture<ModelApiResponse> deleteTagsByQuery(QueryRequest body) {
                var request = new HashMap<String, Object>();
            
                        

            
                        

            request.put("body",body);

            CompletableFuture<ModelApiResponse> result = this.streamingClient.sendWithApiCallback("/gapi/deleteTagsByQuery", request);
            return result;
        }



            /**
            * Get tags
            * Returns a list of Tags. This assumes that tags have first been uploaded via a POST request or web console
                * @param id The unique identifiers of the resources (optional
                * @param limit Limit the returned total records found (optional)
                * @param skip Skip the returned records found and return the next batch of records (optional)
                * @return CompletableFuture&lt;TagResponse&gt;
            * @throws ApiException if fails to make API call
            */
            public CompletableFuture<TagResponse> getTags(List<String> id, Integer limit, Integer skip) {
                var request = new HashMap<String, Object>();
            var queryParam = new HashMap<String, Object>();
            queryParam.put("id", id);
queryParam.put("limit", limit);
queryParam.put("skip", skip);
            request.put("query",queryParam);

            
                        

            

            CompletableFuture<TagResponse> result = this.streamingClient.sendWithApiCallback("/gapi/getTags", request);
            return result;
        }



            /**
            * Get tags by query
            * Retrieve Tags from Ziqni database by unique Tags ID&#39;s or any other POST body parameters using the POST method
                * @param body Retrieve Tags from Ziqni database by unique Tags ID&#39;s or any other POST body parameters using the POST method (optional)
                * @return CompletableFuture&lt;TagResponse&gt;
            * @throws ApiException if fails to make API call
            */
            public CompletableFuture<TagResponse> getTagsByQuery(QueryRequest body) {
                var request = new HashMap<String, Object>();
            
                        

            
                        

            request.put("body",body);

            CompletableFuture<TagResponse> result = this.streamingClient.sendWithApiCallback("/gapi/getTagsByQuery", request);
            return result;
        }



            /**
            * Update tags
            * Update existing Tags in the Ziqni database
                * @param body Update a Tag in the Ziqni database. (required)
                * @return CompletableFuture&lt;ModelApiResponse&gt;
            * @throws ApiException if fails to make API call
            */
            public CompletableFuture<ModelApiResponse> updateTags(List<UpdateTagRequest> body) {
                var request = new HashMap<String, Object>();
            
                        

            
                        

            request.put("body",body);

            CompletableFuture<ModelApiResponse> result = this.streamingClient.sendWithApiCallback("/gapi/updateTags", request);
            return result;
        }

        private ApiException getApiException(String operationId, HttpResponse<String> response) {
        String message = formatExceptionMessage(operationId, response.statusCode(), response.body());
        return new ApiException(response.statusCode(), message, response.headers(), response.body());
    }

    private String formatExceptionMessage(String operationId, int statusCode, String body) {
    if (body == null || body.isEmpty()) {
    body = "[no body]";
    }
    return operationId + " call failed with: " + statusCode + " - " + body;
    }
}
