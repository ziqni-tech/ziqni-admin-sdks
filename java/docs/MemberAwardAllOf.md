

# MemberAwardAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rewardId** | **String** | A unique identifier of a Reward | 
**rewardType** | **String** | The type of the Reward | 
**rewardTypeId** | **String** | A unique id of the Reward Type | 
**rewardValue** | **Double** | Numerical value of the reward that will be issued based on the reward type | 
**delay** | **Integer** | Delay of issuing a reward in minutes |  [optional]
**entityType** | **EntityType** |  | 
**entityId** | **String** | The Id of the contest or achievement related to this Award. Dependant on entityType | 
**pointInTime** | **OffsetDateTime** | ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; |  [optional]
**period** | **Integer** | Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; |  [optional]
**tags** | **List&lt;String&gt;** | A list of Strings of groups that the reward belongs to. |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints | 
**claimedTimestamp** | **OffsetDateTime** | ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. * |  [optional]



