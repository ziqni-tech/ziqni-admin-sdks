

# CreateRewardTypeRequest

This is a request for Reward Type creation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **Map&lt;String, Object&gt;** | A list of custom field entries |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | The name of the Reward type | 
**description** | **String** | The description of a reward type |  [optional]
**key** | **String** | A unique key that represents the reward type | 
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]
**awardActions** | [**List&lt;AwardAction&gt;**](AwardAction.md) | When the state changes the action is performed |  [optional]
**addConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**unitOfMeasure** | **String** |  | 
**scheduling** | [**List&lt;AwardScheduling&gt;**](AwardScheduling.md) | Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award |  [optional]



