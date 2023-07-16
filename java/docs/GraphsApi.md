# GraphsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGraph**](GraphsApi.md#getGraph) | **POST** /graphs | Get achievements by member reference id
[**getGraphWithHttpInfo**](GraphsApi.md#getGraphWithHttpInfo) | **POST** /graphs | Get achievements by member reference id



## getGraph

> CompletableFuture<EntityGraphResponse> getGraph(entityGraphRequest)

Get achievements by member reference id

Returns a list of graphs based on the entity type.

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.GraphsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        GraphsApi apiInstance = new GraphsApi(defaultClient);
        EntityGraphRequest entityGraphRequest = new EntityGraphRequest(); // EntityGraphRequest | 
        try {
            CompletableFuture<EntityGraphResponse> result = apiInstance.getGraph(entityGraphRequest);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling GraphsApi#getGraph");
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
 **entityGraphRequest** | [**EntityGraphRequest**](EntityGraphRequest.md)|  |

### Return type

CompletableFuture<[**EntityGraphResponse**](EntityGraphResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **500** |  |  -  |

## getGraphWithHttpInfo

> CompletableFuture<ApiResponse<EntityGraphResponse>> getGraph getGraphWithHttpInfo(entityGraphRequest)

Get achievements by member reference id

Returns a list of graphs based on the entity type.

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.GraphsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        GraphsApi apiInstance = new GraphsApi(defaultClient);
        EntityGraphRequest entityGraphRequest = new EntityGraphRequest(); // EntityGraphRequest | 
        try {
            CompletableFuture<ApiResponse<EntityGraphResponse>> response = apiInstance.getGraphWithHttpInfo(entityGraphRequest);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling GraphsApi#getGraph");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling GraphsApi#getGraph");
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
 **entityGraphRequest** | [**EntityGraphRequest**](EntityGraphRequest.md)|  |

### Return type

CompletableFuture<ApiResponse<[**EntityGraphResponse**](EntityGraphResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **500** |  |  -  |

