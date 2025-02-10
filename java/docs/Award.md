

# Award


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**memberId** | **String** | A unique identifier of a Member | 
**rewardId** | **String** | A unique identifier of a Reward | 
**rewardType** | [**RewardTypeReduced**](RewardTypeReduced.md) |  | 
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard | 
**rewardValue** | **Double** | Numerical value of the reward that will be issued based on the reward type | 
**delay** | **Integer** | ***DEPRECATED, use scheduling*** Delay of issuing a reward in minutes |  [optional]
**entityType** | **EntityType** |  | 
**entityId** | **String** | The Id of the contest or achievement related to this Award. Dependant on entityType | 
**pointInTime** | **OffsetDateTime** | ***DEPRECATED, use scheduling***ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; |  [optional]
**period** | **Integer** | ***DEPRECATED, use scheduling*** Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; |  [optional]
**tags** | **List&lt;String&gt;** | A list of Strings of groups that the reward belongs to. |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints, if the value is present it means the | 
**claimedTimestamp** | **OffsetDateTime** | ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. * |  [optional]
**memberRefId** | **String** |  |  [optional]
**statusCode** | **Integer** | The current status of this award  1. Available (Code 10) 2. Claimed (Code 20) 3. Processing (Code 30) 4. Delivered  (Code 40) 5. Expired  (Code 50) 6. Cancelled (Code 60) 7. Declined  (Code 70) |  [optional]
**activeFrom** | **OffsetDateTime** | This record is considered active up until this date time |  [optional]
**activeUntil** | **OffsetDateTime** | This record is considered active up until this date time |  [optional]
**status** | **AwardStateActions** |  |  [optional]



