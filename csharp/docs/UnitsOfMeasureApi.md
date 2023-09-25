# Ziqni.Api.UnitsOfMeasureApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateUnitsOfMeasure**](UnitsOfMeasureApi.md#createunitsofmeasure) | **POST** /units-of-measure | 
[**DeleteUnitsOfMeasure**](UnitsOfMeasureApi.md#deleteunitsofmeasure) | **DELETE** /units-of-measure | 
[**DeleteUnitsOfMeasureByQuery**](UnitsOfMeasureApi.md#deleteunitsofmeasurebyquery) | **POST** /units-of-measure/delete | Delete units of measure by query
[**GetUnitsOfMeasure**](UnitsOfMeasureApi.md#getunitsofmeasure) | **GET** /units-of-measure | 
[**GetUnitsOfMeasureByQuery**](UnitsOfMeasureApi.md#getunitsofmeasurebyquery) | **POST** /units-of-measure/query | 
[**UpdateUnitsOfMeasure**](UnitsOfMeasureApi.md#updateunitsofmeasure) | **PUT** /units-of-measure | 



## CreateUnitsOfMeasure

> ApiResponse CreateUnitsOfMeasure (List<CreateUnitOfMeasureRequest> body)



Create a new Unit of measure in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateUnitsOfMeasureExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new UnitsOfMeasureApi(Configuration.Default);
            var body = new List<CreateUnitOfMeasureRequest>(); // List<CreateUnitOfMeasureRequest> | Create a Unit of measure in the Ziqni database

            try
            {
                ApiResponse result = apiInstance.CreateUnitsOfMeasure(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling UnitsOfMeasureApi.CreateUnitsOfMeasure: " + e.Message );
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
 **body** | [**List&lt;CreateUnitOfMeasureRequest&gt;**](CreateUnitOfMeasureRequest.md)| Create a Unit of measure in the Ziqni database | 

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


## DeleteUnitsOfMeasure

> ApiResponse DeleteUnitsOfMeasure (List<string> id = null)



Delete the Unit of measured for a given identifier specified

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteUnitsOfMeasureExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new UnitsOfMeasureApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteUnitsOfMeasure(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling UnitsOfMeasureApi.DeleteUnitsOfMeasure: " + e.Message );
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
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteUnitsOfMeasureByQuery

> ApiResponse DeleteUnitsOfMeasureByQuery (QueryRequest body = null)

Delete units of measure by query

Delete Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteUnitsOfMeasureByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new UnitsOfMeasureApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Delete Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                // Delete units of measure by query
                ApiResponse result = apiInstance.DeleteUnitsOfMeasureByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling UnitsOfMeasureApi.DeleteUnitsOfMeasureByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Units of measure from Ziqni database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method | [optional] 

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


## GetUnitsOfMeasure

> UnitOfMeasureResponse GetUnitsOfMeasure (List<string> id = null, int? limit = null, int? skip = null)



Returns a list of Units of measure. This assumes that units of measure have first been uploaded via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetUnitsOfMeasureExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new UnitsOfMeasureApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                UnitOfMeasureResponse result = apiInstance.GetUnitsOfMeasure(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling UnitsOfMeasureApi.GetUnitsOfMeasure: " + e.Message );
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

[**UnitOfMeasureResponse**](UnitOfMeasureResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of unit of measure and/or errors |  -  |
| **400** | A list of unit of measure and/or errors |  -  |
| **401** | A list of unit of measure and/or errors |  -  |
| **403** | A list of unit of measure and/or errors |  -  |
| **404** | A list of unit of measure and/or errors |  -  |
| **413** | A list of unit of measure and/or errors |  -  |
| **500** | A list of unit of measure and/or errors |  -  |
| **501** | A list of unit of measure and/or errors |  -  |
| **503** | A list of unit of measure and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetUnitsOfMeasureByQuery

> UnitOfMeasureResponse GetUnitsOfMeasureByQuery (QueryRequest body = null)



Retrieve Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetUnitsOfMeasureByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new UnitsOfMeasureApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Retrieve Units of measure from Ziqni database by unique Unit of measure ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                UnitOfMeasureResponse result = apiInstance.GetUnitsOfMeasureByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling UnitsOfMeasureApi.GetUnitsOfMeasureByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Units of measure from Ziqni database by unique Unit of measure ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**UnitOfMeasureResponse**](UnitOfMeasureResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of unit of measure and/or errors |  -  |
| **400** | A list of unit of measure and/or errors |  -  |
| **401** | A list of unit of measure and/or errors |  -  |
| **403** | A list of unit of measure and/or errors |  -  |
| **404** | A list of unit of measure and/or errors |  -  |
| **413** | A list of unit of measure and/or errors |  -  |
| **500** | A list of unit of measure and/or errors |  -  |
| **501** | A list of unit of measure and/or errors |  -  |
| **503** | A list of unit of measure and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateUnitsOfMeasure

> ApiResponse UpdateUnitsOfMeasure (List<UpdateUnitOfMeasureRequest> body)



Update an existing Unit of measure in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateUnitsOfMeasureExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new UnitsOfMeasureApi(Configuration.Default);
            var body = new List<UpdateUnitOfMeasureRequest>(); // List<UpdateUnitOfMeasureRequest> | Update a Unit of measure in the Ziqni database.

            try
            {
                ApiResponse result = apiInstance.UpdateUnitsOfMeasure(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling UnitsOfMeasureApi.UpdateUnitsOfMeasure: " + e.Message );
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
 **body** | [**List&lt;UpdateUnitOfMeasureRequest&gt;**](UpdateUnitOfMeasureRequest.md)| Update a Unit of measure in the Ziqni database. | 

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

