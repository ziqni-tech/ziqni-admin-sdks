
# Org.OpenAPITools.Model.CreateContestForCompetitionRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompetitionId** | **string** | A unique identifier of a Competition | 
**Row** | **int** | The row number for displaying the Contest in a table | 
**Round** | **int** | To what round does the contest belong | 
**GroupStage** | **int** | Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2 | [optional] 
**GroupStageLabel** | **string** | The name of the group stages | [optional] 
**EntrantsFromContest** | **List&lt;string&gt;** | A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | [optional] 
**Name** | **string** | A name for the Contest. Can be translated | 
**Description** | **string** | A name for the Contest. Can be translated | [optional] 
**TermsAndConditions** | **string** | A name for the Contest. Can be translated | [optional] 
**RoundType** | **RoundType** |  | 
**MaxNumberOfEntrants** | **int** | Maximum number of entrants for the contest | [optional] 
**MinNumberOfEntrants** | **int** | Minimum number of entrants for the contest | 
**Rules** | [**List&lt;Rule&gt;**](Rule.md) |  | [optional] 
**ScheduledStartDate** | **DateTime** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**ScheduledEndDate** | **DateTime** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**Strategies** | [**Strategy**](Strategy.md) |  | 
**Translations** | [**List&lt;Translation&gt;**](Translation.md) |  | [optional] 
**Rewards** | [**List&lt;CreateRewardRequest&gt;**](CreateRewardRequest.md) |  | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

