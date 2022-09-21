# DefaultApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSpace**](DefaultApi.md#deleteSpace) | **DELETE** /spaces | NOT AVAILABLE IN CURRENT RELEASE
[**deleteSpaceWithHttpInfo**](DefaultApi.md#deleteSpaceWithHttpInfo) | **DELETE** /spaces | NOT AVAILABLE IN CURRENT RELEASE
[**manageLeaderboardSubscription**](DefaultApi.md#manageLeaderboardSubscription) | **POST** /leaderboard | 
[**manageLeaderboardSubscriptionWithHttpInfo**](DefaultApi.md#manageLeaderboardSubscriptionWithHttpInfo) | **POST** /leaderboard | 
[**unsubscribeFromEntityChanges**](DefaultApi.md#unsubscribeFromEntityChanges) | **DELETE** /entity-changes | 
[**unsubscribeFromEntityChangesWithHttpInfo**](DefaultApi.md#unsubscribeFromEntityChangesWithHttpInfo) | **DELETE** /entity-changes | 



## deleteSpace

> CompletableFuture<Void> deleteSpace(name)

NOT AVAILABLE IN CURRENT RELEASE

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.DefaultApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String name = "name_example"; // String | 
        try {
            CompletableFuture<Void> result = apiInstance.deleteSpace(name);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#deleteSpace");
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
 **name** | **String**|  |

### Return type


CompletableFuture<void> (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | On Success |  -  |

## deleteSpaceWithHttpInfo

> CompletableFuture<ApiResponse<Void>> deleteSpace deleteSpaceWithHttpInfo(name)

NOT AVAILABLE IN CURRENT RELEASE

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.DefaultApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String name = "name_example"; // String | 
        try {
            CompletableFuture<ApiResponse<Void>> response = apiInstance.deleteSpaceWithHttpInfo(name);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling DefaultApi#deleteSpace");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#deleteSpace");
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
 **name** | **String**|  |

### Return type


CompletableFuture<ApiResponse<Void>>

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | On Success |  -  |


## manageLeaderboardSubscription

> CompletableFuture<Void> manageLeaderboardSubscription(leaderboardSubscriptionRequest)



### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.DefaultApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        LeaderboardSubscriptionRequest leaderboardSubscriptionRequest = new LeaderboardSubscriptionRequest(); // LeaderboardSubscriptionRequest | 
        try {
            CompletableFuture<Void> result = apiInstance.manageLeaderboardSubscription(leaderboardSubscriptionRequest);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#manageLeaderboardSubscription");
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
 **leaderboardSubscriptionRequest** | [**LeaderboardSubscriptionRequest**](LeaderboardSubscriptionRequest.md)|  | [optional]

### Return type


CompletableFuture<void> (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

## manageLeaderboardSubscriptionWithHttpInfo

> CompletableFuture<ApiResponse<Void>> manageLeaderboardSubscription manageLeaderboardSubscriptionWithHttpInfo(leaderboardSubscriptionRequest)



### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.DefaultApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        LeaderboardSubscriptionRequest leaderboardSubscriptionRequest = new LeaderboardSubscriptionRequest(); // LeaderboardSubscriptionRequest | 
        try {
            CompletableFuture<ApiResponse<Void>> response = apiInstance.manageLeaderboardSubscriptionWithHttpInfo(leaderboardSubscriptionRequest);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling DefaultApi#manageLeaderboardSubscription");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#manageLeaderboardSubscription");
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
 **leaderboardSubscriptionRequest** | [**LeaderboardSubscriptionRequest**](LeaderboardSubscriptionRequest.md)|  | [optional]

### Return type


CompletableFuture<ApiResponse<Void>>

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |


## unsubscribeFromEntityChanges

> CompletableFuture<Void> unsubscribeFromEntityChanges(subscriptionId)



### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.DefaultApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String subscriptionId = "subscriptionId_example"; // String | 
        try {
            CompletableFuture<Void> result = apiInstance.unsubscribeFromEntityChanges(subscriptionId);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#unsubscribeFromEntityChanges");
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
 **subscriptionId** | **String**|  | [optional]

### Return type


CompletableFuture<void> (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Onsuccess |  -  |

## unsubscribeFromEntityChangesWithHttpInfo

> CompletableFuture<ApiResponse<Void>> unsubscribeFromEntityChanges unsubscribeFromEntityChangesWithHttpInfo(subscriptionId)



### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.DefaultApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        DefaultApi apiInstance = new DefaultApi(defaultClient);
        String subscriptionId = "subscriptionId_example"; // String | 
        try {
            CompletableFuture<ApiResponse<Void>> response = apiInstance.unsubscribeFromEntityChangesWithHttpInfo(subscriptionId);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling DefaultApi#unsubscribeFromEntityChanges");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#unsubscribeFromEntityChanges");
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
 **subscriptionId** | **String**|  | [optional]

### Return type


CompletableFuture<ApiResponse<Void>>

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Onsuccess |  -  |
