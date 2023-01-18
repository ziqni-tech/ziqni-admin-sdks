

# AwardAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberId** | **String** | A unique identifier of a Member | 
**rewardId** | **String** | A unique identifier of a Reward | 
**rewardType** | [**RewardTypeReduced**](RewardTypeReduced.md) |  | 
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard | 
**rewardValue** | **Double** | Numerical value of the reward that will be issued based on the reward type | 
**delay** | **Integer** | Delay of issuing a reward in minutes |  [optional]
**entityType** | **EntityType** |  | 
**entityId** | **String** | The Id of the contest or achievement related to this Award. Dependant on entityType | 
**pointInTime** | **OffsetDateTime** | ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; |  [optional]
**period** | **Integer** | Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; |  [optional]
**tags** | **List&lt;String&gt;** | A list of Strings of groups that the reward belongs to. |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints, if the value is present it means the | 
**claimedTimestamp** | **OffsetDateTime** | ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. * |  [optional]
**memberRefId** | **String** |  |  [optional]



