# Ziqni.Api.EntrantsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExportEntrantsByQuery**](EntrantsApi.md#exportentrantsbyquery) | **POST** /entrants/export | Get entrants by query
[**GetEntrantsByQuery**](EntrantsApi.md#getentrantsbyquery) | **POST** /entrants/query | Get entrants by query
[**UpdateEntrants**](EntrantsApi.md#updateentrants) | **POST** /entrants | 



## ExportEntrantsByQuery

> EntrantCountResponse ExportEntrantsByQuery (QueryRequest? queryRequest = null)

Get entrants by query

Retrieve ConteEntrants from Ziqni database by unique Contests ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class ExportEntrantsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new EntrantsApi(Configuration.Default);
            var queryRequest = new QueryRequest?(); // QueryRequest? |  (optional) 

            try
            {
                // Get entrants by query
                EntrantCountResponse result = apiInstance.ExportEntrantsByQuery(queryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling EntrantsApi.ExportEntrantsByQuery: " + e.Message );
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
 **queryRequest** | [**QueryRequest?**](QueryRequest?.md)|  | [optional] 

### Return type

[**EntrantCountResponse**](EntrantCountResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A count of Entrants for the competition/contest to export and/or errors |  -  |
| **400** | A count of Entrants for the competition/contest to export and/or errors |  -  |
| **401** | A count of Entrants for the competition/contest to export and/or errors |  -  |
| **403** | A count of Entrants for the competition/contest to export and/or errors |  -  |
| **404** | A count of Entrants for the competition/contest to export and/or errors |  -  |
| **413** | A count of Entrants for the competition/contest to export and/or errors |  -  |
| **500** | A count of Entrants for the competition/contest to export and/or errors |  -  |
| **501** | A count of Entrants for the competition/contest to export and/or errors |  -  |
| **503** | A count of Entrants for the competition/contest to export and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEntrantsByQuery

> EntrantResponse GetEntrantsByQuery (QueryRequest? queryRequest = null)

Get entrants by query

Retrieve ConteEntrants from Ziqni database by unique Contests ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetEntrantsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new EntrantsApi(Configuration.Default);
            var queryRequest = new QueryRequest?(); // QueryRequest? |  (optional) 

            try
            {
                // Get entrants by query
                EntrantResponse result = apiInstance.GetEntrantsByQuery(queryRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling EntrantsApi.GetEntrantsByQuery: " + e.Message );
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
 **queryRequest** | [**QueryRequest?**](QueryRequest?.md)|  | [optional] 

### Return type

[**EntrantResponse**](EntrantResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Entrants for the competition/contest and/or errors |  -  |
| **400** | A list of Entrants for the competition/contest and/or errors |  -  |
| **401** | A list of Entrants for the competition/contest and/or errors |  -  |
| **403** | A list of Entrants for the competition/contest and/or errors |  -  |
| **404** | A list of Entrants for the competition/contest and/or errors |  -  |
| **413** | A list of Entrants for the competition/contest and/or errors |  -  |
| **500** | A list of Entrants for the competition/contest and/or errors |  -  |
| **501** | A list of Entrants for the competition/contest and/or errors |  -  |
| **503** | A list of Entrants for the competition/contest and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateEntrants

> ApiResponse UpdateEntrants (UpdateEntrantRequest? body = null)



Updates the status of the Entrants for a Competition id provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateEntrantsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new EntrantsApi(Configuration.Default);
            var body = new UpdateEntrantRequest?(); // UpdateEntrantRequest? | Updates the status of the Entrants (optional) 

            try
            {
                ApiResponse result = apiInstance.UpdateEntrants(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling EntrantsApi.UpdateEntrants: " + e.Message );
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
 **body** | [**UpdateEntrantRequest?**](UpdateEntrantRequest?.md)| Updates the status of the Entrants | [optional] 

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

