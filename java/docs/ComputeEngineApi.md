# ComputeEngineApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createComputeEngines**](ComputeEngineApi.md#createComputeEngines) | **POST** /compute-engines | 
[**createComputeEnginesWithHttpInfo**](ComputeEngineApi.md#createComputeEnginesWithHttpInfo) | **POST** /compute-engines | 
[**deleteComputeEnginesById**](ComputeEngineApi.md#deleteComputeEnginesById) | **DELETE** /compute-engines/{id} | 
[**deleteComputeEnginesByIdWithHttpInfo**](ComputeEngineApi.md#deleteComputeEnginesByIdWithHttpInfo) | **DELETE** /compute-engines/{id} | 
[**deleteComputeEnginesByQuery**](ComputeEngineApi.md#deleteComputeEnginesByQuery) | **POST** /compute-engines/delete | NOT AVAILABLE IN CURRENT RELEASE
[**deleteComputeEnginesByQueryWithHttpInfo**](ComputeEngineApi.md#deleteComputeEnginesByQueryWithHttpInfo) | **POST** /compute-engines/delete | NOT AVAILABLE IN CURRENT RELEASE
[**getComputeEngines**](ComputeEngineApi.md#getComputeEngines) | **GET** /compute-engines | 
[**getComputeEnginesWithHttpInfo**](ComputeEngineApi.md#getComputeEnginesWithHttpInfo) | **GET** /compute-engines | 
[**getComputeEnginesById**](ComputeEngineApi.md#getComputeEnginesById) | **GET** /compute-engines/{id} | 
[**getComputeEnginesByIdWithHttpInfo**](ComputeEngineApi.md#getComputeEnginesByIdWithHttpInfo) | **GET** /compute-engines/{id} | 
[**getComputeEnginesByQuery**](ComputeEngineApi.md#getComputeEnginesByQuery) | **POST** /compute-engines/query | 
[**getComputeEnginesByQueryWithHttpInfo**](ComputeEngineApi.md#getComputeEnginesByQueryWithHttpInfo) | **POST** /compute-engines/query | 
[**updateComputeEngines**](ComputeEngineApi.md#updateComputeEngines) | **PUT** /compute-engines | 
[**updateComputeEnginesWithHttpInfo**](ComputeEngineApi.md#updateComputeEnginesWithHttpInfo) | **PUT** /compute-engines | 



## createComputeEngines

> CompletableFuture<ModelApiResponse> createComputeEngines(body)



Create a new Compute Engine in the Ziqni system

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        CreateComputeEngineRequest body = new CreateComputeEngineRequest(); // CreateComputeEngineRequest | Create a Compute Engine in the Ziqni system
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.createComputeEngines(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#createComputeEngines");
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
 **body** | [**CreateComputeEngineRequest**](CreateComputeEngineRequest.md)| Create a Compute Engine in the Ziqni system |

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

## createComputeEnginesWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> createComputeEngines createComputeEnginesWithHttpInfo(body)



Create a new Compute Engine in the Ziqni system

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        CreateComputeEngineRequest body = new CreateComputeEngineRequest(); // CreateComputeEngineRequest | Create a Compute Engine in the Ziqni system
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.createComputeEnginesWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ComputeEngineApi#createComputeEngines");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#createComputeEngines");
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
 **body** | [**CreateComputeEngineRequest**](CreateComputeEngineRequest.md)| Create a Compute Engine in the Ziqni system |

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


## deleteComputeEnginesById

> CompletableFuture<ModelApiResponse> deleteComputeEnginesById(id)



Delete the Compute Engine for a given identifier specified

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteComputeEnginesById(id);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#deleteComputeEnginesById");
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

## deleteComputeEnginesByIdWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteComputeEnginesById deleteComputeEnginesByIdWithHttpInfo(id)



Delete the Compute Engine for a given identifier specified

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteComputeEnginesByIdWithHttpInfo(id);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ComputeEngineApi#deleteComputeEnginesById");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#deleteComputeEnginesById");
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


## deleteComputeEnginesByQuery

> CompletableFuture<ModelApiResponse> deleteComputeEnginesByQuery(body)

NOT AVAILABLE IN CURRENT RELEASE

Delete an Compute Engine or a list of Compute Engines from Ziqni by query

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete an  Compute Engine or a list of Compute Engines from Ziqni by unique Compute Engine ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteComputeEnginesByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#deleteComputeEnginesByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete an  Compute Engine or a list of Compute Engines from Ziqni by unique Compute Engine ID&#39;s or any other POST body parameters using the POST method | [optional]

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
| **503** | A list of outcomes and/or errors |  -  |

## deleteComputeEnginesByQueryWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteComputeEnginesByQuery deleteComputeEnginesByQueryWithHttpInfo(body)

NOT AVAILABLE IN CURRENT RELEASE

Delete an Compute Engine or a list of Compute Engines from Ziqni by query

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete an  Compute Engine or a list of Compute Engines from Ziqni by unique Compute Engine ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteComputeEnginesByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ComputeEngineApi#deleteComputeEnginesByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#deleteComputeEnginesByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete an  Compute Engine or a list of Compute Engines from Ziqni by unique Compute Engine ID&#39;s or any other POST body parameters using the POST method | [optional]

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
| **503** | A list of outcomes and/or errors |  -  |


## getComputeEngines

> CompletableFuture<ComputeEngineResponse> getComputeEngines(id, limit, skip)



Returns a list of Compute Engines. This assumes that api keys have first been created via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ComputeEngineResponse> result = apiInstance.getComputeEngines(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#getComputeEngines");
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

CompletableFuture<[**ComputeEngineResponse**](ComputeEngineResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Compute Engines |  -  |
| **400** | List of Compute Engines |  -  |
| **401** | List of Compute Engines |  -  |
| **403** | List of Compute Engines |  -  |
| **404** | List of Compute Engines |  -  |
| **413** | List of Compute Engines |  -  |
| **500** | List of Compute Engines |  -  |
| **501** | List of Compute Engines |  -  |
| **503** | List of Compute Engines |  -  |

## getComputeEnginesWithHttpInfo

> CompletableFuture<ApiResponse<ComputeEngineResponse>> getComputeEngines getComputeEnginesWithHttpInfo(id, limit, skip)



Returns a list of Compute Engines. This assumes that api keys have first been created via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<ComputeEngineResponse>> response = apiInstance.getComputeEnginesWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ComputeEngineApi#getComputeEngines");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#getComputeEngines");
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

CompletableFuture<ApiResponse<[**ComputeEngineResponse**](ComputeEngineResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Compute Engines |  -  |
| **400** | List of Compute Engines |  -  |
| **401** | List of Compute Engines |  -  |
| **403** | List of Compute Engines |  -  |
| **404** | List of Compute Engines |  -  |
| **413** | List of Compute Engines |  -  |
| **500** | List of Compute Engines |  -  |
| **501** | List of Compute Engines |  -  |
| **503** | List of Compute Engines |  -  |


## getComputeEnginesById

> CompletableFuture<ComputeEngineResponse> getComputeEnginesById(id)



Returns an Compute Engine by identifier provided. This assumes that compute engines have first been created via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<ComputeEngineResponse> result = apiInstance.getComputeEnginesById(id);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#getComputeEnginesById");
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

CompletableFuture<[**ComputeEngineResponse**](ComputeEngineResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Compute Engines |  -  |
| **400** | List of Compute Engines |  -  |
| **401** | List of Compute Engines |  -  |
| **403** | List of Compute Engines |  -  |
| **404** | List of Compute Engines |  -  |
| **413** | List of Compute Engines |  -  |
| **500** | List of Compute Engines |  -  |
| **501** | List of Compute Engines |  -  |
| **503** | List of Compute Engines |  -  |

## getComputeEnginesByIdWithHttpInfo

> CompletableFuture<ApiResponse<ComputeEngineResponse>> getComputeEnginesById getComputeEnginesByIdWithHttpInfo(id)



Returns an Compute Engine by identifier provided. This assumes that compute engines have first been created via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<ApiResponse<ComputeEngineResponse>> response = apiInstance.getComputeEnginesByIdWithHttpInfo(id);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ComputeEngineApi#getComputeEnginesById");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#getComputeEnginesById");
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

CompletableFuture<ApiResponse<[**ComputeEngineResponse**](ComputeEngineResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Compute Engines |  -  |
| **400** | List of Compute Engines |  -  |
| **401** | List of Compute Engines |  -  |
| **403** | List of Compute Engines |  -  |
| **404** | List of Compute Engines |  -  |
| **413** | List of Compute Engines |  -  |
| **500** | List of Compute Engines |  -  |
| **501** | List of Compute Engines |  -  |
| **503** | List of Compute Engines |  -  |


## getComputeEnginesByQuery

> CompletableFuture<ComputeEngineResponse> getComputeEnginesByQuery(body)



Retrieve an Compute Engine or a list of Compute Engines by query

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve an  Compute Engine or a list of Compute Engines from Ziqni by unique Copute Engine ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ComputeEngineResponse> result = apiInstance.getComputeEnginesByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#getComputeEnginesByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve an  Compute Engine or a list of Compute Engines from Ziqni by unique Copute Engine ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<[**ComputeEngineResponse**](ComputeEngineResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Compute Engines |  -  |
| **400** | List of Compute Engines |  -  |
| **401** | List of Compute Engines |  -  |
| **403** | List of Compute Engines |  -  |
| **404** | List of Compute Engines |  -  |
| **413** | List of Compute Engines |  -  |
| **500** | List of Compute Engines |  -  |
| **501** | List of Compute Engines |  -  |
| **503** | List of Compute Engines |  -  |

## getComputeEnginesByQueryWithHttpInfo

> CompletableFuture<ApiResponse<ComputeEngineResponse>> getComputeEnginesByQuery getComputeEnginesByQueryWithHttpInfo(body)



Retrieve an Compute Engine or a list of Compute Engines by query

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve an  Compute Engine or a list of Compute Engines from Ziqni by unique Copute Engine ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<ComputeEngineResponse>> response = apiInstance.getComputeEnginesByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ComputeEngineApi#getComputeEnginesByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#getComputeEnginesByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve an  Compute Engine or a list of Compute Engines from Ziqni by unique Copute Engine ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<ApiResponse<[**ComputeEngineResponse**](ComputeEngineResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Compute Engines |  -  |
| **400** | List of Compute Engines |  -  |
| **401** | List of Compute Engines |  -  |
| **403** | List of Compute Engines |  -  |
| **404** | List of Compute Engines |  -  |
| **413** | List of Compute Engines |  -  |
| **500** | List of Compute Engines |  -  |
| **501** | List of Compute Engines |  -  |
| **503** | List of Compute Engines |  -  |


## updateComputeEngines

> CompletableFuture<ModelApiResponse> updateComputeEngines(body)



Update an existing Compute Engine in the Ziqni system

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        UpdateComputeEngineRequest body = new UpdateComputeEngineRequest(); // UpdateComputeEngineRequest | Update an Compute Engine in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateComputeEngines(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#updateComputeEngines");
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
 **body** | [**UpdateComputeEngineRequest**](UpdateComputeEngineRequest.md)| Update an Compute Engine in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field |

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
| **202** | A list of outcomes and/or errors |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |

## updateComputeEnginesWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateComputeEngines updateComputeEnginesWithHttpInfo(body)



Update an existing Compute Engine in the Ziqni system

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.ComputeEngineApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        ComputeEngineApi apiInstance = new ComputeEngineApi(defaultClient);
        UpdateComputeEngineRequest body = new UpdateComputeEngineRequest(); // UpdateComputeEngineRequest | Update an Compute Engine in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateComputeEnginesWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling ComputeEngineApi#updateComputeEngines");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling ComputeEngineApi#updateComputeEngines");
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
 **body** | [**UpdateComputeEngineRequest**](UpdateComputeEngineRequest.md)| Update an Compute Engine in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field |

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
| **202** | A list of outcomes and/or errors |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |

