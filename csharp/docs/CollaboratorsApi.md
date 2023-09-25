# Ziqni.Api.CollaboratorsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCollaborators**](CollaboratorsApi.md#createcollaborators) | **POST** /collaborators | 
[**DeleteCollaborators**](CollaboratorsApi.md#deletecollaborators) | **DELETE** /collaborators | 
[**GetAvailableRolesForCollaborators**](CollaboratorsApi.md#getavailablerolesforcollaborators) | **GET** /collaborators/available-roles | 
[**GetCollaborators**](CollaboratorsApi.md#getcollaborators) | **GET** /collaborators | 
[**UpdateCollaborators**](CollaboratorsApi.md#updatecollaborators) | **PUT** /collaborators | 



## CreateCollaborators

> ApiResponse CreateCollaborators (List<CreateCollaboratorRequest> body)



Create a new Collaborator in the Ziqni

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateCollaboratorsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CollaboratorsApi(Configuration.Default);
            var body = new List<CreateCollaboratorRequest>(); // List<CreateCollaboratorRequest> | Create a Collaborator in the Ziqni system

            try
            {
                ApiResponse result = apiInstance.CreateCollaborators(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CollaboratorsApi.CreateCollaborators: " + e.Message );
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
 **body** | [**List&lt;CreateCollaboratorRequest&gt;**](CreateCollaboratorRequest.md)| Create a Collaborator in the Ziqni system | 

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


## DeleteCollaborators

> ApiResponse DeleteCollaborators (List<string> emails = null)



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteCollaboratorsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CollaboratorsApi(Configuration.Default);
            var emails = new List<string>(); // List<string> | The list of user emails to search by (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteCollaborators(emails);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CollaboratorsApi.DeleteCollaborators: " + e.Message );
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
 **emails** | [**List&lt;string&gt;**](string.md)| The list of user emails to search by | [optional] 

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


## GetAvailableRolesForCollaborators

> CollaboratorRolesResponse GetAvailableRolesForCollaborators ()



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetAvailableRolesForCollaboratorsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CollaboratorsApi(Configuration.Default);

            try
            {
                CollaboratorRolesResponse result = apiInstance.GetAvailableRolesForCollaborators();
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CollaboratorsApi.GetAvailableRolesForCollaborators: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CollaboratorRolesResponse**](CollaboratorRolesResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Collaborators |  -  |
| **400** | List of Collaborators |  -  |
| **401** | List of Collaborators |  -  |
| **403** | List of Collaborators |  -  |
| **404** | List of Collaborators |  -  |
| **413** | List of Collaborators |  -  |
| **500** | List of Collaborators |  -  |
| **501** | List of Collaborators |  -  |
| **503** | List of Collaborators |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCollaborators

> CollaboratorResponse GetCollaborators (List<string> emails = null, int? limit = null, int? skip = null)



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetCollaboratorsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CollaboratorsApi(Configuration.Default);
            var emails = new List<string>(); // List<string> | The list of user emails to search by (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                CollaboratorResponse result = apiInstance.GetCollaborators(emails, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CollaboratorsApi.GetCollaborators: " + e.Message );
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
 **emails** | [**List&lt;string&gt;**](string.md)| The list of user emails to search by | [optional] 
 **limit** | **int?**| Limit the returned total records found | [optional] 
 **skip** | **int?**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**CollaboratorResponse**](CollaboratorResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of Collaborators |  -  |
| **400** | List of Collaborators |  -  |
| **401** | List of Collaborators |  -  |
| **403** | List of Collaborators |  -  |
| **404** | List of Collaborators |  -  |
| **413** | List of Collaborators |  -  |
| **500** | List of Collaborators |  -  |
| **501** | List of Collaborators |  -  |
| **503** | List of Collaborators |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCollaborators

> ApiResponse UpdateCollaborators (List<UpdateCollaboratorRequest> body)



Update an existing Collaborator in the Ziqni system

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateCollaboratorsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CollaboratorsApi(Configuration.Default);
            var body = new List<UpdateCollaboratorRequest>(); // List<UpdateCollaboratorRequest> | Update a Collaborator in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field

            try
            {
                ApiResponse result = apiInstance.UpdateCollaborators(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CollaboratorsApi.UpdateCollaborators: " + e.Message );
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
 **body** | [**List&lt;UpdateCollaboratorRequest&gt;**](UpdateCollaboratorRequest.md)| Update a Collaborator in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field | 

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

