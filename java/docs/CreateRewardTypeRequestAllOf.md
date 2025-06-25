

# CreateRewardTypeRequestAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the Reward type | 
**description** | **String** | The description of a reward type |  [optional]
**key** | **String** | A unique key that represents the reward type | 
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]
**awardActions** | [**List&lt;AwardAction&gt;**](AwardAction.md) | When the state changes the action is performed |  [optional]
**addConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**unitOfMeasure** | **String** |  | 
**scheduling** | [**List&lt;AwardScheduling&gt;**](AwardScheduling.md) | Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award |  [optional]



