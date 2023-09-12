

# CreateCompetitionRequestAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**competitionType** | **CompetitionType** |  | 
**numberOfRounds** | **Integer** | Number of rounds to be played in a competition | 
**numberOfGroupStages** | **Integer** | Number of group stages |  [optional]
**name** | **String** | A name or a name of a competition. Can be translated | 
**description** | **String** | Description of the competition. Can be translated |  [optional]
**termsAndConditions** | **String** | Terms and conditions of a competition. Can be translated |  [optional]
**entrantMemberType** | **String** |  |  [optional]
**maxNumberOfEntrants** | **Integer** | Maximum number of partiipants allowed in a competition |  [optional]
**minNumberOfEntrants** | **Integer** | Maximum number of partiipants allowed in a competition | 
**rules** | [**List&lt;Rule&gt;**](Rule.md) |  |  [optional]
**scheduledStartDate** | **OffsetDateTime** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | 
**scheduledEndDate** | **OffsetDateTime** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | 
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]
**contests** | [**CreateContestRequest**](CreateContestRequest.md) |  |  [optional]
**rewards** | [**List&lt;CreateRewardRequest&gt;**](CreateRewardRequest.md) |  |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints | 
**addConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**productIds** | **List&lt;String&gt;** |  | 
**entrantMemberTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**productTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**icon** | **String** | Link to the icon |  [optional]
**banner** | **String** | Link to the banner |  [optional]
**bannerLowResolution** | **String** | Link to the bannerLowResolution |  [optional]
**bannerHighResolution** | **String** | Link to the bannerHighResolution |  [optional]



