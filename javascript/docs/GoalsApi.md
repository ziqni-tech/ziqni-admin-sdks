# @ZiqniTechAdminApiClient.GoalsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGoalMetrics**](GoalsApi.md#getGoalMetrics) | **POST** /goal-metrics | Get active goal metrics



## getGoalMetrics

> GoalMetricsResponse getGoalMetrics(opts)

Get active goal metrics

Returns a list of metrics relating to the speciifed goals.

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.GoalsApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.GoalMetricsRequest() // GoalMetricsRequest | 
};
apiInstance.getGoalMetrics(opts, (error, data, response) => {
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
 **body** | [**GoalMetricsRequest**](GoalMetricsRequest.md)|  | [optional] 

### Return type

[**GoalMetricsResponse**](GoalMetricsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

