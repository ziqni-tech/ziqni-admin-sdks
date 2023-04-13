# RulesApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRulesByQuery**](RulesApi.md#deleteRulesByQuery) | **POST** /rules/delete | 
[**deleteRulesByQueryWithHttpInfo**](RulesApi.md#deleteRulesByQueryWithHttpInfo) | **POST** /rules/delete | 
[**getRuleSchemas**](RulesApi.md#getRuleSchemas) | **GET** /rules/schema | 
[**getRuleSchemasWithHttpInfo**](RulesApi.md#getRuleSchemasWithHttpInfo) | **GET** /rules/schema | 
[**getRules**](RulesApi.md#getRules) | **GET** /rules | 
[**getRulesWithHttpInfo**](RulesApi.md#getRulesWithHttpInfo) | **GET** /rules | 
[**getRulesByQuery**](RulesApi.md#getRulesByQuery) | **POST** /rules/query | 
[**getRulesByQueryWithHttpInfo**](RulesApi.md#getRulesByQueryWithHttpInfo) | **POST** /rules/query | 
[**lookupOperandsRules**](RulesApi.md#lookupOperandsRules) | **POST** /rules/operand-lookup | 
[**lookupOperandsRulesWithHttpInfo**](RulesApi.md#lookupOperandsRulesWithHttpInfo) | **POST** /rules/operand-lookup | 
[**updateRules**](RulesApi.md#updateRules) | **PUT** /rules | 
[**updateRulesWithHttpInfo**](RulesApi.md#updateRulesWithHttpInfo) | **PUT** /rules | 
[**validateRules**](RulesApi.md#validateRules) | **POST** /rules/validate | 
[**validateRulesWithHttpInfo**](RulesApi.md#validateRulesWithHttpInfo) | **POST** /rules/validate | 



## deleteRulesByQuery

> CompletableFuture<ModelApiResponse> deleteRulesByQuery(body)



Delete Rules from Ziqni database by unique Rules ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete Rules from Ziqni database by unique Rules ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.deleteRulesByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#deleteRulesByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Rules from Ziqni database by unique Rules ID&#39;s or any other POST body parameters using the POST method | [optional]

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

## deleteRulesByQueryWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> deleteRulesByQuery deleteRulesByQueryWithHttpInfo(body)



Delete Rules from Ziqni database by unique Rules ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Delete Rules from Ziqni database by unique Rules ID's or any other POST body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.deleteRulesByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling RulesApi#deleteRulesByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#deleteRulesByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Rules from Ziqni database by unique Rules ID&#39;s or any other POST body parameters using the POST method | [optional]

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


## getRuleSchemas

> CompletableFuture<Response> getRuleSchemas(context)



Returns a list of rules. This assumes that rules have first been created during achievement, competition or contest setup

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        String context = "context_example"; // String | The context to retrieve, either achievement, competition or contest
        try {
            CompletableFuture<Response> result = apiInstance.getRuleSchemas(context);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#getRuleSchemas");
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
 **context** | **String**| The context to retrieve, either achievement, competition or contest |

### Return type

CompletableFuture<[**Response**](Response.md)>


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
| **413** | A list of members and/or errors |  -  |
| **500** | A list of members and/or errors |  -  |
| **501** | A list of members and/or errors |  -  |
| **503** | A list of members and/or errors |  -  |

## getRuleSchemasWithHttpInfo

> CompletableFuture<ApiResponse<Response>> getRuleSchemas getRuleSchemasWithHttpInfo(context)



Returns a list of rules. This assumes that rules have first been created during achievement, competition or contest setup

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        String context = "context_example"; // String | The context to retrieve, either achievement, competition or contest
        try {
            CompletableFuture<ApiResponse<Response>> response = apiInstance.getRuleSchemasWithHttpInfo(context);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling RulesApi#getRuleSchemas");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#getRuleSchemas");
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
 **context** | **String**| The context to retrieve, either achievement, competition or contest |

### Return type

CompletableFuture<ApiResponse<[**Response**](Response.md)>>


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
| **413** | A list of members and/or errors |  -  |
| **500** | A list of members and/or errors |  -  |
| **501** | A list of members and/or errors |  -  |
| **503** | A list of members and/or errors |  -  |


## getRules

> CompletableFuture<RuleResponse> getRules(id, limit, skip)



Returns a list of rules. This assumes that rules have first been created during achievement, competition or contest setup. The id is the ID of the entity the rules describe

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<RuleResponse> result = apiInstance.getRules(id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#getRules");
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

CompletableFuture<[**RuleResponse**](RuleResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of repositories and/or errors |  -  |
| **400** | A list of repositories and/or errors |  -  |
| **401** | A list of repositories and/or errors |  -  |
| **403** | A list of repositories and/or errors |  -  |
| **404** | A list of repositories and/or errors |  -  |
| **413** | A list of repositories and/or errors |  -  |
| **500** | A list of repositories and/or errors |  -  |
| **501** | A list of repositories and/or errors |  -  |
| **503** | A list of repositories and/or errors |  -  |

## getRulesWithHttpInfo

> CompletableFuture<ApiResponse<RuleResponse>> getRules getRulesWithHttpInfo(id, limit, skip)



Returns a list of rules. This assumes that rules have first been created during achievement, competition or contest setup. The id is the ID of the entity the rules describe

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<RuleResponse>> response = apiInstance.getRulesWithHttpInfo(id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling RulesApi#getRules");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#getRules");
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

CompletableFuture<ApiResponse<[**RuleResponse**](RuleResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of repositories and/or errors |  -  |
| **400** | A list of repositories and/or errors |  -  |
| **401** | A list of repositories and/or errors |  -  |
| **403** | A list of repositories and/or errors |  -  |
| **404** | A list of repositories and/or errors |  -  |
| **413** | A list of repositories and/or errors |  -  |
| **500** | A list of repositories and/or errors |  -  |
| **501** | A list of repositories and/or errors |  -  |
| **503** | A list of repositories and/or errors |  -  |


## getRulesByQuery

> CompletableFuture<RuleResponse> getRulesByQuery(body)



Retrieve Rules from Ziqni database by unique Rewards ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Rules from Ziqni database by unique Rewards ID's or any other Post body parameters using the POST method
        try {
            CompletableFuture<RuleResponse> result = apiInstance.getRulesByQuery(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#getRulesByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Rules from Ziqni database by unique Rewards ID&#39;s or any other Post body parameters using the POST method | [optional]

### Return type

CompletableFuture<[**RuleResponse**](RuleResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of repositories and/or errors |  -  |
| **400** | A list of repositories and/or errors |  -  |
| **401** | A list of repositories and/or errors |  -  |
| **403** | A list of repositories and/or errors |  -  |
| **404** | A list of repositories and/or errors |  -  |
| **413** | A list of repositories and/or errors |  -  |
| **500** | A list of repositories and/or errors |  -  |
| **501** | A list of repositories and/or errors |  -  |
| **503** | A list of repositories and/or errors |  -  |

## getRulesByQueryWithHttpInfo

> CompletableFuture<ApiResponse<RuleResponse>> getRulesByQuery getRulesByQueryWithHttpInfo(body)



Retrieve Rules from Ziqni database by unique Rewards ID&#39;s or any other POST body parameters using the POST method

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        QueryRequest body = new QueryRequest(); // QueryRequest | Retrieve Rules from Ziqni database by unique Rewards ID's or any other Post body parameters using the POST method
        try {
            CompletableFuture<ApiResponse<RuleResponse>> response = apiInstance.getRulesByQueryWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling RulesApi#getRulesByQuery");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#getRulesByQuery");
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Rules from Ziqni database by unique Rewards ID&#39;s or any other Post body parameters using the POST method | [optional]

### Return type

CompletableFuture<ApiResponse<[**RuleResponse**](RuleResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of repositories and/or errors |  -  |
| **400** | A list of repositories and/or errors |  -  |
| **401** | A list of repositories and/or errors |  -  |
| **403** | A list of repositories and/or errors |  -  |
| **404** | A list of repositories and/or errors |  -  |
| **413** | A list of repositories and/or errors |  -  |
| **500** | A list of repositories and/or errors |  -  |
| **501** | A list of repositories and/or errors |  -  |
| **503** | A list of repositories and/or errors |  -  |


## lookupOperandsRules

> CompletableFuture<RuleOperandLookupResponse> lookupOperandsRules(body)



Search or get rule operand values

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        List<RuleOperandLookupRequest> body = Arrays.asList(); // List<RuleOperandLookupRequest> | Search for operand values and human readable text options
        try {
            CompletableFuture<RuleOperandLookupResponse> result = apiInstance.lookupOperandsRules(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#lookupOperandsRules");
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
 **body** | [**List&lt;RuleOperandLookupRequest&gt;**](RuleOperandLookupRequest.md)| Search for operand values and human readable text options |

### Return type

CompletableFuture<[**RuleOperandLookupResponse**](RuleOperandLookupResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of rule operand lookup values and/or errors |  -  |
| **400** | A list of rule operand lookup values and/or errors |  -  |
| **401** | A list of rule operand lookup values and/or errors |  -  |
| **403** | A list of rule operand lookup values and/or errors |  -  |
| **404** | A list of rule operand lookup values and/or errors |  -  |
| **413** | A list of rule operand lookup values and/or errors |  -  |
| **500** | A list of rule operand lookup values and/or errors |  -  |
| **501** | A list of rule operand lookup values and/or errors |  -  |
| **503** | A list of rule operand lookup values and/or errors |  -  |

## lookupOperandsRulesWithHttpInfo

> CompletableFuture<ApiResponse<RuleOperandLookupResponse>> lookupOperandsRules lookupOperandsRulesWithHttpInfo(body)



Search or get rule operand values

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        List<RuleOperandLookupRequest> body = Arrays.asList(); // List<RuleOperandLookupRequest> | Search for operand values and human readable text options
        try {
            CompletableFuture<ApiResponse<RuleOperandLookupResponse>> response = apiInstance.lookupOperandsRulesWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling RulesApi#lookupOperandsRules");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#lookupOperandsRules");
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
 **body** | [**List&lt;RuleOperandLookupRequest&gt;**](RuleOperandLookupRequest.md)| Search for operand values and human readable text options |

### Return type

CompletableFuture<ApiResponse<[**RuleOperandLookupResponse**](RuleOperandLookupResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of rule operand lookup values and/or errors |  -  |
| **400** | A list of rule operand lookup values and/or errors |  -  |
| **401** | A list of rule operand lookup values and/or errors |  -  |
| **403** | A list of rule operand lookup values and/or errors |  -  |
| **404** | A list of rule operand lookup values and/or errors |  -  |
| **413** | A list of rule operand lookup values and/or errors |  -  |
| **500** | A list of rule operand lookup values and/or errors |  -  |
| **501** | A list of rule operand lookup values and/or errors |  -  |
| **503** | A list of rule operand lookup values and/or errors |  -  |


## updateRules

> CompletableFuture<ModelApiResponse> updateRules(body)



Update existing rules

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        List<UpdateRuleRequest> body = Arrays.asList(); // List<UpdateRuleRequest> | Update rules for a given Achievement, Competition or Contest identifier.
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.updateRules(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#updateRules");
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
 **body** | [**List&lt;UpdateRuleRequest&gt;**](UpdateRuleRequest.md)| Update rules for a given Achievement, Competition or Contest identifier. |

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

## updateRulesWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> updateRules updateRulesWithHttpInfo(body)



Update existing rules

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        List<UpdateRuleRequest> body = Arrays.asList(); // List<UpdateRuleRequest> | Update rules for a given Achievement, Competition or Contest identifier.
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.updateRulesWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling RulesApi#updateRules");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#updateRules");
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
 **body** | [**List&lt;UpdateRuleRequest&gt;**](UpdateRuleRequest.md)| Update rules for a given Achievement, Competition or Contest identifier. |

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


## validateRules

> CompletableFuture<ModelApiResponse> validateRules(body)



Validate rules

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        List<UpdateRuleRequest> body = Arrays.asList(); // List<UpdateRuleRequest> | Validate rules
        try {
            CompletableFuture<ModelApiResponse> result = apiInstance.validateRules(body);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#validateRules");
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
 **body** | [**List&lt;UpdateRuleRequest&gt;**](UpdateRuleRequest.md)| Validate rules |

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

## validateRulesWithHttpInfo

> CompletableFuture<ApiResponse<ModelApiResponse>> validateRules validateRulesWithHttpInfo(body)



Validate rules

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.RulesApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        RulesApi apiInstance = new RulesApi(defaultClient);
        List<UpdateRuleRequest> body = Arrays.asList(); // List<UpdateRuleRequest> | Validate rules
        try {
            CompletableFuture<ApiResponse<ModelApiResponse>> response = apiInstance.validateRulesWithHttpInfo(body);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling RulesApi#validateRules");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling RulesApi#validateRules");
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
 **body** | [**List&lt;UpdateRuleRequest&gt;**](UpdateRuleRequest.md)| Validate rules |

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

