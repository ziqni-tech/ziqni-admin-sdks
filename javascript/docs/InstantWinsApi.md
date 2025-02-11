# @ZiqniTechAdminApiClient.InstantWinsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInstantWins**](InstantWinsApi.md#createInstantWins) | **POST** /instant-wins | Create instant wins
[**deleteInstantWins**](InstantWinsApi.md#deleteInstantWins) | **DELETE** /instant-wins | Delete instant wins
[**deleteInstantWinsByQuery**](InstantWinsApi.md#deleteInstantWinsByQuery) | **POST** /instant-wins/delete | Delete instant-wins by query
[**getInstantWinEntrants**](InstantWinsApi.md#getInstantWinEntrants) | **GET** /instant-wins/entrants-info | Get all players eligible to play
[**getInstantWins**](InstantWinsApi.md#getInstantWins) | **GET** /instant-wins | Get instant wins
[**getInstantWinsByQuery**](InstantWinsApi.md#getInstantWinsByQuery) | **POST** /instant-wins/query | Get instant wins by query
[**updateInstantWins**](InstantWinsApi.md#updateInstantWins) | **PUT** /instant-wins | Update instant wins



## createInstantWins

> ApiResponse createInstantWins(body)

Create instant wins

Create new Instant win in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.InstantWinsApi();
let body = [new @ZiqniTechAdminApiClient.CreateInstantWinRequest()]; // [CreateInstantWinRequest] | Create Instant wins in the Ziqni database. An array can contain a maximum of 10,000 instant wins in one request
apiInstance.createInstantWins(body, (error, data, response) => {
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
 **body** | [**[CreateInstantWinRequest]**](CreateInstantWinRequest.md)| Create Instant wins in the Ziqni database. An array can contain a maximum of 10,000 instant wins in one request | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json


## deleteInstantWins

> ApiResponse deleteInstantWins(opts)

Delete instant wins

Delete Instant win for a given identifier specified

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.InstantWinsApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteInstantWins(opts, (error, data, response) => {
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

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteInstantWinsByQuery

> ApiResponse deleteInstantWinsByQuery(opts)

Delete instant-wins by query

Delete Instant wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.InstantWinsApi();
let opts = {
  'body': {"must":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"mustNot":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"should":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"gte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"gt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"range":[{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]},{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]}],"sortBy":[{"queryField":"some text","order":"Desc"},{"queryField":"some text","order":"Desc"}],"multiFields":[{"queryFields":["some text","some text"],"queryValue":"some text"},{"queryFields":["some text","some text"],"queryValue":"some text"}],"includeFields":["some text","some text"],"hasValue":["some text","some text"],"hasNoValue":["some text","some text"],"shouldMatch":87,"skip":97,"limit":5,"constraints":["some text","some text"]} // QueryRequest | Delete Instant Wins from Ziqni database by unique Instant win ID's or any other POST body parameters using the POST method
};
apiInstance.deleteInstantWinsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Instant Wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getInstantWinEntrants

> InstantWinMemberResponse getInstantWinEntrants(opts)

Get all players eligible to play

Retrieve Instant wins members from Ziqni database by unique Instant win ID&#39;s 

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.InstantWinsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getInstantWinEntrants(opts, (error, data, response) => {
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

[**InstantWinMemberResponse**](InstantWinMemberResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInstantWins

> InstantWinResponse getInstantWins(opts)

Get instant wins

Returns a list of Instant wins. This assumes that instant wins have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.InstantWinsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getInstantWins(opts, (error, data, response) => {
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

[**InstantWinResponse**](InstantWinResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getInstantWinsByQuery

> InstantWinResponse getInstantWinsByQuery(opts)

Get instant wins by query

Retrieve Instant wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.InstantWinsApi();
let opts = {
  'body': {"must":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"mustNot":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"should":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"gte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"gt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"range":[{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]},{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]}],"sortBy":[{"queryField":"some text","order":"Asc"},{"queryField":"some text","order":"Desc"}],"multiFields":[{"queryFields":["some text","some text"],"queryValue":"some text"},{"queryFields":["some text","some text"],"queryValue":"some text"}],"includeFields":["some text","some text"],"hasValue":["some text","some text"],"hasNoValue":["some text","some text"],"shouldMatch":76,"skip":85,"limit":86,"constraints":["some text","some text"]} // QueryRequest | Retrieve Instant wins from Ziqni database by unique Instant win ID's or any other POST body parameters using the POST method
};
apiInstance.getInstantWinsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Instant wins from Ziqni database by unique Instant win ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**InstantWinResponse**](InstantWinResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateInstantWins

> ApiResponse updateInstantWins(body)

Update instant wins

Update existing Instant wins in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.InstantWinsApi();
let body = [new @ZiqniTechAdminApiClient.UpdateInstantWinRequest()]; // [UpdateInstantWinRequest] | Update a Instant win or multiple Instant wins in the Ziqni database. 
apiInstance.updateInstantWins(body, (error, data, response) => {
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
 **body** | [**[UpdateInstantWinRequest]**](UpdateInstantWinRequest.md)| Update a Instant win or multiple Instant wins in the Ziqni database.  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json

