# @ZiqniTechAdminApiClient.TagsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTags**](TagsApi.md#createTags) | **POST** /tags | Create tags
[**deleteTags**](TagsApi.md#deleteTags) | **DELETE** /tags | Delete tags
[**deleteTagsByQuery**](TagsApi.md#deleteTagsByQuery) | **POST** /tags/delete | Delete tags by query
[**getTags**](TagsApi.md#getTags) | **GET** /tags | Get tags
[**getTagsByQuery**](TagsApi.md#getTagsByQuery) | **POST** /tags/query | Get wallet types by query
[**updateTags**](TagsApi.md#updateTags) | **PUT** /tags | Update tags



## createTags

> ApiResponse createTags(body)

Create tags

Create new Tags in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.TagsApi();
let body = [new @ZiqniTechAdminApiClient.CreateTagRequest()]; // [CreateTagRequest] | Create Tags in the Ziqni database
apiInstance.createTags(body, (error, data, response) => {
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
 **body** | [**[CreateTagRequest]**](CreateTagRequest.md)| Create Tags in the Ziqni database | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteTags

> ApiResponse deleteTags(opts)

Delete tags

Delete Tags for a given identifier specified

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.TagsApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteTags(opts, (error, data, response) => {
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


## deleteTagsByQuery

> ApiResponse deleteTagsByQuery(opts)

Delete tags by query

Delete Tags from Ziqni database by unique Tags ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.TagsApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Delete Tags from Ziqni database by unique Tags ID's or any other POST body parameters using the POST method
};
apiInstance.deleteTagsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Tags from Ziqni database by unique Tags ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getTags

> TagResponse getTags(opts)

Get tags

Returns a list of Tags. This assumes that tags have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.TagsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getTags(opts, (error, data, response) => {
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

[**TagResponse**](TagResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTagsByQuery

> TagResponse getTagsByQuery(opts)

Get wallet types by query

Retrieve WalletType from Ziqni database by unique WalletType ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.TagsApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve Tags from Ziqni database by uniqueTags ID's or any other POST body parameters using the POST method
};
apiInstance.getTagsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Tags from Ziqni database by uniqueTags ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**TagResponse**](TagResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateTags

> ApiResponse updateTags(body)

Update tags

Update existing Tags in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.TagsApi();
let body = [new @ZiqniTechAdminApiClient.UpdateTagRequest()]; // [UpdateTagRequest] | Update a Tag in the Ziqni database.
apiInstance.updateTags(body, (error, data, response) => {
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
 **body** | [**[UpdateTagRequest]**](UpdateTagRequest.md)| Update a Tag in the Ziqni database. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

