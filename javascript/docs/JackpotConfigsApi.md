# @ZiqniTechAdminApiClient.JackpotConfigsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createJackpotConfigs**](JackpotConfigsApi.md#createJackpotConfigs) | **POST** /jackpot-configs | Create jackpot configs
[**deleteJackpotConfigs**](JackpotConfigsApi.md#deleteJackpotConfigs) | **DELETE** /jackpot-configs | Delete jackpot configs
[**getJackpotConfigs**](JackpotConfigsApi.md#getJackpotConfigs) | **GET** /jackpot-configs | Get jackpot configs
[**getJackpotConfigsByQuery**](JackpotConfigsApi.md#getJackpotConfigsByQuery) | **POST** /jackpot-configs/query | Get jackpot configs by query
[**updateJackpotConfigs**](JackpotConfigsApi.md#updateJackpotConfigs) | **PUT** /jackpot-configs | Update jackpot configs



## createJackpotConfigs

> ApiResponse createJackpotConfigs(body)

Create jackpot configs

Create new Jackpot configs in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.JackpotConfigsApi();
let body = [new @ZiqniTechAdminApiClient.CreateJackpotConfigRequest()]; // [CreateJackpotConfigRequest] | Create jackpot configs in the Ziqni database. An array can contain a maximum of 10,000 jackpot configs in one request
apiInstance.createJackpotConfigs(body, (error, data, response) => {
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
 **body** | [**[CreateJackpotConfigRequest]**](CreateJackpotConfigRequest.md)| Create jackpot configs in the Ziqni database. An array can contain a maximum of 10,000 jackpot configs in one request | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json


## deleteJackpotConfigs

> ApiResponse deleteJackpotConfigs(opts)

Delete jackpot configs

Delete Jackpot configs for a given identifier specified

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.JackpotConfigsApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteJackpotConfigs(opts, (error, data, response) => {
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


## getJackpotConfigs

> JackpotConfigResponse getJackpotConfigs(opts)

Get jackpot configs

Returns a list of jackpot configs. This assumes that jackpot configs have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.JackpotConfigsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getJackpotConfigs(opts, (error, data, response) => {
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

[**JackpotConfigResponse**](JackpotConfigResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJackpotConfigsByQuery

> JackpotConfigResponse getJackpotConfigsByQuery(opts)

Get jackpot configs by query

Retrieve Jackpot Configs  from Ziqni database by unique Jackpot Configs ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.JackpotConfigsApi();
let opts = {
  'body': {"must":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"mustNot":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"should":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"gte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"gt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"range":[{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]},{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]}],"sortBy":[{"queryField":"some text","order":"Desc"},{"queryField":"some text","order":"Asc"}],"multiFields":[{"queryFields":["some text","some text"],"queryValue":"some text"},{"queryFields":["some text","some text"],"queryValue":"some text"}],"includeFields":["some text","some text"],"hasValue":["some text","some text"],"hasNoValue":["some text","some text"],"shouldMatch":46,"skip":12,"limit":13,"constraints":["some text","some text"]} // QueryRequest | Retrieve Products from Ziqni database by unique Product ID's or any other POST body parameters using the POST method
};
apiInstance.getJackpotConfigsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Products from Ziqni database by unique Product ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**JackpotConfigResponse**](JackpotConfigResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateJackpotConfigs

> ApiResponse updateJackpotConfigs(body)

Update jackpot configs

Update existing jackpot configs in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.JackpotConfigsApi();
let body = [new @ZiqniTechAdminApiClient.UpdateJackpotConfigRequest()]; // [UpdateJackpotConfigRequest] | Update a Jackpot configs or multiple jackpot configs in the Ziqni database. 
apiInstance.updateJackpotConfigs(body, (error, data, response) => {
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
 **body** | [**[UpdateJackpotConfigRequest]**](UpdateJackpotConfigRequest.md)| Update a Jackpot configs or multiple jackpot configs in the Ziqni database.  | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json

