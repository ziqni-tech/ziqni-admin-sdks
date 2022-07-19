# UnitsOfMeasureApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUnitsOfMeasure**](UnitsOfMeasureApi.md#createUnitsOfMeasure) | **POST** /units-of-measure | 
[**createUnitsOfMeasureWithHttpInfo**](UnitsOfMeasureApi.md#createUnitsOfMeasureWithHttpInfo) | **POST** /units-of-measure | 
[**deleteCollaboratorsByQuery**](UnitsOfMeasureApi.md#deleteCollaboratorsByQuery) | **POST** /collaborators/delete | NOT AVAILABLE IN CURRENT RELEASE
[**deleteCollaboratorsByQueryWithHttpInfo**](UnitsOfMeasureApi.md#deleteCollaboratorsByQueryWithHttpInfo) | **POST** /collaborators/delete | NOT AVAILABLE IN CURRENT RELEASE
[**deleteUnitsOfMeasure**](UnitsOfMeasureApi.md#deleteUnitsOfMeasure) | **DELETE** /units-of-measure | 
[**deleteUnitsOfMeasureWithHttpInfo**](UnitsOfMeasureApi.md#deleteUnitsOfMeasureWithHttpInfo) | **DELETE** /units-of-measure | 
[**deleteUnitsOfMeasureByQuery**](UnitsOfMeasureApi.md#deleteUnitsOfMeasureByQuery) | **POST** /units-of-measure/delete | NOT AVAILABLE IN CURRENT RELEASE
[**deleteUnitsOfMeasureByQueryWithHttpInfo**](UnitsOfMeasureApi.md#deleteUnitsOfMeasureByQueryWithHttpInfo) | **POST** /units-of-measure/delete | NOT AVAILABLE IN CURRENT RELEASE
[**getUnitsOfMeasure**](UnitsOfMeasureApi.md#getUnitsOfMeasure) | **GET** /units-of-measure | 
[**getUnitsOfMeasureWithHttpInfo**](UnitsOfMeasureApi.md#getUnitsOfMeasureWithHttpInfo) | **GET** /units-of-measure | 
[**getUnitsOfMeasureByQuery**](UnitsOfMeasureApi.md#getUnitsOfMeasureByQuery) | **POST** /units-of-measure/query | 
[**getUnitsOfMeasureByQueryWithHttpInfo**](UnitsOfMeasureApi.md#getUnitsOfMeasureByQueryWithHttpInfo) | **POST** /units-of-measure/query | 
[**updateUnitsOfMeasure**](UnitsOfMeasureApi.md#updateUnitsOfMeasure) | **PUT** /units-of-measure | 
[**updateUnitsOfMeasureWithHttpInfo**](UnitsOfMeasureApi.md#updateUnitsOfMeasureWithHttpInfo) | **PUT** /units-of-measure | 



## createUnitsOfMeasure

> CompletableFuture<ModelApiResponse> createUnitsOfMeasure(body)



Create a new Unit of measure in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        List<CreateUnitOfMeasureRequest> body = Arrays.asList(); // List<CreateUnitOfMeasureRequest> | Create a Unit of measure in the Ziqni database
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.createUnitsOfMeasure(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#createUnitsOfMeasure");
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
 **body** | [**List&lt;CreateUnitOfMeasureRequest&gt;**](CreateUnitOfMeasureRequest.md)| Create a Unit of measure in the Ziqni database |

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

## createUnitsOfMeasureWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> createUnitsOfMeasure createUnitsOfMeasureWithHttpInfo(body)



Create a new Unit of measure in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        List<CreateUnitOfMeasureRequest> body = Arrays.asList(); // List<CreateUnitOfMeasureRequest> | Create a Unit of measure in the Ziqni database
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.createUnitsOfMeasureWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling UnitsOfMeasureApi#createUnitsOfMeasure");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#createUnitsOfMeasure");
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
 **body** | [**List&lt;CreateUnitOfMeasureRequest&gt;**](CreateUnitOfMeasureRequest.md)| Create a Unit of measure in the Ziqni database |

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


## deleteCollaboratorsByQuery

> CompletableFuture<ModelApiResponse> deleteCollaboratorsByQuery(body)

NOT AVAILABLE IN CURRENT RELEASE

Remove collaborators from account

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Remove collaborators from account
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteCollaboratorsByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#deleteCollaboratorsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Remove collaborators from account | [optional]

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

## deleteCollaboratorsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteCollaboratorsByQuery deleteCollaboratorsByQueryWithHttpInfo(body)

NOT AVAILABLE IN CURRENT RELEASE

Remove collaborators from account

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Remove collaborators from account
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteCollaboratorsByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling UnitsOfMeasureApi#deleteCollaboratorsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#deleteCollaboratorsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Remove collaborators from account | [optional]

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


## deleteUnitsOfMeasure

> CompletableFuture<ModelApiResponse> deleteUnitsOfMeasure(id)



Delete the Unit of measured for a given identifier specified

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteUnitsOfMeasure(id);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#deleteUnitsOfMeasure");
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
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |

## deleteUnitsOfMeasureWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteUnitsOfMeasure deleteUnitsOfMeasureWithHttpInfo(id)



Delete the Unit of measured for a given identifier specified

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteUnitsOfMeasureWithHttpInfo(id);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling UnitsOfMeasureApi#deleteUnitsOfMeasure");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#deleteUnitsOfMeasure");
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
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |


## deleteUnitsOfMeasureByQuery

> CompletableFuture<ModelApiResponse> deleteUnitsOfMeasureByQuery(body)

NOT AVAILABLE IN CURRENT RELEASE

Delete Units of measure from Ziqni database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteUnitsOfMeasureByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#deleteUnitsOfMeasureByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Units of measure from Ziqni database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method | [optional]

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

## deleteUnitsOfMeasureByQueryWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteUnitsOfMeasureByQuery deleteUnitsOfMeasureByQueryWithHttpInfo(body)

NOT AVAILABLE IN CURRENT RELEASE

Delete Units of measure from Ziqni database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteUnitsOfMeasureByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling UnitsOfMeasureApi#deleteUnitsOfMeasureByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#deleteUnitsOfMeasureByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Units of measure from Ziqni database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method | [optional]

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


## getUnitsOfMeasure

> CompletableFuture<UnitOfMeasureResponse> getUnitsOfMeasure(id, limit, skip)



Returns a list of Units of measure. This assumes that units of measure have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<UnitOfMeasureResponse> result = apiInstance.getUnitsOfMeasure(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#getUnitsOfMeasure");
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

CompletableFuture<[**UnitOfMeasureResponse**](UnitOfMeasureResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of unit of measure and/or errors |  -  |
| **400** | A list of unit of measure and/or errors |  -  |
| **401** | A list of unit of measure and/or errors |  -  |
| **403** | A list of unit of measure and/or errors |  -  |
| **404** | A list of unit of measure and/or errors |  -  |
| **413** | A list of unit of measure and/or errors |  -  |
| **500** | A list of unit of measure and/or errors |  -  |
| **501** | A list of unit of measure and/or errors |  -  |
| **503** | A list of unit of measure and/or errors |  -  |

## getUnitsOfMeasureWithHttpInfo

> CompletableFuture<ApiResponse<UnitOfMeasureResponse>> getUnitsOfMeasure getUnitsOfMeasureWithHttpInfo(id, limit, skip)



Returns a list of Units of measure. This assumes that units of measure have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<UnitOfMeasureResponse>> response = apiInstance.getUnitsOfMeasureWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling UnitsOfMeasureApi#getUnitsOfMeasure");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#getUnitsOfMeasure");
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

CompletableFuture<ApiResponse<[**UnitOfMeasureResponse**](UnitOfMeasureResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of unit of measure and/or errors |  -  |
| **400** | A list of unit of measure and/or errors |  -  |
| **401** | A list of unit of measure and/or errors |  -  |
| **403** | A list of unit of measure and/or errors |  -  |
| **404** | A list of unit of measure and/or errors |  -  |
| **413** | A list of unit of measure and/or errors |  -  |
| **500** | A list of unit of measure and/or errors |  -  |
| **501** | A list of unit of measure and/or errors |  -  |
| **503** | A list of unit of measure and/or errors |  -  |


## getUnitsOfMeasureByQuery

> CompletableFuture<UnitOfMeasureResponse> getUnitsOfMeasureByQuery(body)



Retrieve Units of measure from Ziqni database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<UnitOfMeasureResponse> result = apiInstance.getUnitsOfMeasureByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#getUnitsOfMeasureByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Units of measure from Ziqni database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<[**UnitOfMeasureResponse**](UnitOfMeasureResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of unit of measure and/or errors |  -  |
| **400** | A list of unit of measure and/or errors |  -  |
| **401** | A list of unit of measure and/or errors |  -  |
| **403** | A list of unit of measure and/or errors |  -  |
| **404** | A list of unit of measure and/or errors |  -  |
| **413** | A list of unit of measure and/or errors |  -  |
| **500** | A list of unit of measure and/or errors |  -  |
| **501** | A list of unit of measure and/or errors |  -  |
| **503** | A list of unit of measure and/or errors |  -  |

## getUnitsOfMeasureByQueryWithHttpInfo

> CompletableFuture<ApiResponse<UnitOfMeasureResponse>> getUnitsOfMeasureByQuery getUnitsOfMeasureByQueryWithHttpInfo(body)



Retrieve Units of measure from Ziqni database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<UnitOfMeasureResponse>> response = apiInstance.getUnitsOfMeasureByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling UnitsOfMeasureApi#getUnitsOfMeasureByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#getUnitsOfMeasureByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Units of measure from Ziqni database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<ApiResponse<[**UnitOfMeasureResponse**](UnitOfMeasureResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of unit of measure and/or errors |  -  |
| **400** | A list of unit of measure and/or errors |  -  |
| **401** | A list of unit of measure and/or errors |  -  |
| **403** | A list of unit of measure and/or errors |  -  |
| **404** | A list of unit of measure and/or errors |  -  |
| **413** | A list of unit of measure and/or errors |  -  |
| **500** | A list of unit of measure and/or errors |  -  |
| **501** | A list of unit of measure and/or errors |  -  |
| **503** | A list of unit of measure and/or errors |  -  |


## updateUnitsOfMeasure

> CompletableFuture<ModelApiResponse> updateUnitsOfMeasure(body)



Update an existing Unit of measure in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        List<UpdateUnitOfMeasureRequest> body = Arrays.asList(); // List<UpdateUnitOfMeasureRequest> | Update a Unit of measure in the Ziqni database.
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateUnitsOfMeasure(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#updateUnitsOfMeasure");
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
 **body** | [**List&lt;UpdateUnitOfMeasureRequest&gt;**](UpdateUnitOfMeasureRequest.md)| Update a Unit of measure in the Ziqni database. |

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

## updateUnitsOfMeasureWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateUnitsOfMeasure updateUnitsOfMeasureWithHttpInfo(body)



Update an existing Unit of measure in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.UnitsOfMeasureApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        UnitsOfMeasureApi apiInstance = new UnitsOfMeasureApi(defaultClient);
        List<UpdateUnitOfMeasureRequest> body = Arrays.asList(); // List<UpdateUnitOfMeasureRequest> | Update a Unit of measure in the Ziqni database.
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateUnitsOfMeasureWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling UnitsOfMeasureApi#updateUnitsOfMeasure");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling UnitsOfMeasureApi#updateUnitsOfMeasure");
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
 **body** | [**List&lt;UpdateUnitOfMeasureRequest&gt;**](UpdateUnitOfMeasureRequest.md)| Update a Unit of measure in the Ziqni database. |

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

