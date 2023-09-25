# Ziqni.Api.ApiKeysApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateApiKeys**](ApiKeysApi.md#createapikeys) | **POST** /api-keys | Delete api keys
[**DeleteApiKeys**](ApiKeysApi.md#deleteapikeys) | **DELETE** /api-keys | Delete api keys
[**DeleteApiKeysById**](ApiKeysApi.md#deleteapikeysbyid) | **DELETE** /api-keys/{id} | Delete api keys by id
[**DeleteApiKeysByQuery**](ApiKeysApi.md#deleteapikeysbyquery) | **POST** /api-keys/delete | Delete api keys by query
[**GetApiKeys**](ApiKeysApi.md#getapikeys) | **GET** /api-keys | Get api keys
[**GetApiKeysById**](ApiKeysApi.md#getapikeysbyid) | **GET** /api-keys/{id} | Get api keys by id
[**GetApiKeysByQuery**](ApiKeysApi.md#getapikeysbyquery) | **POST** /api-keys/query | Get api keys by query
[**UpdateApiKeys**](ApiKeysApi.md#updateapikeys) | **PUT** /api-keys | Update api keys



## CreateApiKeys

> ApiResponse CreateApiKeys (CreateApiKeyRequest body)

Delete api keys

Create a new Api key in the Ziqni system

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateApiKeysExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ApiKeysApi(Configuration.Default);
            var body = new CreateApiKeyRequest(); // CreateApiKeyRequest | Create an Api key in the Ziqni system

            try
            {
                // Delete api keys
                ApiResponse result = apiInstance.CreateApiKeys(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ApiKeysApi.CreateApiKeys: " + e.Message );
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
 **body** | [**CreateApiKeyRequest**](CreateApiKeyRequest.md)| Create an Api key in the Ziqni system | 

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


## DeleteApiKeys

> ApiResponse DeleteApiKeys (List<string>? id = null)

Delete api keys

Delete Api keys for a given identifier specified

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteApiKeysExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ApiKeysApi(Configuration.Default);
            var id = new List<string>?(); // List<string>? | The unique identifiers of the resources (optional) 

            try
            {
                // Delete api keys
                ApiResponse result = apiInstance.DeleteApiKeys(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ApiKeysApi.DeleteApiKeys: " + e.Message );
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
 **id** | [**List&lt;string&gt;?**](string.md)| The unique identifiers of the resources | [optional] 

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


## DeleteApiKeysById

> ApiResponse DeleteApiKeysById (string id)

Delete api keys by id

Delete the Api key for a given identifier specified

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteApiKeysByIdExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ApiKeysApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource

            try
            {
                // Delete api keys by id
                ApiResponse result = apiInstance.DeleteApiKeysById(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ApiKeysApi.DeleteApiKeysById: " + e.Message );
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
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteApiKeysByQuery

> ApiResponse DeleteApiKeysByQuery (QueryRequest? body = null)

Delete api keys by query

Delete an Api key or a list of Api keys from Ziqni by query

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteApiKeysByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ApiKeysApi(Configuration.Default);
            var body = new QueryRequest?(); // QueryRequest? | Delete an Api key or a list of Api keys from Ziqni by unique Api key ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                // Delete api keys by query
                ApiResponse result = apiInstance.DeleteApiKeysByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ApiKeysApi.DeleteApiKeysByQuery: " + e.Message );
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
 **body** | [**QueryRequest?**](QueryRequest?.md)| Delete an Api key or a list of Api keys from Ziqni by unique Api key ID&#39;s or any other POST body parameters using the POST method | [optional] 

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


## GetApiKeys

> ApiKeyResponse GetApiKeys (List<string>? id = null, int? limit = null, int? skip = null)

Get api keys

Returns a list of Api keys. This assumes that api keys have first been created via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetApiKeysExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ApiKeysApi(Configuration.Default);
            var id = new List<string>?(); // List<string>? | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                // Get api keys
                ApiKeyResponse result = apiInstance.GetApiKeys(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ApiKeysApi.GetApiKeys: " + e.Message );
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
 **id** | [**List&lt;string&gt;?**](string.md)| The unique identifiers of the resources | [optional] 
 **limit** | **int?**| Limit the returned total records found | [optional] 
 **skip** | **int?**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Api keys |  -  |
| **400** | List of Api keys |  -  |
| **401** | List of Api keys |  -  |
| **403** | List of Api keys |  -  |
| **404** | List of Api keys |  -  |
| **500** | List of Api keys |  -  |
| **501** | List of Api keys |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetApiKeysById

> ApiKeyResponse GetApiKeysById (string id)

Get api keys by id

Returns an Api key by identifier provided. This assumes that api keys have first been created via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetApiKeysByIdExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ApiKeysApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource

            try
            {
                // Get api keys by id
                ApiKeyResponse result = apiInstance.GetApiKeysById(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ApiKeysApi.GetApiKeysById: " + e.Message );
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

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Api keys |  -  |
| **400** | List of Api keys |  -  |
| **401** | List of Api keys |  -  |
| **403** | List of Api keys |  -  |
| **404** | List of Api keys |  -  |
| **500** | List of Api keys |  -  |
| **501** | List of Api keys |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetApiKeysByQuery

> ApiKeyResponse GetApiKeysByQuery (QueryRequest? body = null)

Get api keys by query

Retrieve an Api key or a list of Api keys by query

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetApiKeysByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ApiKeysApi(Configuration.Default);
            var body = new QueryRequest?(); // QueryRequest? | Retrieve an Api key or a list of Api keys from Ziqni by unique Api key ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                // Get api keys by query
                ApiKeyResponse result = apiInstance.GetApiKeysByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ApiKeysApi.GetApiKeysByQuery: " + e.Message );
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
 **body** | [**QueryRequest?**](QueryRequest?.md)| Retrieve an Api key or a list of Api keys from Ziqni by unique Api key ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiKeyResponse**](ApiKeyResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Api keys |  -  |
| **400** | List of Api keys |  -  |
| **401** | List of Api keys |  -  |
| **403** | List of Api keys |  -  |
| **404** | List of Api keys |  -  |
| **500** | List of Api keys |  -  |
| **501** | List of Api keys |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateApiKeys

> ApiResponse UpdateApiKeys (UpdateApiKeyRequest body)

Update api keys

Update an existing Api key in the Ziqni system

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateApiKeysExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ApiKeysApi(Configuration.Default);
            var body = new UpdateApiKeyRequest(); // UpdateApiKeyRequest | Update an Api key in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field

            try
            {
                // Update api keys
                ApiResponse result = apiInstance.UpdateApiKeys(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ApiKeysApi.UpdateApiKeys: " + e.Message );
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
 **body** | [**UpdateApiKeyRequest**](UpdateApiKeyRequest.md)| Update an Api key in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field | 

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

