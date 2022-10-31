# @ZiqniTechAdminApiClient.ConnectionsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConnections**](ConnectionsApi.md#createConnections) | **POST** /connections | 
[**deleteConnections**](ConnectionsApi.md#deleteConnections) | **DELETE** /connections | 
[**deleteConnectionsByQuery**](ConnectionsApi.md#deleteConnectionsByQuery) | **POST** /connections/delete | 
[**describeConnectionObject**](ConnectionsApi.md#describeConnectionObject) | **GET** /connections/_describe | 
[**getConnections**](ConnectionsApi.md#getConnections) | **GET** /connections | 
[**getConnectionsByQuery**](ConnectionsApi.md#getConnectionsByQuery) | **POST** /connections/query | 
[**updateConnections**](ConnectionsApi.md#updateConnections) | **PUT** /connections | 
[**updateConnectionsState**](ConnectionsApi.md#updateConnectionsState) | **POST** /connections/state | Update connection status



## createConnections

> ApiResponse createConnections(body)



Create a new Consumer Connection in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConnectionsApi();
let body = [new @ZiqniTechAdminApiClient.CreateConnectionRequest()]; // [CreateConnectionRequest] | Create a RabbitMq Consumer Connection in the Ziqni system
apiInstance.createConnections(body, (error, data, response) => {
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
 **body** | [**[CreateConnectionRequest]**](CreateConnectionRequest.md)| Create a RabbitMq Consumer Connection in the Ziqni system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteConnections

> ApiResponse deleteConnections(opts)



Delete the Consumer Connection for a given identifier specified

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConnectionsApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteConnections(opts, (error, data, response) => {
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


## deleteConnectionsByQuery

> ApiResponse deleteConnectionsByQuery(opts)



Delete a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConnectionsApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Delete a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other POST body parameters using the POST method
};
apiInstance.deleteConnectionsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## describeConnectionObject

> ObjectParametersResponse describeConnectionObject(connectionType)



Get all the parameter for the connection based on the connection type

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConnectionsApi();
let connectionType = new @ZiqniTechAdminApiClient.ConnectionType(); // ConnectionType | The connection type, RabbitMQ, Kafka, or SQS
apiInstance.describeConnectionObject(connectionType, (error, data, response) => {
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
 **connectionType** | [**ConnectionType**](.md)| The connection type, RabbitMQ, Kafka, or SQS | 

### Return type

[**ObjectParametersResponse**](ObjectParametersResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConnections

> ConnectionResponse getConnections(opts)



Return a list of Consumer Connections

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConnectionsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getConnections(opts, (error, data, response) => {
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

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConnectionsByQuery

> ConnectionResponse getConnectionsByQuery(opts)



Retrieve a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID&#39;s or any other Post body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConnectionsApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other Post body parameters using the POST method
};
apiInstance.getConnectionsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**ConnectionResponse**](ConnectionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateConnections

> ApiResponse updateConnections(body)



Update an existing Consumer Connection in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConnectionsApi();
let body = [new @ZiqniTechAdminApiClient.UpdateConnectionRequest()]; // [UpdateConnectionRequest] | Update the RabbitMq Consumer Connection details in the Ziqni system
apiInstance.updateConnections(body, (error, data, response) => {
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
 **body** | [**[UpdateConnectionRequest]**](UpdateConnectionRequest.md)| Update the RabbitMq Consumer Connection details in the Ziqni system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateConnectionsState

> ApiResponse updateConnectionsState(opts)

Update connection status

Update the state of a Consumer using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConnectionsApi();
let opts = {
  'body': [new @ZiqniTechAdminApiClient.UpdateConnectionStateRequest()] // [UpdateConnectionStateRequest] | Update the state of a Consumer using the POST method
};
apiInstance.updateConnectionsState(opts, (error, data, response) => {
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
 **body** | [**[UpdateConnectionStateRequest]**](UpdateConnectionStateRequest.md)| Update the state of a Consumer using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

