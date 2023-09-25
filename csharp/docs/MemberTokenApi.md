# Ziqni.Api.MemberTokenApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateMemberToken**](MemberTokenApi.md#createmembertoken) | **POST** /member-token | 



## CreateMemberToken

> TokenResponse CreateMemberToken (MemberTokenRequest memberTokenRequest)



Get Jwt Token

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateMemberTokenExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new MemberTokenApi(Configuration.Default);
            var memberTokenRequest = new MemberTokenRequest(); // MemberTokenRequest | 

            try
            {
                TokenResponse result = apiInstance.CreateMemberToken(memberTokenRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling MemberTokenApi.CreateMemberToken: " + e.Message );
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
 **memberTokenRequest** | [**MemberTokenRequest**](MemberTokenRequest.md)|  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **500** |  |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

