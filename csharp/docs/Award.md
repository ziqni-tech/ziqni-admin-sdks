
# Org.OpenAPITools.Model.Award

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**MemberId** | **string** | A unique identifier of a Member | 
**RewardId** | **string** | A unique identifier of a Reward | 
**RewardType** | [**RewardTypeReduced**](RewardTypeReduced.md) |  | 
**RewardRank** | **string** | If used in the context of contest this will associate with the rank of the leaderboard | 
**RewardValue** | **double** | Numerical value of the reward that will be issued based on the reward type | 
**Delay** | **int** | Delay of issuing a reward in minutes | [optional] 
**EntityType** | **EntityType** |  | 
**EntityId** | **string** | The Id of the contest or achievement related to this Award. Dependant on entityType | 
**PointInTime** | **DateTime** | ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; | [optional] 
**Period** | **int** | Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot; | [optional] 
**Tags** | **List&lt;string&gt;** | A list of Strings of groups that the reward belongs to. | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints, if the value is present it means the | 
**ClaimedTimestamp** | **DateTime** | ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. * | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

