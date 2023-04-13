# CompetitionsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompetitions**](CompetitionsApi.md#createCompetitions) | **POST** /competitions | 
[**createCompetitionsWithHttpInfo**](CompetitionsApi.md#createCompetitionsWithHttpInfo) | **POST** /competitions | 
[**createSimpleCompetitions**](CompetitionsApi.md#createSimpleCompetitions) | **POST** /competitions/simple | 
[**createSimpleCompetitionsWithHttpInfo**](CompetitionsApi.md#createSimpleCompetitionsWithHttpInfo) | **POST** /competitions/simple | 
[**getCompetitions**](CompetitionsApi.md#getCompetitions) | **GET** /competitions | 
[**getCompetitionsWithHttpInfo**](CompetitionsApi.md#getCompetitionsWithHttpInfo) | **GET** /competitions | 
[**getCompetitionsByQuery**](CompetitionsApi.md#getCompetitionsByQuery) | **POST** /competitions/query | 
[**getCompetitionsByQueryWithHttpInfo**](CompetitionsApi.md#getCompetitionsByQueryWithHttpInfo) | **POST** /competitions/query | 
[**getCompetitionsToClone**](CompetitionsApi.md#getCompetitionsToClone) | **GET** /competitions/{id}/clone | Get Competition To Clone
[**getCompetitionsToCloneWithHttpInfo**](CompetitionsApi.md#getCompetitionsToCloneWithHttpInfo) | **GET** /competitions/{id}/clone | Get Competition To Clone
[**getLeaderboardByCompetitionId**](CompetitionsApi.md#getLeaderboardByCompetitionId) | **GET** /competitions/{id}/leaderboard | 
[**getLeaderboardByCompetitionIdWithHttpInfo**](CompetitionsApi.md#getLeaderboardByCompetitionIdWithHttpInfo) | **GET** /competitions/{id}/leaderboard | 
[**updateCompetitions**](CompetitionsApi.md#updateCompetitions) | **PUT** /competitions | 
[**updateCompetitionsWithHttpInfo**](CompetitionsApi.md#updateCompetitionsWithHttpInfo) | **PUT** /competitions | 
[**updateCompetitionsState**](CompetitionsApi.md#updateCompetitionsState) | **PUT** /competitions/state | 
[**updateCompetitionsStateWithHttpInfo**](CompetitionsApi.md#updateCompetitionsStateWithHttpInfo) | **PUT** /competitions/state | 



## createCompetitions

> CompletableFuture<ModelApiResponse> createCompetitions(body)



Create a new Competition in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        CreateCompetitionRequest body = new CreateCompetitionRequest(); // CreateCompetitionRequest | Create a Competition in the Ziqni database
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.createCompetitions(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#createCompetitions");
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
 **body** | [**CreateCompetitionRequest**](CreateCompetitionRequest.md)| Create a Competition in the Ziqni database |

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
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |

## createCompetitionsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> createCompetitions createCompetitionsWithHttpInfo(body)



Create a new Competition in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        CreateCompetitionRequest body = new CreateCompetitionRequest(); // CreateCompetitionRequest | Create a Competition in the Ziqni database
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.createCompetitionsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CompetitionsApi#createCompetitions");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#createCompetitions");
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
 **body** | [**CreateCompetitionRequest**](CreateCompetitionRequest.md)| Create a Competition in the Ziqni database |

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
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |


## createSimpleCompetitions

> CompletableFuture<ModelApiResponse> createSimpleCompetitions(body)



Create a Simple Competition in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        CreateSimpleCompetitionRequest body = new CreateSimpleCompetitionRequest(); // CreateSimpleCompetitionRequest | Create a Competition in the Ziqni database
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.createSimpleCompetitions(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#createSimpleCompetitions");
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
 **body** | [**CreateSimpleCompetitionRequest**](CreateSimpleCompetitionRequest.md)| Create a Competition in the Ziqni database |

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
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |

## createSimpleCompetitionsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> createSimpleCompetitions createSimpleCompetitionsWithHttpInfo(body)



Create a Simple Competition in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        CreateSimpleCompetitionRequest body = new CreateSimpleCompetitionRequest(); // CreateSimpleCompetitionRequest | Create a Competition in the Ziqni database
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.createSimpleCompetitionsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CompetitionsApi#createSimpleCompetitions");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#createSimpleCompetitions");
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
 **body** | [**CreateSimpleCompetitionRequest**](CreateSimpleCompetitionRequest.md)| Create a Competition in the Ziqni database |

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
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |


## getCompetitions

> CompletableFuture<CompetitionResponse> getCompetitions(id, limit, skip)



Returns a list of Competitions. This assumes that competitions have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<CompetitionResponse> result = apiInstance.getCompetitions(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#getCompetitions");
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

CompletableFuture<[**CompetitionResponse**](CompetitionResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of competitions and/or errors |  -  |
| **400** | A list of competitions and/or errors |  -  |
| **401** | A list of competitions and/or errors |  -  |
| **403** | A list of competitions and/or errors |  -  |
| **404** | A list of competitions and/or errors |  -  |
| **413** | A list of competitions and/or errors |  -  |
| **500** | A list of competitions and/or errors |  -  |
| **501** | A list of competitions and/or errors |  -  |
| **503** | A list of competitions and/or errors |  -  |

## getCompetitionsWithHttpInfo

> CompletableFuture<ApiResponse<CompetitionResponse>> getCompetitions getCompetitionsWithHttpInfo(id, limit, skip)



Returns a list of Competitions. This assumes that competitions have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<CompetitionResponse>> response = apiInstance.getCompetitionsWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CompetitionsApi#getCompetitions");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#getCompetitions");
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

CompletableFuture<ApiResponse<[**CompetitionResponse**](CompetitionResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of competitions and/or errors |  -  |
| **400** | A list of competitions and/or errors |  -  |
| **401** | A list of competitions and/or errors |  -  |
| **403** | A list of competitions and/or errors |  -  |
| **404** | A list of competitions and/or errors |  -  |
| **413** | A list of competitions and/or errors |  -  |
| **500** | A list of competitions and/or errors |  -  |
| **501** | A list of competitions and/or errors |  -  |
| **503** | A list of competitions and/or errors |  -  |


## getCompetitionsByQuery

> CompletableFuture<CompetitionResponse> getCompetitionsByQuery(body)



Retrieve Competitions from Ziqni database by unique Competition ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Competitions from Ziqni database by unique Competition ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<CompetitionResponse> result = apiInstance.getCompetitionsByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#getCompetitionsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Competitions from Ziqni database by unique Competition ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<[**CompetitionResponse**](CompetitionResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of competitions and/or errors |  -  |
| **400** | A list of competitions and/or errors |  -  |
| **401** | A list of competitions and/or errors |  -  |
| **403** | A list of competitions and/or errors |  -  |
| **404** | A list of competitions and/or errors |  -  |
| **413** | A list of competitions and/or errors |  -  |
| **500** | A list of competitions and/or errors |  -  |
| **501** | A list of competitions and/or errors |  -  |
| **503** | A list of competitions and/or errors |  -  |

## getCompetitionsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<CompetitionResponse>> getCompetitionsByQuery getCompetitionsByQueryWithHttpInfo(body)



Retrieve Competitions from Ziqni database by unique Competition ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Competitions from Ziqni database by unique Competition ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<CompetitionResponse>> response = apiInstance.getCompetitionsByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CompetitionsApi#getCompetitionsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#getCompetitionsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Competitions from Ziqni database by unique Competition ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<ApiResponse<[**CompetitionResponse**](CompetitionResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of competitions and/or errors |  -  |
| **400** | A list of competitions and/or errors |  -  |
| **401** | A list of competitions and/or errors |  -  |
| **403** | A list of competitions and/or errors |  -  |
| **404** | A list of competitions and/or errors |  -  |
| **413** | A list of competitions and/or errors |  -  |
| **500** | A list of competitions and/or errors |  -  |
| **501** | A list of competitions and/or errors |  -  |
| **503** | A list of competitions and/or errors |  -  |


## getCompetitionsToClone

> CompletableFuture<CloneCompetitionResponse> getCompetitionsToClone(id)

Get Competition To Clone

Clones a Competition for the identifier provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<CloneCompetitionResponse> result = apiInstance.getCompetitionsToClone(id);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#getCompetitionsToClone");
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
 **id** | **String**| Unique identifier of the resource |

### Return type

CompletableFuture<[**CloneCompetitionResponse**](CloneCompetitionResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **400** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **401** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **403** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **404** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **413** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **500** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **501** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **503** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |

## getCompetitionsToCloneWithHttpInfo

> CompletableFuture<ApiResponse<CloneCompetitionResponse>> getCompetitionsToClone getCompetitionsToCloneWithHttpInfo(id)

Get Competition To Clone

Clones a Competition for the identifier provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<ApiResponse<CloneCompetitionResponse>> response = apiInstance.getCompetitionsToCloneWithHttpInfo(id);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CompetitionsApi#getCompetitionsToClone");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#getCompetitionsToClone");
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
 **id** | **String**| Unique identifier of the resource |

### Return type

CompletableFuture<ApiResponse<[**CloneCompetitionResponse**](CloneCompetitionResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **400** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **401** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **403** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **404** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **413** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **500** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **501** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **503** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |


## getLeaderboardByCompetitionId

> CompletableFuture<CompetitionLeaderboardResponse> getLeaderboardByCompetitionId(id, limit, skip)



Use /leadeboard instead. Returns a list of Leaderborads for the Competition id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<CompetitionLeaderboardResponse> result = apiInstance.getLeaderboardByCompetitionId(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#getLeaderboardByCompetitionId");
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
 **id** | **String**| Unique identifier of the resource |
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**CompetitionLeaderboardResponse**](CompetitionLeaderboardResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Contests Leaderboards and/or errors |  -  |
| **400** | A list of Contests Leaderboards and/or errors |  -  |
| **401** | A list of Contests Leaderboards and/or errors |  -  |
| **403** | A list of Contests Leaderboards and/or errors |  -  |
| **404** | A list of Contests Leaderboards and/or errors |  -  |
| **413** | A list of Contests Leaderboards and/or errors |  -  |
| **500** | A list of Contests Leaderboards and/or errors |  -  |
| **501** | A list of Contests Leaderboards and/or errors |  -  |
| **503** | A list of Contests Leaderboards and/or errors |  -  |

## getLeaderboardByCompetitionIdWithHttpInfo

> CompletableFuture<ApiResponse<CompetitionLeaderboardResponse>> getLeaderboardByCompetitionId getLeaderboardByCompetitionIdWithHttpInfo(id, limit, skip)



Use /leadeboard instead. Returns a list of Leaderborads for the Competition id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<CompetitionLeaderboardResponse>> response = apiInstance.getLeaderboardByCompetitionIdWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CompetitionsApi#getLeaderboardByCompetitionId");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#getLeaderboardByCompetitionId");
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
 **id** | **String**| Unique identifier of the resource |
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**CompetitionLeaderboardResponse**](CompetitionLeaderboardResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Contests Leaderboards and/or errors |  -  |
| **400** | A list of Contests Leaderboards and/or errors |  -  |
| **401** | A list of Contests Leaderboards and/or errors |  -  |
| **403** | A list of Contests Leaderboards and/or errors |  -  |
| **404** | A list of Contests Leaderboards and/or errors |  -  |
| **413** | A list of Contests Leaderboards and/or errors |  -  |
| **500** | A list of Contests Leaderboards and/or errors |  -  |
| **501** | A list of Contests Leaderboards and/or errors |  -  |
| **503** | A list of Contests Leaderboards and/or errors |  -  |


## updateCompetitions

> CompletableFuture<ModelApiResponse> updateCompetitions(body)



Update an existing Competition in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        UpdateCompetitionRequest body = new UpdateCompetitionRequest(); // UpdateCompetitionRequest | Update a Competition in the Ziqni database. * A Competitions Id must exist in the Ziqni database for update
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateCompetitions(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#updateCompetitions");
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
 **body** | [**UpdateCompetitionRequest**](UpdateCompetitionRequest.md)| Update a Competition in the Ziqni database. * A Competitions Id must exist in the Ziqni database for update |

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
| **202** | Accepted |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |

## updateCompetitionsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateCompetitions updateCompetitionsWithHttpInfo(body)



Update an existing Competition in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        UpdateCompetitionRequest body = new UpdateCompetitionRequest(); // UpdateCompetitionRequest | Update a Competition in the Ziqni database. * A Competitions Id must exist in the Ziqni database for update
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateCompetitionsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CompetitionsApi#updateCompetitions");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#updateCompetitions");
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
 **body** | [**UpdateCompetitionRequest**](UpdateCompetitionRequest.md)| Update a Competition in the Ziqni database. * A Competitions Id must exist in the Ziqni database for update |

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
| **202** | Accepted |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |


## updateCompetitionsState

> CompletableFuture<ModelApiResponse> updateCompetitionsState(body)



Manages the Competitions state

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        List<UpdateCompetitionStatusRequest> body = Arrays.asList(); // List<UpdateCompetitionStatusRequest> | Updates the state of the Competition
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateCompetitionsState(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#updateCompetitionsState");
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
 **body** | [**List&lt;UpdateCompetitionStatusRequest&gt;**](UpdateCompetitionStatusRequest.md)| Updates the state of the Competition | [optional]

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

## updateCompetitionsStateWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateCompetitionsState updateCompetitionsStateWithHttpInfo(body)



Manages the Competitions state

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CompetitionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CompetitionsApi apiInstance = new CompetitionsApi(defaultClient);
        List<UpdateCompetitionStatusRequest> body = Arrays.asList(); // List<UpdateCompetitionStatusRequest> | Updates the state of the Competition
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateCompetitionsStateWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CompetitionsApi#updateCompetitionsState");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CompetitionsApi#updateCompetitionsState");
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
 **body** | [**List&lt;UpdateCompetitionStatusRequest&gt;**](UpdateCompetitionStatusRequest.md)| Updates the state of the Competition | [optional]

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

