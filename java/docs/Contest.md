

# Contest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **Map&lt;String, Object&gt;** |  |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**competitionId** | **String** | A unique identifier of a Competition | 
**row** | **Integer** | The row number for displaying the Contest in a table | 
**name** | **String** | A name for the Contest. Can be translated | 
**description** | **String** | Description of the contest |  [optional]
**termsAndConditions** | **String** | Terms and conditions for participating in the Contest. Can be translated |  [optional]
**round** | **Integer** | To what round does the contest belong | 
**roundType** | **RoundType** |  | 
**entrantsFromContest** | **List&lt;String&gt;** | A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional. | 
**maxNumberOfEntrants** | **Integer** | Maximum number of entrants for the contest |  [optional]
**minNumberOfEntrants** | **Integer** | Minimum number of entrants for the contest | 
**scheduledStartDate** | **OffsetDateTime** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **OffsetDateTime** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | 
**actualStartDate** | **OffsetDateTime** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone |  [optional] [readonly]
**actualEndDate** | **OffsetDateTime** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone |  [optional] [readonly]
**strategies** | [**Strategy**](Strategy.md) |  |  [optional]
**status** | **ContestStatus** |  | 
**statusCode** | **Integer** | The code of the contest |  [readonly]
**constraints** | **List&lt;String&gt;** | Additional constraints | 



