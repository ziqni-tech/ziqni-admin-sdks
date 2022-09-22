# @ZiqniTechAdminApiClient.EntityChangeSubscriptionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityType** | **String** | What you are subscribing to, like Competition, Contest, Member, Award etc. | 
**constraints** | **[String]** | Constraints of this subscription. | [optional] 
**callback** | **String** | The callback operation you are subscribing too. Like entityChanged or entityStateChanged | 
**action** | **String** | Either subscribe or unsubscribe from the data feed | 



## Enum: ActionEnum


* `Subscribe` (value: `"Subscribe"`)

* `Unsubscribe` (value: `"Unsubscribe"`)




