# @ZiqniTechAdminApiClient.NotificationMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityId** | **String** |  | [optional] 
**entityType** | **[String]** |  | 
**changedAt** | **Date** |  | [optional] 
**changedBy** | **String** |  | [optional] 
**typeOffChange** | **Number** |  | [optional] 
**displayName** | **String** |  | [optional] 
**accountId** | **String** |  | [optional] 
**sequenceNumber** | **Number** |  | [optional] 
**entityRefId** | **String** |  | [optional] 
**entityParentId** | **String** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**previousState** | **Number** |  | [optional] 
**currentState** | **Number** |  | [optional] 
**subscriptionId** | **String** |  | 
**constraints** | **[String]** | Constraints of this subscription like gauranteedDelivery | [optional] 
**topic** | **String** | /user/queue/callbacks | [optional] 
**meta** | [**MetaBasic**](MetaBasic.md) |  | [optional] 
**data** | [**[EntityChangeSubscription]**](EntityChangeSubscription.md) |  | [optional] 
**errors** | [**[Error]**](Error.md) |  | [optional] 


