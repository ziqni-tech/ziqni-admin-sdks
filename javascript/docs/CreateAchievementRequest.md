# @ZiqniTechAdminApiClient.CreateAchievementRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | A name for the Achievement. Can be translated | 
**description** | **String** | A name for the Achievement. Can be translated | [optional] 
**termsAndConditions** | **String** | Terms and conditions of an achievement. Can be translated | [optional] 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement | [optional] 
**banner** | **String** | A banner id that has been pre uploaded to the system to display for Achievement | [optional] 
**bannerLowResolution** | **String** | A bannerLowResolution id that has been pre uploaded to the system to display for Achievement | [optional] 
**bannerHighResolution** | **String** | A bannerHighResolution id that has been pre uploaded to the system to display for Achievement | [optional] 
**rules** | [**[Rule]**](Rule.md) |  | [optional] 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**maxNumberOfIssues** | **Number** | Maximum number of issued achievements | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**rewards** | [**[CreateRewardRequest]**](CreateRewardRequest.md) |  | [optional] 
**constraints** | **[String]** | Additional constraints | 
**achievementDependencies** | [**DependantOn**](DependantOn.md) |  | [optional] 
**memberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**productIds** | **[String]** |  | [optional] 
**productTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**addConstraints** | **[String]** |  | [optional] 
**strategies** | [**AchievementStrategies**](AchievementStrategies.md) |  | [optional] 


