# @ZiqniTechAdminApiClient.Achievement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **{String: Object}** |  | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
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
**productTagsFilter** | [**DependantOn**](DependantOn.md) |  | [optional] 
**strategies** | [**AchievementStrategies**](AchievementStrategies.md) |  | [optional] 


