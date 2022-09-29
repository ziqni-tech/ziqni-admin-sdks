# UserApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUser**](UserApi.md#getUser) | **GET** /user | 
[**getUserWithHttpInfo**](UserApi.md#getUserWithHttpInfo) | **GET** /user | 



## getUser

> CompletableFuture<ProfileResponse> getUser(includeSpaces)



Returns the current users user. This assumes that a user has first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UserApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UserApi apiInstance = new UserApi(defaultClient);
        Boolean includeSpaces = true; // Boolean | Include Spaces
        try {
            CompletableFuture<ProfileResponse> result = apiInstance.getUser(includeSpaces);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling UserApi#getUser");
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
 **includeSpaces** | **Boolean**| Include Spaces | [optional]

### Return type

CompletableFuture<[**ProfileResponse**](ProfileResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of a User returned |  -  |
| **400** | Details of a User returned |  -  |
| **401** | Details of a User returned |  -  |
| **403** | Details of a User returned |  -  |
| **404** | Details of a User returned |  -  |
| **413** | Details of a User returned |  -  |
| **500** | Details of a User returned |  -  |
| **501** | Details of a User returned |  -  |
| **503** | Details of a User returned |  -  |

## getUserWithHttpInfo

> CompletableFuture<ApiResponse<ProfileResponse>> getUser getUserWithHttpInfo(includeSpaces)



Returns the current users user. This assumes that a user has first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UserApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UserApi apiInstance = new UserApi(defaultClient);
        Boolean includeSpaces = true; // Boolean | Include Spaces
        try {
            CompletableFuture<ApiResponse<ProfileResponse>> response = apiInstance.getUserWithHttpInfo(includeSpaces);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling UserApi#getUser");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling UserApi#getUser");
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
 **includeSpaces** | **Boolean**| Include Spaces | [optional]

### Return type

CompletableFuture<ApiResponse<[**ProfileResponse**](ProfileResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of a User returned |  -  |
| **400** | Details of a User returned |  -  |
| **401** | Details of a User returned |  -  |
| **403** | Details of a User returned |  -  |
| **404** | Details of a User returned |  -  |
| **413** | Details of a User returned |  -  |
| **500** | Details of a User returned |  -  |
| **501** | Details of a User returned |  -  |
| **503** | Details of a User returned |  -  |

