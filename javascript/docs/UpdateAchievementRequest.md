# @ZiqniTechAdminApiClient.UpdateAchievementRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | A name for the Achievement. Can be translated | [optional] 
**description** | **String** | A name for the Achievement. Can be translated | [optional] 
**termsAndConditions** | **String** | Terms and conditions of an achievement. Can be translated | [optional] 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement | [optional] 
**banner** | **String** | A banner id that has been pre uploaded to the system to display for Achievement | [optional] 
**bannerLowResolution** | **String** | A bannerLowResolution id that has been pre uploaded to the system to display for Achievement | [optional] 
**bannerHighResolution** | **String** | A bannerHighResolution id that has been pre uploaded to the system to display for Achievement | [optional] 
**scheduling** | [**Scheduling**](Scheduling.md) |  | [optional] 
**achievementLiveStatus** | [**AchievementStateActions**](AchievementStateActions.md) |  | [optional] 
**maxNumberOfIssues** | **Number** | Maximum number of issued achievements | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 
**achievementDependencies** | [**DependantOn**](DependantOn.md) |  | [optional] 
**memberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**productIds** | **[String]** |  | [optional] 
**productTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**addConstraints** | **[String]** |  | [optional] 
**removeConstraints** | **[String]** |  | [optional] 
**strategies** | [**AchievementStrategies**](AchievementStrategies.md) |  | [optional] 


