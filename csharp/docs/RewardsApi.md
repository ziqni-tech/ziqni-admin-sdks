# Ziqni.Api.RewardsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateRewards**](RewardsApi.md#createrewards) | **POST** /rewards | 
[**DeleteRewards**](RewardsApi.md#deleterewards) | **DELETE** /rewards | 
[**DeleteRewardsByQuery**](RewardsApi.md#deleterewardsbyquery) | **POST** /rewards/delete | 
[**GetRewards**](RewardsApi.md#getrewards) | **GET** /rewards | 
[**GetRewardsByQuery**](RewardsApi.md#getrewardsbyquery) | **POST** /rewards/query | 
[**UpdateRewards**](RewardsApi.md#updaterewards) | **PUT** /rewards | 



## CreateRewards

> ApiResponse CreateRewards (List<CreateEntityRewardRequest> body)



Create Rewards in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateRewardsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RewardsApi(Configuration.Default);
            var body = new List<CreateEntityRewardRequest>(); // List<CreateEntityRewardRequest> | Create Rewards in the Ziqni database

            try
            {
                ApiResponse result = apiInstance.CreateRewards(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RewardsApi.CreateRewards: " + e.Message );
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
 **body** | [**List&lt;CreateEntityRewardRequest&gt;**](CreateEntityRewardRequest.md)| Create Rewards in the Ziqni database | 

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


## DeleteRewards

> ApiResponse DeleteRewards (List<string> id = null)



Delete Rewards for a given identifier specified

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteRewardsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RewardsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteRewards(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RewardsApi.DeleteRewards: " + e.Message );
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


## DeleteRewardsByQuery

> ApiResponse DeleteRewardsByQuery (QueryRequest body = null)



Delete Rewards from Ziqni database by unique Rewards ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteRewardsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RewardsApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Delete Rewards from Ziqni database by unique Rewards ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteRewardsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RewardsApi.DeleteRewardsByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Rewards from Ziqni database by unique Rewards ID&#39;s or any other POST body parameters using the POST method | [optional] 

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


## GetRewards

> RewardResponse GetRewards (List<string> id = null, int? limit = null, int? skip = null)



Returns a list of Rewards. This assumes that rewards have first been uploaded via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetRewardsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RewardsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                RewardResponse result = apiInstance.GetRewards(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RewardsApi.GetRewards: " + e.Message );
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

[**RewardResponse**](RewardResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of rewards and/or errors |  -  |
| **400** | A list of rewards and/or errors |  -  |
| **401** | A list of rewards and/or errors |  -  |
| **403** | A list of rewards and/or errors |  -  |
| **404** | A list of rewards and/or errors |  -  |
| **413** | A list of rewards and/or errors |  -  |
| **500** | A list of rewards and/or errors |  -  |
| **501** | A list of rewards and/or errors |  -  |
| **503** | A list of rewards and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRewardsByQuery

> RewardResponse GetRewardsByQuery (QueryRequest body = null)



Retrieve Rewards from Ziqni database by unique Rewards ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetRewardsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RewardsApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Retrieve Rewards from Ziqni database by unique Rewards ID's or any other Post body parameters using the POST method (optional) 

            try
            {
                RewardResponse result = apiInstance.GetRewardsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RewardsApi.GetRewardsByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Rewards from Ziqni database by unique Rewards ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**RewardResponse**](RewardResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of rewards and/or errors |  -  |
| **400** | A list of rewards and/or errors |  -  |
| **401** | A list of rewards and/or errors |  -  |
| **403** | A list of rewards and/or errors |  -  |
| **404** | A list of rewards and/or errors |  -  |
| **413** | A list of rewards and/or errors |  -  |
| **500** | A list of rewards and/or errors |  -  |
| **501** | A list of rewards and/or errors |  -  |
| **503** | A list of rewards and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateRewards

> ApiResponse UpdateRewards (List<UpdateEntityRewardRequest> body)



Update existing Rewards in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateRewardsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RewardsApi(Configuration.Default);
            var body = new List<UpdateEntityRewardRequest>(); // List<UpdateEntityRewardRequest> | Update Reward details in the Ziqni database.

            try
            {
                ApiResponse result = apiInstance.UpdateRewards(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RewardsApi.UpdateRewards: " + e.Message );
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
 **body** | [**List&lt;UpdateEntityRewardRequest&gt;**](UpdateEntityRewardRequest.md)| Update Reward details in the Ziqni database. | 

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

