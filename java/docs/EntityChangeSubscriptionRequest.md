

# EntityChangeSubscriptionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityType** | **String** | What you are subscribing to, like Competition, Contest, Member, Award etc. | 
**constraints** | **List&lt;String&gt;** | Constraints of this subscription. |  [optional]
**callback** | **String** | The callback operation you are subscribing too. Like entityChanged or entityStateChanged | 
**action** | [**ActionEnum**](#ActionEnum) | Either subscribe or unsubscribe from the data feed | 



## Enum: ActionEnum

Name | Value
---- | -----
SUBSCRIBE | &quot;Subscribe&quot;
UNSUBSCRIBE | &quot;Unsubscribe&quot;



