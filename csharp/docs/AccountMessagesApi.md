# Ziqni.Api.AccountMessagesApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteAccountMessages**](AccountMessagesApi.md#deleteaccountmessages) | **DELETE** /account-messages | 
[**DeleteAccountMessagesByQuery**](AccountMessagesApi.md#deleteaccountmessagesbyquery) | **POST** /account-messages/delete | 
[**GetAccountMessages**](AccountMessagesApi.md#getaccountmessages) | **GET** /account-messages | 
[**GetAccountMessagesByQuery**](AccountMessagesApi.md#getaccountmessagesbyquery) | **POST** /account-messages/query | 



## DeleteAccountMessages

> ApiResponse DeleteAccountMessages (List<string>? id = null)



Delete Account Messages for a given identifier specified

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteAccountMessagesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountMessagesApi(Configuration.Default);
            var id = new List<string>?(); // List<string>? | The unique identifiers of the resources (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteAccountMessages(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountMessagesApi.DeleteAccountMessages: " + e.Message );
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
| **413** | A list of outcomes and/or errors |  -  |
| **500** | A list of outcomes and/or errors |  -  |
| **501** | A list of outcomes and/or errors |  -  |
| **503** | A list of outcomes and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteAccountMessagesByQuery

> ApiResponse DeleteAccountMessagesByQuery (QueryRequest? body = null)



Delete Account Messages from the system by query.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteAccountMessagesByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountMessagesApi(Configuration.Default);
            var body = new QueryRequest?(); // QueryRequest? | Delete Account Messages from Ziqni database by unique message ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteAccountMessagesByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountMessagesApi.DeleteAccountMessagesByQuery: " + e.Message );
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
 **body** | [**QueryRequest?**](QueryRequest?.md)| Delete Account Messages from Ziqni database by unique message ID&#39;s or any other POST body parameters using the POST method | [optional] 

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


## GetAccountMessages

> AccountMessageResponse GetAccountMessages (List<string>? id = null, int? limit = null, int? skip = null)



Returns a list of Account Messages.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetAccountMessagesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountMessagesApi(Configuration.Default);
            var id = new List<string>?(); // List<string>? | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                AccountMessageResponse result = apiInstance.GetAccountMessages(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountMessagesApi.GetAccountMessages: " + e.Message );
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

[**AccountMessageResponse**](AccountMessageResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of messages and/or errors |  -  |
| **400** | A list of messages and/or errors |  -  |
| **401** | A list of messages and/or errors |  -  |
| **403** | A list of messages and/or errors |  -  |
| **404** | A list of messages and/or errors |  -  |
| **413** | A list of messages and/or errors |  -  |
| **500** | A list of messages and/or errors |  -  |
| **501** | A list of messages and/or errors |  -  |
| **503** | A list of messages and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAccountMessagesByQuery

> AccountMessageResponse GetAccountMessagesByQuery (QueryRequest? body = null)



Retrieve Account Messages from the system by query.

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetAccountMessagesByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AccountMessagesApi(Configuration.Default);
            var body = new QueryRequest?(); // QueryRequest? | Retrieve Account Messages from Ziqni database by unique message ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                AccountMessageResponse result = apiInstance.GetAccountMessagesByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AccountMessagesApi.GetAccountMessagesByQuery: " + e.Message );
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
 **body** | [**QueryRequest?**](QueryRequest?.md)| Retrieve Account Messages from Ziqni database by unique message ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**AccountMessageResponse**](AccountMessageResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of messages and/or errors |  -  |
| **400** | A list of messages and/or errors |  -  |
| **401** | A list of messages and/or errors |  -  |
| **403** | A list of messages and/or errors |  -  |
| **404** | A list of messages and/or errors |  -  |
| **413** | A list of messages and/or errors |  -  |
| **500** | A list of messages and/or errors |  -  |
| **501** | A list of messages and/or errors |  -  |
| **503** | A list of messages and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

