

# CreateContestRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **Map&lt;String, Object&gt;** | A list of custom field entries |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**row** | **Integer** | The row number for displaying the Contest in a table |  [optional]
**round** | **Integer** | To what round does the contest belong |  [optional]
**entrantsFromContest** | **List&lt;String&gt;** | A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. |  [optional]
**name** | **String** | A name for the Contest. Can be translated | 
**description** | **String** | A name for the Contest. Can be translated |  [optional]
**termsAndConditions** | **String** | A name for the Contest. Can be translated |  [optional]
**roundType** | **RoundType** |  | 
**maxNumberOfEntrants** | **Integer** | Maximum number of entrants for the contest |  [optional]
**minNumberOfEntrants** | **Integer** | Minimum number of entrants for the contest | 
**rules** | [**List&lt;Rule&gt;**](Rule.md) |  |  [optional]
**scheduledStartDate** | **OffsetDateTime** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **OffsetDateTime** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**strategies** | [**TournamentStrategies**](TournamentStrategies.md) |  | 
**constraints** | **List&lt;String&gt;** | Additional constraints | 
**addConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]
**rewards** | [**List&lt;CreateRewardRequest&gt;**](CreateRewardRequest.md) |  |  [optional]
**icon** | **String** | Link to the icon |  [optional]
**banner** | **String** | Link to the banner |  [optional]
**bannerLowResolution** | **String** | Link to the bannerLowResolution |  [optional]
**bannerHighResolution** | **String** | Link to the bannerHighResolution |  [optional]



