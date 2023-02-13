
# Org.OpenAPITools.Model.CompetitionReduced

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**CompetitionType** | **CompetitionType** |  | 
**NumberOfRounds** | **int** | Number of rounds to be played in a competition | 
**Name** | **string** | A name or a name of a competition. Can be translated | 
**Status** | **CompetitionStatus** |  | 
**StatusCode** | **int** | The code of the competition | [readonly] 
**DependantOn** | [**List&lt;Dependancy&gt;**](Dependancy.md) |  | 
**EntrantMemberType** | **string** |  | [optional] 
**ScheduledStartDate** | **DateTime** | ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone | 
**ScheduledEndDate** | **DateTime** | ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone | 
**ActualStartDate** | **DateTime** | ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone | [optional] [readonly] 
**ActualEndDate** | **DateTime** | ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone | [optional] [readonly] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

