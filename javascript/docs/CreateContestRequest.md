# @ZiqniTechAdminApiClient.CreateContestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**row** | **Number** | The row number for displaying the Contest in a table | [optional] 
**round** | **Number** | To what round does the contest belong | [optional] 
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
**strategies** | [**TournamentStrategies**](TournamentStrategies.md) |  | 
**constraints** | **[String]** | Additional constraints | 
**addConstraints** | **[String]** | Additional constraints | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**rewards** | [**[CreateRewardRequest]**](CreateRewardRequest.md) |  | [optional] 
**icon** | **String** | Link to the icon | [optional] 
**banner** | **String** | Link to the banner | [optional] 
**bannerLowResolution** | **String** | Link to the bannerLowResolution | [optional] 
**bannerHighResolution** | **String** | Link to the bannerHighResolution | [optional] 


