# @ZiqniTechAdminApiClient.GraphsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGraph**](GraphsApi.md#getGraph) | **POST** /graphs | Get achievements by member reference id



## getGraph

> EntityGraphResponse getGraph(entityGraphRequest)

Get achievements by member reference id

Returns a list of graphs based on the entity type.

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.GraphsApi();
let entityGraphRequest = new @ZiqniTechAdminApiClient.EntityGraphRequest(); // EntityGraphRequest | 
apiInstance.getGraph(entityGraphRequest, (error, data, response) => {
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
 **entityGraphRequest** | [**EntityGraphRequest**](EntityGraphRequest.md)|  | 

### Return type

[**EntityGraphResponse**](EntityGraphResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

