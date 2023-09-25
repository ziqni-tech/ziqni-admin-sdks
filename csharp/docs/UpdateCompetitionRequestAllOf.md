
# Ziqni.Model.UpdateCompetitionRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CompetitionType** | **CompetitionType** |  | [optional] 
**NumberOfRounds** | **int** | Number of rounds to be played in a competition | [optional] 
**NumberOfGroupStages** | **int** | Number of group stages | [optional] 
**Name** | **string** | A name or a name of a competition. Can be translated | [optional] 
**Description** | **string** | Description of the competition. Can be translated | [optional] 
**TermsAndConditions** | **string** | Terms and conditions of a competition. Can be translated | [optional] 
**EntrantMemberType** | **string** |  | [optional] 
**MaxNumberOfEntrants** | **int** | Maximum number of partiipants allowed in a competition | [optional] 
**MinNumberOfEntrants** | **int** | Maximum number of partiipants allowed in a competition | [optional] 
**ScheduledStartDate** | **DateTime** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | [optional] 
**ScheduledEndDate** | **DateTime** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | [optional] 
**AddConstraints** | **List&lt;string&gt;** | Additional constraints | [optional] 
**RemoveConstraints** | **List&lt;string&gt;** | Additional constraints | [optional] 
**ProductIds** | **List&lt;string&gt;** |  | [optional] 
**CreateContests** | [**CreateContestForCompetitionRequest**](CreateContestForCompetitionRequest.md) |  | [optional] 
**UpdateContests** | [**UpdateContestRequest**](UpdateContestRequest.md) |  | [optional] 
**EntrantMemberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**ProductTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**Icon** | **string** | Link to the icon | [optional] 
**Banner** | **string** | Link to the banner | [optional] 
**BannerLowResolution** | **string** | Link to the bannerLowResolution | [optional] 
**BannerHighResolution** | **string** | Link to the bannerHighResolution | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

