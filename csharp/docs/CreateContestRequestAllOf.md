
# Ziqni.Model.CreateContestRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Row** | **int** | The row number for displaying the Contest in a table | [optional] 
**Round** | **int** | To what round does the contest belong | [optional] 
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
**Strategies** | [**TournamentStrategies**](TournamentStrategies.md) |  | 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 
**AddConstraints** | **List&lt;string&gt;** | Additional constraints | [optional] 
**Translations** | [**List&lt;Translation&gt;**](Translation.md) |  | [optional] 
**Rewards** | [**List&lt;CreateRewardRequest&gt;**](CreateRewardRequest.md) |  | [optional] 
**Icon** | **string** | Link to the icon | [optional] 
**Banner** | **string** | Link to the banner | [optional] 
**BannerLowResolution** | **string** | Link to the bannerLowResolution | [optional] 
**BannerHighResolution** | **string** | Link to the bannerHighResolution | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

