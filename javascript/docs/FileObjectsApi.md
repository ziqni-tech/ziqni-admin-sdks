# @ZiqniTechAdminApiClient.FileObjectsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFileObjects**](FileObjectsApi.md#createFileObjects) | **POST** /file-objects | 
[**deleteFileObjects**](FileObjectsApi.md#deleteFileObjects) | **DELETE** /file-objects | 
[**deleteFileObjectsByQuery**](FileObjectsApi.md#deleteFileObjectsByQuery) | **POST** /file-objects/delete | 
[**downloadFileObjects**](FileObjectsApi.md#downloadFileObjects) | **GET** /file-objects/download | 
[**getFileObjects**](FileObjectsApi.md#getFileObjects) | **GET** /file-objects | 
[**getFileObjectsByQuery**](FileObjectsApi.md#getFileObjectsByQuery) | **POST** /file-objects/query | 
[**saveTemplates**](FileObjectsApi.md#saveTemplates) | **POST** /file-objects/save-template | 
[**updateFileObjects**](FileObjectsApi.md#updateFileObjects) | **PUT** /file-objects | 
[**uploadFileObjects**](FileObjectsApi.md#uploadFileObjects) | **POST** /file-objects/upload | 



## createFileObjects

> ApiResponse createFileObjects(body)



### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.FileObjectsApi();
let body = new @ZiqniTechAdminApiClient.CreateFileObjectRequest(); // CreateFileObjectRequest | Create a new file object repository in your Ziqni space
apiInstance.createFileObjects(body, (error, data, response) => {
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
 **body** | [**CreateFileObjectRequest**](CreateFileObjectRequest.md)| Create a new file object repository in your Ziqni space | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteFileObjects

> ApiResponse deleteFileObjects(opts)



### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.FileObjectsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'permanent': true // Boolean | Permanently delete the file object. Default is false
};
apiInstance.deleteFileObjects(opts, (error, data, response) => {
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
 **permanent** | **Boolean**| Permanently delete the file object. Default is false | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteFileObjectsByQuery

> ApiResponse deleteFileObjectsByQuery(opts)



Delete file objects by query

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.FileObjectsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Delete file objects inside a repository from Ziqni by unique file by unique object ID's or any other POST body parameters using the POST method
};
apiInstance.deleteFileObjectsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete file objects inside a repository from Ziqni by unique file by unique object ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## downloadFileObjects

> File downloadFileObjects(opts)



Download file objects from your Ziqni space

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.FileObjectsApi();
let opts = {
  'path': "path_example" // String | The canonical path of the file to download
};
apiInstance.downloadFileObjects(opts, (error, data, response) => {
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
 **path** | **String**| The canonical path of the file to download | [optional] 

### Return type

**File**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/xml, application/json


## getFileObjects

> FileObjectsResponse getFileObjects(opts)



Returns a list of file objects

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.FileObjectsApi();
let opts = {
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56, // Number | Skip the returned records found and return the next batch of records
  'id': ["null"], // [String] | The unique identifiers of the resources
  'download': "download_example" // String | 
};
apiInstance.getFileObjects(opts, (error, data, response) => {
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
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 
 **id** | [**[String]**](String.md)| The unique identifiers of the resources | [optional] 
 **download** | **String**|  | [optional] 

### Return type

[**FileObjectsResponse**](FileObjectsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getFileObjectsByQuery

> FileObjectsResponse getFileObjectsByQuery(opts)



Retrieve file objects by query

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.FileObjectsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'body': new @ZiqniTechAdminApiClient.QueryRequest() // QueryRequest | Retrieve file objects inside a repository from Ziqni by unique file object ID's or any other POST body parameters using the POST method
};
apiInstance.getFileObjectsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve file objects inside a repository from Ziqni by unique file object ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**FileObjectsResponse**](FileObjectsResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## saveTemplates

> ApiResponse saveTemplates(opts)



Create or update file objects and binaries in your Ziqni space

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.FileObjectsApi();
let opts = {
  'parentFolderPath': "parentFolderPath_example", // String | The folder to save these file in.
  'repositoryId': "repositoryId_example", // String | 
  'templateToSave': "templateToSave_example", // String | 
  'templateName': "templateName_example", // String | 
  'tags': "tags_example" // String | 
};
apiInstance.saveTemplates(opts, (error, data, response) => {
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
 **parentFolderPath** | **String**| The folder to save these file in. | [optional] 
 **repositoryId** | **String**|  | [optional] 
 **templateToSave** | **String**|  | [optional] 
 **templateName** | **String**|  | [optional] 
 **tags** | **String**|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json


## updateFileObjects

> ApiResponse updateFileObjects(body)



### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.FileObjectsApi();
let body = [new @ZiqniTechAdminApiClient.UpdateFileObjectRequest()]; // [UpdateFileObjectRequest] | Update a file object in your Ziqni space.
apiInstance.updateFileObjects(body, (error, data, response) => {
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
 **body** | [**[UpdateFileObjectRequest]**](UpdateFileObjectRequest.md)| Update a file object in your Ziqni space. | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadFileObjects

> ApiResponse uploadFileObjects(opts)



Create or update file objects and binaries in your Ziqni space

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.FileObjectsApi();
let opts = {
  'parentFolderPath': "parentFolderPath_example", // String | The folder to save these file in.
  'files': ["null"], // [File] | The files to upload
  'repositoryId': "repositoryId_example", // String | 
  'tags': "tags_example" // String | 
};
apiInstance.uploadFileObjects(opts, (error, data, response) => {
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
 **parentFolderPath** | **String**| The folder to save these file in. | [optional] 
 **files** | **[File]**| The files to upload | [optional] 
 **repositoryId** | **String**|  | [optional] 
 **tags** | **String**|  | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

