# @ZiqniTechAdminApiClient.LogEventsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogEventsByQuery**](LogEventsApi.md#getLogEventsByQuery) | **POST** /log-events/query | 



## getLogEventsByQuery

> LogEventResponse getLogEventsByQuery(opts)



Retrieve Log Events from Ziqni database by unique Log Events ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.LogEventsApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve Log Events from Ziqni database by unique Log Events ID's or any other Post body parameters using the POST method
};
apiInstance.getLogEventsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Log Events from Ziqni database by unique Log Events ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**LogEventResponse**](LogEventResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

