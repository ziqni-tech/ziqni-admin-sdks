# Org.OpenAPITools.Api.UserApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetUser**](UserApi.md#getuser) | **GET** /user | 



## GetUser

> ProfileResponse GetUser (bool? includeSpaces = null)



Returns the current users user. This assumes that a user has first been uploaded via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetUserExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new UserApi(Configuration.Default);
            var includeSpaces = true;  // bool? | Include Spaces (optional) 

            try
            {
                ProfileResponse result = apiInstance.GetUser(includeSpaces);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling UserApi.GetUser: " + e.Message );
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
 **includeSpaces** | **bool?**| Include Spaces | [optional] 

### Return type

[**ProfileResponse**](ProfileResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Details of a User returned |  -  |
| **400** | Details of a User returned |  -  |
| **401** | Details of a User returned |  -  |
| **403** | Details of a User returned |  -  |
| **404** | Details of a User returned |  -  |
| **413** | Details of a User returned |  -  |
| **500** | Details of a User returned |  -  |
| **501** | Details of a User returned |  -  |
| **503** | Details of a User returned |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

