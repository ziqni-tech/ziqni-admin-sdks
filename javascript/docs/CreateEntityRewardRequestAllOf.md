# @ZiqniTechAdminApiClient.CreateEntityRewardRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityType** | [**RewardEntityType**](RewardEntityType.md) |  | 
**entityId** | **String** | A unique identifier of an achievement or contest. Dependant on entityType | 
**name** | **String** | The name of a reward | 
**description** | **String** | The description of a Reward | [optional] 
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard | 
**rewardValue** | **Number** | Numerical value of the reward that will be issued based on the reward type | 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for reward | [optional] 
**issueLimit** | **Number** | how many of thsese rewards are | [optional] 
**delay** | **Number** | Delay of issuing a reward in minutes | [optional] 
**pointInTime** | **Date** | ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone | [optional] 
**period** | **Number** | Reward available for a period of time from issuing in minutes | [optional] 
**memberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | 
**rewardTypeId** | **String** | A unique id of the Reward Type | 


