
# Ziqni.Model.CreateEntityRewardRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntityType** | **RewardEntityType** |  | 
**EntityId** | **string** | A unique identifier of an achievement or contest. Dependant on entityType | 
**Name** | **string** | The name of a reward | 
**Description** | **string** | The description of a Reward | [optional] 
**RewardRank** | **string** | If used in the context of contest this will associate with the rank of the leaderboard | 
**RewardValue** | **double** | Numerical value of the reward that will be issued based on the reward type | 
**Icon** | **string** | An Icon id that has been pre uploaded to the system to display for reward | [optional] 
**IssueLimit** | **int** | how many of thsese rewards are | [optional] 
**Delay** | **int** | Delay of issuing a reward in minutes | [optional] 
**PointInTime** | **DateTime** | ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone | [optional] 
**Period** | **int** | Reward available for a period of time from issuing in minutes | [optional] 
**Translations** | [**List&lt;Translation&gt;**](Translation.md) |  | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 
**RewardTypeId** | **string** | A unique id of the Reward Type | 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

