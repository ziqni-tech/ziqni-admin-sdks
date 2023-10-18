# @ZiqniTechAdminApiClient.Contest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **{String: Object}** |  | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**competitionId** | **String** | A unique identifier of a Competition | 
**row** | **Number** | The row number for displaying the Contest in a table | 
**name** | **String** | A name for the Contest. Can be translated | 
**description** | **String** | Description of the contest | [optional] 
**termsAndConditions** | **String** | Terms and conditions for participating in the Contest. Can be translated | [optional] 
**round** | **Number** | To what round does the contest belong | 
**roundType** | [**RoundType**](RoundType.md) |  | 
**entrantsFromContest** | **[String]** | A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | 
**maxNumberOfEntrants** | **Number** | Maximum number of entrants for the contest | [optional] 
**minNumberOfEntrants** | **Number** | Minimum number of entrants for the contest | 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**actualStartDate** | **Date** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone | [optional] [readonly] 
**actualEndDate** | **Date** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone | [optional] [readonly] 
**strategies** | [**TournamentStrategies**](TournamentStrategies.md) |  | [optional] 
**status** | [**ContestStatus**](ContestStatus.md) |  | 
**statusCode** | **Number** | The code of the contest | [readonly] 
**constraints** | **[String]** | Additional constraints | 
**icon** | **String** | Link to the icon | [optional] 
**banner** | **String** | Link to the banner | [optional] 
**bannerLowResolution** | **String** | Link to the bannerLowResolution | [optional] 
**bannerHighResolution** | **String** | Link to the bannerHighResolution | [optional] 


