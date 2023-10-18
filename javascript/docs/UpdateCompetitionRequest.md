# @ZiqniTechAdminApiClient.UpdateCompetitionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**competitionType** | [**CompetitionType**](CompetitionType.md) |  | [optional] 
**numberOfRounds** | **Number** | Number of rounds to be played in a competition | [optional] 
**numberOfGroupStages** | **Number** | Number of group stages | [optional] 
**name** | **String** | A name or a name of a competition. Can be translated | [optional] 
**description** | **String** | Description of the competition. Can be translated | [optional] 
**termsAndConditions** | **String** | Terms and conditions of a competition. Can be translated | [optional] 
**entrantMemberType** | **String** |  | [optional] 
**maxNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | [optional] 
**minNumberOfEntrants** | **Number** | Maximum number of partiipants allowed in a competition | [optional] 
**scheduledStartDate** | **Date** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | [optional] 
**scheduledEndDate** | **Date** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 
**addConstraints** | **[String]** | Additional constraints | [optional] 
**removeConstraints** | **[String]** | Additional constraints | [optional] 
**productIds** | **[String]** |  | [optional] 
**createContests** | [**CreateContestForCompetitionRequest**](CreateContestForCompetitionRequest.md) |  | [optional] 
**updateContests** | [**UpdateContestRequest**](UpdateContestRequest.md) |  | [optional] 
**entrantMemberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**productTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**icon** | **String** | Link to the icon | [optional] 
**banner** | **String** | Link to the banner | [optional] 
**bannerLowResolution** | **String** | Link to the bannerLowResolution | [optional] 
**bannerHighResolution** | **String** | Link to the bannerHighResolution | [optional] 


