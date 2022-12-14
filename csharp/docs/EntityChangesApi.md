# Org.OpenAPITools.Api.EntityChangesApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ManageEntityChangeSubscription**](EntityChangesApi.md#manageentitychangesubscription) | **POST** /entity-changes | 



## ManageEntityChangeSubscription

> EntityChangeSubscriptionResponse ManageEntityChangeSubscription (EntityChangeSubscriptionRequest entityChangeSubscriptionRequest)



subscribes a client to receive out-of-band data

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class ManageEntityChangeSubscriptionExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new EntityChangesApi(Configuration.Default);
            var entityChangeSubscriptionRequest = new EntityChangeSubscriptionRequest(); // EntityChangeSubscriptionRequest | 

            try
            {
                EntityChangeSubscriptionResponse result = apiInstance.ManageEntityChangeSubscription(entityChangeSubscriptionRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling EntityChangesApi.ManageEntityChangeSubscription: " + e.Message );
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
 **entityChangeSubscriptionRequest** | [**EntityChangeSubscriptionRequest**](EntityChangeSubscriptionRequest.md)|  | 

### Return type

[**EntityChangeSubscriptionResponse**](EntityChangeSubscriptionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Subscription successfully created |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

