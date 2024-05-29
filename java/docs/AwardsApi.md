# AwardsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**claimAwards**](AwardsApi.md#claimAwards) | **PUT** /awards/claim | Claim awards
[**claimAwardsWithHttpInfo**](AwardsApi.md#claimAwardsWithHttpInfo) | **PUT** /awards/claim | Claim awards
[**getAwards**](AwardsApi.md#getAwards) | **GET** /awards | Get awards
[**getAwardsWithHttpInfo**](AwardsApi.md#getAwardsWithHttpInfo) | **GET** /awards | Get awards
[**getAwardsByQuery**](AwardsApi.md#getAwardsByQuery) | **POST** /awards/query | Query Awards
[**getAwardsByQueryWithHttpInfo**](AwardsApi.md#getAwardsByQueryWithHttpInfo) | **POST** /awards/query | Query Awards
[**updateAwards**](AwardsApi.md#updateAwards) | **PUT** /awards | Update awards
[**updateAwardsWithHttpInfo**](AwardsApi.md#updateAwardsWithHttpInfo) | **PUT** /awards | Update awards



## claimAwards

> CompletableFuture<ModelApiResponse> claimAwards(body)

Claim awards

Claim Awards that need to be actioned at

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AwardsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AwardsApi apiInstance = new AwardsApi(defaultClient);
        List<ClaimAwardRequest> body = Arrays.asList(); // List<ClaimAwardRequest> | Claim Awards
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.claimAwards(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AwardsApi#claimAwards");
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
 **body** | [**List&lt;ClaimAwardRequest&gt;**](ClaimAwardRequest.md)| Claim Awards |

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

## claimAwardsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> claimAwards claimAwardsWithHttpInfo(body)

Claim awards

Claim Awards that need to be actioned at

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AwardsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AwardsApi apiInstance = new AwardsApi(defaultClient);
        List<ClaimAwardRequest> body = Arrays.asList(); // List<ClaimAwardRequest> | Claim Awards
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.claimAwardsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AwardsApi#claimAwards");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AwardsApi#claimAwards");
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
 **body** | [**List&lt;ClaimAwardRequest&gt;**](ClaimAwardRequest.md)| Claim Awards |

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


## getAwards

> CompletableFuture<AwardResponse> getAwards(id, limit, skip)

Get awards

Returns a list of Awards.

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AwardsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AwardsApi apiInstance = new AwardsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<AwardResponse> result = apiInstance.getAwards(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AwardsApi#getAwards");
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

CompletableFuture<[**AwardResponse**](AwardResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of awards and/or errors |  -  |
| **400** | A list of awards and/or errors |  -  |
| **401** | A list of awards and/or errors |  -  |
| **403** | A list of awards and/or errors |  -  |
| **404** | A list of awards and/or errors |  -  |
| **413** | A list of awards and/or errors |  -  |
| **500** | A list of awards and/or errors |  -  |
| **501** | A list of awards and/or errors |  -  |
| **503** | A list of awards and/or errors |  -  |

## getAwardsWithHttpInfo

> CompletableFuture<ApiResponse<AwardResponse>> getAwards getAwardsWithHttpInfo(id, limit, skip)

Get awards

Returns a list of Awards.

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AwardsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AwardsApi apiInstance = new AwardsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<AwardResponse>> response = apiInstance.getAwardsWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AwardsApi#getAwards");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AwardsApi#getAwards");
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

CompletableFuture<ApiResponse<[**AwardResponse**](AwardResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of awards and/or errors |  -  |
| **400** | A list of awards and/or errors |  -  |
| **401** | A list of awards and/or errors |  -  |
| **403** | A list of awards and/or errors |  -  |
| **404** | A list of awards and/or errors |  -  |
| **413** | A list of awards and/or errors |  -  |
| **500** | A list of awards and/or errors |  -  |
| **501** | A list of awards and/or errors |  -  |
| **503** | A list of awards and/or errors |  -  |


## getAwardsByQuery

> CompletableFuture<AwardResponse> getAwardsByQuery(body)

Query Awards

Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AwardsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AwardsApi apiInstance = new AwardsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Awards from Ziqni database by unique Awards ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<AwardResponse> result = apiInstance.getAwardsByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AwardsApi#getAwardsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<[**AwardResponse**](AwardResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of awards and/or errors |  -  |
| **400** | A list of awards and/or errors |  -  |
| **401** | A list of awards and/or errors |  -  |
| **403** | A list of awards and/or errors |  -  |
| **404** | A list of awards and/or errors |  -  |
| **413** | A list of awards and/or errors |  -  |
| **500** | A list of awards and/or errors |  -  |
| **501** | A list of awards and/or errors |  -  |
| **503** | A list of awards and/or errors |  -  |

## getAwardsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<AwardResponse>> getAwardsByQuery getAwardsByQueryWithHttpInfo(body)

Query Awards

Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AwardsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AwardsApi apiInstance = new AwardsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Awards from Ziqni database by unique Awards ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<AwardResponse>> response = apiInstance.getAwardsByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AwardsApi#getAwardsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AwardsApi#getAwardsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<ApiResponse<[**AwardResponse**](AwardResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of awards and/or errors |  -  |
| **400** | A list of awards and/or errors |  -  |
| **401** | A list of awards and/or errors |  -  |
| **403** | A list of awards and/or errors |  -  |
| **404** | A list of awards and/or errors |  -  |
| **413** | A list of awards and/or errors |  -  |
| **500** | A list of awards and/or errors |  -  |
| **501** | A list of awards and/or errors |  -  |
| **503** | A list of awards and/or errors |  -  |


## updateAwards

> CompletableFuture<ModelApiResponse> updateAwards(body)

Update awards

Update an existing award in the Ziqni system

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AwardsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AwardsApi apiInstance = new AwardsApi(defaultClient);
        List<UpdateAwardRequest> body = Arrays.asList(); // List<UpdateAwardRequest> | Update awards in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateAwards(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AwardsApi#updateAwards");
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
 **body** | [**List&lt;UpdateAwardRequest&gt;**](UpdateAwardRequest.md)| Update awards in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field |

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

## updateAwardsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateAwards updateAwardsWithHttpInfo(body)

Update awards

Update an existing award in the Ziqni system

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AwardsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AwardsApi apiInstance = new AwardsApi(defaultClient);
        List<UpdateAwardRequest> body = Arrays.asList(); // List<UpdateAwardRequest> | Update awards in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateAwardsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AwardsApi#updateAwards");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AwardsApi#updateAwards");
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
 **body** | [**List&lt;UpdateAwardRequest&gt;**](UpdateAwardRequest.md)| Update awards in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field |

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

