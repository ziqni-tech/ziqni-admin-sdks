# InstantWinsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInstantWins**](InstantWinsApi.md#createInstantWins) | **POST** /instant-wins | Create instant wins
[**createInstantWinsWithHttpInfo**](InstantWinsApi.md#createInstantWinsWithHttpInfo) | **POST** /instant-wins | Create instant wins
[**deleteInstantWins**](InstantWinsApi.md#deleteInstantWins) | **DELETE** /instant-wins | Delete instant wins
[**deleteInstantWinsWithHttpInfo**](InstantWinsApi.md#deleteInstantWinsWithHttpInfo) | **DELETE** /instant-wins | Delete instant wins
[**deleteInstantWinsByQuery**](InstantWinsApi.md#deleteInstantWinsByQuery) | **POST** /instant-wins/delete | Delete instant-wins by query
[**deleteInstantWinsByQueryWithHttpInfo**](InstantWinsApi.md#deleteInstantWinsByQueryWithHttpInfo) | **POST** /instant-wins/delete | Delete instant-wins by query
[**getInstantWinEntrants**](InstantWinsApi.md#getInstantWinEntrants) | **GET** /instant-wins/entrants-info | Get all players eligible to play
[**getInstantWinEntrantsWithHttpInfo**](InstantWinsApi.md#getInstantWinEntrantsWithHttpInfo) | **GET** /instant-wins/entrants-info | Get all players eligible to play
[**getInstantWinLogs**](InstantWinsApi.md#getInstantWinLogs) | **GET** /instant-wins/logs | Get instant win logs
[**getInstantWinLogsWithHttpInfo**](InstantWinsApi.md#getInstantWinLogsWithHttpInfo) | **GET** /instant-wins/logs | Get instant win logs
[**getInstantWinStatistics**](InstantWinsApi.md#getInstantWinStatistics) | **GET** /instant-wins/statistics | Get instant win statistics
[**getInstantWinStatisticsWithHttpInfo**](InstantWinsApi.md#getInstantWinStatisticsWithHttpInfo) | **GET** /instant-wins/statistics | Get instant win statistics
[**getInstantWins**](InstantWinsApi.md#getInstantWins) | **GET** /instant-wins | Get instant wins
[**getInstantWinsWithHttpInfo**](InstantWinsApi.md#getInstantWinsWithHttpInfo) | **GET** /instant-wins | Get instant wins
[**getInstantWinsByQuery**](InstantWinsApi.md#getInstantWinsByQuery) | **POST** /instant-wins/query | Get instant wins by query
[**getInstantWinsByQueryWithHttpInfo**](InstantWinsApi.md#getInstantWinsByQueryWithHttpInfo) | **POST** /instant-wins/query | Get instant wins by query
[**updateInstantWins**](InstantWinsApi.md#updateInstantWins) | **PUT** /instant-wins | Update instant wins
[**updateInstantWinsWithHttpInfo**](InstantWinsApi.md#updateInstantWinsWithHttpInfo) | **PUT** /instant-wins | Update instant wins



## createInstantWins

> CompletableFuture<ModelApiResponse> createInstantWins(body)

Create instant wins

Create new Instant win in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<CreateInstantWinRequest> body = Arrays.asList(); // List<CreateInstantWinRequest> | Create Instant wins in the Ziqni database. An array can contain a maximum of 10,000 instant wins in one request
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.createInstantWins(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#createInstantWins");
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
 **body** | [**List&lt;CreateInstantWinRequest&gt;**](CreateInstantWinRequest.md)| Create Instant wins in the Ziqni database. An array can contain a maximum of 10,000 instant wins in one request |

### Return type

CompletableFuture<[**ModelApiResponse**](ModelApiResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of outcomes and/or errors |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |

## createInstantWinsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> createInstantWins createInstantWinsWithHttpInfo(body)

Create instant wins

Create new Instant win in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<CreateInstantWinRequest> body = Arrays.asList(); // List<CreateInstantWinRequest> | Create Instant wins in the Ziqni database. An array can contain a maximum of 10,000 instant wins in one request
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.createInstantWinsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling InstantWinsApi#createInstantWins");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#createInstantWins");
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
 **body** | [**List&lt;CreateInstantWinRequest&gt;**](CreateInstantWinRequest.md)| Create Instant wins in the Ziqni database. An array can contain a maximum of 10,000 instant wins in one request |

### Return type

CompletableFuture<ApiResponse<[**ModelApiResponse**](ModelApiResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of outcomes and/or errors |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |


## deleteInstantWins

> CompletableFuture<ModelApiResponse> deleteInstantWins(id)

Delete instant wins

Delete Instant win for a given identifier specified

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteInstantWins(id);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#deleteInstantWins");
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
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]

### Return type

CompletableFuture<[**ModelApiResponse**](ModelApiResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of outcomes and/or errors |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |

## deleteInstantWinsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteInstantWins deleteInstantWinsWithHttpInfo(id)

Delete instant wins

Delete Instant win for a given identifier specified

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteInstantWinsWithHttpInfo(id);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling InstantWinsApi#deleteInstantWins");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#deleteInstantWins");
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
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]

### Return type

CompletableFuture<ApiResponse<[**ModelApiResponse**](ModelApiResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of outcomes and/or errors |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |


## deleteInstantWinsByQuery

> CompletableFuture<ModelApiResponse> deleteInstantWinsByQuery(body)

Delete instant-wins by query

Delete Instant wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete Instant Wins from Ziqni database by unique Instant win ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteInstantWinsByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#deleteInstantWinsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Instant Wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method | [optional]

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
| **200** | A list of outcomes and/or errors |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |

## deleteInstantWinsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteInstantWinsByQuery deleteInstantWinsByQueryWithHttpInfo(body)

Delete instant-wins by query

Delete Instant wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete Instant Wins from Ziqni database by unique Instant win ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteInstantWinsByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling InstantWinsApi#deleteInstantWinsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#deleteInstantWinsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Instant Wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method | [optional]

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
| **200** | A list of outcomes and/or errors |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |


## getInstantWinEntrants

> CompletableFuture<InstantWinMemberResponse> getInstantWinEntrants(id, limit, skip)

Get all players eligible to play

Retrieve Instant wins members from Ziqni database by unique Instant win ID&#39;s 

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<InstantWinMemberResponse> result = apiInstance.getInstantWinEntrants(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#getInstantWinEntrants");
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
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**InstantWinMemberResponse**](InstantWinMemberResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |

## getInstantWinEntrantsWithHttpInfo

> CompletableFuture<ApiResponse<InstantWinMemberResponse>> getInstantWinEntrants getInstantWinEntrantsWithHttpInfo(id, limit, skip)

Get all players eligible to play

Retrieve Instant wins members from Ziqni database by unique Instant win ID&#39;s 

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<InstantWinMemberResponse>> response = apiInstance.getInstantWinEntrantsWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling InstantWinsApi#getInstantWinEntrants");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#getInstantWinEntrants");
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
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**InstantWinMemberResponse**](InstantWinMemberResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |


## getInstantWinLogs

> CompletableFuture<InstantWinLogResponse> getInstantWinLogs(id, limit, skip)

Get instant win logs

Retrieve Instant wins logs from Ziqni database by unique Instant win ID

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<InstantWinLogResponse> result = apiInstance.getInstantWinLogs(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#getInstantWinLogs");
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
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**InstantWinLogResponse**](InstantWinLogResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |

## getInstantWinLogsWithHttpInfo

> CompletableFuture<ApiResponse<InstantWinLogResponse>> getInstantWinLogs getInstantWinLogsWithHttpInfo(id, limit, skip)

Get instant win logs

Retrieve Instant wins logs from Ziqni database by unique Instant win ID

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<InstantWinLogResponse>> response = apiInstance.getInstantWinLogsWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling InstantWinsApi#getInstantWinLogs");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#getInstantWinLogs");
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
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**InstantWinLogResponse**](InstantWinLogResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |


## getInstantWinStatistics

> CompletableFuture<InstantWinStatisticsResponse> getInstantWinStatistics(instantWinId)

Get instant win statistics

Retrieve Instant wins statistics  from Ziqni database by unique Instant win ID 

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        String instantWinId = "instantWinId_example"; // String | 
        try {
            CompletableFuture<InstantWinStatisticsResponse> result = apiInstance.getInstantWinStatistics(instantWinId);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#getInstantWinStatistics");
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
 **instantWinId** | **String**|  |

### Return type

CompletableFuture<[**InstantWinStatisticsResponse**](InstantWinStatisticsResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |

## getInstantWinStatisticsWithHttpInfo

> CompletableFuture<ApiResponse<InstantWinStatisticsResponse>> getInstantWinStatistics getInstantWinStatisticsWithHttpInfo(instantWinId)

Get instant win statistics

Retrieve Instant wins statistics  from Ziqni database by unique Instant win ID 

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        String instantWinId = "instantWinId_example"; // String | 
        try {
            CompletableFuture<ApiResponse<InstantWinStatisticsResponse>> response = apiInstance.getInstantWinStatisticsWithHttpInfo(instantWinId);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling InstantWinsApi#getInstantWinStatistics");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#getInstantWinStatistics");
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
 **instantWinId** | **String**|  |

### Return type

CompletableFuture<ApiResponse<[**InstantWinStatisticsResponse**](InstantWinStatisticsResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |


## getInstantWins

> CompletableFuture<InstantWinResponse> getInstantWins(id, limit, skip)

Get instant wins

Returns a list of Instant wins. This assumes that instant wins have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<InstantWinResponse> result = apiInstance.getInstantWins(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#getInstantWins");
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
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**InstantWinResponse**](InstantWinResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |

## getInstantWinsWithHttpInfo

> CompletableFuture<ApiResponse<InstantWinResponse>> getInstantWins getInstantWinsWithHttpInfo(id, limit, skip)

Get instant wins

Returns a list of Instant wins. This assumes that instant wins have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<InstantWinResponse>> response = apiInstance.getInstantWinsWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling InstantWinsApi#getInstantWins");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#getInstantWins");
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
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**InstantWinResponse**](InstantWinResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |


## getInstantWinsByQuery

> CompletableFuture<InstantWinResponse> getInstantWinsByQuery(body)

Get instant wins by query

Retrieve Instant wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Instant wins from Ziqni database by unique Instant win ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<InstantWinResponse> result = apiInstance.getInstantWinsByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#getInstantWinsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Instant wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<[**InstantWinResponse**](InstantWinResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |

## getInstantWinsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<InstantWinResponse>> getInstantWinsByQuery getInstantWinsByQueryWithHttpInfo(body)

Get instant wins by query

Retrieve Instant wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Instant wins from Ziqni database by unique Instant win ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<InstantWinResponse>> response = apiInstance.getInstantWinsByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling InstantWinsApi#getInstantWinsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#getInstantWinsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Instant wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<ApiResponse<[**InstantWinResponse**](InstantWinResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |


## updateInstantWins

> CompletableFuture<ModelApiResponse> updateInstantWins(body)

Update instant wins

Update existing Instant wins in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<UpdateInstantWinRequest> body = Arrays.asList(); // List<UpdateInstantWinRequest> | Update a Instant win or multiple Instant wins in the Ziqni database. 
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateInstantWins(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#updateInstantWins");
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
 **body** | [**List&lt;UpdateInstantWinRequest&gt;**](UpdateInstantWinRequest.md)| Update a Instant win or multiple Instant wins in the Ziqni database.  |

### Return type

CompletableFuture<[**ModelApiResponse**](ModelApiResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of outcomes and/or errors |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |

## updateInstantWinsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateInstantWins updateInstantWinsWithHttpInfo(body)

Update instant wins

Update existing Instant wins in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.InstantWinsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        InstantWinsApi apiInstance = new InstantWinsApi(defaultClient);
        List<UpdateInstantWinRequest> body = Arrays.asList(); // List<UpdateInstantWinRequest> | Update a Instant win or multiple Instant wins in the Ziqni database. 
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateInstantWinsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling InstantWinsApi#updateInstantWins");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling InstantWinsApi#updateInstantWins");
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
 **body** | [**List&lt;UpdateInstantWinRequest&gt;**](UpdateInstantWinRequest.md)| Update a Instant win or multiple Instant wins in the Ziqni database.  |

### Return type

CompletableFuture<ApiResponse<[**ModelApiResponse**](ModelApiResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of outcomes and/or errors |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |

