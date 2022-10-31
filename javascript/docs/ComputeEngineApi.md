# @ZiqniTechAdminApiClient.ComputeEngineApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createComputeEngines**](ComputeEngineApi.md#createComputeEngines) | **POST** /compute-engines | 
[**deleteComputeEnginesById**](ComputeEngineApi.md#deleteComputeEnginesById) | **DELETE** /compute-engines/{id} | 
[**deleteComputeEnginesByQuery**](ComputeEngineApi.md#deleteComputeEnginesByQuery) | **POST** /compute-engines/delete | 
[**getComputeEngines**](ComputeEngineApi.md#getComputeEngines) | **GET** /compute-engines | 
[**getComputeEnginesById**](ComputeEngineApi.md#getComputeEnginesById) | **GET** /compute-engines/{id} | 
[**getComputeEnginesByQuery**](ComputeEngineApi.md#getComputeEnginesByQuery) | **POST** /compute-engines/query | 
[**updateComputeEngines**](ComputeEngineApi.md#updateComputeEngines) | **PUT** /compute-engines | 



## createComputeEngines

> ApiResponse createComputeEngines(body)



Create a new Compute Engine in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ComputeEngineApi();
let body = new @ZiqniTechAdminApiClient.CreateComputeEngineRequest(); // CreateComputeEngineRequest | Create a Compute Engine in the Ziqni system
apiInstance.createComputeEngines(body, (error, data, response) => {
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
 **body** | [**CreateComputeEngineRequest**](CreateComputeEngineRequest.md)| Create a Compute Engine in the Ziqni system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteComputeEnginesById

> ApiResponse deleteComputeEnginesById(id)



Delete the Compute Engine for a given identifier specified

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ComputeEngineApi();
let id = "id_example"; // String | Unique identifier of the resource
apiInstance.deleteComputeEnginesById(id, (error, data, response) => {
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

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteComputeEnginesByQuery

> ApiResponse deleteComputeEnginesByQuery(opts)



Delete an Compute Engine or a list of Compute Engines from Ziqni by query

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ComputeEngineApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Delete an  Compute Engine or a list of Compute Engines from Ziqni by unique Compute Engine ID's or any other POST body parameters using the POST method
};
apiInstance.deleteComputeEnginesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete an  Compute Engine or a list of Compute Engines from Ziqni by unique Compute Engine ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getComputeEngines

> ComputeEngineResponse getComputeEngines(opts)



Returns a list of Compute Engines. This assumes that api keys have first been created via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ComputeEngineApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getComputeEngines(opts, (error, data, response) => {
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

[**ComputeEngineResponse**](ComputeEngineResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getComputeEnginesById

> ComputeEngineResponse getComputeEnginesById(id)



Returns an Compute Engine by identifier provided. This assumes that compute engines have first been created via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ComputeEngineApi();
let id = "id_example"; // String | Unique identifier of the resource
apiInstance.getComputeEnginesById(id, (error, data, response) => {
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

[**ComputeEngineResponse**](ComputeEngineResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getComputeEnginesByQuery

> ComputeEngineResponse getComputeEnginesByQuery(opts)



Retrieve an Compute Engine or a list of Compute Engines by query

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ComputeEngineApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve an  Compute Engine or a list of Compute Engines from Ziqni by unique Copute Engine ID's or any other POST body parameters using the POST method
};
apiInstance.getComputeEnginesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve an  Compute Engine or a list of Compute Engines from Ziqni by unique Copute Engine ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ComputeEngineResponse**](ComputeEngineResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateComputeEngines

> ApiResponse updateComputeEngines(body)



Update an existing Compute Engine in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ComputeEngineApi();
let body = new @ZiqniTechAdminApiClient.UpdateComputeEngineRequest(); // UpdateComputeEngineRequest | Update an Compute Engine in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
apiInstance.updateComputeEngines(body, (error, data, response) => {
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
 **body** | [**UpdateComputeEngineRequest**](UpdateComputeEngineRequest.md)| Update an Compute Engine in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

