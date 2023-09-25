
# Ziqni.Model.Contest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**CompetitionId** | **string** | A unique identifier of a Competition | 
**Row** | **int** | The row number for displaying the Contest in a table | 
**Name** | **string** | A name for the Contest. Can be translated | 
**Description** | **string** | Description of the contest | [optional] 
**TermsAndConditions** | **string** | Terms and conditions for participating in the Contest. Can be translated | [optional] 
**Round** | **int** | To what round does the contest belong | 
**RoundType** | **RoundType** |  | 
**EntrantsFromContest** | **List&lt;string&gt;** | A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | 
**MaxNumberOfEntrants** | **int** | Maximum number of entrants for the contest | [optional] 
**MinNumberOfEntrants** | **int** | Minimum number of entrants for the contest | 
**ScheduledStartDate** | **DateTime** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**ScheduledEndDate** | **DateTime** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**ActualStartDate** | **DateTime** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone | [optional] [readonly] 
**ActualEndDate** | **DateTime** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone | [optional] [readonly] 
**Strategies** | [**TournamentStrategies**](TournamentStrategies.md) |  | [optional] 
**Status** | **ContestStatus** |  | 
**StatusCode** | **int** | The code of the contest | [readonly] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 
**Icon** | **string** | Link to the icon | [optional] 
**Banner** | **string** | Link to the banner | [optional] 
**BannerLowResolution** | **string** | Link to the bannerLowResolution | [optional] 
**BannerHighResolution** | **string** | Link to the bannerHighResolution | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

