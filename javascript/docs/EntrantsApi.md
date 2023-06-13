# @ZiqniTechAdminApiClient.EntrantsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**exportEntrantsByQuery**](EntrantsApi.md#exportEntrantsByQuery) | **POST** /entrants/export | Get entrants by query
[**getEntrantsByQuery**](EntrantsApi.md#getEntrantsByQuery) | **POST** /entrants/query | Get entrants by query
[**updateEntrants**](EntrantsApi.md#updateEntrants) | **POST** /entrants | 



## exportEntrantsByQuery

> EntrantCountResponse exportEntrantsByQuery(opts)

Get entrants by query

Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.EntrantsApi();
let opts = {
  'queryRequest': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | 
};
apiInstance.exportEntrantsByQuery(opts, (error, data, response) => {
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
 **queryRequest** | [**QueryRequest**](QueryRequest.md)|  | [optional] 

### Return type

[**EntrantCountResponse**](EntrantCountResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEntrantsByQuery

> EntrantResponse getEntrantsByQuery(opts)

Get entrants by query

Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.EntrantsApi();
let opts = {
  'queryRequest': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | 
};
apiInstance.getEntrantsByQuery(opts, (error, data, response) => {
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
 **queryRequest** | [**QueryRequest**](QueryRequest.md)|  | [optional] 

### Return type

[**EntrantResponse**](EntrantResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateEntrants

> ApiResponse updateEntrants(opts)



Updates the status of the Entrants for a Competition id provided

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.EntrantsApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.UpdateEntrantRequest() // UpdateEntrantRequest | Updates the status of the Entrants
};
apiInstance.updateEntrants(opts, (error, data, response) => {
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
 **body** | [**UpdateEntrantRequest**](UpdateEntrantRequest.md)| Updates the status of the Entrants | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

