# EntrantsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEntrantsByQuery**](EntrantsApi.md#getEntrantsByQuery) | **POST** /entrants/query | Get entrants by query
[**getEntrantsByQueryWithHttpInfo**](EntrantsApi.md#getEntrantsByQueryWithHttpInfo) | **POST** /entrants/query | Get entrants by query
[**updateEntrants**](EntrantsApi.md#updateEntrants) | **POST** /entrants | 
[**updateEntrantsWithHttpInfo**](EntrantsApi.md#updateEntrantsWithHttpInfo) | **POST** /entrants | 



## getEntrantsByQuery

> CompletableFuture<EntrantResponse> getEntrantsByQuery(queryRequest)

Get entrants by query

Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.EntrantsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        EntrantsApi apiInstance = new EntrantsApi(defaultClient);
        QueryRequest queryRequest = new QueryRequest(); // QueryRequest | 
        try {
            CompletableFuture<EntrantResponse> result = apiInstance.getEntrantsByQuery(queryRequest);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling EntrantsApi#getEntrantsByQuery");
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
 **queryRequest** | [**QueryRequest**](QueryRequest.md)|  | [optional]

### Return type

CompletableFuture<[**EntrantResponse**](EntrantResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Entrants for the competition/contest and/or errors |  -  |
| **400** | A list of Entrants for the competition/contest and/or errors |  -  |
| **401** | A list of Entrants for the competition/contest and/or errors |  -  |
| **403** | A list of Entrants for the competition/contest and/or errors |  -  |
| **404** | A list of Entrants for the competition/contest and/or errors |  -  |
| **413** | A list of Entrants for the competition/contest and/or errors |  -  |
| **500** | A list of Entrants for the competition/contest and/or errors |  -  |
| **501** | A list of Entrants for the competition/contest and/or errors |  -  |
| **503** | A list of Entrants for the competition/contest and/or errors |  -  |

## getEntrantsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<EntrantResponse>> getEntrantsByQuery getEntrantsByQueryWithHttpInfo(queryRequest)

Get entrants by query

Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.EntrantsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        EntrantsApi apiInstance = new EntrantsApi(defaultClient);
        QueryRequest queryRequest = new QueryRequest(); // QueryRequest | 
        try {
            CompletableFuture<ApiResponse<EntrantResponse>> response = apiInstance.getEntrantsByQueryWithHttpInfo(queryRequest);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling EntrantsApi#getEntrantsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling EntrantsApi#getEntrantsByQuery");
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
 **queryRequest** | [**QueryRequest**](QueryRequest.md)|  | [optional]

### Return type

CompletableFuture<ApiResponse<[**EntrantResponse**](EntrantResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Entrants for the competition/contest and/or errors |  -  |
| **400** | A list of Entrants for the competition/contest and/or errors |  -  |
| **401** | A list of Entrants for the competition/contest and/or errors |  -  |
| **403** | A list of Entrants for the competition/contest and/or errors |  -  |
| **404** | A list of Entrants for the competition/contest and/or errors |  -  |
| **413** | A list of Entrants for the competition/contest and/or errors |  -  |
| **500** | A list of Entrants for the competition/contest and/or errors |  -  |
| **501** | A list of Entrants for the competition/contest and/or errors |  -  |
| **503** | A list of Entrants for the competition/contest and/or errors |  -  |


## updateEntrants

> CompletableFuture<ModelApiResponse> updateEntrants(body)



Updates the status of the Entrants for a Competition id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.EntrantsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        EntrantsApi apiInstance = new EntrantsApi(defaultClient);
        List<EntrantRequest> body = Arrays.asList(); // List<EntrantRequest> | Updates the status of the Entrants
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateEntrants(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling EntrantsApi#updateEntrants");
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
 **body** | [**List&lt;EntrantRequest&gt;**](EntrantRequest.md)| Updates the status of the Entrants | [optional]

### Return type

CompletableFuture<[**ModelApiResponse**](ModelApiResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | A list of outcomes and/or errors |  -  |
| **202** | Accepted |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |

## updateEntrantsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateEntrants updateEntrantsWithHttpInfo(body)



Updates the status of the Entrants for a Competition id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.EntrantsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        EntrantsApi apiInstance = new EntrantsApi(defaultClient);
        List<EntrantRequest> body = Arrays.asList(); // List<EntrantRequest> | Updates the status of the Entrants
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateEntrantsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling EntrantsApi#updateEntrants");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling EntrantsApi#updateEntrants");
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
 **body** | [**List&lt;EntrantRequest&gt;**](EntrantRequest.md)| Updates the status of the Entrants | [optional]

### Return type

CompletableFuture<ApiResponse<[**ModelApiResponse**](ModelApiResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | A list of outcomes and/or errors |  -  |
| **202** | Accepted |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |

