# @ZiqniTechAdminApiClient.ActionTypesApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createActionTypes**](ActionTypesApi.md#createActionTypes) | **POST** /action-types | Create action types
[**deleteActionTypes**](ActionTypesApi.md#deleteActionTypes) | **DELETE** /action-types | Delete action types
[**deleteActionTypesByQuery**](ActionTypesApi.md#deleteActionTypesByQuery) | **POST** /action-types/delete | Delete action types by query
[**getActionTypes**](ActionTypesApi.md#getActionTypes) | **GET** /action-types | Get action types
[**getActionTypesByQuery**](ActionTypesApi.md#getActionTypesByQuery) | **POST** /action-types/query | Get action types by query
[**updateActionTypes**](ActionTypesApi.md#updateActionTypes) | **PUT** /action-types | Update action types



## createActionTypes

> ApiResponse createActionTypes(body)

Create action types

Create new Action types in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ActionTypesApi();
let body = [new @ZiqniTechAdminApiClient.CreateActionTypeRequest()]; // [CreateActionTypeRequest] | Create Action Types in the Ziqni database
apiInstance.createActionTypes(body, (error, data, response) => {
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
 **body** | [**[CreateActionTypeRequest]**](CreateActionTypeRequest.md)| Create Action Types in the Ziqni database | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteActionTypes

> ApiResponse deleteActionTypes(opts)

Delete action types

Delete Action types for a given identifier specified

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ActionTypesApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteActionTypes(opts, (error, data, response) => {
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


## deleteActionTypesByQuery

> ApiResponse deleteActionTypesByQuery(opts)

Delete action types by query

Delete Action types from Ziqni database by unique Action types ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ActionTypesApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Delete Action types from Ziqni database by unique Action types ID's or any other POST body parameters using the POST method
};
apiInstance.deleteActionTypesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Action types from Ziqni database by unique Action types ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getActionTypes

> ActionTypeResponse getActionTypes(opts)

Get action types

Returns a list of Action Types. This assumes that action types have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ActionTypesApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getActionTypes(opts, (error, data, response) => {
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

[**ActionTypeResponse**](ActionTypeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getActionTypesByQuery

> ActionTypeResponse getActionTypesByQuery(opts)

Get action types by query

Retrieve Action types from Ziqni database by unique Action type ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ActionTypesApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve Action types from Ziqni database by unique Action type ID's or any other POST body parameters using the POST method
};
apiInstance.getActionTypesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Action types from Ziqni database by unique Action type ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ActionTypeResponse**](ActionTypeResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateActionTypes

> ApiResponse updateActionTypes(body)

Update action types

Update existing Action types in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ActionTypesApi();
let body = [new @ZiqniTechAdminApiClient.UpdateActionTypeRequest()]; // [UpdateActionTypeRequest] | Update Action types in the Ziqni database.
apiInstance.updateActionTypes(body, (error, data, response) => {
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
 **body** | [**[UpdateActionTypeRequest]**](UpdateActionTypeRequest.md)| Update Action types in the Ziqni database. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

