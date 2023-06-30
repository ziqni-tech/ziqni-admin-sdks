# @ZiqniTechAdminApiClient.AchievementAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the Achievement. Can be translated | 
**description** | **String** | A name for the Achievement. Can be translated | [optional] 
**termsAndConditions** | **String** | Terms and conditions of an achievement. Can be translated | [optional] 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement | 
**scheduling** | [**Scheduling**](Scheduling.md) |  | [optional] 
**maxNumberOfIssues** | **Number** | Maximum number of issued achievements | [optional] 
**status** | [**AchievementStatus**](AchievementStatus.md) |  | [optional] 
**statusCode** | **Number** | The code of the contest | [optional] [readonly] 
**constraints** | **[String]** | Additional constraints, if set means true | 
**achievementDependencies** | [**DependantOn**](DependantOn.md) |  | [optional] 
**memberTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**products** | [**[ProductReduced]**](ProductReduced.md) |  | [optional] 
**productTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**strategies** | [**AchievementStrategies**](AchievementStrategies.md) |  | [optional] 


