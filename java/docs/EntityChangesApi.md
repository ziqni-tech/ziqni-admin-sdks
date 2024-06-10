# EntityChangesApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**manageEntityChangeSubscription**](EntityChangesApi.md#manageEntityChangeSubscription) | **POST** /entity-changes | 
[**manageEntityChangeSubscriptionWithHttpInfo**](EntityChangesApi.md#manageEntityChangeSubscriptionWithHttpInfo) | **POST** /entity-changes | 



## manageEntityChangeSubscription

> CompletableFuture<EntityChangeSubscriptionResponse> manageEntityChangeSubscription(entityChangeSubscriptionRequest)



subscribes a client to receive out-of-band data

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.EntityChangesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        EntityChangesApi apiInstance = new EntityChangesApi(defaultClient);
        EntityChangeSubscriptionRequest entityChangeSubscriptionRequest = new EntityChangeSubscriptionRequest(); // EntityChangeSubscriptionRequest | 
        try {
            CompletableFuture<EntityChangeSubscriptionResponse> result = apiInstance.manageEntityChangeSubscription(entityChangeSubscriptionRequest);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling EntityChangesApi#manageEntityChangeSubscription");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityChangeSubscriptionRequest** | [**EntityChangeSubscriptionRequest**](EntityChangeSubscriptionRequest.md)|  |

### Return type

CompletableFuture<[**EntityChangeSubscriptionResponse**](EntityChangeSubscriptionResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Subscription successfully created |  -  |

## manageEntityChangeSubscriptionWithHttpInfo

> CompletableFuture<ApiResponse<EntityChangeSubscriptionResponse>> manageEntityChangeSubscription manageEntityChangeSubscriptionWithHttpInfo(entityChangeSubscriptionRequest)



subscribes a client to receive out-of-band data

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.EntityChangesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        EntityChangesApi apiInstance = new EntityChangesApi(defaultClient);
        EntityChangeSubscriptionRequest entityChangeSubscriptionRequest = new EntityChangeSubscriptionRequest(); // EntityChangeSubscriptionRequest | 
        try {
            CompletableFuture<ApiResponse<EntityChangeSubscriptionResponse>> response = apiInstance.manageEntityChangeSubscriptionWithHttpInfo(entityChangeSubscriptionRequest);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling EntityChangesApi#manageEntityChangeSubscription");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling EntityChangesApi#manageEntityChangeSubscription");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entityChangeSubscriptionRequest** | [**EntityChangeSubscriptionRequest**](EntityChangeSubscriptionRequest.md)|  |

### Return type

CompletableFuture<ApiResponse<[**EntityChangeSubscriptionResponse**](EntityChangeSubscriptionResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Subscription successfully created |  -  |

