# @ZiqniTechAdminApiClient.AwardsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**claimAwards**](AwardsApi.md#claimAwards) | **PUT** /awards/claim | Claim awards
[**getAwards**](AwardsApi.md#getAwards) | **GET** /awards | Get awards
[**getAwardsByQuery**](AwardsApi.md#getAwardsByQuery) | **POST** /awards/query | Query Awards
[**updateAwards**](AwardsApi.md#updateAwards) | **PUT** /awards | Update awards



## claimAwards

> ApiResponse claimAwards(body)

Claim awards

Claim Awards that need to be actioned at

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.AwardsApi();
let body = [new @ZiqniTechAdminApiClient.ClaimAwardRequest()]; // [ClaimAwardRequest] | Claim Awards
apiInstance.claimAwards(body, (error, data, response) => {
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
 **body** | [**[ClaimAwardRequest]**](ClaimAwardRequest.md)| Claim Awards | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAwards

> AwardResponse getAwards(opts)

Get awards

Returns a list of Awards.

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.AwardsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAwards(opts, (error, data, response) => {
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

[**AwardResponse**](AwardResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAwardsByQuery

> AwardResponse getAwardsByQuery(opts)

Query Awards

Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.AwardsApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve Awards from Ziqni database by unique Awards ID's or any other POST body parameters using the POST method
};
apiInstance.getAwardsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Awards from Ziqni database by unique Awards ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**AwardResponse**](AwardResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAwards

> ApiResponse updateAwards(body)

Update awards

Update an existing award in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.AwardsApi();
let body = [new @ZiqniTechAdminApiClient.UpdateAwardRequest()]; // [UpdateAwardRequest] | Update awards in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
apiInstance.updateAwards(body, (error, data, response) => {
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
 **body** | [**[UpdateAwardRequest]**](UpdateAwardRequest.md)| Update awards in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

