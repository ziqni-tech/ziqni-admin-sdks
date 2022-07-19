# AchievementsApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAchievements**](AchievementsApi.md#createAchievements) | **POST** /achievements | Create Achievements
[**createAchievementsWithHttpInfo**](AchievementsApi.md#createAchievementsWithHttpInfo) | **POST** /achievements | Create Achievements
[**deleteAchievements**](AchievementsApi.md#deleteAchievements) | **DELETE** /achievements | Delete Achievements
[**deleteAchievementsWithHttpInfo**](AchievementsApi.md#deleteAchievementsWithHttpInfo) | **DELETE** /achievements | Delete Achievements
[**deleteAchievementsByQuery**](AchievementsApi.md#deleteAchievementsByQuery) | **POST** /achievements/delete | 
[**deleteAchievementsByQueryWithHttpInfo**](AchievementsApi.md#deleteAchievementsByQueryWithHttpInfo) | **POST** /achievements/delete | 
[**getAchievementToClone**](AchievementsApi.md#getAchievementToClone) | **GET** /achievements/{id}/clone | NOT AVAILABLE IN CURRENT RELEASE
[**getAchievementToCloneWithHttpInfo**](AchievementsApi.md#getAchievementToCloneWithHttpInfo) | **GET** /achievements/{id}/clone | NOT AVAILABLE IN CURRENT RELEASE
[**getAchievements**](AchievementsApi.md#getAchievements) | **GET** /achievements | Get Achievements
[**getAchievementsWithHttpInfo**](AchievementsApi.md#getAchievementsWithHttpInfo) | **GET** /achievements | Get Achievements
[**getAchievementsByQuery**](AchievementsApi.md#getAchievementsByQuery) | **POST** /achievements/query | 
[**getAchievementsByQueryWithHttpInfo**](AchievementsApi.md#getAchievementsByQueryWithHttpInfo) | **POST** /achievements/query | 
[**getAntecendentsForAchievement**](AchievementsApi.md#getAntecendentsForAchievement) | **GET** /achievements/{id}/antecedents | NOT AVAILABLE IN CURRENT RELEASE
[**getAntecendentsForAchievementWithHttpInfo**](AchievementsApi.md#getAntecendentsForAchievementWithHttpInfo) | **GET** /achievements/{id}/antecedents | NOT AVAILABLE IN CURRENT RELEASE
[**getDesendentsForAchievement**](AchievementsApi.md#getDesendentsForAchievement) | **GET** /achievements/{id}/descendents | NOT AVAILABLE IN CURRENT RELEASE
[**getDesendentsForAchievementWithHttpInfo**](AchievementsApi.md#getDesendentsForAchievementWithHttpInfo) | **GET** /achievements/{id}/descendents | NOT AVAILABLE IN CURRENT RELEASE
[**getIssuedAchievementsCountById**](AchievementsApi.md#getIssuedAchievementsCountById) | **GET** /achievements/{id}/issued | NOT AVAILABLE IN CURRENT RELEASE
[**getIssuedAchievementsCountByIdWithHttpInfo**](AchievementsApi.md#getIssuedAchievementsCountByIdWithHttpInfo) | **GET** /achievements/{id}/issued | NOT AVAILABLE IN CURRENT RELEASE
[**getMembersAchievementsDetails**](AchievementsApi.md#getMembersAchievementsDetails) | **GET** /achievements/{id}/members | NOT AVAILABLE IN CURRENT RELEASE
[**getMembersAchievementsDetailsWithHttpInfo**](AchievementsApi.md#getMembersAchievementsDetailsWithHttpInfo) | **GET** /achievements/{id}/members | NOT AVAILABLE IN CURRENT RELEASE
[**updateAchievements**](AchievementsApi.md#updateAchievements) | **PUT** /achievements | Update Achievements
[**updateAchievementsWithHttpInfo**](AchievementsApi.md#updateAchievementsWithHttpInfo) | **PUT** /achievements | Update Achievements
[**updateAchievementsLiveStatus**](AchievementsApi.md#updateAchievementsLiveStatus) | **PUT** /achievements/state | 
[**updateAchievementsLiveStatusWithHttpInfo**](AchievementsApi.md#updateAchievementsLiveStatusWithHttpInfo) | **PUT** /achievements/state | 



## createAchievements

> CompletableFuture<ModelApiResponse> createAchievements(body)

Create Achievements

Create Achievements in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        List<CreateAchievementRequest> body = Arrays.asList(); // List<CreateAchievementRequest> | Create Achievements in the Ziqni database
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.createAchievements(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#createAchievements");
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
 **body** | [**List&lt;CreateAchievementRequest&gt;**](CreateAchievementRequest.md)| Create Achievements in the Ziqni database |

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

## createAchievementsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> createAchievements createAchievementsWithHttpInfo(body)

Create Achievements

Create Achievements in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        List<CreateAchievementRequest> body = Arrays.asList(); // List<CreateAchievementRequest> | Create Achievements in the Ziqni database
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.createAchievementsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#createAchievements");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#createAchievements");
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
 **body** | [**List&lt;CreateAchievementRequest&gt;**](CreateAchievementRequest.md)| Create Achievements in the Ziqni database |

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


## deleteAchievements

> CompletableFuture<ModelApiResponse> deleteAchievements(id)

Delete Achievements

Delete Achievements for a given identifier specified

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteAchievements(id);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#deleteAchievements");
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

## deleteAchievementsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteAchievements deleteAchievementsWithHttpInfo(id)

Delete Achievements

Delete Achievements for a given identifier specified

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteAchievementsWithHttpInfo(id);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#deleteAchievements");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#deleteAchievements");
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


## deleteAchievementsByQuery

> CompletableFuture<ModelApiResponse> deleteAchievementsByQuery(body)



Delete Achievements from Ziqni database by unique Achievements ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete Achievements from Ziqni database by unique Achievements ID's or any other Post body parameters using the POST method
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteAchievementsByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#deleteAchievementsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Achievements from Ziqni database by unique Achievements ID&#39;s or any other Post body parameters using the POST method | [optional]

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

## deleteAchievementsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteAchievementsByQuery deleteAchievementsByQueryWithHttpInfo(body)



Delete Achievements from Ziqni database by unique Achievements ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete Achievements from Ziqni database by unique Achievements ID's or any other Post body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteAchievementsByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#deleteAchievementsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#deleteAchievementsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Achievements from Ziqni database by unique Achievements ID&#39;s or any other Post body parameters using the POST method | [optional]

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


## getAchievementToClone

> CompletableFuture<CloneAchievementResponse> getAchievementToClone(id)

NOT AVAILABLE IN CURRENT RELEASE

Clones an Achievement for the identifier provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<CloneAchievementResponse> result = apiInstance.getAchievementToClone(id);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getAchievementToClone");
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

CompletableFuture<[**CloneAchievementResponse**](CloneAchievementResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **400** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **401** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **403** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **404** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **413** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **500** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **501** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **503** | A modeled response of an Achievement that can be used for Achievement creation |  -  |

## getAchievementToCloneWithHttpInfo

> CompletableFuture<ApiResponse<CloneAchievementResponse>> getAchievementToClone getAchievementToCloneWithHttpInfo(id)

NOT AVAILABLE IN CURRENT RELEASE

Clones an Achievement for the identifier provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<ApiResponse<CloneAchievementResponse>> response = apiInstance.getAchievementToCloneWithHttpInfo(id);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#getAchievementToClone");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getAchievementToClone");
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

CompletableFuture<ApiResponse<[**CloneAchievementResponse**](CloneAchievementResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **400** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **401** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **403** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **404** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **413** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **500** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **501** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **503** | A modeled response of an Achievement that can be used for Achievement creation |  -  |


## getAchievements

> CompletableFuture<AchievementResponse> getAchievements(id, limit, skip)

Get Achievements

Returns a list of Achievements. This assumes that achievements have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<AchievementResponse> result = apiInstance.getAchievements(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getAchievements");
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

CompletableFuture<[**AchievementResponse**](AchievementResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of achievements and/or errors |  -  |
| **400** | A list of achievements and/or errors |  -  |
| **401** | A list of achievements and/or errors |  -  |
| **403** | A list of achievements and/or errors |  -  |
| **404** | A list of achievements and/or errors |  -  |
| **413** | A list of achievements and/or errors |  -  |
| **500** | A list of achievements and/or errors |  -  |
| **501** | A list of achievements and/or errors |  -  |
| **503** | A list of achievements and/or errors |  -  |

## getAchievementsWithHttpInfo

> CompletableFuture<ApiResponse<AchievementResponse>> getAchievements getAchievementsWithHttpInfo(id, limit, skip)

Get Achievements

Returns a list of Achievements. This assumes that achievements have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<AchievementResponse>> response = apiInstance.getAchievementsWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#getAchievements");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getAchievements");
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

CompletableFuture<ApiResponse<[**AchievementResponse**](AchievementResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of achievements and/or errors |  -  |
| **400** | A list of achievements and/or errors |  -  |
| **401** | A list of achievements and/or errors |  -  |
| **403** | A list of achievements and/or errors |  -  |
| **404** | A list of achievements and/or errors |  -  |
| **413** | A list of achievements and/or errors |  -  |
| **500** | A list of achievements and/or errors |  -  |
| **501** | A list of achievements and/or errors |  -  |
| **503** | A list of achievements and/or errors |  -  |


## getAchievementsByQuery

> CompletableFuture<AchievementResponse> getAchievementsByQuery(body)



Retrieve Achievements from Ziqni database by unique Achievements ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Achievements from Ziqni database by unique Achievements ID's or any other Post body parameters using the POST method
        try {
            CompletableFuture<AchievementResponse> result = apiInstance.getAchievementsByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getAchievementsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Achievements from Ziqni database by unique Achievements ID&#39;s or any other Post body parameters using the POST method | [optional]

### Return type

CompletableFuture<[**AchievementResponse**](AchievementResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of achievements and/or errors |  -  |
| **400** | A list of achievements and/or errors |  -  |
| **401** | A list of achievements and/or errors |  -  |
| **403** | A list of achievements and/or errors |  -  |
| **404** | A list of achievements and/or errors |  -  |
| **413** | A list of achievements and/or errors |  -  |
| **500** | A list of achievements and/or errors |  -  |
| **501** | A list of achievements and/or errors |  -  |
| **503** | A list of achievements and/or errors |  -  |

## getAchievementsByQueryWithHttpInfo

> CompletableFuture<ApiResponse<AchievementResponse>> getAchievementsByQuery getAchievementsByQueryWithHttpInfo(body)



Retrieve Achievements from Ziqni database by unique Achievements ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Achievements from Ziqni database by unique Achievements ID's or any other Post body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<AchievementResponse>> response = apiInstance.getAchievementsByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#getAchievementsByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getAchievementsByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Achievements from Ziqni database by unique Achievements ID&#39;s or any other Post body parameters using the POST method | [optional]

### Return type

CompletableFuture<ApiResponse<[**AchievementResponse**](AchievementResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of achievements and/or errors |  -  |
| **400** | A list of achievements and/or errors |  -  |
| **401** | A list of achievements and/or errors |  -  |
| **403** | A list of achievements and/or errors |  -  |
| **404** | A list of achievements and/or errors |  -  |
| **413** | A list of achievements and/or errors |  -  |
| **500** | A list of achievements and/or errors |  -  |
| **501** | A list of achievements and/or errors |  -  |
| **503** | A list of achievements and/or errors |  -  |


## getAntecendentsForAchievement

> CompletableFuture<AchievementResponse> getAntecendentsForAchievement(id, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Receive a list of Antecedent Achievements for the Achievement identified provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<AchievementResponse> result = apiInstance.getAntecendentsForAchievement(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getAntecendentsForAchievement");
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

CompletableFuture<[**AchievementResponse**](AchievementResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of achievements and/or errors |  -  |
| **400** | A list of achievements and/or errors |  -  |
| **401** | A list of achievements and/or errors |  -  |
| **403** | A list of achievements and/or errors |  -  |
| **404** | A list of achievements and/or errors |  -  |
| **413** | A list of achievements and/or errors |  -  |
| **500** | A list of achievements and/or errors |  -  |
| **501** | A list of achievements and/or errors |  -  |
| **503** | A list of achievements and/or errors |  -  |

## getAntecendentsForAchievementWithHttpInfo

> CompletableFuture<ApiResponse<AchievementResponse>> getAntecendentsForAchievement getAntecendentsForAchievementWithHttpInfo(id, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Receive a list of Antecedent Achievements for the Achievement identified provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<AchievementResponse>> response = apiInstance.getAntecendentsForAchievementWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#getAntecendentsForAchievement");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getAntecendentsForAchievement");
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

CompletableFuture<ApiResponse<[**AchievementResponse**](AchievementResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of achievements and/or errors |  -  |
| **400** | A list of achievements and/or errors |  -  |
| **401** | A list of achievements and/or errors |  -  |
| **403** | A list of achievements and/or errors |  -  |
| **404** | A list of achievements and/or errors |  -  |
| **413** | A list of achievements and/or errors |  -  |
| **500** | A list of achievements and/or errors |  -  |
| **501** | A list of achievements and/or errors |  -  |
| **503** | A list of achievements and/or errors |  -  |


## getDesendentsForAchievement

> CompletableFuture<AchievementResponse> getDesendentsForAchievement(id, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Receive a list of Descendent Achievements for the Achievement identified provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<AchievementResponse> result = apiInstance.getDesendentsForAchievement(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getDesendentsForAchievement");
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

CompletableFuture<[**AchievementResponse**](AchievementResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of achievements and/or errors |  -  |
| **400** | A list of achievements and/or errors |  -  |
| **401** | A list of achievements and/or errors |  -  |
| **403** | A list of achievements and/or errors |  -  |
| **404** | A list of achievements and/or errors |  -  |
| **413** | A list of achievements and/or errors |  -  |
| **500** | A list of achievements and/or errors |  -  |
| **501** | A list of achievements and/or errors |  -  |
| **503** | A list of achievements and/or errors |  -  |

## getDesendentsForAchievementWithHttpInfo

> CompletableFuture<ApiResponse<AchievementResponse>> getDesendentsForAchievement getDesendentsForAchievementWithHttpInfo(id, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Receive a list of Descendent Achievements for the Achievement identified provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<AchievementResponse>> response = apiInstance.getDesendentsForAchievementWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#getDesendentsForAchievement");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getDesendentsForAchievement");
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

CompletableFuture<ApiResponse<[**AchievementResponse**](AchievementResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of achievements and/or errors |  -  |
| **400** | A list of achievements and/or errors |  -  |
| **401** | A list of achievements and/or errors |  -  |
| **403** | A list of achievements and/or errors |  -  |
| **404** | A list of achievements and/or errors |  -  |
| **413** | A list of achievements and/or errors |  -  |
| **500** | A list of achievements and/or errors |  -  |
| **501** | A list of achievements and/or errors |  -  |
| **503** | A list of achievements and/or errors |  -  |


## getIssuedAchievementsCountById

> CompletableFuture<AchievementIssuedResponse> getIssuedAchievementsCountById(id)

NOT AVAILABLE IN CURRENT RELEASE

Receive a count of Issued Achievements by identifier provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<AchievementIssuedResponse> result = apiInstance.getIssuedAchievementsCountById(id);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getIssuedAchievementsCountById");
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

CompletableFuture<[**AchievementIssuedResponse**](AchievementIssuedResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A count of Issued Achievements for the id requested |  -  |
| **400** | A count of Issued Achievements for the id requested |  -  |
| **401** | A count of Issued Achievements for the id requested |  -  |
| **403** | A count of Issued Achievements for the id requested |  -  |
| **404** | A count of Issued Achievements for the id requested |  -  |
| **413** | A count of Issued Achievements for the id requested |  -  |
| **500** | A count of Issued Achievements for the id requested |  -  |
| **501** | A count of Issued Achievements for the id requested |  -  |
| **503** | A count of Issued Achievements for the id requested |  -  |

## getIssuedAchievementsCountByIdWithHttpInfo

> CompletableFuture<ApiResponse<AchievementIssuedResponse>> getIssuedAchievementsCountById getIssuedAchievementsCountByIdWithHttpInfo(id)

NOT AVAILABLE IN CURRENT RELEASE

Receive a count of Issued Achievements by identifier provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        try {
            CompletableFuture<ApiResponse<AchievementIssuedResponse>> response = apiInstance.getIssuedAchievementsCountByIdWithHttpInfo(id);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#getIssuedAchievementsCountById");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getIssuedAchievementsCountById");
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

CompletableFuture<ApiResponse<[**AchievementIssuedResponse**](AchievementIssuedResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A count of Issued Achievements for the id requested |  -  |
| **400** | A count of Issued Achievements for the id requested |  -  |
| **401** | A count of Issued Achievements for the id requested |  -  |
| **403** | A count of Issued Achievements for the id requested |  -  |
| **404** | A count of Issued Achievements for the id requested |  -  |
| **413** | A count of Issued Achievements for the id requested |  -  |
| **500** | A count of Issued Achievements for the id requested |  -  |
| **501** | A count of Issued Achievements for the id requested |  -  |
| **503** | A count of Issued Achievements for the id requested |  -  |


## getMembersAchievementsDetails

> CompletableFuture<MemberAchievementIssuedResponse> getMembersAchievementsDetails(id, memberId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Receive a list of members that had an Achievement issued for the Achievement identified provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String memberId = "memberId_example"; // String | Id of a member
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<MemberAchievementIssuedResponse> result = apiInstance.getMembersAchievementsDetails(id, memberId, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getMembersAchievementsDetails");
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
 **memberId** | **String**| Id of a member | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**MemberAchievementIssuedResponse**](MemberAchievementIssuedResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A count of Achievement issued for for each member |  -  |
| **400** | A count of Achievement issued for for each member |  -  |
| **401** | A count of Achievement issued for for each member |  -  |
| **403** | A count of Achievement issued for for each member |  -  |
| **404** | A count of Achievement issued for for each member |  -  |
| **413** | A count of Achievement issued for for each member |  -  |
| **500** | A count of Achievement issued for for each member |  -  |
| **501** | A count of Achievement issued for for each member |  -  |
| **503** | A count of Achievement issued for for each member |  -  |

## getMembersAchievementsDetailsWithHttpInfo

> CompletableFuture<ApiResponse<MemberAchievementIssuedResponse>> getMembersAchievementsDetails getMembersAchievementsDetailsWithHttpInfo(id, memberId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Receive a list of members that had an Achievement issued for the Achievement identified provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String memberId = "memberId_example"; // String | Id of a member
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<MemberAchievementIssuedResponse>> response = apiInstance.getMembersAchievementsDetailsWithHttpInfo(id, memberId, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#getMembersAchievementsDetails");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#getMembersAchievementsDetails");
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
 **memberId** | **String**| Id of a member | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**MemberAchievementIssuedResponse**](MemberAchievementIssuedResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A count of Achievement issued for for each member |  -  |
| **400** | A count of Achievement issued for for each member |  -  |
| **401** | A count of Achievement issued for for each member |  -  |
| **403** | A count of Achievement issued for for each member |  -  |
| **404** | A count of Achievement issued for for each member |  -  |
| **413** | A count of Achievement issued for for each member |  -  |
| **500** | A count of Achievement issued for for each member |  -  |
| **501** | A count of Achievement issued for for each member |  -  |
| **503** | A count of Achievement issued for for each member |  -  |


## updateAchievements

> CompletableFuture<ModelApiResponse> updateAchievements(body)

Update Achievements

Update existing Achievements in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        List<UpdateAchievementRequest> body = Arrays.asList(); // List<UpdateAchievementRequest> | Update Achievements in the Ziqni database. * An Achievement Id must exist in the Ziqni database for update
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateAchievements(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#updateAchievements");
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
 **body** | [**List&lt;UpdateAchievementRequest&gt;**](UpdateAchievementRequest.md)| Update Achievements in the Ziqni database. * An Achievement Id must exist in the Ziqni database for update |

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

## updateAchievementsWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateAchievements updateAchievementsWithHttpInfo(body)

Update Achievements

Update existing Achievements in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        List<UpdateAchievementRequest> body = Arrays.asList(); // List<UpdateAchievementRequest> | Update Achievements in the Ziqni database. * An Achievement Id must exist in the Ziqni database for update
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateAchievementsWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#updateAchievements");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#updateAchievements");
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
 **body** | [**List&lt;UpdateAchievementRequest&gt;**](UpdateAchievementRequest.md)| Update Achievements in the Ziqni database. * An Achievement Id must exist in the Ziqni database for update |

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


## updateAchievementsLiveStatus

> CompletableFuture<ModelApiResponse> updateAchievementsLiveStatus(body)



Manage the state of achievement - Draft, Live, Archived

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        List<AchievementLiveStatusRequest> body = Arrays.asList(); // List<AchievementLiveStatusRequest> | Updates the state of the Achievement
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateAchievementsLiveStatus(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#updateAchievementsLiveStatus");
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
 **body** | [**List&lt;AchievementLiveStatusRequest&gt;**](AchievementLiveStatusRequest.md)| Updates the state of the Achievement | [optional]

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

## updateAchievementsLiveStatusWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateAchievementsLiveStatus updateAchievementsLiveStatusWithHttpInfo(body)



Manage the state of achievement - Draft, Live, Archived

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.AchievementsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        AchievementsApi apiInstance = new AchievementsApi(defaultClient);
        List<AchievementLiveStatusRequest> body = Arrays.asList(); // List<AchievementLiveStatusRequest> | Updates the state of the Achievement
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateAchievementsLiveStatusWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling AchievementsApi#updateAchievementsLiveStatus");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling AchievementsApi#updateAchievementsLiveStatus");
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
 **body** | [**List&lt;AchievementLiveStatusRequest&gt;**](AchievementLiveStatusRequest.md)| Updates the state of the Achievement | [optional]

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

