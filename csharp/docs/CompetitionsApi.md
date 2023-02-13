# Org.OpenAPITools.Api.CompetitionsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateCompetitions**](CompetitionsApi.md#createcompetitions) | **POST** /competitions | 
[**CreateSimpleCompetitions**](CompetitionsApi.md#createsimplecompetitions) | **POST** /competitions/simple | 
[**GetCompetitions**](CompetitionsApi.md#getcompetitions) | **GET** /competitions | 
[**GetCompetitionsByQuery**](CompetitionsApi.md#getcompetitionsbyquery) | **POST** /competitions/query | 
[**GetCompetitionsToClone**](CompetitionsApi.md#getcompetitionstoclone) | **GET** /competitions/{id}/clone | Get Competition To Clone
[**GetLeaderboardByCompetitionId**](CompetitionsApi.md#getleaderboardbycompetitionid) | **GET** /competitions/{id}/leaderboard | 
[**GetListOfEntrants**](CompetitionsApi.md#getlistofentrants) | **GET** /competitions/{id}/entries | 
[**UpdateCompetitions**](CompetitionsApi.md#updatecompetitions) | **PUT** /competitions | 
[**UpdateCompetitionsEntries**](CompetitionsApi.md#updatecompetitionsentries) | **PUT** /competitions/entries | 
[**UpdateCompetitionsState**](CompetitionsApi.md#updatecompetitionsstate) | **PUT** /competitions/state | 



## CreateCompetitions

> ApiResponse CreateCompetitions (CreateCompetitionRequest body)



Create a new Competition in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateCompetitionsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CompetitionsApi(Configuration.Default);
            var body = new CreateCompetitionRequest(); // CreateCompetitionRequest | Create a Competition in the Ziqni database

            try
            {
                ApiResponse result = apiInstance.CreateCompetitions(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CompetitionsApi.CreateCompetitions: " + e.Message );
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
 **body** | [**CreateCompetitionRequest**](CreateCompetitionRequest.md)| Create a Competition in the Ziqni database | 

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


## CreateSimpleCompetitions

> ApiResponse CreateSimpleCompetitions (CreateSimpleCompetitionRequest body)



Create a Simple Competition in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateSimpleCompetitionsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CompetitionsApi(Configuration.Default);
            var body = new CreateSimpleCompetitionRequest(); // CreateSimpleCompetitionRequest | Create a Competition in the Ziqni database

            try
            {
                ApiResponse result = apiInstance.CreateSimpleCompetitions(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CompetitionsApi.CreateSimpleCompetitions: " + e.Message );
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
 **body** | [**CreateSimpleCompetitionRequest**](CreateSimpleCompetitionRequest.md)| Create a Competition in the Ziqni database | 

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


## GetCompetitions

> CompetitionResponse GetCompetitions (List<string> id = null, int? limit = null, int? skip = null)



Returns a list of Competitions. This assumes that competitions have first been uploaded via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetCompetitionsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CompetitionsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                CompetitionResponse result = apiInstance.GetCompetitions(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CompetitionsApi.GetCompetitions: " + e.Message );
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

[**CompetitionResponse**](CompetitionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of competitions and/or errors |  -  |
| **400** | A list of competitions and/or errors |  -  |
| **401** | A list of competitions and/or errors |  -  |
| **403** | A list of competitions and/or errors |  -  |
| **404** | A list of competitions and/or errors |  -  |
| **413** | A list of competitions and/or errors |  -  |
| **500** | A list of competitions and/or errors |  -  |
| **501** | A list of competitions and/or errors |  -  |
| **503** | A list of competitions and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompetitionsByQuery

> CompetitionResponse GetCompetitionsByQuery (QueryRequest body = null)



Retrieve Competitions from Ziqni database by unique Competition ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetCompetitionsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CompetitionsApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Retrieve Competitions from Ziqni database by unique Competition ID's or any other POST body parameters using the POST method (optional) 

            try
            {
                CompetitionResponse result = apiInstance.GetCompetitionsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CompetitionsApi.GetCompetitionsByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Competitions from Ziqni database by unique Competition ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**CompetitionResponse**](CompetitionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of competitions and/or errors |  -  |
| **400** | A list of competitions and/or errors |  -  |
| **401** | A list of competitions and/or errors |  -  |
| **403** | A list of competitions and/or errors |  -  |
| **404** | A list of competitions and/or errors |  -  |
| **413** | A list of competitions and/or errors |  -  |
| **500** | A list of competitions and/or errors |  -  |
| **501** | A list of competitions and/or errors |  -  |
| **503** | A list of competitions and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompetitionsToClone

> CloneCompetitionResponse GetCompetitionsToClone (string id)

Get Competition To Clone

Clones a Competition for the identifier provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetCompetitionsToCloneExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CompetitionsApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource

            try
            {
                // Get Competition To Clone
                CloneCompetitionResponse result = apiInstance.GetCompetitionsToClone(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CompetitionsApi.GetCompetitionsToClone: " + e.Message );
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

[**CloneCompetitionResponse**](CloneCompetitionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **400** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **401** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **403** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **404** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **413** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **500** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **501** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |
| **503** | A modeled response of a Contest that can be used for Contest creation * The competitionId has to be changed to the competition Id of the competition that the contest will be cloned to |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetLeaderboardByCompetitionId

> CompetitionLeaderboardResponse GetLeaderboardByCompetitionId (string id, int? limit = null, int? skip = null)



Use /leadeboard instead. Returns a list of Leaderborads for the Competition id provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetLeaderboardByCompetitionIdExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CompetitionsApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                CompetitionLeaderboardResponse result = apiInstance.GetLeaderboardByCompetitionId(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CompetitionsApi.GetLeaderboardByCompetitionId: " + e.Message );
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

[**CompetitionLeaderboardResponse**](CompetitionLeaderboardResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Contests Leaderboards and/or errors |  -  |
| **400** | A list of Contests Leaderboards and/or errors |  -  |
| **401** | A list of Contests Leaderboards and/or errors |  -  |
| **403** | A list of Contests Leaderboards and/or errors |  -  |
| **404** | A list of Contests Leaderboards and/or errors |  -  |
| **413** | A list of Contests Leaderboards and/or errors |  -  |
| **500** | A list of Contests Leaderboards and/or errors |  -  |
| **501** | A list of Contests Leaderboards and/or errors |  -  |
| **503** | A list of Contests Leaderboards and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetListOfEntrants

> EntrantResponse GetListOfEntrants (string id, int? limit = null, int? skip = null)



Returns all Entries for the Competition id provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetListOfEntrantsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CompetitionsApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                EntrantResponse result = apiInstance.GetListOfEntrants(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CompetitionsApi.GetListOfEntrants: " + e.Message );
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

[**EntrantResponse**](EntrantResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of Entrants for the competition/contest and/or errors |  -  |
| **400** | A list of Entrants for the competition/contest and/or errors |  -  |
| **401** | A list of Entrants for the competition/contest and/or errors |  -  |
| **403** | A list of Entrants for the competition/contest and/or errors |  -  |
| **404** | A list of Entrants for the competition/contest and/or errors |  -  |
| **413** | A list of Entrants for the competition/contest and/or errors |  -  |
| **500** | A list of Entrants for the competition/contest and/or errors |  -  |
| **501** | A list of Entrants for the competition/contest and/or errors |  -  |
| **503** | A list of Entrants for the competition/contest and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UpdateCompetitions

> ApiResponse UpdateCompetitions (UpdateCompetitionRequest body)



Update an existing Competition in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateCompetitionsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CompetitionsApi(Configuration.Default);
            var body = new UpdateCompetitionRequest(); // UpdateCompetitionRequest | Update a Competition in the Ziqni database. * A Competitions Id must exist in the Ziqni database for update

            try
            {
                ApiResponse result = apiInstance.UpdateCompetitions(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CompetitionsApi.UpdateCompetitions: " + e.Message );
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
 **body** | [**UpdateCompetitionRequest**](UpdateCompetitionRequest.md)| Update a Competition in the Ziqni database. * A Competitions Id must exist in the Ziqni database for update | 

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


## UpdateCompetitionsEntries

> ApiResponse UpdateCompetitionsEntries (List<EntrantRequest> body = null)



Updates the status of the Entrants for a Competition id provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateCompetitionsEntriesExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CompetitionsApi(Configuration.Default);
            var body = new List<EntrantRequest>(); // List<EntrantRequest> | Updates the status of the Entrants (optional) 

            try
            {
                ApiResponse result = apiInstance.UpdateCompetitionsEntries(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CompetitionsApi.UpdateCompetitionsEntries: " + e.Message );
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
 **body** | [**List&lt;EntrantRequest&gt;**](EntrantRequest.md)| Updates the status of the Entrants | [optional] 

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


## UpdateCompetitionsState

> ApiResponse UpdateCompetitionsState (List<UpdateCompetitionStatusRequest> body = null)



Manages the Competitions state

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateCompetitionsStateExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new CompetitionsApi(Configuration.Default);
            var body = new List<UpdateCompetitionStatusRequest>(); // List<UpdateCompetitionStatusRequest> | Updates the state of the Competition (optional) 

            try
            {
                ApiResponse result = apiInstance.UpdateCompetitionsState(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CompetitionsApi.UpdateCompetitionsState: " + e.Message );
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
 **body** | [**List&lt;UpdateCompetitionStatusRequest&gt;**](UpdateCompetitionStatusRequest.md)| Updates the state of the Competition | [optional] 

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

