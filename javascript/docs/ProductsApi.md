# @ZiqniTechAdminApiClient.ProductsApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createProducts**](ProductsApi.md#createProducts) | **POST** /products | Create products
[**deleteProducts**](ProductsApi.md#deleteProducts) | **DELETE** /products | Delete products
[**deleteProductsByQuery**](ProductsApi.md#deleteProductsByQuery) | **POST** /products/delete | Delete products by query
[**getProducts**](ProductsApi.md#getProducts) | **GET** /products | Get products
[**getProductsByQuery**](ProductsApi.md#getProductsByQuery) | **POST** /products/query | Get products by query
[**getProductsByRefId**](ProductsApi.md#getProductsByRefId) | **GET** /products/find-by-ref-identifiers/ | Get products by reference ids
[**updateProducts**](ProductsApi.md#updateProducts) | **PUT** /products | Update products



## createProducts

> ApiResponse createProducts(body)

Create products

Create new Products in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ProductsApi();
let body = [new @ZiqniTechAdminApiClient.CreateProductRequest()]; // [CreateProductRequest] | Create Products in the Ziqni database. An array can contain a maximum of 10,000 products in one request
apiInstance.createProducts(body, (error, data, response) => {
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
 **body** | [**[CreateProductRequest]**](CreateProductRequest.md)| Create Products in the Ziqni database. An array can contain a maximum of 10,000 products in one request | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json


## deleteProducts

> ApiResponse deleteProducts(opts)

Delete products

Delete Products for a given identifier specified

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ProductsApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteProducts(opts, (error, data, response) => {
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


## deleteProductsByQuery

> ApiResponse deleteProductsByQuery(opts)

Delete products by query

Delete Products from Ziqni database by unique Product ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ProductsApi();
let opts = {
  'body': {"must":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"mustNot":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"should":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"gte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"gt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"range":[{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]},{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]}],"sortBy":[{"queryField":"some text","order":"Desc"},{"queryField":"some text","order":"Desc"}],"multiFields":[{"queryFields":["some text","some text"],"queryValue":"some text"},{"queryFields":["some text","some text"],"queryValue":"some text"}],"includeFields":["some text","some text"],"hasValue":["some text","some text"],"hasNoValue":["some text","some text"],"shouldMatch":87,"skip":97,"limit":5,"constraints":["some text","some text"]} // QueryRequest | Delete Products from Ziqni database by unique Product ID's or any other POST body parameters using the POST method
};
apiInstance.deleteProductsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Products from Ziqni database by unique Product ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProducts

> ProductResponse getProducts(opts)

Get products

Returns a list of Products. This assumes that products have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ProductsApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getProducts(opts, (error, data, response) => {
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

[**ProductResponse**](ProductResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProductsByQuery

> ProductResponse getProductsByQuery(opts)

Get products by query

Retrieve Products from Ziqni database by unique Product ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ProductsApi();
let opts = {
  'body': {"must":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"mustNot":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"should":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"gte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"gt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"range":[{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]},{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]}],"sortBy":[{"queryField":"some text","order":"Asc"},{"queryField":"some text","order":"Desc"}],"multiFields":[{"queryFields":["some text","some text"],"queryValue":"some text"},{"queryFields":["some text","some text"],"queryValue":"some text"}],"includeFields":["some text","some text"],"hasValue":["some text","some text"],"hasNoValue":["some text","some text"],"shouldMatch":76,"skip":85,"limit":86,"constraints":["some text","some text"]} // QueryRequest | Retrieve Products from Ziqni database by unique Product ID's or any other POST body parameters using the POST method
};
apiInstance.getProductsByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Retrieve Products from Ziqni database by unique Product ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getProductsByRefId

> ProductResponse getProductsByRefId(opts)

Get products by reference ids

Returns a list of Products. This assumes that products have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ProductsApi();
let opts = {
  'refIds': ["null"], // [String] | The reference ids  of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getProductsByRefId(opts, (error, data, response) => {
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
 **refIds** | [**[String]**](String.md)| The reference ids  of the resources | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**ProductResponse**](ProductResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateProducts

> ApiResponse updateProducts(body)

Update products

Update existing Products in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.ProductsApi();
let body = [new @ZiqniTechAdminApiClient.UpdateProductRequest()]; // [UpdateProductRequest] | Update a Product or multiple Products in the Ziqni database. * Product Ref Id can not be changed after creation * A products Id must exist in the Ziqni database to update the product
apiInstance.updateProducts(body, (error, data, response) => {
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
 **body** | [**[UpdateProductRequest]**](UpdateProductRequest.md)| Update a Product or multiple Products in the Ziqni database. * Product Ref Id can not be changed after creation * A products Id must exist in the Ziqni database to update the product | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json

