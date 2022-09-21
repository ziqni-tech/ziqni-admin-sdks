# FileObjectsApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFileObjects**](FileObjectsApi.md#createFileObjects) | **POST** /file-objects | 
[**createFileObjectsWithHttpInfo**](FileObjectsApi.md#createFileObjectsWithHttpInfo) | **POST** /file-objects | 
[**deleteFileObjects**](FileObjectsApi.md#deleteFileObjects) | **DELETE** /file-objects | 
[**deleteFileObjectsWithHttpInfo**](FileObjectsApi.md#deleteFileObjectsWithHttpInfo) | **DELETE** /file-objects | 
[**deleteFileObjectsByQuery**](FileObjectsApi.md#deleteFileObjectsByQuery) | **POST** /file-objects/delete | 
[**deleteFileObjectsByQueryWithHttpInfo**](FileObjectsApi.md#deleteFileObjectsByQueryWithHttpInfo) | **POST** /file-objects/delete | 
[**downloadFileObjects**](FileObjectsApi.md#downloadFileObjects) | **GET** /file-objects/download | 
[**downloadFileObjectsWithHttpInfo**](FileObjectsApi.md#downloadFileObjectsWithHttpInfo) | **GET** /file-objects/download | 
[**getFileObjects**](FileObjectsApi.md#getFileObjects) | **GET** /file-objects | 
[**getFileObjectsWithHttpInfo**](FileObjectsApi.md#getFileObjectsWithHttpInfo) | **GET** /file-objects | 
[**getFileObjectsByQuery**](FileObjectsApi.md#getFileObjectsByQuery) | **POST** /file-objects/query | 
[**getFileObjectsByQueryWithHttpInfo**](FileObjectsApi.md#getFileObjectsByQueryWithHttpInfo) | **POST** /file-objects/query | 
[**saveTemplates**](FileObjectsApi.md#saveTemplates) | **POST** /file-objects/save-template | 
[**saveTemplatesWithHttpInfo**](FileObjectsApi.md#saveTemplatesWithHttpInfo) | **POST** /file-objects/save-template | 
[**updateFileObjects**](FileObjectsApi.md#updateFileObjects) | **PUT** /file-objects | 
[**updateFileObjectsWithHttpInfo**](FileObjectsApi.md#updateFileObjectsWithHttpInfo) | **PUT** /file-objects | 
[**uploadFileObjects**](FileObjectsApi.md#uploadFileObjects) | **POST** /file-objects/upload | 
[**uploadFileObjectsWithHttpInfo**](FileObjectsApi.md#uploadFileObjectsWithHttpInfo) | **POST** /file-objects/upload | 



## createFileObjects

> CompletableFuture<ModelApiResponse> createFileObjects(body)



### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        CreateFileObjectRequest body = new CreateFileObjectRequest(); // CreateFileObjectRequest | Create a new file object repository in your Ziqni space
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.createFileObjects(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#createFileObjects");
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
 **body** | [**CreateFileObjectRequest**](CreateFileObjectRequest.md)| Create a new file object repository in your Ziqni space |

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

## createFileObjectsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> createFileObjects createFileObjectsWithHttpInfo(body)



### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        CreateFileObjectRequest body = new CreateFileObjectRequest(); // CreateFileObjectRequest | Create a new file object repository in your Ziqni space
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.createFileObjectsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling FileObjectsApi#createFileObjects");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#createFileObjects");
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
 **body** | [**CreateFileObjectRequest**](CreateFileObjectRequest.md)| Create a new file object repository in your Ziqni space |

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


## deleteFileObjects

> CompletableFuture<ModelApiResponse> deleteFileObjects(id, permanent)



### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Boolean permanent = true; // Boolean | Permanently delete the file object. Default is false
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteFileObjects(id, permanent);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#deleteFileObjects");
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
 **permanent** | **Boolean**| Permanently delete the file object. Default is false | [optional]

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

## deleteFileObjectsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteFileObjects deleteFileObjectsWithHttpInfo(id, permanent)



### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Boolean permanent = true; // Boolean | Permanently delete the file object. Default is false
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteFileObjectsWithHttpInfo(id, permanent);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling FileObjectsApi#deleteFileObjects");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#deleteFileObjects");
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
 **permanent** | **Boolean**| Permanently delete the file object. Default is false | [optional]

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


## deleteFileObjectsByQuery

> CompletableFuture<ModelApiResponse> deleteFileObjectsByQuery(id, body)



Delete file objects by query

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete file objects inside a repository from Ziqni by unique file by unique object ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteFileObjectsByQuery(id, body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#deleteFileObjectsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete file objects inside a repository from Ziqni by unique file by unique object ID&#39;s or any other POST body parameters using the POST method | [optional]

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

## deleteFileObjectsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteFileObjectsByQuery deleteFileObjectsByQueryWithHttpInfo(id, body)



Delete file objects by query

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete file objects inside a repository from Ziqni by unique file by unique object ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteFileObjectsByQueryWithHttpInfo(id, body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling FileObjectsApi#deleteFileObjectsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#deleteFileObjectsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete file objects inside a repository from Ziqni by unique file by unique object ID&#39;s or any other POST body parameters using the POST method | [optional]

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


## downloadFileObjects

> CompletableFuture<File> downloadFileObjects(path)



Download file objects from your Ziqni space

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        String path = "path_example"; // String | The canonical path of the file to download
        try {
            CompletableFuture<File> result = apiInstance.downloadFileObjects(path);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#downloadFileObjects");
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
 **path** | **String**| The canonical path of the file to download | [optional]

### Return type

CompletableFuture<[**File**](File.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |

## downloadFileObjectsWithHttpInfo

> CompletableFuture<ApiResponse<File>> downloadFileObjects downloadFileObjectsWithHttpInfo(path)



Download file objects from your Ziqni space

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        String path = "path_example"; // String | The canonical path of the file to download
        try {
            CompletableFuture<ApiResponse<File>> response = apiInstance.downloadFileObjectsWithHttpInfo(path);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling FileObjectsApi#downloadFileObjects");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#downloadFileObjects");
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
 **path** | **String**| The canonical path of the file to download | [optional]

### Return type

CompletableFuture<ApiResponse<[**File**](File.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
| **400** | A list of outcomes and/or errors |  -  |
| **401** | A list of outcomes and/or errors |  -  |
| **403** | A list of outcomes and/or errors |  -  |
| **404** | A list of outcomes and/or errors |  -  |
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |


## getFileObjects

> CompletableFuture<FileObjectsResponse> getFileObjects(limit, skip, id, download)



Returns a list of file objects

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        String download = "download_example"; // String | 
        try {
            CompletableFuture<FileObjectsResponse> result = apiInstance.getFileObjects(limit, skip, id, download);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#getFileObjects");
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
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]
 **download** | **String**|  | [optional]

### Return type

CompletableFuture<[**FileObjectsResponse**](FileObjectsResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of files and/or errors |  -  |
| **400** | A list of files and/or errors |  -  |
| **401** | A list of files and/or errors |  -  |
| **403** | A list of files and/or errors |  -  |
| **404** | A list of files and/or errors |  -  |
| **413** | A list of files and/or errors |  -  |
| **500** | A list of files and/or errors |  -  |
| **501** | A list of files and/or errors |  -  |
| **503** | A list of files and/or errors |  -  |

## getFileObjectsWithHttpInfo

> CompletableFuture<ApiResponse<FileObjectsResponse>> getFileObjects getFileObjectsWithHttpInfo(limit, skip, id, download)



Returns a list of file objects

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        String download = "download_example"; // String | 
        try {
            CompletableFuture<ApiResponse<FileObjectsResponse>> response = apiInstance.getFileObjectsWithHttpInfo(limit, skip, id, download);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling FileObjectsApi#getFileObjects");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#getFileObjects");
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
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]
 **download** | **String**|  | [optional]

### Return type

CompletableFuture<ApiResponse<[**FileObjectsResponse**](FileObjectsResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of files and/or errors |  -  |
| **400** | A list of files and/or errors |  -  |
| **401** | A list of files and/or errors |  -  |
| **403** | A list of files and/or errors |  -  |
| **404** | A list of files and/or errors |  -  |
| **413** | A list of files and/or errors |  -  |
| **500** | A list of files and/or errors |  -  |
| **501** | A list of files and/or errors |  -  |
| **503** | A list of files and/or errors |  -  |


## getFileObjectsByQuery

> CompletableFuture<FileObjectsResponse> getFileObjectsByQuery(id, body)



Retrieve file objects by query

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve file objects inside a repository from Ziqni by unique file object ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<FileObjectsResponse> result = apiInstance.getFileObjectsByQuery(id, body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#getFileObjectsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve file objects inside a repository from Ziqni by unique file object ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<[**FileObjectsResponse**](FileObjectsResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of files and/or errors |  -  |
| **400** | A list of files and/or errors |  -  |
| **401** | A list of files and/or errors |  -  |
| **403** | A list of files and/or errors |  -  |
| **404** | A list of files and/or errors |  -  |
| **413** | A list of files and/or errors |  -  |
| **500** | A list of files and/or errors |  -  |
| **501** | A list of files and/or errors |  -  |
| **503** | A list of files and/or errors |  -  |

## getFileObjectsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<FileObjectsResponse>> getFileObjectsByQuery getFileObjectsByQueryWithHttpInfo(id, body)



Retrieve file objects by query

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve file objects inside a repository from Ziqni by unique file object ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<FileObjectsResponse>> response = apiInstance.getFileObjectsByQueryWithHttpInfo(id, body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling FileObjectsApi#getFileObjectsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#getFileObjectsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve file objects inside a repository from Ziqni by unique file object ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<ApiResponse<[**FileObjectsResponse**](FileObjectsResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of files and/or errors |  -  |
| **400** | A list of files and/or errors |  -  |
| **401** | A list of files and/or errors |  -  |
| **403** | A list of files and/or errors |  -  |
| **404** | A list of files and/or errors |  -  |
| **413** | A list of files and/or errors |  -  |
| **500** | A list of files and/or errors |  -  |
| **501** | A list of files and/or errors |  -  |
| **503** | A list of files and/or errors |  -  |


## saveTemplates

> CompletableFuture<ModelApiResponse> saveTemplates(parentFolderPath, repositoryId, templateToSave, templateName, tags)



Create or update file objects and binaries in your Ziqni space

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        String parentFolderPath = "parentFolderPath_example"; // String | The folder to save these file in.
        String repositoryId = "repositoryId_example"; // String | 
        String templateToSave = "templateToSave_example"; // String | 
        String templateName = "templateName_example"; // String | 
        String tags = "tags_example"; // String | 
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.saveTemplates(parentFolderPath, repositoryId, templateToSave, templateName, tags);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#saveTemplates");
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
 **parentFolderPath** | **String**| The folder to save these file in. | [optional]
 **repositoryId** | **String**|  | [optional]
 **templateToSave** | **String**|  | [optional]
 **templateName** | **String**|  | [optional]
 **tags** | **String**|  | [optional]

### Return type

CompletableFuture<[**ModelApiResponse**](ModelApiResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
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

## saveTemplatesWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> saveTemplates saveTemplatesWithHttpInfo(parentFolderPath, repositoryId, templateToSave, templateName, tags)



Create or update file objects and binaries in your Ziqni space

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        String parentFolderPath = "parentFolderPath_example"; // String | The folder to save these file in.
        String repositoryId = "repositoryId_example"; // String | 
        String templateToSave = "templateToSave_example"; // String | 
        String templateName = "templateName_example"; // String | 
        String tags = "tags_example"; // String | 
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.saveTemplatesWithHttpInfo(parentFolderPath, repositoryId, templateToSave, templateName, tags);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling FileObjectsApi#saveTemplates");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#saveTemplates");
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
 **parentFolderPath** | **String**| The folder to save these file in. | [optional]
 **repositoryId** | **String**|  | [optional]
 **templateToSave** | **String**|  | [optional]
 **templateName** | **String**|  | [optional]
 **tags** | **String**|  | [optional]

### Return type

CompletableFuture<ApiResponse<[**ModelApiResponse**](ModelApiResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
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


## updateFileObjects

> CompletableFuture<ModelApiResponse> updateFileObjects(body)



### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        List<UpdateFileObjectRequest> body = Arrays.asList(); // List<UpdateFileObjectRequest> | Update a file object in your Ziqni space.
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateFileObjects(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#updateFileObjects");
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
 **body** | [**List&lt;UpdateFileObjectRequest&gt;**](UpdateFileObjectRequest.md)| Update a file object in your Ziqni space. |

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

## updateFileObjectsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateFileObjects updateFileObjectsWithHttpInfo(body)



### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        List<UpdateFileObjectRequest> body = Arrays.asList(); // List<UpdateFileObjectRequest> | Update a file object in your Ziqni space.
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateFileObjectsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling FileObjectsApi#updateFileObjects");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#updateFileObjects");
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
 **body** | [**List&lt;UpdateFileObjectRequest&gt;**](UpdateFileObjectRequest.md)| Update a file object in your Ziqni space. |

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


## uploadFileObjects

> CompletableFuture<ModelApiResponse> uploadFileObjects(parentFolderPath, files, repositoryId, tags)



Create or update file objects and binaries in your Ziqni space

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        String parentFolderPath = "parentFolderPath_example"; // String | The folder to save these file in.
        List<File> files = new File("/path/to/file"); // List<File> | The files to upload
        String repositoryId = "repositoryId_example"; // String | 
        String tags = "tags_example"; // String | 
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.uploadFileObjects(parentFolderPath, files, repositoryId, tags);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#uploadFileObjects");
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
 **parentFolderPath** | **String**| The folder to save these file in. | [optional]
 **files** | **List&lt;File&gt;**| The files to upload | [optional]
 **repositoryId** | **String**|  | [optional]
 **tags** | **String**|  | [optional]

### Return type

CompletableFuture<[**ModelApiResponse**](ModelApiResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
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

## uploadFileObjectsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> uploadFileObjects uploadFileObjectsWithHttpInfo(parentFolderPath, files, repositoryId, tags)



Create or update file objects and binaries in your Ziqni space

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.FileObjectsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        FileObjectsApi apiInstance = new FileObjectsApi(defaultClient);
        String parentFolderPath = "parentFolderPath_example"; // String | The folder to save these file in.
        List<File> files = new File("/path/to/file"); // List<File> | The files to upload
        String repositoryId = "repositoryId_example"; // String | 
        String tags = "tags_example"; // String | 
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.uploadFileObjectsWithHttpInfo(parentFolderPath, files, repositoryId, tags);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling FileObjectsApi#uploadFileObjects");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling FileObjectsApi#uploadFileObjects");
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
 **parentFolderPath** | **String**| The folder to save these file in. | [optional]
 **files** | **List&lt;File&gt;**| The files to upload | [optional]
 **repositoryId** | **String**|  | [optional]
 **tags** | **String**|  | [optional]

### Return type

CompletableFuture<ApiResponse<[**ModelApiResponse**](ModelApiResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
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

