# @ZiqniTechAdminApiClient.ContestReduced

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**competitionId** | **String** | A unique identifier of a Competition | 
**row** | **Number** | The row number for displaying the Contest in a table | 
**name** | **String** | A name for the Contest. Can be translated | 
**round** | **Number** | To what round does the contest belong | 
**groupStage** | **Number** | Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2 | 
**entrantsFromContest** | **[String]** | A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | 
**status** | [**ContestStatus**](ContestStatus.md) |  | 
**statusCode** | **Number** | The code of the contest | [readonly] 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**actualStartDate** | **Date** | ISO8601 timestamp for when a Contest started. All records are stored in UTC time zone | [optional] [readonly] 
**actualEndDate** | **Date** | ISO8601 timestamp for when a Contest ended. All records are stored in UTC time zone | [optional] [readonly] 
**tags** | **[String]** | A list of id&#39;s used to tag | [optional] 
**rewards** | [**[RewardReduced]**](RewardReduced.md) |  | [optional] 


