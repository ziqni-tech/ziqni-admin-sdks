# @ZiqniTechAdminApiClient.MemberTokenApi

All URIs are relative to *https://api.ziqni.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMemberToken**](MemberTokenApi.md#createMemberToken) | **POST** /member-token | 



## createMemberToken

> TokenResponse createMemberToken(memberTokenRequest)



Get Jwt Token

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MemberTokenApi();
let memberTokenRequest = new @ZiqniTechAdminApiClient.MemberTokenRequest(); // MemberTokenRequest | 
apiInstance.createMemberToken(memberTokenRequest, (error, data, response) => {
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
 **memberTokenRequest** | [**MemberTokenRequest**](MemberTokenRequest.md)|  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

