# Ziqni.Api.RulesApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteRulesByQuery**](RulesApi.md#deleterulesbyquery) | **POST** /rules/delete | 
[**GetRuleSchemas**](RulesApi.md#getruleschemas) | **GET** /rules/schema | 
[**GetRules**](RulesApi.md#getrules) | **GET** /rules | 
[**GetRulesByQuery**](RulesApi.md#getrulesbyquery) | **POST** /rules/query | 
[**LookupOperandsRules**](RulesApi.md#lookupoperandsrules) | **POST** /rules/operand-lookup | 
[**UpdateRules**](RulesApi.md#updaterules) | **PUT** /rules | 
[**ValidateRules**](RulesApi.md#validaterules) | **POST** /rules/validate | 



## DeleteRulesByQuery

> ApiResponse DeleteRulesByQuery (QueryRequest? body = null)



Delete Rules from Ziqni database by unique Rules ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteRulesByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RulesApi(Configuration.Default);
            var body = new QueryRequest?(); // QueryRequest? | Delete Rules from Ziqni database by unique Rules ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteRulesByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RulesApi.DeleteRulesByQuery: " + e.Message );
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
 **body** | [**QueryRequest?**](QueryRequest?.md)| Delete Rules from Ziqni database by unique Rules ID&#39;s or any other POST body parameters using the POST method | [optional] 

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


## GetRuleSchemas

> Response GetRuleSchemas (string context)



Returns a list of rules. This assumes that rules have first been created during achievement, competition or contest setup

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetRuleSchemasExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RulesApi(Configuration.Default);
            var context = context_example;  // string | The context to retrieve, either achievement, competition or contest

            try
            {
                Response result = apiInstance.GetRuleSchemas(context);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RulesApi.GetRuleSchemas: " + e.Message );
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
 **context** | **string**| The context to retrieve, either achievement, competition or contest | 

### Return type

[**Response**](Response.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of members and/or errors |  -  |
| **400** | A list of members and/or errors |  -  |
| **401** | A list of members and/or errors |  -  |
| **403** | A list of members and/or errors |  -  |
| **404** | A list of members and/or errors |  -  |
| **413** | A list of members and/or errors |  -  |
| **500** | A list of members and/or errors |  -  |
| **501** | A list of members and/or errors |  -  |
| **503** | A list of members and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRules

> RuleResponse GetRules (List<string>? id = null, int? limit = null, int? skip = null)



Returns a list of rules. This assumes that rules have first been created during achievement, competition or contest setup. The id is the ID of the entity the rules describe

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetRulesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RulesApi(Configuration.Default);
            var id = new List<string>?(); // List<string>? | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                RuleResponse result = apiInstance.GetRules(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RulesApi.GetRules: " + e.Message );
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

[**RuleResponse**](RuleResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of repositories and/or errors |  -  |
| **400** | A list of repositories and/or errors |  -  |
| **401** | A list of repositories and/or errors |  -  |
| **403** | A list of repositories and/or errors |  -  |
| **404** | A list of repositories and/or errors |  -  |
| **413** | A list of repositories and/or errors |  -  |
| **500** | A list of repositories and/or errors |  -  |
| **501** | A list of repositories and/or errors |  -  |
| **503** | A list of repositories and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRulesByQuery

> RuleResponse GetRulesByQuery (QueryRequest? body = null)



Retrieve Rules from Ziqni database by unique Rewards ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetRulesByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RulesApi(Configuration.Default);
            var body = new QueryRequest?(); // QueryRequest? | Retrieve Rules from Ziqni database by unique Rewards ID's or any other Post body parameters using the POST method (optional) 

            try
            {
                RuleResponse result = apiInstance.GetRulesByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RulesApi.GetRulesByQuery: " + e.Message );
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
 **body** | [**QueryRequest?**](QueryRequest?.md)| Retrieve Rules from Ziqni database by unique Rewards ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**RuleResponse**](RuleResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of repositories and/or errors |  -  |
| **400** | A list of repositories and/or errors |  -  |
| **401** | A list of repositories and/or errors |  -  |
| **403** | A list of repositories and/or errors |  -  |
| **404** | A list of repositories and/or errors |  -  |
| **413** | A list of repositories and/or errors |  -  |
| **500** | A list of repositories and/or errors |  -  |
| **501** | A list of repositories and/or errors |  -  |
| **503** | A list of repositories and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## LookupOperandsRules

> RuleOperandLookupResponse LookupOperandsRules (List<RuleOperandLookupRequest> body)



Search or get rule operand values

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class LookupOperandsRulesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RulesApi(Configuration.Default);
            var body = new List<RuleOperandLookupRequest>(); // List<RuleOperandLookupRequest> | Search for operand values and human readable text options

            try
            {
                RuleOperandLookupResponse result = apiInstance.LookupOperandsRules(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RulesApi.LookupOperandsRules: " + e.Message );
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
 **body** | [**List&lt;RuleOperandLookupRequest&gt;**](RuleOperandLookupRequest.md)| Search for operand values and human readable text options | 

### Return type

[**RuleOperandLookupResponse**](RuleOperandLookupResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of rule operand lookup values and/or errors |  -  |
| **400** | A list of rule operand lookup values and/or errors |  -  |
| **401** | A list of rule operand lookup values and/or errors |  -  |
| **403** | A list of rule operand lookup values and/or errors |  -  |
| **404** | A list of rule operand lookup values and/or errors |  -  |
| **413** | A list of rule operand lookup values and/or errors |  -  |
| **500** | A list of rule operand lookup values and/or errors |  -  |
| **501** | A list of rule operand lookup values and/or errors |  -  |
| **503** | A list of rule operand lookup values and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateRules

> ApiResponse UpdateRules (List<UpdateRuleRequest> body)



Update existing rules

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateRulesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RulesApi(Configuration.Default);
            var body = new List<UpdateRuleRequest>(); // List<UpdateRuleRequest> | Update rules for a given Achievement, Competition or Contest identifier.

            try
            {
                ApiResponse result = apiInstance.UpdateRules(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RulesApi.UpdateRules: " + e.Message );
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
 **body** | [**List&lt;UpdateRuleRequest&gt;**](UpdateRuleRequest.md)| Update rules for a given Achievement, Competition or Contest identifier. | 

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


## ValidateRules

> ApiResponse ValidateRules (List<UpdateRuleRequest> body)



Validate rules

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class ValidateRulesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new RulesApi(Configuration.Default);
            var body = new List<UpdateRuleRequest>(); // List<UpdateRuleRequest> | Validate rules

            try
            {
                ApiResponse result = apiInstance.ValidateRules(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling RulesApi.ValidateRules: " + e.Message );
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
 **body** | [**List&lt;UpdateRuleRequest&gt;**](UpdateRuleRequest.md)| Validate rules | 

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

