
# Ziqni.Model.CreateCompetitionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomFields** | **Dictionary&lt;string, Object&gt;** | A list of custom field entries | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**CompetitionType** | **CompetitionType** |  | 
**NumberOfRounds** | **int** | Number of rounds to be played in a competition | 
**NumberOfGroupStages** | **int** | Number of group stages | [optional] 
**Name** | **string** | A name or a name of a competition. Can be translated | 
**Description** | **string** | Description of the competition. Can be translated | [optional] 
**TermsAndConditions** | **string** | Terms and conditions of a competition. Can be translated | [optional] 
**EntrantMemberType** | **string** |  | [optional] 
**MaxNumberOfEntrants** | **int** | Maximum number of partiipants allowed in a competition | [optional] 
**MinNumberOfEntrants** | **int** | Maximum number of partiipants allowed in a competition | 
**Rules** | [**List&lt;Rule&gt;**](Rule.md) |  | [optional] 
**ScheduledStartDate** | **DateTime** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | 
**ScheduledEndDate** | **DateTime** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | 
**Translations** | [**List&lt;Translation&gt;**](Translation.md) |  | [optional] 
**Contests** | [**CreateContestRequest**](CreateContestRequest.md) |  | [optional] 
**Rewards** | [**List&lt;CreateRewardRequest&gt;**](CreateRewardRequest.md) |  | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 
**AddConstraints** | **List&lt;string&gt;** | Additional constraints | [optional] 
**ProductIds** | **List&lt;string&gt;** |  | 
**EntrantMemberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**ProductTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**Icon** | **string** | Link to the icon | [optional] 
**Banner** | **string** | Link to the banner | [optional] 
**BannerLowResolution** | **string** | Link to the bannerLowResolution | [optional] 
**BannerHighResolution** | **string** | Link to the bannerHighResolution | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

