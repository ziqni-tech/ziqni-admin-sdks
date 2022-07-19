

# ContestReducedAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**competitionId** | **String** | A unique identifier of a Competition | 
**row** | **Integer** | The row number for displaying the Contest in a table | 
**name** | **String** | A name for the Contest. Can be translated | 
**round** | **Integer** | To what round does the contest belong | 
**groupStage** | **Integer** | Is used for more complex Competitions e.g. multi round competitions where round 1 group stage matched round 2 | 
**entrantsFromContest** | **List&lt;String&gt;** | A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | 
**status** | **ContestStatus** |  | 
**statusCode** | **Integer** | The code of the contest |  [readonly]
**scheduledStartDate** | **OffsetDateTime** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **OffsetDateTime** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**actualStartDate** | **OffsetDateTime** | ISO8601 timestamp for when a Contest started. All records are stored in UTC time zone |  [optional] [readonly]
**actualEndDate** | **OffsetDateTime** | ISO8601 timestamp for when a Contest ended. All records are stored in UTC time zone |  [optional] [readonly]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag |  [optional]
**rewards** | [**List&lt;RewardReduced&gt;**](RewardReduced.md) |  |  [optional]



