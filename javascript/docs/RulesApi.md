# @ZiqniTechAdminApiClient.RulesApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteRulesByQuery**](RulesApi.md#deleteRulesByQuery) | **POST** /rules/delete | 
[**getRuleSchemas**](RulesApi.md#getRuleSchemas) | **GET** /rules/schema | 
[**getRules**](RulesApi.md#getRules) | **GET** /rules | 
[**getRulesByQuery**](RulesApi.md#getRulesByQuery) | **POST** /rules/query | 
[**lookupOperandsRules**](RulesApi.md#lookupOperandsRules) | **POST** /rules/operand-lookup | 
[**updateRules**](RulesApi.md#updateRules) | **PUT** /rules | 
[**validateRules**](RulesApi.md#validateRules) | **POST** /rules/validate | 



## deleteRulesByQuery

> ApiResponse deleteRulesByQuery(opts)



Delete Rules from Ziqni database by unique Rules ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.RulesApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Delete Rules from Ziqni database by unique Rules ID's or any other POST body parameters using the POST method
};
apiInstance.deleteRulesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Rules from Ziqni database by unique Rules ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRuleSchemas

> Response getRuleSchemas(context)



Returns a list of rules. This assumes that rules have first been created during achievement, competition or contest setup

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.RulesApi();
let context = "context_example"; // String | The context to retrieve, either achievement, competition or contest
apiInstance.getRuleSchemas(context, (error, data, response) => {
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
 **context** | **String**| The context to retrieve, either achievement, competition or contest | 

### Return type

[**Response**](Response.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRules

> RuleResponse getRules(opts)



Returns a list of rules. This assumes that rules have first been created during achievement, competition or contest setup. The id is the ID of the entity the rules describe

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.RulesApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getRules(opts, (error, data, response) => {
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

[**RuleResponse**](RuleResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRulesByQuery

> RuleResponse getRulesByQuery(opts)



Retrieve Rules from Ziqni database by unique Rewards ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.RulesApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve Rules from Ziqni database by unique Rewards ID's or any other Post body parameters using the POST method
};
apiInstance.getRulesByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Rules from Ziqni database by unique Rewards ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**RuleResponse**](RuleResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## lookupOperandsRules

> RuleOperandLookupResponse lookupOperandsRules(body)



Search or get rule operand values

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.RulesApi();
let body = [new @ZiqniTechAdminApiClient.RuleOperandLookupRequest()]; // [RuleOperandLookupRequest] | Search for operand values and human readable text options
apiInstance.lookupOperandsRules(body, (error, data, response) => {
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
 **body** | [**[RuleOperandLookupRequest]**](RuleOperandLookupRequest.md)| Search for operand values and human readable text options | 

### Return type

[**RuleOperandLookupResponse**](RuleOperandLookupResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRules

> ApiResponse updateRules(body)



Update existing rules

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.RulesApi();
let body = [new @ZiqniTechAdminApiClient.UpdateRuleRequest()]; // [UpdateRuleRequest] | Update rules for a given Achievement, Competition or Contest identifier.
apiInstance.updateRules(body, (error, data, response) => {
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
 **body** | [**[UpdateRuleRequest]**](UpdateRuleRequest.md)| Update rules for a given Achievement, Competition or Contest identifier. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## validateRules

> ApiResponse validateRules(body)



Validate rules

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.RulesApi();
let body = [new @ZiqniTechAdminApiClient.UpdateRuleRequest()]; // [UpdateRuleRequest] | Validate rules
apiInstance.validateRules(body, (error, data, response) => {
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
 **body** | [**[UpdateRuleRequest]**](UpdateRuleRequest.md)| Validate rules | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

