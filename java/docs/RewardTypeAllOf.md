

# RewardTypeAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the Reward type | 
**description** | **String** | The description of a reward type |  [optional]
**awardActions** | [**List&lt;AwardAction&gt;**](AwardAction.md) | When the state changes the action is performed |  [optional]
**key** | **String** | A unique key that represents the reward type | 
**constraints** | **List&lt;String&gt;** | Additional constraints, if the value is present it means the | 
**unitOfMeasure** | **String** | The unit of measure to use when performing dynamic calculations like currency | 
**scheduling** | [**List&lt;AwardScheduling&gt;**](AwardScheduling.md) | Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award |  [optional]



