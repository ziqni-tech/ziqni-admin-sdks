# Ziqni.Api.LogEventsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetLogEventsByQuery**](LogEventsApi.md#getlogeventsbyquery) | **POST** /log-events/query | 



## GetLogEventsByQuery

> LogEventResponse GetLogEventsByQuery (QueryRequest? body = null)



Retrieve Log Events from Ziqni database by unique Log Events ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetLogEventsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new LogEventsApi(Configuration.Default);
            var body = new QueryRequest?(); // QueryRequest? | Retrieve Log Events from Ziqni database by unique Log Events ID's or any other Post body parameters using the POST method (optional) 

            try
            {
                LogEventResponse result = apiInstance.GetLogEventsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling LogEventsApi.GetLogEventsByQuery: " + e.Message );
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
 **body** | [**QueryRequest?**](QueryRequest?.md)| Retrieve Log Events from Ziqni database by unique Log Events ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**LogEventResponse**](LogEventResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of log events and/or errors |  -  |
| **400** | A list of log events and/or errors |  -  |
| **401** | A list of log events and/or errors |  -  |
| **403** | A list of log events and/or errors |  -  |
| **404** | A list of log events and/or errors |  -  |
| **413** | A list of log events and/or errors |  -  |
| **500** | A list of log events and/or errors |  -  |
| **501** | A list of log events and/or errors |  -  |
| **503** | A list of log events and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

