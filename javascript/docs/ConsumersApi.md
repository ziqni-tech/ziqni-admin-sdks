# @ZiqniTechAdminApiClient.ConsumersApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createKafkaConnections**](ConsumersApi.md#createKafkaConnections) | **POST** /connections/kafka | NOT AVAILABLE IN CURRENT RELEASE
[**createRabbitMQConnections**](ConsumersApi.md#createRabbitMQConnections) | **POST** /connections/rabbitmq | NOT AVAILABLE IN CURRENT RELEASE
[**createSqsConnections**](ConsumersApi.md#createSqsConnections) | **POST** /connections/sqs | NOT AVAILABLE IN CURRENT RELEASE
[**deleteKafkaConnections**](ConsumersApi.md#deleteKafkaConnections) | **DELETE** /connections/kafka | NOT AVAILABLE IN CURRENT RELEASE
[**deleteKafkaConnectionsByQuery**](ConsumersApi.md#deleteKafkaConnectionsByQuery) | **POST** /connections/kafka/delete | NOT AVAILABLE IN CURRENT RELEASE
[**deleteRabbitMQConnections**](ConsumersApi.md#deleteRabbitMQConnections) | **DELETE** /connections/rabbitmq | NOT AVAILABLE IN CURRENT RELEASE
[**deleteRabbitMQConnectionsByQuery**](ConsumersApi.md#deleteRabbitMQConnectionsByQuery) | **POST** /connections/rabbitmq/delete | NOT AVAILABLE IN CURRENT RELEASE
[**deleteSqsConnections**](ConsumersApi.md#deleteSqsConnections) | **DELETE** /connections/sqs | NOT AVAILABLE IN CURRENT RELEASE
[**deleteSqsConnectionsByQuery**](ConsumersApi.md#deleteSqsConnectionsByQuery) | **POST** /connections/sqs/delete | NOT AVAILABLE IN CURRENT RELEASE
[**getKafkaConnections**](ConsumersApi.md#getKafkaConnections) | **GET** /connections/kafka | NOT AVAILABLE IN CURRENT RELEASE
[**getKafkaConnectionsByQuery**](ConsumersApi.md#getKafkaConnectionsByQuery) | **POST** /connections/kafka/query | NOT AVAILABLE IN CURRENT RELEASE
[**getRabbitMQConnections**](ConsumersApi.md#getRabbitMQConnections) | **GET** /connections/rabbitmq | NOT AVAILABLE IN CURRENT RELEASE
[**getRabbitMQConnectionsByQuery**](ConsumersApi.md#getRabbitMQConnectionsByQuery) | **POST** /connections/rabbitmq/query | NOT AVAILABLE IN CURRENT RELEASE
[**getSqsConnections**](ConsumersApi.md#getSqsConnections) | **GET** /connections/sqs | NOT AVAILABLE IN CURRENT RELEASE
[**getSqsConnectionsByQuery**](ConsumersApi.md#getSqsConnectionsByQuery) | **POST** /connections/sqs/query | NOT AVAILABLE IN CURRENT RELEASE
[**updateConnectionsState**](ConsumersApi.md#updateConnectionsState) | **POST** /connections/state | Update connection status
[**updateKafkaConnections**](ConsumersApi.md#updateKafkaConnections) | **PUT** /connections/kafka | NOT AVAILABLE IN CURRENT RELEASE
[**updateKafkaConnectionsState**](ConsumersApi.md#updateKafkaConnectionsState) | **POST** /connections/kafka/state | NOT AVAILABLE IN CURRENT RELEASE
[**updateRabbitMQConnections**](ConsumersApi.md#updateRabbitMQConnections) | **PUT** /connections/rabbitmq | NOT AVAILABLE IN CURRENT RELEASE
[**updateRabbitMQConnectionsState**](ConsumersApi.md#updateRabbitMQConnectionsState) | **POST** /connections/rabbitmq/state | NOT AVAILABLE IN CURRENT RELEASE
[**updateSqsConnections**](ConsumersApi.md#updateSqsConnections) | **PUT** /connections/sqs | NOT AVAILABLE IN CURRENT RELEASE
[**updateSqsConnectionsState**](ConsumersApi.md#updateSqsConnectionsState) | **POST** /connections/sqs/state | NOT AVAILABLE IN CURRENT RELEASE



## createKafkaConnections

> ApiResponse createKafkaConnections(body)

NOT AVAILABLE IN CURRENT RELEASE

Create a new Kafka Consumer Connection in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let body = new @ZiqniTechAdminApiClient.CreateKafkaConnectionRequest(); // CreateKafkaConnectionRequest | Create a Kafka Consumer Connection in the Ziqni system
apiInstance.createKafkaConnections(body, (error, data, response) => {
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
 **body** | [**CreateKafkaConnectionRequest**](CreateKafkaConnectionRequest.md)| Create a Kafka Consumer Connection in the Ziqni system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createRabbitMQConnections

> ApiResponse createRabbitMQConnections(body)

NOT AVAILABLE IN CURRENT RELEASE

Create a new RabbitMq Consumer Connection in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let body = new @ZiqniTechAdminApiClient.CreateRabbitMqConnectionRequest(); // CreateRabbitMqConnectionRequest | Create a RabbitMq Consumer Connection in the Ziqni system
apiInstance.createRabbitMQConnections(body, (error, data, response) => {
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
 **body** | [**CreateRabbitMqConnectionRequest**](CreateRabbitMqConnectionRequest.md)| Create a RabbitMq Consumer Connection in the Ziqni system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSqsConnections

> ApiResponse createSqsConnections(body)

NOT AVAILABLE IN CURRENT RELEASE

Create a new SQS Consumer Connection in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let body = new @ZiqniTechAdminApiClient.CreateSqsConnectionRequest(); // CreateSqsConnectionRequest | Create a SQS Consumer Connection in the Ziqni system
apiInstance.createSqsConnections(body, (error, data, response) => {
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
 **body** | [**CreateSqsConnectionRequest**](CreateSqsConnectionRequest.md)| Create a SQS Consumer Connection in the Ziqni system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteKafkaConnections

> ApiResponse deleteKafkaConnections(opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete the Kafka Consumer Connection for a given identifier specified

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteKafkaConnections(opts, (error, data, response) => {
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


## deleteKafkaConnectionsByQuery

> ApiResponse deleteKafkaConnectionsByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete a Kafka Connection or a list of Kafka Connections from Ziqni by unique Connection ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Delete a Kafka Connection or a list of Kafka Connections from Ziqni by unique Connection ID's or any other POST body parameters using the POST method
};
apiInstance.deleteKafkaConnectionsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete a Kafka Connection or a list of Kafka Connections from Ziqni by unique Connection ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteRabbitMQConnections

> ApiResponse deleteRabbitMQConnections(opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete the RabbitMq Consumer Connection for a given identifier specified

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteRabbitMQConnections(opts, (error, data, response) => {
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


## deleteRabbitMQConnectionsByQuery

> ApiResponse deleteRabbitMQConnectionsByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Delete a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other POST body parameters using the POST method
};
apiInstance.deleteRabbitMQConnectionsByQuery(opts, (error, data, response) => {
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


## deleteSqsConnections

> ApiResponse deleteSqsConnections(opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete the SQS Consumer Connection for a given identifier specified

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteSqsConnections(opts, (error, data, response) => {
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


## deleteSqsConnectionsByQuery

> ApiResponse deleteSqsConnectionsByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Delete a SQS Connection or a list of SQS Connections from Ziqni by unique Connection ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Delete a SQS Connection or a list of SQS Connections from Ziqni by unique Connection ID's or any other POST body parameters using the POST method
};
apiInstance.deleteSqsConnectionsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete a SQS Connection or a list of SQS Connections from Ziqni by unique Connection ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getKafkaConnections

> KafkaConnectionResponse getKafkaConnections(opts)

NOT AVAILABLE IN CURRENT RELEASE

Return a list of Kafka Consumer Connections

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getKafkaConnections(opts, (error, data, response) => {
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

[**KafkaConnectionResponse**](KafkaConnectionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getKafkaConnectionsByQuery

> KafkaConnectionResponse getKafkaConnectionsByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve a Kafka Connection or a list of Kafka Connections from Ziqni by unique Connection ID&#39;s or any other Post body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve a Kafka Connection or a list of Kafka Connections from Ziqni by unique Connection ID's or any other Post body parameters using the POST method
};
apiInstance.getKafkaConnectionsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve a Kafka Connection or a list of Kafka Connections from Ziqni by unique Connection ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**KafkaConnectionResponse**](KafkaConnectionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getRabbitMQConnections

> RabbitMqConnectionResponse getRabbitMQConnections(opts)

NOT AVAILABLE IN CURRENT RELEASE

Return a list of RabbitMq Consumer Connections

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getRabbitMQConnections(opts, (error, data, response) => {
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

[**RabbitMqConnectionResponse**](RabbitMqConnectionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getRabbitMQConnectionsByQuery

> RabbitMqConnectionResponse getRabbitMQConnectionsByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID&#39;s or any other Post body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve a RabbitMQ Connection or a list of RabbitMQ Connections from Ziqni by unique Connection ID's or any other Post body parameters using the POST method
};
apiInstance.getRabbitMQConnectionsByQuery(opts, (error, data, response) => {
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

[**RabbitMqConnectionResponse**](RabbitMqConnectionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getSqsConnections

> SqsConnectionResponse getSqsConnections(opts)

NOT AVAILABLE IN CURRENT RELEASE

Return a list of SQS Consumer Connections

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getSqsConnections(opts, (error, data, response) => {
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

[**SqsConnectionResponse**](SqsConnectionResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSqsConnectionsByQuery

> SqsConnectionResponse getSqsConnectionsByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve a SQS Connection or a list of SQS Connections from Ziqni by unique Connection ID&#39;s or any other Post body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve a SQS Connection or a list of SQS Connections from Ziqni by unique Connection ID's or any other Post body parameters using the POST method
};
apiInstance.getSqsConnectionsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve a SQS Connection or a list of SQS Connections from Ziqni by unique Connection ID&#39;s or any other Post body parameters using the POST method | [optional] 

### Return type

[**SqsConnectionResponse**](SqsConnectionResponse.md)

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

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
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


## updateKafkaConnections

> ApiResponse updateKafkaConnections(body)

NOT AVAILABLE IN CURRENT RELEASE

Update an existing Kafka Consumer Connection in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let body = new @ZiqniTechAdminApiClient.UpdateKafkaConnectionRequest(); // UpdateKafkaConnectionRequest | Update the Kafka Consumer Connection details in the Ziqni system
apiInstance.updateKafkaConnections(body, (error, data, response) => {
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
 **body** | [**UpdateKafkaConnectionRequest**](UpdateKafkaConnectionRequest.md)| Update the Kafka Consumer Connection details in the Ziqni system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateKafkaConnectionsState

> ApiResponse updateKafkaConnectionsState(opts)

NOT AVAILABLE IN CURRENT RELEASE

Update the state of a Kafka Connection using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'body': [new @ZiqniTechAdminApiClient.UpdateConnectionStateRequest()] // [UpdateConnectionStateRequest] | Update the state of a Kafka Connection using the POST method
};
apiInstance.updateKafkaConnectionsState(opts, (error, data, response) => {
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
 **body** | [**[UpdateConnectionStateRequest]**](UpdateConnectionStateRequest.md)| Update the state of a Kafka Connection using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRabbitMQConnections

> ApiResponse updateRabbitMQConnections(body)

NOT AVAILABLE IN CURRENT RELEASE

Update an existing RabbitMq Consumer Connection in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let body = new @ZiqniTechAdminApiClient.UpdateRabbitMqConnectionRequest(); // UpdateRabbitMqConnectionRequest | Update the RabbitMq Consumer Connection details in the Ziqni system
apiInstance.updateRabbitMQConnections(body, (error, data, response) => {
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
 **body** | [**UpdateRabbitMqConnectionRequest**](UpdateRabbitMqConnectionRequest.md)| Update the RabbitMq Consumer Connection details in the Ziqni system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateRabbitMQConnectionsState

> ApiResponse updateRabbitMQConnectionsState(opts)

NOT AVAILABLE IN CURRENT RELEASE

Update the state of a RabbitMQ Connection using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'body': [new @ZiqniTechAdminApiClient.UpdateConnectionStateRequest()] // [UpdateConnectionStateRequest] | Update the state of a RabbitMQ Connection using the POST method
};
apiInstance.updateRabbitMQConnectionsState(opts, (error, data, response) => {
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
 **body** | [**[UpdateConnectionStateRequest]**](UpdateConnectionStateRequest.md)| Update the state of a RabbitMQ Connection using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSqsConnections

> ApiResponse updateSqsConnections(body)

NOT AVAILABLE IN CURRENT RELEASE

Update an existing SQS Consumer Connection in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let body = new @ZiqniTechAdminApiClient.UpdateSqsConnectionRequest(); // UpdateSqsConnectionRequest | Update the SQS Consumer Connection details in the Ziqni system
apiInstance.updateSqsConnections(body, (error, data, response) => {
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
 **body** | [**UpdateSqsConnectionRequest**](UpdateSqsConnectionRequest.md)| Update the SQS Consumer Connection details in the Ziqni system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateSqsConnectionsState

> ApiResponse updateSqsConnectionsState(opts)

NOT AVAILABLE IN CURRENT RELEASE

Update the state of an SQS Connection using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ConsumersApi();
let opts = {
  'body': [new @ZiqniTechAdminApiClient.UpdateConnectionStateRequest()] // [UpdateConnectionStateRequest] | Update the state of an SQS Connection using the POST method
};
apiInstance.updateSqsConnectionsState(opts, (error, data, response) => {
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
 **body** | [**[UpdateConnectionStateRequest]**](UpdateConnectionStateRequest.md)| Update the state of an SQS Connection using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

