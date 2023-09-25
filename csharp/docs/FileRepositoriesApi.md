# Ziqni.Api.FileRepositoriesApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateFileRepositories**](FileRepositoriesApi.md#createfilerepositories) | **POST** /file-repositories | 
[**DeleteFileRepositories**](FileRepositoriesApi.md#deletefilerepositories) | **DELETE** /file-repositories | 
[**DeleteFileRepositoriesByQuery**](FileRepositoriesApi.md#deletefilerepositoriesbyquery) | **POST** /file-repositories/delete | 
[**GetFileRepositories**](FileRepositoriesApi.md#getfilerepositories) | **GET** /file-repositories | 
[**GetFileRepositoriesByQuery**](FileRepositoriesApi.md#getfilerepositoriesbyquery) | **POST** /file-repositories/query | 
[**UpdateFileRepositories**](FileRepositoriesApi.md#updatefilerepositories) | **PUT** /file-repositories | 



## CreateFileRepositories

> ApiResponse CreateFileRepositories (List<CreateRepositoryRequest> body)



Create a new file object repository in your Ziqni space

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateFileRepositoriesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileRepositoriesApi(Configuration.Default);
            var body = new List<CreateRepositoryRequest>(); // List<CreateRepositoryRequest> | Create a new file object repository in your Ziqni space

            try
            {
                ApiResponse result = apiInstance.CreateFileRepositories(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileRepositoriesApi.CreateFileRepositories: " + e.Message );
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
 **body** | [**List&lt;CreateRepositoryRequest&gt;**](CreateRepositoryRequest.md)| Create a new file object repository in your Ziqni space | 

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


## DeleteFileRepositories

> ApiResponse DeleteFileRepositories (List<string> id = null, bool? permanent = null)



Delete the file repository for a given identifier specified

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteFileRepositoriesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileRepositoriesApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var permanent = true;  // bool? | Permanently delete the file object. Default is false (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteFileRepositories(id, permanent);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileRepositoriesApi.DeleteFileRepositories: " + e.Message );
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
 **permanent** | **bool?**| Permanently delete the file object. Default is false | [optional] 

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


## DeleteFileRepositoriesByQuery

> ApiResponse DeleteFileRepositoriesByQuery (QueryRequest body = null)



Delete repositories nby query. Delete repositories by query and/or unique repository ID's or any other body parameters

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteFileRepositoriesByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileRepositoriesApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Delete repositories from a Ziqni space by unique repository ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteFileRepositoriesByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileRepositoriesApi.DeleteFileRepositoriesByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete repositories from a Ziqni space by unique repository ID&#39;s or any other POST body parameters using the POST method | [optional] 

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


## GetFileRepositories

> RepositoryResponse GetFileRepositories (int? limit = null, int? skip = null, List<string> id = null)



Returns a list of file object repositories. This assumes that repositories have first been uploaded via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetFileRepositoriesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileRepositoriesApi(Configuration.Default);
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 

            try
            {
                RepositoryResponse result = apiInstance.GetFileRepositories(limit, skip, id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileRepositoriesApi.GetFileRepositories: " + e.Message );
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
 **limit** | **int?**| Limit the returned total records found | [optional] 
 **skip** | **int?**| Skip the returned records found and return the next batch of records | [optional] 
 **id** | [**List&lt;string&gt;**](string.md)| The unique identifiers of the resources | [optional] 

### Return type

[**RepositoryResponse**](RepositoryResponse.md)

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

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFileRepositoriesByQuery

> RepositoryResponse GetFileRepositoriesByQuery (QueryRequest body = null)



Find file object repositories by query

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetFileRepositoriesByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileRepositoriesApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Retrieve file object repositories from Ziqni by unique repository ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                RepositoryResponse result = apiInstance.GetFileRepositoriesByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileRepositoriesApi.GetFileRepositoriesByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve file object repositories from Ziqni by unique repository ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**RepositoryResponse**](RepositoryResponse.md)

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

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateFileRepositories

> ApiResponse UpdateFileRepositories (List<UpdateRepositoryRequest> body)



Update a file object repository in your Ziqni space.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateFileRepositoriesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileRepositoriesApi(Configuration.Default);
            var body = new List<UpdateRepositoryRequest>(); // List<UpdateRepositoryRequest> | Update a file object repository in your Ziqni space.

            try
            {
                ApiResponse result = apiInstance.UpdateFileRepositories(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileRepositoriesApi.UpdateFileRepositories: " + e.Message );
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
 **body** | [**List&lt;UpdateRepositoryRequest&gt;**](UpdateRepositoryRequest.md)| Update a file object repository in your Ziqni space. | 

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

