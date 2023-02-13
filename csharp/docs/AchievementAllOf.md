
# Org.OpenAPITools.Model.AchievementAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | A name for the Achievement. Can be translated | 
**Description** | **string** | A name for the Achievement. Can be translated | [optional] 
**TermsAndConditions** | **string** | Terms and conditions of an achievement. Can be translated | [optional] 
**Icon** | **string** | An Icon id that has been pre uploaded to the system to display for Achievement | 
**Scheduling** | [**Scheduling**](Scheduling.md) |  | [optional] 
**MaxNumberOfIssues** | **int** | Maximum number of issued achievements | [optional] 
**Status** | **AchievementStatus** |  | [optional] 
**StatusCode** | **int** | The code of the contest | [optional] [readonly] 
**Constraints** | **List&lt;string&gt;** | Additional constraints, if set means true | 
**AchievementDependencies** | [**DependantOn**](DependantOn.md) |  | [optional] 
**MemberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**ProductTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

