# @ZiqniTechAdminApiClient.CollaboratorsApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCollaborators**](CollaboratorsApi.md#createCollaborators) | **POST** /collaborators | 
[**deleteCollaborators**](CollaboratorsApi.md#deleteCollaborators) | **DELETE** /collaborators | 
[**getAvailableRolesForCollaborators**](CollaboratorsApi.md#getAvailableRolesForCollaborators) | **GET** /collaborators/available-roles | 
[**getCollaborators**](CollaboratorsApi.md#getCollaborators) | **GET** /collaborators | 
[**getCollaboratorsByQuery**](CollaboratorsApi.md#getCollaboratorsByQuery) | **POST** /collaborators/query | NOT AVAILABLE IN CURRENT RELEASE
[**updateCollaborators**](CollaboratorsApi.md#updateCollaborators) | **PUT** /collaborators | 



## createCollaborators

> ApiResponse createCollaborators(body)



Create a new Collaborator in the Ziqni

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CollaboratorsApi();
let body = [new @ZiqniTechAdminApiClient.CreateCollaboratorRequest()]; // [CreateCollaboratorRequest] | Create a Collaborator in the Ziqni system
apiInstance.createCollaborators(body, (error, data, response) => {
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
 **body** | [**[CreateCollaboratorRequest]**](CreateCollaboratorRequest.md)| Create a Collaborator in the Ziqni system | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCollaborators

> ApiResponse deleteCollaborators(opts)



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CollaboratorsApi();
let opts = {
  'emails': ["null"] // [String] | The list of user emails to search by
};
apiInstance.deleteCollaborators(opts, (error, data, response) => {
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
 **emails** | [**[String]**](String.md)| The list of user emails to search by | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAvailableRolesForCollaborators

> CollaboratorRolesResponse getAvailableRolesForCollaborators()



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CollaboratorsApi();
apiInstance.getAvailableRolesForCollaborators((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**CollaboratorRolesResponse**](CollaboratorRolesResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollaborators

> CollaboratorResponse getCollaborators(opts)



Returns a list of Collaborators. This assumes that Users have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CollaboratorsApi();
let opts = {
  'emails': ["null"], // [String] | The list of user emails to search by
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getCollaborators(opts, (error, data, response) => {
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
 **emails** | [**[String]**](String.md)| The list of user emails to search by | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**CollaboratorResponse**](CollaboratorResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollaboratorsByQuery

> CollaboratorResponse getCollaboratorsByQuery(opts)

NOT AVAILABLE IN CURRENT RELEASE

Retrieve collaborators for the account

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CollaboratorsApi();
let opts = {
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve collaborators for the account
};
apiInstance.getCollaboratorsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve collaborators for the account | [optional] 

### Return type

[**CollaboratorResponse**](CollaboratorResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateCollaborators

> ApiResponse updateCollaborators(body)



Update an existing Collaborator in the Ziqni system

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.CollaboratorsApi();
let body = [new @ZiqniTechAdminApiClient.UpdateCollaboratorRequest()]; // [UpdateCollaboratorRequest] | Update a Collaborator in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field
apiInstance.updateCollaborators(body, (error, data, response) => {
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
 **body** | [**[UpdateCollaboratorRequest]**](UpdateCollaboratorRequest.md)| Update a Collaborator in the Ziqni system. * Any Put body Parameters that are excluded in the Request body field will be considered as empty and updated with an empty field | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

