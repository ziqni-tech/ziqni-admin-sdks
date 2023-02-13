# @ZiqniTechAdminApiClient.Award

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**memberId** | **String** | A unique identifier of a Member | 
**rewardId** | **String** | A unique identifier of a Reward | 
**rewardType** | [**RewardTypeReduced**](RewardTypeReduced.md) |  | 
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard | 
**rewardValue** | **Number** | Numerical value of the reward that will be issued based on the reward type | 
**delay** | **Number** | Delay of issuing a reward in minutes | [optional] 
**entityType** | [**EntityType**](EntityType.md) |  | 
**entityId** | **String** | The Id of the contest or achievement related to this Award. Dependant on entityType | 
**pointInTime** | **Date** | ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; | [optional] 
**period** | **Number** | Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; | [optional] 
**tags** | **[String]** | A list of Strings of groups that the reward belongs to. | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | 
**claimedTimestamp** | **Date** | ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. * | [optional] 
**memberRefId** | **String** |  | [optional] 


