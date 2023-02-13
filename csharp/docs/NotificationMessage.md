
# Org.OpenAPITools.Model.NotificationMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityId** | **string** |  | [optional] 
**EntityType** | **List&lt;string&gt;** |  | 
**ChangedAt** | **DateTime** |  | [optional] 
**ChangedBy** | **string** |  | [optional] 
**TypeOffChange** | **int** |  | [optional] 
**DisplayName** | **string** |  | [optional] 
**AccountId** | **string** |  | [optional] 
**SequenceNumber** | **long** |  | [optional] 
**EntityRefId** | **string** |  | [optional] 
**EntityParentId** | **string** |  | [optional] 
**Metadata** | **Object** |  | [optional] 
**PreviousState** | **int** |  | [optional] 
**CurrentState** | **int** |  | [optional] 
**SubscriptionId** | **string** |  | 
**Constraints** | **List&lt;string&gt;** | Constraints of this subscription like gauranteedDelivery | [optional] 
**Topic** | **string** | /user/queue/callbacks | [optional] 
**Meta** | [**MetaBasic**](MetaBasic.md) |  | [optional] 
**Data** | [**List&lt;EntityChangeSubscription&gt;**](EntityChangeSubscription.md) |  | [optional] 
**Errors** | [**List&lt;Error&gt;**](Error.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

