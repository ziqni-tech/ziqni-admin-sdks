
# Ziqni.Model.Achievement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**Name** | **string** | A name for the Achievement. Can be translated | 
**Description** | **string** | A name for the Achievement. Can be translated | [optional] 
**TermsAndConditions** | **string** | Terms and conditions of an achievement. Can be translated | [optional] 
**Icon** | **string** | An Icon id that has been pre uploaded to the system to display for Achievement | 
**Banner** | **string** | A banner id that has been pre uploaded to the system to display for Achievement | [optional] 
**BannerLowResolution** | **string** | A bannerLowResolution id that has been pre uploaded to the system to display for Achievement | [optional] 
**BannerHighResolution** | **string** | A bannerHighResolution id that has been pre uploaded to the system to display for Achievement | [optional] 
**Scheduling** | [**Scheduling**](Scheduling.md) |  | [optional] 
**MaxNumberOfIssues** | **int** | Maximum number of issued achievements | [optional] 
**Status** | **AchievementStatus** |  | [optional] 
**StatusCode** | **int** | The code of the contest | [optional] [readonly] 
**Constraints** | **List&lt;string&gt;** | Additional constraints, if set means true | 
**AchievementDependencies** | [**DependantOn**](DependantOn.md) |  | [optional] 
**MemberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**Products** | [**List&lt;ProductReduced&gt;**](ProductReduced.md) |  | [optional] 
**ProductTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**Strategies** | [**AchievementStrategies**](AchievementStrategies.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

