
# Ziqni.Model.ContestReducedAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompetitionId** | **string** | A unique identifier of a Competition | 
**Row** | **int** | The row number for displaying the Contest in a table | 
**Name** | **string** | A name for the Contest. Can be translated | 
**Round** | **int** | To what round does the contest belong | 
**GroupStage** | **int** | Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2 | 
**EntrantsFromContest** | **List&lt;string&gt;** | A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | 
**Status** | **ContestStatus** |  | 
**StatusCode** | **int** | The code of the contest | [readonly] 
**ScheduledStartDate** | **DateTime** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**ScheduledEndDate** | **DateTime** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**ActualStartDate** | **DateTime** | ISO8601 timestamp for when a Contest started. All records are stored in UTC time zone | [optional] [readonly] 
**ActualEndDate** | **DateTime** | ISO8601 timestamp for when a Contest ended. All records are stored in UTC time zone | [optional] [readonly] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag | [optional] 
**Rewards** | [**List&lt;RewardReduced&gt;**](RewardReduced.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

