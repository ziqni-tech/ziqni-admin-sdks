# JackpotContributionsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getJackpotContributions**](JackpotContributionsApi.md#getJackpotContributions) | **GET** /jackpot-contributions | Get jackpot contributions by member
[**getJackpotContributionsWithHttpInfo**](JackpotContributionsApi.md#getJackpotContributionsWithHttpInfo) | **GET** /jackpot-contributions | Get jackpot contributions by member



## getJackpotContributions

> CompletableFuture<JackpotContributionResponse> getJackpotContributions(memberId, id, limit, skip)

Get jackpot contributions by member

Returns a list of jackpot contributions by member. This assumes that jackpot contributions have first been uploaded via a POST request or web console 

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.JackpotContributionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        JackpotContributionsApi apiInstance = new JackpotContributionsApi(defaultClient);
        String memberId = "memberId_example"; // String | The ID of the member to filter contributions by
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<JackpotContributionResponse> result = apiInstance.getJackpotContributions(memberId, id, limit, skip);
            System.out.println(result.get());
        } catch (ApiException e) {
            System.err.println("Exception when calling JackpotContributionsApi#getJackpotContributions");
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
 **memberId** | **String**| The ID of the member to filter contributions by |
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<[**JackpotContributionResponse**](JackpotContributionResponse.md)>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |

## getJackpotContributionsWithHttpInfo

> CompletableFuture<ApiResponse<JackpotContributionResponse>> getJackpotContributions getJackpotContributionsWithHttpInfo(memberId, id, limit, skip)

Get jackpot contributions by member

Returns a list of jackpot contributions by member. This assumes that jackpot contributions have first been uploaded via a POST request or web console 

### Example

```java
// Import classes:
import com.ziqni.admin.sdk.ApiClient;
import com.ziqni.admin.sdk.ApiException;
import com.ziqni.admin.sdk.ApiResponse;
import com.ziqni.admin.sdk.Configuration;
import com.ziqni.admin.sdk.auth.*;
import com.ziqni.admin.sdk.models.*;
import com.ziqni.admin.sdk.api.JackpotContributionsApi;
import java.util.concurrent.CompletableFuture;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("https://api.ziqni.com");
        
        // Configure OAuth2 access token for authorization: OAuth2
        OAuth OAuth2 = (OAuth) defaultClient.getAuthentication("OAuth2");
        OAuth2.setAccessToken("YOUR ACCESS TOKEN");

        JackpotContributionsApi apiInstance = new JackpotContributionsApi(defaultClient);
        String memberId = "memberId_example"; // String | The ID of the member to filter contributions by
        List<String> id = Arrays.asList(); // List<String> | The unique identifiers of the resources
        Integer limit = 56; // Integer | Limit the returned total records found
        Integer skip = 56; // Integer | Skip the returned records found and return the next batch of records
        try {
            CompletableFuture<ApiResponse<JackpotContributionResponse>> response = apiInstance.getJackpotContributionsWithHttpInfo(memberId, id, limit, skip);
            System.out.println("Status code: " + response.get().getStatusCode());
            System.out.println("Response headers: " + response.get().getHeaders());
            System.out.println("Response body: " + response.get().getData());
        } catch (InterruptedException | ExecutionException e) {
            ApiException apiException = (ApiException)e.getCause();
            System.err.println("Exception when calling JackpotContributionsApi#getJackpotContributions");
            System.err.println("Status code: " + apiException.getCode());
            System.err.println("Response headers: " + apiException.getResponseHeaders());
            System.err.println("Reason: " + apiException.getResponseBody());
            e.printStackTrace();
        } catch (ApiException e) {
            System.err.println("Exception when calling JackpotContributionsApi#getJackpotContributions");
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
 **memberId** | **String**| The ID of the member to filter contributions by |
 **id** | [**List&lt;String&gt;**](String.md)| The unique identifiers of the resources | [optional]
 **limit** | **Integer**| Limit the returned total records found | [optional]
 **skip** | **Integer**| Skip the returned records found and return the next batch of records | [optional]

### Return type

CompletableFuture<ApiResponse<[**JackpotContributionResponse**](JackpotContributionResponse.md)>>


### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Instant wins and/or errors |  -  |
| **400** | A list of Instant wins and/or errors |  -  |
| **401** | A list of Instant wins and/or errors |  -  |
| **403** | A list of Instant wins and/or errors |  -  |
| **404** | A list of Instant wins and/or errors |  -  |
| **500** | A list of Instant wins and/or errors |  -  |
| **501** | A list of Instant wins and/or errors |  -  |

