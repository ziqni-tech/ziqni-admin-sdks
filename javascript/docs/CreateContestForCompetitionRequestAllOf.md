# @ZiqniTechAdminApiClient.CreateContestForCompetitionRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**competitionId** | **String** | A unique identifier of a Competition | 
**row** | **Number** | The row number for displaying the Contest in a table | 
**round** | **Number** | To what round does the contest belong | 
**groupStage** | **Number** | Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2 | [optional] 
**groupStageLabel** | **String** | The name of the group stages | [optional] 
**entrantsFromContest** | **[String]** | A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | [optional] 
**name** | **String** | A name for the Contest. Can be translated | 
**description** | **String** | A name for the Contest. Can be translated | [optional] 
**termsAndConditions** | **String** | A name for the Contest. Can be translated | [optional] 
**roundType** | [**RoundType**](RoundType.md) |  | 
**maxNumberOfEntrants** | **Number** | Maximum number of entrants for the contest | [optional] 
**minNumberOfEntrants** | **Number** | Minimum number of entrants for the contest | 
**rules** | [**[Rule]**](Rule.md) |  | [optional] 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**strategies** | [**Strategy**](Strategy.md) |  | 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**rewards** | [**[CreateRewardRequest]**](CreateRewardRequest.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | 


