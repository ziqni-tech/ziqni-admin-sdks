# @ZiqniTechAdminApiClient.CompetitionsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompetitions**](CompetitionsApi.md#createCompetitions) | **POST** /competitions | 
[**createSimpleCompetitions**](CompetitionsApi.md#createSimpleCompetitions) | **POST** /competitions/simple | 
[**getCompetitions**](CompetitionsApi.md#getCompetitions) | **GET** /competitions | 
[**getCompetitionsByQuery**](CompetitionsApi.md#getCompetitionsByQuery) | **POST** /competitions/query | 
[**getCompetitionsToClone**](CompetitionsApi.md#getCompetitionsToClone) | **GET** /competitions/{id}/clone | Get Competition To Clone
[**getLeaderboardByCompetitionId**](CompetitionsApi.md#getLeaderboardByCompetitionId) | **GET** /competitions/{id}/leaderboard | 
[**getListOfEntrants**](CompetitionsApi.md#getListOfEntrants) | **GET** /competitions/{id}/entries | 
[**updateCompetitions**](CompetitionsApi.md#updateCompetitions) | **PUT** /competitions | 
[**updateCompetitionsEntries**](CompetitionsApi.md#updateCompetitionsEntries) | **PUT** /competitions/entries | 
[**updateCompetitionsState**](CompetitionsApi.md#updateCompetitionsState) | **PUT** /competitions/state | 



## createCompetitions

> ApiResponse createCompetitions(body)



Create a new Competition in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CompetitionsApi();
let body = new @ZiqniTechAdminApiClient.CreateCompetitionRequest(); // CreateCompetitionRequest | Create a Competition in the Ziqni database
apiInstance.createCompetitions(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## createSimpleCompetitions

> ApiResponse createSimpleCompetitions(body)



Create a Simple Competition in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CompetitionsApi();
let body = new @ZiqniTechAdminApiClient.CreateSimpleCompetitionRequest(); // CreateSimpleCompetitionRequest | Create a Competition in the Ziqni database
apiInstance.createSimpleCompetitions(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## getCompetitions

> CompetitionResponse getCompetitions(opts)



Returns a list of Competitions. This assumes that competitions have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CompetitionsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getCompetitions(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**CompetitionResponse**](CompetitionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompetitionsByQuery

> CompetitionResponse getCompetitionsByQuery(opts)



Retrieve Competitions from Ziqni database by unique Competition ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CompetitionsApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve Competitions from Ziqni database by unique Competition ID's or any other POST body parameters using the POST method
};
apiInstance.getCompetitionsByQuery(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## getCompetitionsToClone

> CloneCompetitionResponse getCompetitionsToClone(id)

Get Competition To Clone

Clones a Competition for the identifier provided

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CompetitionsApi();
let id = "id_example"; // String | Unique identifier of the resource
apiInstance.getCompetitionsToClone(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource | 

### Return type

[**CloneCompetitionResponse**](CloneCompetitionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLeaderboardByCompetitionId

> CompetitionLeaderboardResponse getLeaderboardByCompetitionId(id, opts)



Returns a list of Leaderborads for the Competition id provided

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CompetitionsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getLeaderboardByCompetitionId(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource | 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**CompetitionLeaderboardResponse**](CompetitionLeaderboardResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getListOfEntrants

> EntrantResponse getListOfEntrants(id, opts)



Returns all Entries for the Competition id provided

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CompetitionsApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getListOfEntrants(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Unique identifier of the resource | 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**EntrantResponse**](EntrantResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCompetitions

> ApiResponse updateCompetitions(body)



Update an existing Competition in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CompetitionsApi();
let body = new @ZiqniTechAdminApiClient.UpdateCompetitionRequest(); // UpdateCompetitionRequest | Update a Competition in the Ziqni database. * A Competitions Id must exist in the Ziqni database for update
apiInstance.updateCompetitions(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## updateCompetitionsEntries

> ApiResponse updateCompetitionsEntries(opts)



Updates the status of the Entrants for a Competition id provided

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CompetitionsApi();
let opts = {
  'body': [new @ZiqniTechAdminApiClient.EntrantRequest()] // [EntrantRequest] | Updates the status of the Entrants
};
apiInstance.updateCompetitionsEntries(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[EntrantRequest]**](EntrantRequest.md)| Updates the status of the Entrants | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCompetitionsState

> ApiResponse updateCompetitionsState(opts)



Manages the Competitions state

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CompetitionsApi();
let opts = {
  'body': [new @ZiqniTechAdminApiClient.UpdateCompetitionStatusRequest()] // [UpdateCompetitionStatusRequest] | Updates the state of the Competition
};
apiInstance.updateCompetitionsState(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[UpdateCompetitionStatusRequest]**](UpdateCompetitionStatusRequest.md)| Updates the state of the Competition | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

