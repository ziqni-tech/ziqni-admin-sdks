# Ziqni.Api.AchievementsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateAchievements**](AchievementsApi.md#createachievements) | **POST** /achievements | Create Achievements
[**DeleteAchievements**](AchievementsApi.md#deleteachievements) | **DELETE** /achievements | Delete Achievements
[**DeleteAchievementsByQuery**](AchievementsApi.md#deleteachievementsbyquery) | **POST** /achievements/delete | 
[**GetAchievementToClone**](AchievementsApi.md#getachievementtoclone) | **GET** /achievements/{id}/clone | 
[**GetAchievements**](AchievementsApi.md#getachievements) | **GET** /achievements | Get Achievements
[**GetAchievementsByQuery**](AchievementsApi.md#getachievementsbyquery) | **POST** /achievements/query | 
[**GetAntecendentsForAchievement**](AchievementsApi.md#getantecendentsforachievement) | **GET** /achievements/{id}/antecedents | NOT AVAILABLE IN CURRENT RELEASE
[**GetIssuedAchievementsCountById**](AchievementsApi.md#getissuedachievementscountbyid) | **GET** /achievements/{id}/issued | 
[**GetMembersAchievementsDetails**](AchievementsApi.md#getmembersachievementsdetails) | **GET** /achievements/{id}/members | 
[**UpdateAchievements**](AchievementsApi.md#updateachievements) | **PUT** /achievements | Update Achievements
[**UpdateAchievementsLiveStatus**](AchievementsApi.md#updateachievementslivestatus) | **PUT** /achievements/state | 



## CreateAchievements

> ApiResponse CreateAchievements (List<CreateAchievementRequest> body)

Create Achievements

Create Achievements in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class CreateAchievementsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AchievementsApi(Configuration.Default);
            var body = new List<CreateAchievementRequest>(); // List<CreateAchievementRequest> | Create Achievements in the Ziqni database

            try
            {
                // Create Achievements
                ApiResponse result = apiInstance.CreateAchievements(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AchievementsApi.CreateAchievements: " + e.Message );
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
 **body** | [**List&lt;CreateAchievementRequest&gt;**](CreateAchievementRequest.md)| Create Achievements in the Ziqni database | 

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


## DeleteAchievements

> ApiResponse DeleteAchievements (List<string> id = null)

Delete Achievements

Delete Achievements for a given identifier specified

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteAchievementsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AchievementsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 

            try
            {
                // Delete Achievements
                ApiResponse result = apiInstance.DeleteAchievements(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AchievementsApi.DeleteAchievements: " + e.Message );
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


## DeleteAchievementsByQuery

> ApiResponse DeleteAchievementsByQuery (QueryRequest body = null)



Delete Achievements from Ziqni database by unique Achievements ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class DeleteAchievementsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AchievementsApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Delete Achievements from Ziqni database by unique Achievements ID's or any other Post body parameters using the POST method (optional) 

            try
            {
                ApiResponse result = apiInstance.DeleteAchievementsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AchievementsApi.DeleteAchievementsByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Achievements from Ziqni database by unique Achievements ID&#39;s or any other Post body parameters using the POST method | [optional] 

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


## GetAchievementToClone

> CloneAchievementResponse GetAchievementToClone (string id)



Clones an Achievement for the identifier provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetAchievementToCloneExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AchievementsApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource

            try
            {
                CloneAchievementResponse result = apiInstance.GetAchievementToClone(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AchievementsApi.GetAchievementToClone: " + e.Message );
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
 **id** | **string**| Unique identifier of the resource | 

### Return type

[**CloneAchievementResponse**](CloneAchievementResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **400** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **401** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **403** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **404** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **413** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **500** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **501** | A modeled response of an Achievement that can be used for Achievement creation |  -  |
| **503** | A modeled response of an Achievement that can be used for Achievement creation |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAchievements

> AchievementResponse GetAchievements (List<string> id = null, int? limit = null, int? skip = null)

Get Achievements

Returns a list of Achievements. This assumes that achievements have first been uploaded via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetAchievementsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AchievementsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                // Get Achievements
                AchievementResponse result = apiInstance.GetAchievements(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AchievementsApi.GetAchievements: " + e.Message );
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

[**AchievementResponse**](AchievementResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of achievements and/or errors |  -  |
| **400** | A list of achievements and/or errors |  -  |
| **401** | A list of achievements and/or errors |  -  |
| **403** | A list of achievements and/or errors |  -  |
| **404** | A list of achievements and/or errors |  -  |
| **413** | A list of achievements and/or errors |  -  |
| **500** | A list of achievements and/or errors |  -  |
| **501** | A list of achievements and/or errors |  -  |
| **503** | A list of achievements and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAchievementsByQuery

> AchievementResponse GetAchievementsByQuery (QueryRequest body = null)



Retrieve Achievements from Ziqni database by unique Achievements ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetAchievementsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AchievementsApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Retrieve Achievements from Ziqni database by unique Achievements ID's or any other Post body parameters using the POST method (optional) 

            try
            {
                AchievementResponse result = apiInstance.GetAchievementsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AchievementsApi.GetAchievementsByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Achievements from Ziqni database by unique Achievements ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**AchievementResponse**](AchievementResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of achievements and/or errors |  -  |
| **400** | A list of achievements and/or errors |  -  |
| **401** | A list of achievements and/or errors |  -  |
| **403** | A list of achievements and/or errors |  -  |
| **404** | A list of achievements and/or errors |  -  |
| **413** | A list of achievements and/or errors |  -  |
| **500** | A list of achievements and/or errors |  -  |
| **501** | A list of achievements and/or errors |  -  |
| **503** | A list of achievements and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAntecendentsForAchievement

> AchievementResponse GetAntecendentsForAchievement (string id, int? limit = null, int? skip = null)

NOT AVAILABLE IN CURRENT RELEASE

Receive a list of Antecedent Achievements for the Achievement identified provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetAntecendentsForAchievementExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AchievementsApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                // NOT AVAILABLE IN CURRENT RELEASE
                AchievementResponse result = apiInstance.GetAntecendentsForAchievement(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AchievementsApi.GetAntecendentsForAchievement: " + e.Message );
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
 **id** | **string**| Unique identifier of the resource | 
 **limit** | **int?**| Limit the returned total records found | [optional] 
 **skip** | **int?**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**AchievementResponse**](AchievementResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of achievements and/or errors |  -  |
| **400** | A list of achievements and/or errors |  -  |
| **401** | A list of achievements and/or errors |  -  |
| **403** | A list of achievements and/or errors |  -  |
| **404** | A list of achievements and/or errors |  -  |
| **413** | A list of achievements and/or errors |  -  |
| **500** | A list of achievements and/or errors |  -  |
| **501** | A list of achievements and/or errors |  -  |
| **503** | A list of achievements and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetIssuedAchievementsCountById

> AchievementIssuedResponse GetIssuedAchievementsCountById (string id)



Receive a count of Issued Achievements by identifier provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetIssuedAchievementsCountByIdExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AchievementsApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource

            try
            {
                AchievementIssuedResponse result = apiInstance.GetIssuedAchievementsCountById(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AchievementsApi.GetIssuedAchievementsCountById: " + e.Message );
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
 **id** | **string**| Unique identifier of the resource | 

### Return type

[**AchievementIssuedResponse**](AchievementIssuedResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A count of Issued Achievements for the id requested |  -  |
| **400** | A count of Issued Achievements for the id requested |  -  |
| **401** | A count of Issued Achievements for the id requested |  -  |
| **403** | A count of Issued Achievements for the id requested |  -  |
| **404** | A count of Issued Achievements for the id requested |  -  |
| **413** | A count of Issued Achievements for the id requested |  -  |
| **500** | A count of Issued Achievements for the id requested |  -  |
| **501** | A count of Issued Achievements for the id requested |  -  |
| **503** | A count of Issued Achievements for the id requested |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembersAchievementsDetails

> MemberAchievementIssuedResponse GetMembersAchievementsDetails (string id, string memberId = null, int? limit = null, int? skip = null)



Receive a list of members that had an Achievement issued for the Achievement identified provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class GetMembersAchievementsDetailsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AchievementsApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource
            var memberId = memberId_example;  // string | Id of a member (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                MemberAchievementIssuedResponse result = apiInstance.GetMembersAchievementsDetails(id, memberId, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AchievementsApi.GetMembersAchievementsDetails: " + e.Message );
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
 **id** | **string**| Unique identifier of the resource | 
 **memberId** | **string**| Id of a member | [optional] 
 **limit** | **int?**| Limit the returned total records found | [optional] 
 **skip** | **int?**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**MemberAchievementIssuedResponse**](MemberAchievementIssuedResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A count of Achievement issued for for each member |  -  |
| **400** | A count of Achievement issued for for each member |  -  |
| **401** | A count of Achievement issued for for each member |  -  |
| **403** | A count of Achievement issued for for each member |  -  |
| **404** | A count of Achievement issued for for each member |  -  |
| **413** | A count of Achievement issued for for each member |  -  |
| **500** | A count of Achievement issued for for each member |  -  |
| **501** | A count of Achievement issued for for each member |  -  |
| **503** | A count of Achievement issued for for each member |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateAchievements

> ApiResponse UpdateAchievements (List<UpdateAchievementRequest> body)

Update Achievements

Update existing Achievements in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateAchievementsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AchievementsApi(Configuration.Default);
            var body = new List<UpdateAchievementRequest>(); // List<UpdateAchievementRequest> | Update Achievements in the Ziqni database. * An Achievement Id must exist in the Ziqni database for update

            try
            {
                // Update Achievements
                ApiResponse result = apiInstance.UpdateAchievements(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AchievementsApi.UpdateAchievements: " + e.Message );
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
 **body** | [**List&lt;UpdateAchievementRequest&gt;**](UpdateAchievementRequest.md)| Update Achievements in the Ziqni database. * An Achievement Id must exist in the Ziqni database for update | 

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


## UpdateAchievementsLiveStatus

> ApiResponse UpdateAchievementsLiveStatus (List<AchievementLiveStatusRequest> body = null)



Manage the state of achievement - Draft, Live, Archived

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Client;
using Ziqni.Model;

namespace Example
{
    public class UpdateAchievementsLiveStatusExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new AchievementsApi(Configuration.Default);
            var body = new List<AchievementLiveStatusRequest>(); // List<AchievementLiveStatusRequest> | Updates the state of the Achievement (optional) 

            try
            {
                ApiResponse result = apiInstance.UpdateAchievementsLiveStatus(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling AchievementsApi.UpdateAchievementsLiveStatus: " + e.Message );
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
 **body** | [**List&lt;AchievementLiveStatusRequest&gt;**](AchievementLiveStatusRequest.md)| Updates the state of the Achievement | [optional] 

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
| **201** | A list of outcomes and/or errors |  -  |
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

