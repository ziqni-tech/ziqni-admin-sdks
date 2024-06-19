

# CompetitionReducedAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**competitionType** | **CompetitionType** |  | 
**numberOfRounds** | **Integer** | Number of rounds to be played in a competition | 
**name** | **String** | A name or a name of a competition. Can be translated | 
**status** | **CompetitionStatus** |  | 
**statusCode** | **Integer** | The code of the competition |  [readonly]
**dependantOn** | [**List&lt;Dependancy&gt;**](Dependancy.md) |  | 
**entrantMemberType** | **String** |  |  [optional]
**scheduledStartDate** | **OffsetDateTime** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **OffsetDateTime** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | 
**actualStartDate** | **OffsetDateTime** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone |  [optional] [readonly]
**actualEndDate** | **OffsetDateTime** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone |  [optional] [readonly]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints | 



