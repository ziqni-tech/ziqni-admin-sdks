# Ziqni.Api.EventsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateEvents**](EventsApi.md#createevents) | **POST** /events | 
[**GetEvents**](EventsApi.md#getevents) | **GET** /events | 
[**GetEventsByQuery**](EventsApi.md#geteventsbyquery) | **POST** /events/query | 



## CreateEvents

> ApiResponse CreateEvents (List<CreateEventRequest> body = null)



Create an Event

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateEventsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new EventsApi(Configuration.Default);
            var body = new List<CreateEventRequest>(); // List<CreateEventRequest> | Create an Event (optional) 

            try
            {
                ApiResponse result = apiInstance.CreateEvents(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling EventsApi.CreateEvents: " + e.Message );
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
 **body** | [**List&lt;CreateEventRequest&gt;**](CreateEventRequest.md)| Create an Event | [optional] 

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
| **200** | A list of outcomes and/or errors |  -  |
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


## GetEvents

> EventResponse GetEvents (List<string> id = null, int? limit = null, int? skip = null)



Retrieve an Event or a list of Events from Ziqni by unique Event ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetEventsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new EventsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                EventResponse result = apiInstance.GetEvents(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling EventsApi.GetEvents: " + e.Message );
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

[**EventResponse**](EventResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Unauthorized |  -  |
| **400** | Unauthorized |  -  |
| **401** | Unauthorized |  -  |
| **403** | Unauthorized |  -  |
| **404** | Unauthorized |  -  |
| **413** | Unauthorized |  -  |
| **500** | Unauthorized |  -  |
| **501** | Unauthorized |  -  |
| **503** | Unauthorized |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventsByQuery

> EventResponse GetEventsByQuery (QueryRequest body = null)



Retrieve an Event or a list of Events from Ziqni by unique Event ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetEventsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new EventsApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Retrieve an Event or a list of Events from Ziqni by unique Event ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                EventResponse result = apiInstance.GetEventsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling EventsApi.GetEventsByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve an Event or a list of Events from Ziqni by unique Event ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**EventResponse**](EventResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Unauthorized |  -  |
| **400** | Unauthorized |  -  |
| **401** | Unauthorized |  -  |
| **403** | Unauthorized |  -  |
| **404** | Unauthorized |  -  |
| **413** | Unauthorized |  -  |
| **500** | Unauthorized |  -  |
| **501** | Unauthorized |  -  |
| **503** | Unauthorized |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

