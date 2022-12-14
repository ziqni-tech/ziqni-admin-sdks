# Org.OpenAPITools.Api.ContestsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateContests**](ContestsApi.md#createcontests) | **POST** /contests | 
[**GetContests**](ContestsApi.md#getcontests) | **GET** /contests | 
[**GetContestsByQuery**](ContestsApi.md#getcontestsbyquery) | **POST** /contests/query | 
[**GetContestsLeaderboardById**](ContestsApi.md#getcontestsleaderboardbyid) | **GET** /contests/{id}/leaderboard | 
[**GetContestsToClone**](ContestsApi.md#getconteststoclone) | **GET** /contests/{id}/clone | 
[**GetListOfEntrantsForContest**](ContestsApi.md#getlistofentrantsforcontest) | **GET** /contests/{id}/entries | 
[**UpdateContest**](ContestsApi.md#updatecontest) | **PUT** /contests | 
[**UpdateContestsState**](ContestsApi.md#updatecontestsstate) | **PUT** /contests/state | 



## CreateContests

> ApiResponse CreateContests (CreateContestForCompetitionRequest body)



Create a new Contests in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class CreateContestsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContestsApi(Configuration.Default);
            var body = new CreateContestForCompetitionRequest(); // CreateContestForCompetitionRequest | Create a Contests in the Ziqni database

            try
            {
                ApiResponse result = apiInstance.CreateContests(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContestsApi.CreateContests: " + e.Message );
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
 **body** | [**CreateContestForCompetitionRequest**](CreateContestForCompetitionRequest.md)| Create a Contests in the Ziqni database | 

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


## GetContests

> ContestResponse GetContests (List<string> id = null, int? limit = null, int? skip = null)



Returns a list of Contests. This assumes that contests have first been uploaded via a POST request or web console

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetContestsExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContestsApi(Configuration.Default);
            var id = new List<string>(); // List<string> | The unique identifiers of the resources (optional) 
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                ContestResponse result = apiInstance.GetContests(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContestsApi.GetContests: " + e.Message );
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

[**ContestResponse**](ContestResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of contests and/or errors |  -  |
| **400** | A list of contests and/or errors |  -  |
| **401** | A list of contests and/or errors |  -  |
| **403** | A list of contests and/or errors |  -  |
| **404** | A list of contests and/or errors |  -  |
| **413** | A list of contests and/or errors |  -  |
| **500** | A list of contests and/or errors |  -  |
| **501** | A list of contests and/or errors |  -  |
| **503** | A list of contests and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetContestsByQuery

> ContestResponse GetContestsByQuery (QueryRequest body = null)



Retrieve Contests from Ziqni database by unique Contests ID's or any other POST body parameters using the POST method

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetContestsByQueryExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContestsApi(Configuration.Default);
            var body = new QueryRequest(); // QueryRequest | Retrieve Contests from Ziqni database by unique Contest ID's or any other Post body parameters using the POST method (optional) 

            try
            {
                ContestResponse result = apiInstance.GetContestsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContestsApi.GetContestsByQuery: " + e.Message );
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Contests from Ziqni database by unique Contest ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**ContestResponse**](ContestResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A list of contests and/or errors |  -  |
| **400** | A list of contests and/or errors |  -  |
| **401** | A list of contests and/or errors |  -  |
| **403** | A list of contests and/or errors |  -  |
| **404** | A list of contests and/or errors |  -  |
| **413** | A list of contests and/or errors |  -  |
| **500** | A list of contests and/or errors |  -  |
| **501** | A list of contests and/or errors |  -  |
| **503** | A list of contests and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetContestsLeaderboardById

> ContestLeaderboardResponse GetContestsLeaderboardById (string id, int? limit = null, int? skip = null)



Use /leadeboard instead, Returns a leaderborad for the Contests id provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetContestsLeaderboardByIdExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContestsApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                ContestLeaderboardResponse result = apiInstance.GetContestsLeaderboardById(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContestsApi.GetContestsLeaderboardById: " + e.Message );
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

[**ContestLeaderboardResponse**](ContestLeaderboardResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | A leaderboard for the contest and/or errors |  -  |
| **400** | A leaderboard for the contest and/or errors |  -  |
| **401** | A leaderboard for the contest and/or errors |  -  |
| **403** | A leaderboard for the contest and/or errors |  -  |
| **404** | A leaderboard for the contest and/or errors |  -  |
| **413** | A leaderboard for the contest and/or errors |  -  |
| **500** | A leaderboard for the contest and/or errors |  -  |
| **501** | A leaderboard for the contest and/or errors |  -  |
| **503** | A leaderboard for the contest and/or errors |  -  |

[[Back to top]](#)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetContestsToClone

> CloneContestResponse GetContestsToClone (string id)



Clones a Contest for the identifier provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetContestsToCloneExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContestsApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource

            try
            {
                CloneContestResponse result = apiInstance.GetContestsToClone(id);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContestsApi.GetContestsToClone: " + e.Message );
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

[**CloneContestResponse**](CloneContestResponse.md)

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


## GetListOfEntrantsForContest

> EntrantResponse GetListOfEntrantsForContest (string id, int? limit = null, int? skip = null)



Returns all Entries for the Contest id provided

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class GetListOfEntrantsForContestExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContestsApi(Configuration.Default);
            var id = id_example;  // string | Unique identifier of the resource
            var limit = 56;  // int? | Limit the returned total records found (optional) 
            var skip = 56;  // int? | Skip the returned records found and return the next batch of records (optional) 

            try
            {
                EntrantResponse result = apiInstance.GetListOfEntrantsForContest(id, limit, skip);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContestsApi.GetListOfEntrantsForContest: " + e.Message );
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


## UpdateContest

> ApiResponse UpdateContest (UpdateContestRequest body)



Update an existing Contest in the Ziqni database

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateContestExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContestsApi(Configuration.Default);
            var body = new UpdateContestRequest(); // UpdateContestRequest | Update a Contest in the Ziqni database. * A Contests Id must exist in the Ziqni database for update

            try
            {
                ApiResponse result = apiInstance.UpdateContest(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContestsApi.UpdateContest: " + e.Message );
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
 **body** | [**UpdateContestRequest**](UpdateContestRequest.md)| Update a Contest in the Ziqni database. * A Contests Id must exist in the Ziqni database for update | 

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


## UpdateContestsState

> ApiResponse UpdateContestsState (List<UpdateContestStateRequest> body = null)



Manages the Contests state

### Example

```csharp
using System.Collections.Generic;
using System.Diagnostics;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Client;
using Org.OpenAPITools.Model;

namespace Example
{
    public class UpdateContestsStateExample
    {
        public static void Main()
        {
            Configuration.Default.BasePath = "https://api.ziqni.com";
            // Configure OAuth2 access token for authorization: OAuth2
            Configuration.Default.AccessToken = "YOUR_ACCESS_TOKEN";

            var apiInstance = new ContestsApi(Configuration.Default);
            var body = new List<UpdateContestStateRequest>(); // List<UpdateContestStateRequest> | Updates the state of the Contest (optional) 

            try
            {
                ApiResponse result = apiInstance.UpdateContestsState(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling ContestsApi.UpdateContestsState: " + e.Message );
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
 **body** | [**List&lt;UpdateContestStateRequest&gt;**](UpdateContestStateRequest.md)| Updates the state of the Contest | [optional] 

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

