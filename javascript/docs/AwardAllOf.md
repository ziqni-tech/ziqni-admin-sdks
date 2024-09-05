# @ZiqniTechAdminApiClient.AwardAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberId** | **String** | A unique identifier of a Member | 
**rewardId** | **String** | A unique identifier of a Reward | 
**rewardType** | [**RewardTypeReduced**](RewardTypeReduced.md) |  | 
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard | 
**rewardValue** | **Number** | Numerical value of the reward that will be issued based on the reward type | 
**delay** | **Number** | ***DEPRECATED, use scheduling*** Delay of issuing a reward in minutes | [optional] 
**entityType** | [**EntityType**](EntityType.md) |  | 
**entityId** | **String** | The Id of the contest or achievement related to this Award. Dependant on entityType | 
**pointInTime** | **Date** | ***DEPRECATED, use scheduling***ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; | [optional] 
**period** | **Number** | ***DEPRECATED, use scheduling*** Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; | [optional] 
**tags** | **[String]** | A list of Strings of groups that the reward belongs to. | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | 
**claimedTimestamp** | **Date** | ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. * | [optional] 
**memberRefId** | **String** |  | [optional] 
**statusCode** | **Number** | The current status of this award  1. Available (Code 10) 2. Claimed (Code 20) 3. Processing (Code 30) 4. Delivered  (Code 40) 5. Expired  (Code 50) 6. Cancelled (Code 60) 7. Declined  (Code 70) | [optional] 
**activeFrom** | **Date** | This record is considered active up until this date time | [optional] 
**activeUntil** | **Date** | This record is considered active up until this date time | [optional] 
**status** | [**AwardStateActions**](AwardStateActions.md) |  | [optional] 


