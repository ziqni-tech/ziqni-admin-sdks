

# UpdateCompetitionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **Map&lt;String, Object&gt;** | A list of id&#39;s used to add cutom fields |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**competitionType** | **CompetitionType** |  |  [optional]
**numberOfRounds** | **Integer** | Number of rounds to be played in a competition |  [optional]
**numberOfGroupStages** | **Integer** | Number of group stages |  [optional]
**name** | **String** | A name or a name of a competition. Can be translated |  [optional]
**description** | **String** | Description of the competition. Can be translated |  [optional]
**termsAndConditions** | **String** | Terms and conditions of a competition. Can be translated |  [optional]
**entrantMemberType** | **String** |  |  [optional]
**maxNumberOfEntrants** | **Integer** | Maximum number of partiipants allowed in a competition |  [optional]
**minNumberOfEntrants** | **Integer** | Maximum number of partiipants allowed in a competition |  [optional]
**scheduledStartDate** | **OffsetDateTime** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone |  [optional]
**scheduledEndDate** | **OffsetDateTime** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**addConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**removeConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**productIds** | **List&lt;String&gt;** |  |  [optional]
**createContests** | [**CreateContestForCompetitionRequest**](CreateContestForCompetitionRequest.md) |  |  [optional]
**updateContests** | [**UpdateContestRequest**](UpdateContestRequest.md) |  |  [optional]
**entrantMemberTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**productTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**icon** | **String** | Link to the icon |  [optional]
**banner** | **String** | Link to the banner |  [optional]
**bannerLowResolution** | **String** | Link to the bannerLowResolution |  [optional]
**bannerHighResolution** | **String** | Link to the bannerHighResolution |  [optional]



