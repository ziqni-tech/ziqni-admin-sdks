# Ziqni.Api.DefaultApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteSpace**](DefaultApi.md#deletespace) | **DELETE** /spaces | NOT AVAILABLE IN CURRENT RELEASE
[**UnsubscribeFromEntityChanges**](DefaultApi.md#unsubscribefromentitychanges) | **DELETE** /entity-changes | 



## DeleteSpace

> void DeleteSpace (string name)

NOT AVAILABLE IN CURRENT RELEASE

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteSpaceExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new DefaultApi(Configuration.Default);
            var name = name_example;  // string | 

            try
            {
                // NOT AVAILABLE IN CURRENT RELEASE
                apiInstance.DeleteSpace(name);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling DefaultApi.DeleteSpace: " + e.Message );
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
 **name** | **string**|  | 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | On Success |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UnsubscribeFromEntityChanges

> void UnsubscribeFromEntityChanges (string? subscriptionId = null)



### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UnsubscribeFromEntityChangesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new DefaultApi(Configuration.Default);
            var subscriptionId = subscriptionId_example;  // string? |  (optional) 

            try
            {
                apiInstance.UnsubscribeFromEntityChanges(subscriptionId);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling DefaultApi.UnsubscribeFromEntityChanges: " + e.Message );
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
 **subscriptionId** | **string?**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Onsuccess |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

