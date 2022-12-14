# LogEventsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogEventsByQuery**](LogEventsApi.md#getLogEventsByQuery) | **POST** /log-events/query | 
[**getLogEventsByQueryWithHttpInfo**](LogEventsApi.md#getLogEventsByQueryWithHttpInfo) | **POST** /log-events/query | 



## getLogEventsByQuery

> CompletableFuture<LogEventResponse> getLogEventsByQuery(body)



Retrieve Log Events from Ziqni database by unique Log Events ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.LogEventsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        LogEventsApi apiInstance = new LogEventsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Log Events from Ziqni database by unique Log Events ID's or any other Post body parameters using the POST method
        try {
            CompletableFuture<LogEventResponse> result = apiInstance.getLogEventsByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling LogEventsApi#getLogEventsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Log Events from Ziqni database by unique Log Events ID&#39;s or any other Post body parameters using the POST method | [optional]

### Return type

CompletableFuture<[**LogEventResponse**](LogEventResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of log events and/or errors |  -  |
| **400** | A list of log events and/or errors |  -  |
| **401** | A list of log events and/or errors |  -  |
| **403** | A list of log events and/or errors |  -  |
| **404** | A list of log events and/or errors |  -  |
| **413** | A list of log events and/or errors |  -  |
| **500** | A list of log events and/or errors |  -  |
| **501** | A list of log events and/or errors |  -  |
| **503** | A list of log events and/or errors |  -  |

## getLogEventsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<LogEventResponse>> getLogEventsByQuery getLogEventsByQueryWithHttpInfo(body)



Retrieve Log Events from Ziqni database by unique Log Events ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.LogEventsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        LogEventsApi apiInstance = new LogEventsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Log Events from Ziqni database by unique Log Events ID's or any other Post body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<LogEventResponse>> response = apiInstance.getLogEventsByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling LogEventsApi#getLogEventsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling LogEventsApi#getLogEventsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Log Events from Ziqni database by unique Log Events ID&#39;s or any other Post body parameters using the POST method | [optional]

### Return type

CompletableFuture<ApiResponse<[**LogEventResponse**](LogEventResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of log events and/or errors |  -  |
| **400** | A list of log events and/or errors |  -  |
| **401** | A list of log events and/or errors |  -  |
| **403** | A list of log events and/or errors |  -  |
| **404** | A list of log events and/or errors |  -  |
| **413** | A list of log events and/or errors |  -  |
| **500** | A list of log events and/or errors |  -  |
| **501** | A list of log events and/or errors |  -  |
| **503** | A list of log events and/or errors |  -  |

