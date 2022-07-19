# @ZiqniTechAdminApiClient.EntityChangesApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**manageEntityChangeSubscription**](EntityChangesApi.md#manageEntityChangeSubscription) | **POST** /entity-changes | 



## manageEntityChangeSubscription

> EntityChangeSubscriptionResponse manageEntityChangeSubscription(entityChangeSubscriptionRequest)



subscribes a client to receive out-of-band data

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.EntityChangesApi();
let entityChangeSubscriptionRequest = new @ZiqniTechAdminApiClient.EntityChangeSubscriptionRequest(); // EntityChangeSubscriptionRequest | 
apiInstance.manageEntityChangeSubscription(entityChangeSubscriptionRequest, (error, data, response) => {
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
 **entityChangeSubscriptionRequest** | [**EntityChangeSubscriptionRequest**](EntityChangeSubscriptionRequest.md)|  | 

### Return type

[**EntityChangeSubscriptionResponse**](EntityChangeSubscriptionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

