

# RewardType

This is the Reward Type model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **Map&lt;String, Object&gt;** |  |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | The name of the Reward type | 
**description** | **String** | The description of a reward type |  [optional]
**key** | **String** | A unique key that represents the reward type | 
**constraints** | **List&lt;String&gt;** | Additional constraints, if the value is present it means the | 
**unitOfMeasure** | **String** | The unit of measure to use when performing dynamic calculations like currency | 
**scheduling** | [**List&lt;AwardScheduling&gt;**](AwardScheduling.md) | Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award |  [optional]



