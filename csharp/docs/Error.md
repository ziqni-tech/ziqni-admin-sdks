
# Ziqni.Model.Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ModelId** | **string** | The identifier of the record this error relates to (This value only gets set if the error could relate to more than one object) | [optional] 
**ErrorCode** | **int** | A unique system identifier that describes this specific error | 
**Message** | **string** | The error description | 
**ErrorAt** | **int** | The object number that returned the error | [optional] 
**Detail** | [**List&lt;ErrorDetail&gt;**](ErrorDetail.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

