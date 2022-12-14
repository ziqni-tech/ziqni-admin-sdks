# Org.OpenAPITools.Api.AwardsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ClaimAwards**](AwardsApi.md#claimawards) | **PUT** /awards/claim | 
[**GetAwards**](AwardsApi.md#getawards) | **GET** /awards | 
[**GetAwardsByQuery**](AwardsApi.md#getawardsbyquery) | **POST** /awards/query | 



## ClaimAwards

> ApiResponse ClaimAwards (List<ClaimAwardRequest> body)



Claim Awards that need to be actioned at

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ClaimAwardsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AwardsApi(Configuration.Default);
            var body = new List<ClaimAwardRequest>(); // List<ClaimAwardRequest> | Claim Awards

            try
            {
                ApiResponse result = apiInstance.ClaimAwards(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AwardsApi.ClaimAwards: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**List&lt;ClaimAwardRequest&gt;**](ClaimAwardRequest.md)| Claim Awards | 

### Return type

[**ApiResponse**](ApiResponse.md)

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

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAwards

> AwardResponse GetAwards (List<string> id = null, int? limit = null, int? skip = null)



Returns a list of Awards.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetAwardsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AwardsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                AwardResponse result = apiInstance.GetAwards(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AwardsApi.GetAwards: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List&lt;string&gt;**](string.md)| The unique identifiers of the resources | [optional] 
 **limit** | **int?**| Limit the returned total records found | [optional] 
 **skip** | **int?**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**AwardResponse**](AwardResponse.md)

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

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAwardsByQuery

> AwardResponse GetAwardsByQuery (QueryRequest body = null)



Retrieve Awards from Ziqni database by unique Awards ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetAwardsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AwardsApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Retrieve Awards from Ziqni database by unique Awards ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                AwardResponse result = apiInstance.GetAwardsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AwardsApi.GetAwardsByQuery: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**AwardResponse**](AwardResponse.md)

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

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

