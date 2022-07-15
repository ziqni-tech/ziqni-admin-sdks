# @ZiqniTechAdminApiClient.Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**modelId** | **String** | The identifier of the record this error relates to (This value only gets set if the error could relate to more than one object) | [optional] 
**errorCode** | **Number** | A unique system identifier that describes this specific error | 
**message** | **String** | The error description | 
**errorAt** | **Number** | The object number that returned the error | [optional] 
**detail** | [**[ErrorDetail]**](ErrorDetail.md) |  | [optional] 


