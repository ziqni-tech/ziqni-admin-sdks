# Ziqni.Api.GraphsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetGraph**](GraphsApi.md#getgraph) | **POST** /graphs | Get achievements by member reference id



## GetGraph

> EntityGraphResponse GetGraph (EntityGraphRequest entityGraphRequest)

Get achievements by member reference id

Returns a list of graphs based on the entity type.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetGraphExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new GraphsApi(Configuration.Default);
            var entityGraphRequest = new EntityGraphRequest(); // EntityGraphRequest | 

            try
            {
                // Get achievements by member reference id
                EntityGraphResponse result = apiInstance.GetGraph(entityGraphRequest);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling GraphsApi.GetGraph: " + e.Message );
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
 **entityGraphRequest** | [**EntityGraphRequest**](EntityGraphRequest.md)|  | 

### Return type

[**EntityGraphResponse**](EntityGraphResponse.md)

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

