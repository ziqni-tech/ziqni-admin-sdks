
# Org.OpenAPITools.Model.ContestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompetitionId** | **string** | A unique identifier of a Competition | 
**Row** | **int** | The row number for displaying the Contest in a table | 
**Name** | **string** | A name for the Contest. Can be translated | 
**Description** | **string** | Description of the contest | [optional] 
**TermsAndConditions** | **string** | Terms and conditions for participating in the Contest. Can be translated | [optional] 
**Round** | **int** | To what round does the contest belong | 
**RoundType** | **RoundType** |  | 
**GroupStage** | **int** | Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2 | [optional] 
**GroupStageLabel** | **string** | The name of the group stages | [optional] 
**EntrantsFromContest** | **List&lt;string&gt;** | A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | 
**MaxNumberOfEntrants** | **int** | Maximum number of entrants for the contest | [optional] 
**MinNumberOfEntrants** | **int** | Minimum number of entrants for the contest | 
**ScheduledStartDate** | **DateTime** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**ScheduledEndDate** | **DateTime** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**ActualStartDate** | **DateTime** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone | [optional] [readonly] 
**ActualEndDate** | **DateTime** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone | [optional] [readonly] 
**Strategies** | [**Strategy**](Strategy.md) |  | [optional] 
**Status** | **ContestStatus** |  | 
**StatusCode** | **int** | The code of the contest | [readonly] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

