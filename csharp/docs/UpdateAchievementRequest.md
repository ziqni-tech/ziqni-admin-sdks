
# Org.OpenAPITools.Model.UpdateAchievementRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** | A list of id&#39;s used to add cutom fields | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**Name** | **string** | A name for the Achievement. Can be translated | [optional] 
**Description** | **string** | A name for the Achievement. Can be translated | [optional] 
**TermsAndConditions** | **string** | Terms and conditions of an achievement. Can be translated | [optional] 
**Icon** | **string** | An Icon id that has been pre uploaded to the system to display for Achievement | [optional] 
**Scheduling** | [**Scheduling**](Scheduling.md) |  | [optional] 
**AchievementLiveStatus** | **AchievementLiveStatus** |  | [optional] 
**MaxNumberOfIssues** | **int** | Maximum number of issued achievements | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | [optional] 
**AchievementDependencies** | [**DependantOn**](DependantOn.md) |  | [optional] 
**MemberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**ProductTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**AddConstraints** | **List&lt;string&gt;** |  | [optional] 
**RemoveConstraints** | **List&lt;string&gt;** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

