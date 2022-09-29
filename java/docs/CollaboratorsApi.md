# CollaboratorsApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCollaborators**](CollaboratorsApi.md#createCollaborators) | **POST** /collaborators | 
[**createCollaboratorsWithHttpInfo**](CollaboratorsApi.md#createCollaboratorsWithHttpInfo) | **POST** /collaborators | 
[**deleteCollaborators**](CollaboratorsApi.md#deleteCollaborators) | **DELETE** /collaborators | 
[**deleteCollaboratorsWithHttpInfo**](CollaboratorsApi.md#deleteCollaboratorsWithHttpInfo) | **DELETE** /collaborators | 
[**getAvailableRolesForCollaborators**](CollaboratorsApi.md#getAvailableRolesForCollaborators) | **GET** /collaborators/available-roles | 
[**getAvailableRolesForCollaboratorsWithHttpInfo**](CollaboratorsApi.md#getAvailableRolesForCollaboratorsWithHttpInfo) | **GET** /collaborators/available-roles | 
[**getCollaborators**](CollaboratorsApi.md#getCollaborators) | **GET** /collaborators | 
[**getCollaboratorsWithHttpInfo**](CollaboratorsApi.md#getCollaboratorsWithHttpInfo) | **GET** /collaborators | 
[**updateCollaborators**](CollaboratorsApi.md#updateCollaborators) | **PUT** /collaborators | 
[**updateCollaboratorsWithHttpInfo**](CollaboratorsApi.md#updateCollaboratorsWithHttpInfo) | **PUT** /collaborators | 



## createCollaborators

> CompletableFuture<ModelApiResponse> createCollaborators(body)



Create a new Collaborator in the Ziqni

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CollaboratorsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CollaboratorsApi apiInstance = new CollaboratorsApi(defaultClient);
        List<CreateCollaboratorRequest> body = Arrays.asList(); // List<CreateCollaboratorRequest> | Create a Collaborator in the Ziqni system
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.createCollaborators(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CollaboratorsApi#createCollaborators");
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
 **body** | [**List&lt;CreateCollaboratorRequest&gt;**](CreateCollaboratorRequest.md)| Create a Collaborator in the Ziqni system |

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

## createCollaboratorsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> createCollaborators createCollaboratorsWithHttpInfo(body)



Create a new Collaborator in the Ziqni

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CollaboratorsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CollaboratorsApi apiInstance = new CollaboratorsApi(defaultClient);
        List<CreateCollaboratorRequest> body = Arrays.asList(); // List<CreateCollaboratorRequest> | Create a Collaborator in the Ziqni system
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.createCollaboratorsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CollaboratorsApi#createCollaborators");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CollaboratorsApi#createCollaborators");
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
 **body** | [**List&lt;CreateCollaboratorRequest&gt;**](CreateCollaboratorRequest.md)| Create a Collaborator in the Ziqni system |

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


## deleteCollaborators

> CompletableFuture<ModelApiResponse> deleteCollaborators(emails)



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CollaboratorsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CollaboratorsApi apiInstance = new CollaboratorsApi(defaultClient);
        List<String> emails = Arrays.asList(); // List<String> | The list of user emails to search by
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteCollaborators(emails);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CollaboratorsApi#deleteCollaborators");
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
 **emails** | [**List&lt;String&gt;**](String.md)| The list of user emails to search by | [optional]

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

## deleteCollaboratorsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteCollaborators deleteCollaboratorsWithHttpInfo(emails)



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CollaboratorsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CollaboratorsApi apiInstance = new CollaboratorsApi(defaultClient);
        List<String> emails = Arrays.asList(); // List<String> | The list of user emails to search by
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteCollaboratorsWithHttpInfo(emails);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CollaboratorsApi#deleteCollaborators");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CollaboratorsApi#deleteCollaborators");
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
 **emails** | [**List&lt;String&gt;**](String.md)| The list of user emails to search by | [optional]

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


## getAvailableRolesForCollaborators

> CompletableFuture<CollaboratorRolesResponse> getAvailableRolesForCollaborators()



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CollaboratorsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CollaboratorsApi apiInstance = new CollaboratorsApi(defaultClient);
        try {
            CompletableFuture<CollaboratorRolesResponse> result = apiInstance.getAvailableRolesForCollaborators();
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CollaboratorsApi#getAvailableRolesForCollaborators");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

CompletableFuture<[**CollaboratorRolesResponse**](CollaboratorRolesResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Collaborators |  -  |
| **400** | List of Collaborators |  -  |
| **401** | List of Collaborators |  -  |
| **403** | List of Collaborators |  -  |
| **404** | List of Collaborators |  -  |
| **413** | List of Collaborators |  -  |
| **500** | List of Collaborators |  -  |
| **501** | List of Collaborators |  -  |
| **503** | List of Collaborators |  -  |

## getAvailableRolesForCollaboratorsWithHttpInfo

> CompletableFuture<ApiResponse<CollaboratorRolesResponse>> getAvailableRolesForCollaborators getAvailableRolesForCollaboratorsWithHttpInfo()



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CollaboratorsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CollaboratorsApi apiInstance = new CollaboratorsApi(defaultClient);
        try {
            CompletableFuture<ApiResponse<CollaboratorRolesResponse>> response = apiInstance.getAvailableRolesForCollaboratorsWithHttpInfo();
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CollaboratorsApi#getAvailableRolesForCollaborators");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CollaboratorsApi#getAvailableRolesForCollaborators");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Response headers: " + e.getResponseHeaders());
            System.err.println("Reason: " + e.getResponseBody());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

CompletableFuture<ApiResponse<[**CollaboratorRolesResponse**](CollaboratorRolesResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Collaborators |  -  |
| **400** | List of Collaborators |  -  |
| **401** | List of Collaborators |  -  |
| **403** | List of Collaborators |  -  |
| **404** | List of Collaborators |  -  |
| **413** | List of Collaborators |  -  |
| **500** | List of Collaborators |  -  |
| **501** | List of Collaborators |  -  |
| **503** | List of Collaborators |  -  |


## getCollaborators

> CompletableFuture<CollaboratorResponse> getCollaborators(emails, limit, skip)



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CollaboratorsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CollaboratorsApi apiInstance = new CollaboratorsApi(defaultClient);
        List<String> emails = Arrays.asList(); // List<String> | The list of user emails to search by
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<CollaboratorResponse> result = apiInstance.getCollaborators(emails, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CollaboratorsApi#getCollaborators");
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
 **emails** | [**List&lt;String&gt;**](String.md)| The list of user emails to search by | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**CollaboratorResponse**](CollaboratorResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Collaborators |  -  |
| **400** | List of Collaborators |  -  |
| **401** | List of Collaborators |  -  |
| **403** | List of Collaborators |  -  |
| **404** | List of Collaborators |  -  |
| **413** | List of Collaborators |  -  |
| **500** | List of Collaborators |  -  |
| **501** | List of Collaborators |  -  |
| **503** | List of Collaborators |  -  |

## getCollaboratorsWithHttpInfo

> CompletableFuture<ApiResponse<CollaboratorResponse>> getCollaborators getCollaboratorsWithHttpInfo(emails, limit, skip)



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CollaboratorsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CollaboratorsApi apiInstance = new CollaboratorsApi(defaultClient);
        List<String> emails = Arrays.asList(); // List<String> | The list of user emails to search by
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<CollaboratorResponse>> response = apiInstance.getCollaboratorsWithHttpInfo(emails, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CollaboratorsApi#getCollaborators");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CollaboratorsApi#getCollaborators");
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
 **emails** | [**List&lt;String&gt;**](String.md)| The list of user emails to search by | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**CollaboratorResponse**](CollaboratorResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Collaborators |  -  |
| **400** | List of Collaborators |  -  |
| **401** | List of Collaborators |  -  |
| **403** | List of Collaborators |  -  |
| **404** | List of Collaborators |  -  |
| **413** | List of Collaborators |  -  |
| **500** | List of Collaborators |  -  |
| **501** | List of Collaborators |  -  |
| **503** | List of Collaborators |  -  |


## updateCollaborators

> CompletableFuture<ModelApiResponse> updateCollaborators(body)



Update an existing Collaborator in the Ziqni system

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CollaboratorsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CollaboratorsApi apiInstance = new CollaboratorsApi(defaultClient);
        List<UpdateCollaboratorRequest> body = Arrays.asList(); // List<UpdateCollaboratorRequest> | Update a Collaborator in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateCollaborators(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling CollaboratorsApi#updateCollaborators");
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
 **body** | [**List&lt;UpdateCollaboratorRequest&gt;**](UpdateCollaboratorRequest.md)| Update a Collaborator in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field |

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

## updateCollaboratorsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateCollaborators updateCollaboratorsWithHttpInfo(body)



Update an existing Collaborator in the Ziqni system

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.CollaboratorsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        CollaboratorsApi apiInstance = new CollaboratorsApi(defaultClient);
        List<UpdateCollaboratorRequest> body = Arrays.asList(); // List<UpdateCollaboratorRequest> | Update a Collaborator in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateCollaboratorsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling CollaboratorsApi#updateCollaborators");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling CollaboratorsApi#updateCollaborators");
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
 **body** | [**List&lt;UpdateCollaboratorRequest&gt;**](UpdateCollaboratorRequest.md)| Update a Collaborator in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field |

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

