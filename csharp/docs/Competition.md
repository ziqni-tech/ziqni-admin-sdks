
# Org.OpenAPITools.Model.Competition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**CompetitionType** | **CompetitionType** |  | 
**NumberOfRounds** | **int** | Number of rounds to be played in a competition | 
**NumberOfGroupStages** | **int** | Number of group stages | [optional] 
**Name** | **string** | A name or a name of a competition. Can be translated | 
**Description** | **string** | Description of the competition. Can be translated | [optional] 
**TermsAndConditions** | **string** | Terms and conditions of a competition. Can be translated | [optional] 
**MaxNumberOfEntrants** | **int** | Maximum number of partiipants allowed in a competition | [optional] 
**MinNumberOfEntrants** | **int** | Maximum number of partiipants allowed in a competition | 
**EntrantMemberType** | **string** |  | [optional] 
**ScheduledStartDate** | **DateTime** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | 
**ScheduledEndDate** | **DateTime** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | 
**ActualStartDate** | **DateTime** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone | [optional] [readonly] 
**ActualEndDate** | **DateTime** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone | [optional] [readonly] 
**Status** | **CompetitionStatus** |  | 
**StatusCode** | **int** | The code of the competition | [optional] [readonly] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 
**Products** | [**List&lt;ProductReduced&gt;**](ProductReduced.md) |  | 
**EntrantMemberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**ProductTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

