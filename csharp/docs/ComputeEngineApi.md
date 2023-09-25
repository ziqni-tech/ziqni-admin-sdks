# Ziqni.Api.ComputeEngineApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateComputeEngines**](ComputeEngineApi.md#createcomputeengines) | **POST** /compute-engines | 
[**DeleteComputeEnginesById**](ComputeEngineApi.md#deletecomputeenginesbyid) | **DELETE** /compute-engines/{id} | 
[**DeleteComputeEnginesByQuery**](ComputeEngineApi.md#deletecomputeenginesbyquery) | **POST** /compute-engines/delete | 
[**GetComputeEngines**](ComputeEngineApi.md#getcomputeengines) | **GET** /compute-engines | 
[**GetComputeEnginesById**](ComputeEngineApi.md#getcomputeenginesbyid) | **GET** /compute-engines/{id} | 
[**GetComputeEnginesByQuery**](ComputeEngineApi.md#getcomputeenginesbyquery) | **POST** /compute-engines/query | 
[**UpdateComputeEngines**](ComputeEngineApi.md#updatecomputeengines) | **PUT** /compute-engines | 



## CreateComputeEngines

> ApiResponse CreateComputeEngines (CreateComputeEngineRequest body)



Create a new Compute Engine in the Ziqni system

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateComputeEnginesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ComputeEngineApi(Configuration.Default);
            var body = new CreateComputeEngineRequest(); // CreateComputeEngineRequest | Create a Compute Engine in the Ziqni system

            try
            {
                ApiResponse result = apiInstance.CreateComputeEngines(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ComputeEngineApi.CreateComputeEngines: " + e.Message );
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
 **body** | [**CreateComputeEngineRequest**](CreateComputeEngineRequest.md)| Create a Compute Engine in the Ziqni system | 

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


## DeleteComputeEnginesById

> ApiResponse DeleteComputeEnginesById (string id)



Delete the Compute Engine for a given identifier specified

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteComputeEnginesByIdExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ComputeEngineApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource

            try
            {
                ApiResponse result = apiInstance.DeleteComputeEnginesById(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ComputeEngineApi.DeleteComputeEnginesById: " + e.Message );
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
 **id** | **string**| Unique identifier of the resource | 

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


## DeleteComputeEnginesByQuery

> ApiResponse DeleteComputeEnginesByQuery (QueryRequest body = null)



Delete an Compute Engine or a list of Compute Engines from Ziqni by query

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteComputeEnginesByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ComputeEngineApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Delete an  Compute Engine or a list of Compute Engines from Ziqni by unique Compute Engine ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteComputeEnginesByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ComputeEngineApi.DeleteComputeEnginesByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete an  Compute Engine or a list of Compute Engines from Ziqni by unique Compute Engine ID&#39;s or any other POST body parameters using the POST method | [optional] 

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
| **503** | A list of outcomes and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetComputeEngines

> ComputeEngineResponse GetComputeEngines (List<string> id = null, int? limit = null, int? skip = null)



Returns a list of Compute Engines. This assumes that api keys have first been created via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetComputeEnginesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ComputeEngineApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                ComputeEngineResponse result = apiInstance.GetComputeEngines(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ComputeEngineApi.GetComputeEngines: " + e.Message );
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

[**ComputeEngineResponse**](ComputeEngineResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Compute Engines |  -  |
| **400** | List of Compute Engines |  -  |
| **401** | List of Compute Engines |  -  |
| **403** | List of Compute Engines |  -  |
| **404** | List of Compute Engines |  -  |
| **413** | List of Compute Engines |  -  |
| **500** | List of Compute Engines |  -  |
| **501** | List of Compute Engines |  -  |
| **503** | List of Compute Engines |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetComputeEnginesById

> ComputeEngineResponse GetComputeEnginesById (string id)



Returns an Compute Engine by identifier provided. This assumes that compute engines have first been created via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetComputeEnginesByIdExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ComputeEngineApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource

            try
            {
                ComputeEngineResponse result = apiInstance.GetComputeEnginesById(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ComputeEngineApi.GetComputeEnginesById: " + e.Message );
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
 **id** | **string**| Unique identifier of the resource | 

### Return type

[**ComputeEngineResponse**](ComputeEngineResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Compute Engines |  -  |
| **400** | List of Compute Engines |  -  |
| **401** | List of Compute Engines |  -  |
| **403** | List of Compute Engines |  -  |
| **404** | List of Compute Engines |  -  |
| **413** | List of Compute Engines |  -  |
| **500** | List of Compute Engines |  -  |
| **501** | List of Compute Engines |  -  |
| **503** | List of Compute Engines |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetComputeEnginesByQuery

> ComputeEngineResponse GetComputeEnginesByQuery (QueryRequest body = null)



Retrieve an Compute Engine or a list of Compute Engines by query

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetComputeEnginesByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ComputeEngineApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Retrieve an  Compute Engine or a list of Compute Engines from Ziqni by unique Copute Engine ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                ComputeEngineResponse result = apiInstance.GetComputeEnginesByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ComputeEngineApi.GetComputeEnginesByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve an  Compute Engine or a list of Compute Engines from Ziqni by unique Copute Engine ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ComputeEngineResponse**](ComputeEngineResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Compute Engines |  -  |
| **400** | List of Compute Engines |  -  |
| **401** | List of Compute Engines |  -  |
| **403** | List of Compute Engines |  -  |
| **404** | List of Compute Engines |  -  |
| **413** | List of Compute Engines |  -  |
| **500** | List of Compute Engines |  -  |
| **501** | List of Compute Engines |  -  |
| **503** | List of Compute Engines |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateComputeEngines

> ApiResponse UpdateComputeEngines (UpdateComputeEngineRequest body)



Update an existing Compute Engine in the Ziqni system

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateComputeEnginesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ComputeEngineApi(Configuration.Default);
            var body = new UpdateComputeEngineRequest(); // UpdateComputeEngineRequest | Update an Compute Engine in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field

            try
            {
                ApiResponse result = apiInstance.UpdateComputeEngines(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ComputeEngineApi.UpdateComputeEngines: " + e.Message );
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
 **body** | [**UpdateComputeEngineRequest**](UpdateComputeEngineRequest.md)| Update an Compute Engine in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field | 

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
| **202** | A list of outcomes and/or errors |  -  |
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

