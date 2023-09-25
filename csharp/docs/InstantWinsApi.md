# Ziqni.Api.InstantWinsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateInstantWins**](InstantWinsApi.md#createinstantwins) | **POST** /instant-wins | Create instant wins
[**DeleteInstantWins**](InstantWinsApi.md#deleteinstantwins) | **DELETE** /instant-wins | Delete instant wins
[**DeleteInstantWinsByQuery**](InstantWinsApi.md#deleteinstantwinsbyquery) | **POST** /instant-wins/delete | Delete instant-wins by query
[**GetInstantWins**](InstantWinsApi.md#getinstantwins) | **GET** /instant-wins | Get instant wins
[**GetInstantWinsByQuery**](InstantWinsApi.md#getinstantwinsbyquery) | **POST** /instant-wins/query | Get instant wins by query
[**UpdateInstantWins**](InstantWinsApi.md#updateinstantwins) | **PUT** /instant-wins | Update instant wins



## CreateInstantWins

> ApiResponse CreateInstantWins (List<CreateInstantWinRequest> body)

Create instant wins

Create new Instant win in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateInstantWinsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new InstantWinsApi(Configuration.Default);
            var body = new List<CreateInstantWinRequest>(); // List<CreateInstantWinRequest> | Create Instant wins in the Ziqni database. An array can contain a maximum of 10,000 instant wins in one request

            try
            {
                // Create instant wins
                ApiResponse result = apiInstance.CreateInstantWins(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstantWinsApi.CreateInstantWins: " + e.Message );
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
 **body** | [**List&lt;CreateInstantWinRequest&gt;**](CreateInstantWinRequest.md)| Create Instant wins in the Ziqni database. An array can contain a maximum of 10,000 instant wins in one request | 

### Return type

[**ApiResponse**](ApiResponse.md)

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

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteInstantWins

> ApiResponse DeleteInstantWins (List<string> id = null)

Delete instant wins

Delete Instant win for a given identifier specified

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteInstantWinsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new InstantWinsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 

            try
            {
                // Delete instant wins
                ApiResponse result = apiInstance.DeleteInstantWins(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstantWinsApi.DeleteInstantWins: " + e.Message );
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

### Return type

[**ApiResponse**](ApiResponse.md)

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

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteInstantWinsByQuery

> ApiResponse DeleteInstantWinsByQuery (QueryRequest body = null)

Delete instant-wins by query

Delete Instant wins from Ziqni database by unique Instant win ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteInstantWinsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new InstantWinsApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Delete Instant Wins from Ziqni database by unique Instant win ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                // Delete instant-wins by query
                ApiResponse result = apiInstance.DeleteInstantWinsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstantWinsApi.DeleteInstantWinsByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Instant Wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method | [optional] 

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
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInstantWins

> InstantWinResponse GetInstantWins (List<string> id = null, int? limit = null, int? skip = null)

Get instant wins

Returns a list of Instant wins. This assumes that instant wins have first been uploaded via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetInstantWinsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new InstantWinsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                // Get instant wins
                InstantWinResponse result = apiInstance.GetInstantWins(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstantWinsApi.GetInstantWins: " + e.Message );
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

[**InstantWinResponse**](InstantWinResponse.md)

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

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetInstantWinsByQuery

> InstantWinResponse GetInstantWinsByQuery (QueryRequest body = null)

Get instant wins by query

Retrieve Instant wins from Ziqni database by unique Instant win ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetInstantWinsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new InstantWinsApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Retrieve Instant wins from Ziqni database by unique Instant win ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                // Get instant wins by query
                InstantWinResponse result = apiInstance.GetInstantWinsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstantWinsApi.GetInstantWinsByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Instant wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**InstantWinResponse**](InstantWinResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
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

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateInstantWins

> ApiResponse UpdateInstantWins (List<UpdateInstantWinRequest> body)

Update instant wins

Update existing Instant wins in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateInstantWinsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new InstantWinsApi(Configuration.Default);
            var body = new List<UpdateInstantWinRequest>(); // List<UpdateInstantWinRequest> | Update a Instant win or multiple Instant wins in the Ziqni database. 

            try
            {
                // Update instant wins
                ApiResponse result = apiInstance.UpdateInstantWins(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling InstantWinsApi.UpdateInstantWins: " + e.Message );
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
 **body** | [**List&lt;UpdateInstantWinRequest&gt;**](UpdateInstantWinRequest.md)| Update a Instant win or multiple Instant wins in the Ziqni database.  | 

### Return type

[**ApiResponse**](ApiResponse.md)

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

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

