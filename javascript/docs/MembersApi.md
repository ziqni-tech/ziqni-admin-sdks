# @ZiqniTechAdminApiClient.MembersApi

All URIs are relative to *https://api.ziqni.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMembers**](MembersApi.md#createMembers) | **POST** /members | Create members
[**deleteMembers**](MembersApi.md#deleteMembers) | **DELETE** /members | Delete members
[**deleteMembersByQuery**](MembersApi.md#deleteMembersByQuery) | **POST** /members/delete | Delete members by query
[**getAchievementsForMembers**](MembersApi.md#getAchievementsForMembers) | **GET** /members/{id}/achievements | NOT AVAILABLE IN CURRENT RELEASE
[**getAwardsForMembers**](MembersApi.md#getAwardsForMembers) | **GET** /members/{id}/awards | NOT AVAILABLE IN CURRENT RELEASE
[**getCompetitionsForMembers**](MembersApi.md#getCompetitionsForMembers) | **GET** /members/{id}/competitions | NOT AVAILABLE IN CURRENT RELEASE
[**getContestsForMembers**](MembersApi.md#getContestsForMembers) | **GET** /members/{id}/contests | NOT AVAILABLE IN CURRENT RELEASE
[**getMembers**](MembersApi.md#getMembers) | **GET** /members | Get members
[**getMembersByQuery**](MembersApi.md#getMembersByQuery) | **POST** /members/query | Get members by query
[**getMembersByRefId**](MembersApi.md#getMembersByRefId) | **GET** /members/find-by-ref-identifiers | Get members by reference ids
[**getMessagesForMembers**](MembersApi.md#getMessagesForMembers) | **GET** /members/{id}/inbox | NOT AVAILABLE IN CURRENT RELEASE
[**updateMembers**](MembersApi.md#updateMembers) | **PUT** /members | Update members



## createMembers

> ApiResponse createMembers(body)

Create members

Create new Members in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let body = [new @ZiqniTechAdminApiClient.CreateMemberRequest()]; // [CreateMemberRequest] | Create Members in the Ziqni database. An array can contain a maximum of 10,000 members in one request
apiInstance.createMembers(body, (error, data, response) => {
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
 **body** | [**[CreateMemberRequest]**](CreateMemberRequest.md)| Create Members in the Ziqni database. An array can contain a maximum of 10,000 members in one request | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json


## deleteMembers

> ApiResponse deleteMembers(opts)

Delete members

Delete Members for a given identifier specified

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let opts = {
  'id': ["null"] // [String] | The unique identifiers of the resources
};
apiInstance.deleteMembers(opts, (error, data, response) => {
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


## deleteMembersByQuery

> ApiResponse deleteMembersByQuery(opts)

Delete members by query

Delete Members from Ziqni database by unique Members ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let opts = {
  'body': {"must":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"mustNot":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"should":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"gte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"gt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"range":[{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]},{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]}],"sortBy":[{"queryField":"some text","order":"Desc"},{"queryField":"some text","order":"Desc"}],"multiFields":[{"queryFields":["some text","some text"],"queryValue":"some text"},{"queryFields":["some text","some text"],"queryValue":"some text"}],"includeFields":["some text","some text"],"hasValue":["some text","some text"],"hasNoValue":["some text","some text"],"shouldMatch":91,"skip":34,"limit":62,"constraints":["some text","some text"]} // QueryRequest | Delete Members from Ziqni database by unique Members ID's or any other POST body parameters using the POST method
};
apiInstance.deleteMembersByQuery(opts, (error, data, response) => {
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
 **body** | [**QueryRequest**](QueryRequest.md)| Delete Members from Ziqni database by unique Members ID&#39;s or any other POST body parameters using the POST method | [optional] 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAchievementsForMembers

> AchievementReducedResponse getAchievementsForMembers(id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Achievements for the Member id provided

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'achievementId': "achievementId_example", // String | Id of an Achievement
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAchievementsForMembers(id, opts, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 
 **achievementId** | **String**| Id of an Achievement | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**AchievementReducedResponse**](AchievementReducedResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAwardsForMembers

> MemberAwardResponse getAwardsForMembers(id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Awards for the Member id provided

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'awardId': "awardId_example", // String | Id of an Award
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getAwardsForMembers(id, opts, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 
 **awardId** | **String**| Id of an Award | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**MemberAwardResponse**](MemberAwardResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCompetitionsForMembers

> CompetitionReducedResponse getCompetitionsForMembers(id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list Competitions for the Member id provided

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'competitionId': "competitionId_example", // String | Id of a Competition
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getCompetitionsForMembers(id, opts, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 
 **competitionId** | **String**| Id of a Competition | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**CompetitionReducedResponse**](CompetitionReducedResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getContestsForMembers

> ContestReducedResponse getContestsForMembers(id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Contests for the Member id provided

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'contestId': "contestId_example", // String | Id of a Contest
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getContestsForMembers(id, opts, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 
 **contestId** | **String**| Id of a Contest | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**ContestReducedResponse**](ContestReducedResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembers

> MemberResponse getMembers(opts)

Get members

Returns a list of Members. This assumes that members have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let opts = {
  'id': ["null"], // [String] | The unique identifiers of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getMembers(opts, (error, data, response) => {
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

[**MemberResponse**](MemberResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMembersByQuery

> MemberResponse getMembersByQuery(opts)

Get members by query

Retrieve Members from Ziqni database by unique Member ID&#39;s or any other POST body parameters using the POST method

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let opts = {
  'body': {"must":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"mustNot":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"should":[{"queryField":"some text","queryValues":["some text","some text"]},{"queryField":"some text","queryValues":["some text","some text"]}],"gte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"gt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lte":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"lt":[{"queryField":"some text","queryValue":"some text"},{"queryField":"some text","queryValue":"some text"}],"range":[{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]},{"queryField":"some text","gt":"some text","lt":"some text","constraints":["some text","some text"]}],"sortBy":[{"queryField":"some text","order":"Desc"},{"queryField":"some text","order":"Asc"}],"multiFields":[{"queryFields":["some text","some text"],"queryValue":"some text"},{"queryFields":["some text","some text"],"queryValue":"some text"}],"includeFields":["some text","some text"],"hasValue":["some text","some text"],"hasNoValue":["some text","some text"],"shouldMatch":46,"skip":12,"limit":13,"constraints":["some text","some text"]} // QueryRequest | Retrieve Products from Ziqni database by unique Product ID's or any other POST body parameters using the POST method
};
apiInstance.getMembersByQuery(opts, (error, data, response) => {
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

[**MemberResponse**](MemberResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getMembersByRefId

> MemberResponse getMembersByRefId(opts)

Get members by reference ids

Returns a list of Members. This assumes that members have first been uploaded via a POST request or web console

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let opts = {
  'refIds': ["null"], // [String] | The reference ids  of the resources
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getMembersByRefId(opts, (error, data, response) => {
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

[**MemberResponse**](MemberResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMessagesForMembers

> MemberMessageResponse getMessagesForMembers(id, opts)

NOT AVAILABLE IN CURRENT RELEASE

Returns a list of Messages for the Member id provided

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let id = "id_example"; // String | Unique identifier of the resource
let opts = {
  'messageId': "messageId_example", // String | Id of a Message
  'limit': 56, // Number | Limit the returned total records found
  'skip': 56 // Number | Skip the returned records found and return the next batch of records
};
apiInstance.getMessagesForMembers(id, opts, (error, data, response) => {
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
 **id** | **String**| Unique identifier of the resource | 
 **messageId** | **String**| Id of a Message | [optional] 
 **limit** | **Number**| Limit the returned total records found | [optional] 
 **skip** | **Number**| Skip the returned records found and return the next batch of records | [optional] 

### Return type

[**MemberMessageResponse**](MemberMessageResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMembers

> ApiResponse updateMembers(body)

Update members

Update existing Members in the Ziqni database

### Example

```javascript
import @ZiqniTechAdminApiClient from '@ziqni-tech/admin-api-client';
let defaultClient = @ZiqniTechAdminApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new @ZiqniTechAdminApiClient.MembersApi();
let body = [new @ZiqniTechAdminApiClient.UpdateMemberRequest()]; // [UpdateMemberRequest] | Update member details in the Ziqni database for a given Member identifier. * Member Ref Id can not be changed after creation * A member Id must exist in the Ziqni database to update the member
apiInstance.updateMembers(body, (error, data, response) => {
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
 **body** | [**[UpdateMemberRequest]**](UpdateMemberRequest.md)| Update member details in the Ziqni database for a given Member identifier. * Member Ref Id can not be changed after creation * A member Id must exist in the Ziqni database to update the member | 

### Return type

[**ApiResponse**](ApiResponse.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json, file/csv
- **Accept**: application/json

