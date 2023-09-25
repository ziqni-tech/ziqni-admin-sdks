# Ziqni.Api.ConnectionsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateConnections**](ConnectionsApi.md#createconnections) | **POST** /connections | 
[**DeleteConnections**](ConnectionsApi.md#deleteconnections) | **DELETE** /connections | 
[**DeleteConnectionsByQuery**](ConnectionsApi.md#deleteconnectionsbyquery) | **POST** /connections/delete | 
[**DescribeConnectionObject**](ConnectionsApi.md#describeconnectionobject) | **GET** /connections/_describe | 
[**GetConnections**](ConnectionsApi.md#getconnections) | **GET** /connections | 
[**GetConnectionsByQuery**](ConnectionsApi.md#getconnectionsbyquery) | **POST** /connections/query | 
[**UpdateConnections**](ConnectionsApi.md#updateconnections) | **PUT** /connections | 
[**UpdateConnectionsState**](ConnectionsApi.md#updateconnectionsstate) | **POST** /connections/state | Update connection status



## CreateConnections

> ApiResponse CreateConnections (List<CreateConnectionRequest> body)



Create a new Consumer Connection in the Ziqni system

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateConnectionsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ConnectionsApi(Configuration.Default);
            var body = new List<CreateConnectionRequest>(); // List<CreateConnectionRequest> | Create a RabbitMq Consumer Connection in the Ziqni system

            try
            {
                ApiResponse result = apiInstance.CreateConnections(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ConnectionsApi.CreateConnections: " + e.Message );
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
 **body** | [**List&lt;CreateConnectionRequest&gt;**](CreateConnectionRequest.md)| Create a RabbitMq Consumer Connection in the Ziqni system | 

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


## DeleteConnections

> ApiResponse DeleteConnections (List<string>? id = null)



Delete the Consumer Connection for a given identifier specified

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteConnectionsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ConnectionsApi(Configuration.Default);
            var id = new List<string>?(); // List<string>? | The unique identifiers of the resources (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteConnections(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ConnectionsApi.DeleteConnections: " + e.Message );
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


## DeleteConnectionsByQuery

> ApiResponse DeleteConnectionsByQuery (QueryRequest? body = null)



Delete a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteConnectionsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ConnectionsApi(Configuration.Default);
            var body = new QueryRequest?(); // QueryRequest? | Delete a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteConnectionsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ConnectionsApi.DeleteConnectionsByQuery: " + e.Message );
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
 **body** | [**QueryRequest?**](QueryRequest?.md)| Delete a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID&#39;s or any other POST body parameters using the POST method | [optional] 

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


## DescribeConnectionObject

> ObjectParametersResponse DescribeConnectionObject (ConnectionType connectionType)



Get all the parameter for the connection based on the connection type

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DescribeConnectionObjectExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ConnectionsApi(Configuration.Default);
            var connectionType = ;  // ConnectionType | The connection type, RabbitMQ, Kafka, or SQS

            try
            {
                ObjectParametersResponse result = apiInstance.DescribeConnectionObject(connectionType);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ConnectionsApi.DescribeConnectionObject: " + e.Message );
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
 **connectionType** | **ConnectionType**| The connection type, RabbitMQ, Kafka, or SQS | 

### Return type

[**ObjectParametersResponse**](ObjectParametersResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** |  |  -  |
| **401** |  |  -  |
| **403** |  |  -  |
| **404** |  |  -  |
| **413** |  |  -  |
| **500** |  |  -  |
| **501** |  |  -  |
| **503** |  |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetConnections

> ConnectionResponse GetConnections (List<string>? id = null, int? limit = null, int? skip = null)



Return a list of Consumer Connections

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetConnectionsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ConnectionsApi(Configuration.Default);
            var id = new List<string>?(); // List<string>? | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                ConnectionResponse result = apiInstance.GetConnections(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ConnectionsApi.GetConnections: " + e.Message );
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

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of consumer connections and/or errors |  -  |
| **400** | A list of consumer connections and/or errors |  -  |
| **401** | A list of consumer connections and/or errors |  -  |
| **403** | A list of consumer connections and/or errors |  -  |
| **404** | A list of consumer connections and/or errors |  -  |
| **413** | A list of consumer connections and/or errors |  -  |
| **500** | A list of consumer connections and/or errors |  -  |
| **501** | A list of consumer connections and/or errors |  -  |
| **503** | A list of consumer connections and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetConnectionsByQuery

> ConnectionResponse GetConnectionsByQuery (QueryRequest? body = null)



Retrieve a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other Post body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetConnectionsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ConnectionsApi(Configuration.Default);
            var body = new QueryRequest?(); // QueryRequest? | Retrieve a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other Post body parameters using the POST method (optional) 

            try
            {
                ConnectionResponse result = apiInstance.GetConnectionsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ConnectionsApi.GetConnectionsByQuery: " + e.Message );
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
 **body** | [**QueryRequest?**](QueryRequest?.md)| Retrieve a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of consumer connections and/or errors |  -  |
| **400** | A list of consumer connections and/or errors |  -  |
| **401** | A list of consumer connections and/or errors |  -  |
| **403** | A list of consumer connections and/or errors |  -  |
| **404** | A list of consumer connections and/or errors |  -  |
| **413** | A list of consumer connections and/or errors |  -  |
| **500** | A list of consumer connections and/or errors |  -  |
| **501** | A list of consumer connections and/or errors |  -  |
| **503** | A list of consumer connections and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateConnections

> ApiResponse UpdateConnections (List<UpdateConnectionRequest> body)



Update an existing Consumer Connection in the Ziqni system

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateConnectionsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ConnectionsApi(Configuration.Default);
            var body = new List<UpdateConnectionRequest>(); // List<UpdateConnectionRequest> | Update the RabbitMq Consumer Connection details in the Ziqni system

            try
            {
                ApiResponse result = apiInstance.UpdateConnections(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ConnectionsApi.UpdateConnections: " + e.Message );
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
 **body** | [**List&lt;UpdateConnectionRequest&gt;**](UpdateConnectionRequest.md)| Update the RabbitMq Consumer Connection details in the Ziqni system | 

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


## UpdateConnectionsState

> ApiResponse UpdateConnectionsState (List<UpdateConnectionStateRequest>? body = null)

Update connection status

Update the state of a Consumer using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateConnectionsStateExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ConnectionsApi(Configuration.Default);
            var body = new List<UpdateConnectionStateRequest>?(); // List<UpdateConnectionStateRequest>? | Update the state of a Consumer using the POST method (optional) 

            try
            {
                // Update connection status
                ApiResponse result = apiInstance.UpdateConnectionsState(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ConnectionsApi.UpdateConnectionsState: " + e.Message );
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
 **body** | [**List&lt;UpdateConnectionStateRequest&gt;?**](UpdateConnectionStateRequest.md)| Update the state of a Consumer using the POST method | [optional] 

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

