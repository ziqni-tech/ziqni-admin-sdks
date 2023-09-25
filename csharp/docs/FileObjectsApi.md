# Ziqni.Api.FileObjectsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateFileObjects**](FileObjectsApi.md#createfileobjects) | **POST** /file-objects | 
[**DeleteFileObjects**](FileObjectsApi.md#deletefileobjects) | **DELETE** /file-objects | 
[**DeleteFileObjectsByQuery**](FileObjectsApi.md#deletefileobjectsbyquery) | **POST** /file-objects/delete | 
[**DownloadFileObjects**](FileObjectsApi.md#downloadfileobjects) | **GET** /file-objects/download | 
[**GetFileObjects**](FileObjectsApi.md#getfileobjects) | **GET** /file-objects | 
[**GetFileObjectsByQuery**](FileObjectsApi.md#getfileobjectsbyquery) | **POST** /file-objects/query | 
[**SaveTemplates**](FileObjectsApi.md#savetemplates) | **POST** /file-objects/save-template | 
[**UpdateFileObjects**](FileObjectsApi.md#updatefileobjects) | **PUT** /file-objects | 
[**UploadFileObjects**](FileObjectsApi.md#uploadfileobjects) | **POST** /file-objects/upload | 



## CreateFileObjects

> ApiResponse CreateFileObjects (CreateFileObjectRequest body)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateFileObjectsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileObjectsApi(Configuration.Default);
            var body = new CreateFileObjectRequest(); // CreateFileObjectRequest | Create a new file object repository in your Ziqni space

            try
            {
                ApiResponse result = apiInstance.CreateFileObjects(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileObjectsApi.CreateFileObjects: " + e.Message );
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
 **body** | [**CreateFileObjectRequest**](CreateFileObjectRequest.md)| Create a new file object repository in your Ziqni space | 

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


## DeleteFileObjects

> ApiResponse DeleteFileObjects (List<string> id = null, bool? permanent = null)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteFileObjectsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileObjectsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var permanent = true;  // bool? | Permanently delete the file object. Default is false (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteFileObjects(id, permanent);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileObjectsApi.DeleteFileObjects: " + e.Message );
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


## DeleteFileObjectsByQuery

> ApiResponse DeleteFileObjectsByQuery (List<string> id = null, QueryRequest body = null)



Delete file objects by query

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteFileObjectsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileObjectsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var body = new QueryRequest(); // QueryRequest | Delete file objects inside a repository from Ziqni by unique file by unique object ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteFileObjectsByQuery(id, body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileObjectsApi.DeleteFileObjectsByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete file objects inside a repository from Ziqni by unique file by unique object ID&#39;s or any other POST body parameters using the POST method | [optional] 

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


## DownloadFileObjects

> System.IO.Stream DownloadFileObjects (string path = null)



Download file objects from your Ziqni space

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DownloadFileObjectsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileObjectsApi(Configuration.Default);
            var path = path_example;  // string | The canonical path of the file to download (optional) 

            try
            {
                System.IO.Stream result = apiInstance.DownloadFileObjects(path);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileObjectsApi.DownloadFileObjects: " + e.Message );
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
 **path** | **string**| The canonical path of the file to download | [optional] 

### Return type

**System.IO.Stream**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Success |  -  |
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


## GetFileObjects

> FileObjectsResponse GetFileObjects (int? limit = null, int? skip = null, List<string> id = null, string download = null)



Returns a list of file objects

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetFileObjectsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileObjectsApi(Configuration.Default);
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var download = download_example;  // string |  (optional) 

            try
            {
                FileObjectsResponse result = apiInstance.GetFileObjects(limit, skip, id, download);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileObjectsApi.GetFileObjects: " + e.Message );
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
 **download** | **string**|  | [optional] 

### Return type

[**FileObjectsResponse**](FileObjectsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of files and/or errors |  -  |
| **400** | A list of files and/or errors |  -  |
| **401** | A list of files and/or errors |  -  |
| **403** | A list of files and/or errors |  -  |
| **404** | A list of files and/or errors |  -  |
| **413** | A list of files and/or errors |  -  |
| **500** | A list of files and/or errors |  -  |
| **501** | A list of files and/or errors |  -  |
| **503** | A list of files and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFileObjectsByQuery

> FileObjectsResponse GetFileObjectsByQuery (List<string> id = null, QueryRequest body = null)



Retrieve file objects by query

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetFileObjectsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileObjectsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var body = new QueryRequest(); // QueryRequest | Retrieve file objects inside a repository from Ziqni by unique file object ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                FileObjectsResponse result = apiInstance.GetFileObjectsByQuery(id, body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileObjectsApi.GetFileObjectsByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve file objects inside a repository from Ziqni by unique file object ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**FileObjectsResponse**](FileObjectsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of files and/or errors |  -  |
| **400** | A list of files and/or errors |  -  |
| **401** | A list of files and/or errors |  -  |
| **403** | A list of files and/or errors |  -  |
| **404** | A list of files and/or errors |  -  |
| **413** | A list of files and/or errors |  -  |
| **500** | A list of files and/or errors |  -  |
| **501** | A list of files and/or errors |  -  |
| **503** | A list of files and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## SaveTemplates

> ApiResponse SaveTemplates (string parentFolderPath = null, string repositoryId = null, string templateToSave = null, string templateName = null, string tags = null)



Create or update file objects and binaries in your Ziqni space

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class SaveTemplatesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileObjectsApi(Configuration.Default);
            var parentFolderPath = parentFolderPath_example;  // string | The folder to save these file in. (optional) 
            var repositoryId = repositoryId_example;  // string |  (optional) 
            var templateToSave = templateToSave_example;  // string |  (optional) 
            var templateName = templateName_example;  // string |  (optional) 
            var tags = tags_example;  // string |  (optional) 

            try
            {
                ApiResponse result = apiInstance.SaveTemplates(parentFolderPath, repositoryId, templateToSave, templateName, tags);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileObjectsApi.SaveTemplates: " + e.Message );
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
 **parentFolderPath** | **string**| The folder to save these file in. | [optional] 
 **repositoryId** | **string**|  | [optional] 
 **templateToSave** | **string**|  | [optional] 
 **templateName** | **string**|  | [optional] 
 **tags** | **string**|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
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


## UpdateFileObjects

> ApiResponse UpdateFileObjects (List<UpdateFileObjectRequest> body)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateFileObjectsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileObjectsApi(Configuration.Default);
            var body = new List<UpdateFileObjectRequest>(); // List<UpdateFileObjectRequest> | Update a file object in your Ziqni space.

            try
            {
                ApiResponse result = apiInstance.UpdateFileObjects(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileObjectsApi.UpdateFileObjects: " + e.Message );
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
 **body** | [**List&lt;UpdateFileObjectRequest&gt;**](UpdateFileObjectRequest.md)| Update a file object in your Ziqni space. | 

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


## UploadFileObjects

> ApiResponse UploadFileObjects (string parentFolderPath = null, List<System.IO.Stream> files = null, string repositoryId = null, string tags = null)



Create or update file objects and binaries in your Ziqni space

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UploadFileObjectsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new FileObjectsApi(Configuration.Default);
            var parentFolderPath = parentFolderPath_example;  // string | The folder to save these file in. (optional) 
            var files = new List<System.IO.Stream>(); // List<System.IO.Stream> | The files to upload (optional) 
            var repositoryId = repositoryId_example;  // string |  (optional) 
            var tags = tags_example;  // string |  (optional) 

            try
            {
                ApiResponse result = apiInstance.UploadFileObjects(parentFolderPath, files, repositoryId, tags);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling FileObjectsApi.UploadFileObjects: " + e.Message );
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
 **parentFolderPath** | **string**| The folder to save these file in. | [optional] 
 **files** | [**List&lt;System.IO.Stream&gt;**](System.IO.Stream.md)| The files to upload | [optional] 
 **repositoryId** | **string**|  | [optional] 
 **tags** | **string**|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
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

