# MembersApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMembers**](MembersApi.md#createMembers) | **POST** /members | Create members
[**createMembersWithHttpInfo**](MembersApi.md#createMembersWithHttpInfo) | **POST** /members | Create members
[**deleteMembers**](MembersApi.md#deleteMembers) | **DELETE** /members | Delete members
[**deleteMembersWithHttpInfo**](MembersApi.md#deleteMembersWithHttpInfo) | **DELETE** /members | Delete members
[**deleteMembersByQuery**](MembersApi.md#deleteMembersByQuery) | **POST** /members/delete | Delete members by query
[**deleteMembersByQueryWithHttpInfo**](MembersApi.md#deleteMembersByQueryWithHttpInfo) | **POST** /members/delete | Delete members by query
[**getAchievementsForMembers**](MembersApi.md#getAchievementsForMembers) | **GET** /members/{id}/achievements | NOT AVAILABLE IN CURRENT RELEASE
[**getAchievementsForMembersWithHttpInfo**](MembersApi.md#getAchievementsForMembersWithHttpInfo) | **GET** /members/{id}/achievements | NOT AVAILABLE IN CURRENT RELEASE
[**getAwardsForMembers**](MembersApi.md#getAwardsForMembers) | **GET** /members/{id}/awards | NOT AVAILABLE IN CURRENT RELEASE
[**getAwardsForMembersWithHttpInfo**](MembersApi.md#getAwardsForMembersWithHttpInfo) | **GET** /members/{id}/awards | NOT AVAILABLE IN CURRENT RELEASE
[**getCompetitionsForMembers**](MembersApi.md#getCompetitionsForMembers) | **GET** /members/{id}/competitions | NOT AVAILABLE IN CURRENT RELEASE
[**getCompetitionsForMembersWithHttpInfo**](MembersApi.md#getCompetitionsForMembersWithHttpInfo) | **GET** /members/{id}/competitions | NOT AVAILABLE IN CURRENT RELEASE
[**getContestsForMembers**](MembersApi.md#getContestsForMembers) | **GET** /members/{id}/contests | NOT AVAILABLE IN CURRENT RELEASE
[**getContestsForMembersWithHttpInfo**](MembersApi.md#getContestsForMembersWithHttpInfo) | **GET** /members/{id}/contests | NOT AVAILABLE IN CURRENT RELEASE
[**getMembers**](MembersApi.md#getMembers) | **GET** /members | Get members
[**getMembersWithHttpInfo**](MembersApi.md#getMembersWithHttpInfo) | **GET** /members | Get members
[**getMembersByQuery**](MembersApi.md#getMembersByQuery) | **POST** /members/query | Get members by query
[**getMembersByQueryWithHttpInfo**](MembersApi.md#getMembersByQueryWithHttpInfo) | **POST** /members/query | Get members by query
[**getMembersByRefId**](MembersApi.md#getMembersByRefId) | **GET** /members/find-by-ref-identifiers | Get members by reference ids
[**getMembersByRefIdWithHttpInfo**](MembersApi.md#getMembersByRefIdWithHttpInfo) | **GET** /members/find-by-ref-identifiers | Get members by reference ids
[**getMessagesForMembers**](MembersApi.md#getMessagesForMembers) | **GET** /members/{id}/inbox | NOT AVAILABLE IN CURRENT RELEASE
[**getMessagesForMembersWithHttpInfo**](MembersApi.md#getMessagesForMembersWithHttpInfo) | **GET** /members/{id}/inbox | NOT AVAILABLE IN CURRENT RELEASE
[**updateMembers**](MembersApi.md#updateMembers) | **PUT** /members | Update members
[**updateMembersWithHttpInfo**](MembersApi.md#updateMembersWithHttpInfo) | **PUT** /members | Update members



## createMembers

> CompletableFuture<ModelApiResponse> createMembers(body)

Create members

Create new Members in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        List<CreateMemberRequest> body = Arrays.asList(); // List<CreateMemberRequest> | Create Members in the Ziqni database. An array can contain a maximum of 10,000 members in one request
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.createMembers(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#createMembers");
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
 **body** | [**List&lt;CreateMemberRequest&gt;**](CreateMemberRequest.md)| Create Members in the Ziqni database. An array can contain a maximum of 10,000 members in one request |

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

## createMembersWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> createMembers createMembersWithHttpInfo(body)

Create members

Create new Members in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        List<CreateMemberRequest> body = Arrays.asList(); // List<CreateMemberRequest> | Create Members in the Ziqni database. An array can contain a maximum of 10,000 members in one request
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.createMembersWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#createMembers");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#createMembers");
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
 **body** | [**List&lt;CreateMemberRequest&gt;**](CreateMemberRequest.md)| Create Members in the Ziqni database. An array can contain a maximum of 10,000 members in one request |

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


## deleteMembers

> CompletableFuture<ModelApiResponse> deleteMembers(id)

Delete members

Delete Members for a given identifier specified

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteMembers(id);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#deleteMembers");
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

## deleteMembersWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteMembers deleteMembersWithHttpInfo(id)

Delete members

Delete Members for a given identifier specified

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteMembersWithHttpInfo(id);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#deleteMembers");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#deleteMembers");
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


## deleteMembersByQuery

> CompletableFuture<ModelApiResponse> deleteMembersByQuery(body)

Delete members by query

Delete Members from Ziqni database by unique Members ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete Members from Ziqni database by unique Members ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteMembersByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#deleteMembersByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Members from Ziqni database by unique Members ID&#39;s or any other POST body parameters using the POST method | [optional]

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

## deleteMembersByQueryWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteMembersByQuery deleteMembersByQueryWithHttpInfo(body)

Delete members by query

Delete Members from Ziqni database by unique Members ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete Members from Ziqni database by unique Members ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteMembersByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#deleteMembersByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#deleteMembersByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Members from Ziqni database by unique Members ID&#39;s or any other POST body parameters using the POST method | [optional]

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


## getAchievementsForMembers

> CompletableFuture<AchievementReducedResponse> getAchievementsForMembers(id, achievementId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Achievements for the Member id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String achievementId = "achievementId_example"; // String | Id of an Achievement
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<AchievementReducedResponse> result = apiInstance.getAchievementsForMembers(id, achievementId, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getAchievementsForMembers");
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
 **achievementId** | **String**| Id of an Achievement | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**AchievementReducedResponse**](AchievementReducedResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Simplified achievement response |  -  |
| **400** | Simplified achievement response |  -  |
| **401** | Simplified achievement response |  -  |
| **403** | Simplified achievement response |  -  |
| **404** | Simplified achievement response |  -  |
| **413** | Simplified achievement response |  -  |
| **500** | Simplified achievement response |  -  |
| **501** | Simplified achievement response |  -  |
| **503** | Simplified achievement response |  -  |

## getAchievementsForMembersWithHttpInfo

> CompletableFuture<ApiResponse<AchievementReducedResponse>> getAchievementsForMembers getAchievementsForMembersWithHttpInfo(id, achievementId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Achievements for the Member id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String achievementId = "achievementId_example"; // String | Id of an Achievement
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<AchievementReducedResponse>> response = apiInstance.getAchievementsForMembersWithHttpInfo(id, achievementId, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#getAchievementsForMembers");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getAchievementsForMembers");
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
 **achievementId** | **String**| Id of an Achievement | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**AchievementReducedResponse**](AchievementReducedResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Simplified achievement response |  -  |
| **400** | Simplified achievement response |  -  |
| **401** | Simplified achievement response |  -  |
| **403** | Simplified achievement response |  -  |
| **404** | Simplified achievement response |  -  |
| **413** | Simplified achievement response |  -  |
| **500** | Simplified achievement response |  -  |
| **501** | Simplified achievement response |  -  |
| **503** | Simplified achievement response |  -  |


## getAwardsForMembers

> CompletableFuture<MemberAwardResponse> getAwardsForMembers(id, awardId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Awards for the Member id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String awardId = "awardId_example"; // String | Id of an Award
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<MemberAwardResponse> result = apiInstance.getAwardsForMembers(id, awardId, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getAwardsForMembers");
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
 **awardId** | **String**| Id of an Award | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**MemberAwardResponse**](MemberAwardResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of member awards and/or errors |  -  |
| **400** | A list of member awards and/or errors |  -  |
| **401** | A list of member awards and/or errors |  -  |
| **403** | A list of member awards and/or errors |  -  |
| **404** | A list of member awards and/or errors |  -  |
| **413** | A list of member awards and/or errors |  -  |
| **500** | A list of member awards and/or errors |  -  |
| **501** | A list of member awards and/or errors |  -  |
| **503** | A list of member awards and/or errors |  -  |

## getAwardsForMembersWithHttpInfo

> CompletableFuture<ApiResponse<MemberAwardResponse>> getAwardsForMembers getAwardsForMembersWithHttpInfo(id, awardId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Awards for the Member id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String awardId = "awardId_example"; // String | Id of an Award
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<MemberAwardResponse>> response = apiInstance.getAwardsForMembersWithHttpInfo(id, awardId, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#getAwardsForMembers");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getAwardsForMembers");
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
 **awardId** | **String**| Id of an Award | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**MemberAwardResponse**](MemberAwardResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of member awards and/or errors |  -  |
| **400** | A list of member awards and/or errors |  -  |
| **401** | A list of member awards and/or errors |  -  |
| **403** | A list of member awards and/or errors |  -  |
| **404** | A list of member awards and/or errors |  -  |
| **413** | A list of member awards and/or errors |  -  |
| **500** | A list of member awards and/or errors |  -  |
| **501** | A list of member awards and/or errors |  -  |
| **503** | A list of member awards and/or errors |  -  |


## getCompetitionsForMembers

> CompletableFuture<CompetitionReducedResponse> getCompetitionsForMembers(id, competitionId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list Competitions for the Member id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String competitionId = "competitionId_example"; // String | Id of a Competition
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<CompetitionReducedResponse> result = apiInstance.getCompetitionsForMembers(id, competitionId, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getCompetitionsForMembers");
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
 **competitionId** | **String**| Id of a Competition | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**CompetitionReducedResponse**](CompetitionReducedResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Simplified competition response |  -  |
| **400** | Simplified competition response |  -  |
| **401** | Simplified competition response |  -  |
| **403** | Simplified competition response |  -  |
| **404** | Simplified competition response |  -  |
| **413** | Simplified competition response |  -  |
| **500** | Simplified competition response |  -  |
| **501** | Simplified competition response |  -  |
| **503** | Simplified competition response |  -  |

## getCompetitionsForMembersWithHttpInfo

> CompletableFuture<ApiResponse<CompetitionReducedResponse>> getCompetitionsForMembers getCompetitionsForMembersWithHttpInfo(id, competitionId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list Competitions for the Member id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String competitionId = "competitionId_example"; // String | Id of a Competition
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<CompetitionReducedResponse>> response = apiInstance.getCompetitionsForMembersWithHttpInfo(id, competitionId, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#getCompetitionsForMembers");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getCompetitionsForMembers");
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
 **competitionId** | **String**| Id of a Competition | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**CompetitionReducedResponse**](CompetitionReducedResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Simplified competition response |  -  |
| **400** | Simplified competition response |  -  |
| **401** | Simplified competition response |  -  |
| **403** | Simplified competition response |  -  |
| **404** | Simplified competition response |  -  |
| **413** | Simplified competition response |  -  |
| **500** | Simplified competition response |  -  |
| **501** | Simplified competition response |  -  |
| **503** | Simplified competition response |  -  |


## getContestsForMembers

> CompletableFuture<ContestReducedResponse> getContestsForMembers(id, contestId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Contests for the Member id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String contestId = "contestId_example"; // String | Id of a Contest
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ContestReducedResponse> result = apiInstance.getContestsForMembers(id, contestId, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getContestsForMembers");
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
 **contestId** | **String**| Id of a Contest | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**ContestReducedResponse**](ContestReducedResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Simplified contest response |  -  |
| **400** | Simplified contest response |  -  |
| **401** | Simplified contest response |  -  |
| **403** | Simplified contest response |  -  |
| **404** | Simplified contest response |  -  |
| **413** | Simplified contest response |  -  |
| **500** | Simplified contest response |  -  |
| **501** | Simplified contest response |  -  |
| **503** | Simplified contest response |  -  |

## getContestsForMembersWithHttpInfo

> CompletableFuture<ApiResponse<ContestReducedResponse>> getContestsForMembers getContestsForMembersWithHttpInfo(id, contestId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Contests for the Member id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String contestId = "contestId_example"; // String | Id of a Contest
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<ContestReducedResponse>> response = apiInstance.getContestsForMembersWithHttpInfo(id, contestId, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#getContestsForMembers");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getContestsForMembers");
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
 **contestId** | **String**| Id of a Contest | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**ContestReducedResponse**](ContestReducedResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Simplified contest response |  -  |
| **400** | Simplified contest response |  -  |
| **401** | Simplified contest response |  -  |
| **403** | Simplified contest response |  -  |
| **404** | Simplified contest response |  -  |
| **413** | Simplified contest response |  -  |
| **500** | Simplified contest response |  -  |
| **501** | Simplified contest response |  -  |
| **503** | Simplified contest response |  -  |


## getMembers

> CompletableFuture<MemberResponse> getMembers(id, limit, skip)

Get members

Returns a list of Members. This assumes that members have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<MemberResponse> result = apiInstance.getMembers(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getMembers");
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

CompletableFuture<[**MemberResponse**](MemberResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of members and/or errors |  -  |
| **400** | A list of members and/or errors |  -  |
| **401** | A list of members and/or errors |  -  |
| **403** | A list of members and/or errors |  -  |
| **404** | A list of members and/or errors |  -  |
| **500** | A list of members and/or errors |  -  |
| **501** | A list of members and/or errors |  -  |

## getMembersWithHttpInfo

> CompletableFuture<ApiResponse<MemberResponse>> getMembers getMembersWithHttpInfo(id, limit, skip)

Get members

Returns a list of Members. This assumes that members have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<MemberResponse>> response = apiInstance.getMembersWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#getMembers");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getMembers");
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

CompletableFuture<ApiResponse<[**MemberResponse**](MemberResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of members and/or errors |  -  |
| **400** | A list of members and/or errors |  -  |
| **401** | A list of members and/or errors |  -  |
| **403** | A list of members and/or errors |  -  |
| **404** | A list of members and/or errors |  -  |
| **500** | A list of members and/or errors |  -  |
| **501** | A list of members and/or errors |  -  |


## getMembersByQuery

> CompletableFuture<MemberResponse> getMembersByQuery(body)

Get members by query

Retrieve Members from Ziqni database by unique Member ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Products from Ziqni database by unique Product ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<MemberResponse> result = apiInstance.getMembersByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getMembersByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Products from Ziqni database by unique Product ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<[**MemberResponse**](MemberResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of members and/or errors |  -  |
| **400** | A list of members and/or errors |  -  |
| **401** | A list of members and/or errors |  -  |
| **403** | A list of members and/or errors |  -  |
| **404** | A list of members and/or errors |  -  |
| **500** | A list of members and/or errors |  -  |
| **501** | A list of members and/or errors |  -  |

## getMembersByQueryWithHttpInfo

> CompletableFuture<ApiResponse<MemberResponse>> getMembersByQuery getMembersByQueryWithHttpInfo(body)

Get members by query

Retrieve Members from Ziqni database by unique Member ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Products from Ziqni database by unique Product ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<MemberResponse>> response = apiInstance.getMembersByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#getMembersByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getMembersByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Products from Ziqni database by unique Product ID&#39;s or any other POST body parameters using the POST method | [optional]

### Return type

CompletableFuture<ApiResponse<[**MemberResponse**](MemberResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of members and/or errors |  -  |
| **400** | A list of members and/or errors |  -  |
| **401** | A list of members and/or errors |  -  |
| **403** | A list of members and/or errors |  -  |
| **404** | A list of members and/or errors |  -  |
| **500** | A list of members and/or errors |  -  |
| **501** | A list of members and/or errors |  -  |


## getMembersByRefId

> CompletableFuture<MemberResponse> getMembersByRefId(refIds, limit, skip)

Get members by reference ids

Returns a list of Members. This assumes that members have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        List<String> refIds = Arrays.asList(); // List<String> | The reference ids  of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<MemberResponse> result = apiInstance.getMembersByRefId(refIds, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getMembersByRefId");
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
 **refIds** | [**List&lt;String&gt;**](String.md)| The reference ids  of the resources | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**MemberResponse**](MemberResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of members and/or errors |  -  |
| **400** | A list of members and/or errors |  -  |
| **401** | A list of members and/or errors |  -  |
| **403** | A list of members and/or errors |  -  |
| **404** | A list of members and/or errors |  -  |
| **500** | A list of members and/or errors |  -  |
| **501** | A list of members and/or errors |  -  |

## getMembersByRefIdWithHttpInfo

> CompletableFuture<ApiResponse<MemberResponse>> getMembersByRefId getMembersByRefIdWithHttpInfo(refIds, limit, skip)

Get members by reference ids

Returns a list of Members. This assumes that members have first been uploaded via a POST request or web console

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        List<String> refIds = Arrays.asList(); // List<String> | The reference ids  of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<MemberResponse>> response = apiInstance.getMembersByRefIdWithHttpInfo(refIds, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#getMembersByRefId");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getMembersByRefId");
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
 **refIds** | [**List&lt;String&gt;**](String.md)| The reference ids  of the resources | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**MemberResponse**](MemberResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of members and/or errors |  -  |
| **400** | A list of members and/or errors |  -  |
| **401** | A list of members and/or errors |  -  |
| **403** | A list of members and/or errors |  -  |
| **404** | A list of members and/or errors |  -  |
| **500** | A list of members and/or errors |  -  |
| **501** | A list of members and/or errors |  -  |


## getMessagesForMembers

> CompletableFuture<MemberMessageResponse> getMessagesForMembers(id, messageId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Messages for the Member id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String messageId = "messageId_example"; // String | Id of a Message
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<MemberMessageResponse> result = apiInstance.getMessagesForMembers(id, messageId, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getMessagesForMembers");
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
 **messageId** | **String**| Id of a Message | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**MemberMessageResponse**](MemberMessageResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of messages and/or errors |  -  |
| **400** | A list of messages and/or errors |  -  |
| **401** | A list of messages and/or errors |  -  |
| **403** | A list of messages and/or errors |  -  |
| **404** | A list of messages and/or errors |  -  |
| **413** | A list of messages and/or errors |  -  |
| **500** | A list of messages and/or errors |  -  |
| **501** | A list of messages and/or errors |  -  |
| **503** | A list of messages and/or errors |  -  |

## getMessagesForMembersWithHttpInfo

> CompletableFuture<ApiResponse<MemberMessageResponse>> getMessagesForMembers getMessagesForMembersWithHttpInfo(id, messageId, limit, skip)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Messages for the Member id provided

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        String id = "id_example"; // String | Unique identifier of the resource
        String messageId = "messageId_example"; // String | Id of a Message
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<MemberMessageResponse>> response = apiInstance.getMessagesForMembersWithHttpInfo(id, messageId, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#getMessagesForMembers");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#getMessagesForMembers");
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
 **messageId** | **String**| Id of a Message | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**MemberMessageResponse**](MemberMessageResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of messages and/or errors |  -  |
| **400** | A list of messages and/or errors |  -  |
| **401** | A list of messages and/or errors |  -  |
| **403** | A list of messages and/or errors |  -  |
| **404** | A list of messages and/or errors |  -  |
| **413** | A list of messages and/or errors |  -  |
| **500** | A list of messages and/or errors |  -  |
| **501** | A list of messages and/or errors |  -  |
| **503** | A list of messages and/or errors |  -  |


## updateMembers

> CompletableFuture<ModelApiResponse> updateMembers(body)

Update members

Update existing Members in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        List<UpdateMemberRequest> body = Arrays.asList(); // List<UpdateMemberRequest> | Update member details in the Ziqni database for a given Member identifier. * Member Ref Id can not be changed after creation * A member Id must exist in the Ziqni database to update the member
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateMembers(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#updateMembers");
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
 **body** | [**List&lt;UpdateMemberRequest&gt;**](UpdateMemberRequest.md)| Update member details in the Ziqni database for a given Member identifier. * Member Ref Id can not be changed after creation * A member Id must exist in the Ziqni database to update the member |

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

## updateMembersWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateMembers updateMembersWithHttpInfo(body)

Update members

Update existing Members in the Ziqni database

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.MembersApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.io");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        MembersApi apiInstance = new MembersApi(defaultClient);
        List<UpdateMemberRequest> body = Arrays.asList(); // List<UpdateMemberRequest> | Update member details in the Ziqni database for a given Member identifier. * Member Ref Id can not be changed after creation * A member Id must exist in the Ziqni database to update the member
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateMembersWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling MembersApi#updateMembers");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling MembersApi#updateMembers");
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
 **body** | [**List&lt;UpdateMemberRequest&gt;**](UpdateMemberRequest.md)| Update member details in the Ziqni database for a given Member identifier. * Member Ref Id can not be changed after creation * A member Id must exist in the Ziqni database to update the member |

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

