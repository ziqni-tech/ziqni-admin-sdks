# ContestsApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createContests**](ContestsApi.md#createContests) | **POST** /contests | 
[**createContestsWithHttpInfo**](ContestsApi.md#createContestsWithHttpInfo) | **POST** /contests | 
[**getContests**](ContestsApi.md#getContests) | **GET** /contests | 
[**getContestsWithHttpInfo**](ContestsApi.md#getContestsWithHttpInfo) | **GET** /contests | 
[**getContestsByQuery**](ContestsApi.md#getContestsByQuery) | **POST** /contests/query | 
[**getContestsByQueryWithHttpInfo**](ContestsApi.md#getContestsByQueryWithHttpInfo) | **POST** /contests/query | 
[**getContestsLeaderboardById**](ContestsApi.md#getContestsLeaderboardById) | **GET** /contests/{id}/leaderboard | 
[**getContestsLeaderboardByIdWithHttpInfo**](ContestsApi.md#getContestsLeaderboardByIdWithHttpInfo) | **GET** /contests/{id}/leaderboard | 
[**getContestsToClone**](ContestsApi.md#getContestsToClone) | **GET** /contests/{id}/clone | 
[**getContestsToCloneWithHttpInfo**](ContestsApi.md#getContestsToCloneWithHttpInfo) | **GET** /contests/{id}/clone | 
[**updateContest**](ContestsApi.md#updateContest) | **PUT** /contests | 
[**updateContestWithHttpInfo**](ContestsApi.md#updateContestWithHttpInfo) | **PUT** /contests | 
[**updateContestsState**](ContestsApi.md#updateContestsState) | **PUT** /contests/state | 
[**updateContestsStateWithHttpInfo**](ContestsApi.md#updateContestsStateWithHttpInfo) | **PUT** /contests/state | 



## createContests

> CompletableFuture<ModelApiResponse> createContests(body)



Create a new Contests in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        CreateContestForCompetitionRequest body = new CreateContestForCompetitionRequest(); // CreateContestForCompetitionRequest | Create a Contests in the Ziqni database
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.createContests(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#createContests");
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
 **body** | [**CreateContestForCompetitionRequest**](CreateContestForCompetitionRequest.md)| Create a Contests in the Ziqni database |

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

## createContestsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> createContests createContestsWithHttpInfo(body)



Create a new Contests in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        CreateContestForCompetitionRequest body = new CreateContestForCompetitionRequest(); // CreateContestForCompetitionRequest | Create a Contests in the Ziqni database
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.createContestsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ContestsApi#createContests");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#createContests");
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
 **body** | [**CreateContestForCompetitionRequest**](CreateContestForCompetitionRequest.md)| Create a Contests in the Ziqni database |

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


## getContests

> CompletableFuture<ContestResponse> getContests(id, limit, skip)



Returns a list of Contests. This assumes that contests have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ContestResponse> result = apiInstance.getContests(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#getContests");
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

CompletableFuture<[**ContestResponse**](ContestResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of contests and/or errors |  -  |
| **400** | A list of contests and/or errors |  -  |
| **401** | A list of contests and/or errors |  -  |
| **403** | A list of contests and/or errors |  -  |
| **404** | A list of contests and/or errors |  -  |
| **413** | A list of contests and/or errors |  -  |
| **500** | A list of contests and/or errors |  -  |
| **501** | A list of contests and/or errors |  -  |
| **503** | A list of contests and/or errors |  -  |

## getContestsWithHttpInfo

> CompletableFuture<ApiResponse<ContestResponse>> getContests getContestsWithHttpInfo(id, limit, skip)



Returns a list of Contests. This assumes that contests have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<ContestResponse>> response = apiInstance.getContestsWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ContestsApi#getContests");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#getContests");
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

CompletableFuture<ApiResponse<[**ContestResponse**](ContestResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of contests and/or errors |  -  |
| **400** | A list of contests and/or errors |  -  |
| **401** | A list of contests and/or errors |  -  |
| **403** | A list of contests and/or errors |  -  |
| **404** | A list of contests and/or errors |  -  |
| **413** | A list of contests and/or errors |  -  |
| **500** | A list of contests and/or errors |  -  |
| **501** | A list of contests and/or errors |  -  |
| **503** | A list of contests and/or errors |  -  |


## getContestsByQuery

> CompletableFuture<ContestResponse> getContestsByQuery(body)



Retrieve Contests from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Contests from Ziqni database by unique Contest ID's or any other Post body parameters using the POST method
        try {
            CompletableFuture<ContestResponse> result = apiInstance.getContestsByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#getContestsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Contests from Ziqni database by unique Contest ID&#39;s or any other Post body parameters using the POST method | [optional]

### Return type

CompletableFuture<[**ContestResponse**](ContestResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of contests and/or errors |  -  |
| **400** | A list of contests and/or errors |  -  |
| **401** | A list of contests and/or errors |  -  |
| **403** | A list of contests and/or errors |  -  |
| **404** | A list of contests and/or errors |  -  |
| **413** | A list of contests and/or errors |  -  |
| **500** | A list of contests and/or errors |  -  |
| **501** | A list of contests and/or errors |  -  |
| **503** | A list of contests and/or errors |  -  |

## getContestsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<ContestResponse>> getContestsByQuery getContestsByQueryWithHttpInfo(body)



Retrieve Contests from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Contests from Ziqni database by unique Contest ID's or any other Post body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<ContestResponse>> response = apiInstance.getContestsByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ContestsApi#getContestsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#getContestsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Contests from Ziqni database by unique Contest ID&#39;s or any other Post body parameters using the POST method | [optional]

### Return type

CompletableFuture<ApiResponse<[**ContestResponse**](ContestResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of contests and/or errors |  -  |
| **400** | A list of contests and/or errors |  -  |
| **401** | A list of contests and/or errors |  -  |
| **403** | A list of contests and/or errors |  -  |
| **404** | A list of contests and/or errors |  -  |
| **413** | A list of contests and/or errors |  -  |
| **500** | A list of contests and/or errors |  -  |
| **501** | A list of contests and/or errors |  -  |
| **503** | A list of contests and/or errors |  -  |


## getContestsLeaderboardById

> CompletableFuture<ContestLeaderboardResponse> getContestsLeaderboardById(id, limit, skip)



Returns a leaderborad for the Contests id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ContestLeaderboardResponse> result = apiInstance.getContestsLeaderboardById(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#getContestsLeaderboardById");
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

CompletableFuture<[**ContestLeaderboardResponse**](ContestLeaderboardResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A leaderboard for the contest and/or errors |  -  |
| **400** | A leaderboard for the contest and/or errors |  -  |
| **401** | A leaderboard for the contest and/or errors |  -  |
| **403** | A leaderboard for the contest and/or errors |  -  |
| **404** | A leaderboard for the contest and/or errors |  -  |
| **413** | A leaderboard for the contest and/or errors |  -  |
| **500** | A leaderboard for the contest and/or errors |  -  |
| **501** | A leaderboard for the contest and/or errors |  -  |
| **503** | A leaderboard for the contest and/or errors |  -  |

## getContestsLeaderboardByIdWithHttpInfo

> CompletableFuture<ApiResponse<ContestLeaderboardResponse>> getContestsLeaderboardById getContestsLeaderboardByIdWithHttpInfo(id, limit, skip)



Returns a leaderborad for the Contests id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<ContestLeaderboardResponse>> response = apiInstance.getContestsLeaderboardByIdWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ContestsApi#getContestsLeaderboardById");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#getContestsLeaderboardById");
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

CompletableFuture<ApiResponse<[**ContestLeaderboardResponse**](ContestLeaderboardResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A leaderboard for the contest and/or errors |  -  |
| **400** | A leaderboard for the contest and/or errors |  -  |
| **401** | A leaderboard for the contest and/or errors |  -  |
| **403** | A leaderboard for the contest and/or errors |  -  |
| **404** | A leaderboard for the contest and/or errors |  -  |
| **413** | A leaderboard for the contest and/or errors |  -  |
| **500** | A leaderboard for the contest and/or errors |  -  |
| **501** | A leaderboard for the contest and/or errors |  -  |
| **503** | A leaderboard for the contest and/or errors |  -  |


## getContestsToClone

> CompletableFuture<CloneContestResponse> getContestsToClone(id)



Clones a Contest for the identifier provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<CloneContestResponse> result = apiInstance.getContestsToClone(id);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#getContestsToClone");
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

CompletableFuture<[**CloneContestResponse**](CloneContestResponse.md)>


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

## getContestsToCloneWithHttpInfo

> CompletableFuture<ApiResponse<CloneContestResponse>> getContestsToClone getContestsToCloneWithHttpInfo(id)



Clones a Contest for the identifier provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<ApiResponse<CloneContestResponse>> response = apiInstance.getContestsToCloneWithHttpInfo(id);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ContestsApi#getContestsToClone");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#getContestsToClone");
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

CompletableFuture<ApiResponse<[**CloneContestResponse**](CloneContestResponse.md)>>


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


## updateContest

> CompletableFuture<ModelApiResponse> updateContest(body)



Update an existing Contest in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        UpdateContestRequest body = new UpdateContestRequest(); // UpdateContestRequest | Update a Contest in the Ziqni database. * A Contests Id must exist in the Ziqni database for update
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateContest(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#updateContest");
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
 **body** | [**UpdateContestRequest**](UpdateContestRequest.md)| Update a Contest in the Ziqni database. * A Contests Id must exist in the Ziqni database for update |

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

## updateContestWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateContest updateContestWithHttpInfo(body)



Update an existing Contest in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        UpdateContestRequest body = new UpdateContestRequest(); // UpdateContestRequest | Update a Contest in the Ziqni database. * A Contests Id must exist in the Ziqni database for update
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateContestWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ContestsApi#updateContest");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#updateContest");
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
 **body** | [**UpdateContestRequest**](UpdateContestRequest.md)| Update a Contest in the Ziqni database. * A Contests Id must exist in the Ziqni database for update |

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


## updateContestsState

> CompletableFuture<ModelApiResponse> updateContestsState(body)



Manages the Contests state

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        List<UpdateContestStateRequest> body = Arrays.asList(); // List<UpdateContestStateRequest> | Updates the state of the Contest
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateContestsState(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#updateContestsState");
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
 **body** | [**List&lt;UpdateContestStateRequest&gt;**](UpdateContestStateRequest.md)| Updates the state of the Contest | [optional]

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

## updateContestsStateWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateContestsState updateContestsStateWithHttpInfo(body)



Manages the Contests state

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ContestsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ContestsApi apiInstance = new ContestsApi(defaultClient);
        List<UpdateContestStateRequest> body = Arrays.asList(); // List<UpdateContestStateRequest> | Updates the state of the Contest
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateContestsStateWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ContestsApi#updateContestsState");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ContestsApi#updateContestsState");
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
 **body** | [**List&lt;UpdateContestStateRequest&gt;**](UpdateContestStateRequest.md)| Updates the state of the Contest | [optional]

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

