
# Org.OpenAPITools.Model.CreateAchievementRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomFields** | **Dictionary&lt;string, Object&gt;** | A list of custom field entries | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**Name** | **string** | A name for the Achievement. Can be translated | 
**Description** | **string** | A name for the Achievement. Can be translated | [optional] 
**TermsAndConditions** | **string** | Terms and conditions of an achievement. Can be translated | [optional] 
**Icon** | **string** | An Icon id that has been pre uploaded to the system to display for Achievement | [optional] 
**Rules** | [**List&lt;Rule&gt;**](Rule.md) |  | [optional] 
**Scheduling** | [**Scheduling**](Scheduling.md) |  | 
**MaxNumberOfIssues** | **int** | Maximum number of issued achievements | [optional] 
**Translations** | [**List&lt;Translation&gt;**](Translation.md) |  | [optional] 
**Rewards** | [**List&lt;CreateRewardRequest&gt;**](CreateRewardRequest.md) |  | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 
**AchievementDependencies** | [**DependantOn**](DependantOn.md) |  | [optional] 
**MemberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**ProductTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**AddConstraints** | **List&lt;string&gt;** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

