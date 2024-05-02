

# CreateAchievementRequestAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the Achievement. Can be translated | 
**description** | **String** | A name for the Achievement. Can be translated |  [optional]
**termsAndConditions** | **String** | Terms and conditions of an achievement. Can be translated |  [optional]
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement |  [optional]
**banner** | **String** | A banner id that has been pre uploaded to the system to display for Achievement |  [optional]
**bannerLowResolution** | **String** | A bannerLowResolution id that has been pre uploaded to the system to display for Achievement |  [optional]
**bannerHighResolution** | **String** | A bannerHighResolution id that has been pre uploaded to the system to display for Achievement |  [optional]
**rules** | [**List&lt;Rule&gt;**](Rule.md) |  |  [optional]
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**maxNumberOfIssues** | **Integer** | Maximum number of issued achievements |  [optional]
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]
**rewards** | [**List&lt;CreateRewardRequest&gt;**](CreateRewardRequest.md) |  |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints | 
**achievementDependencies** | [**DependantOn**](DependantOn.md) |  |  [optional]
**memberTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**productIds** | **List&lt;String&gt;** | Restrict this to specific products |  [optional]
**productTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**addConstraints** | **List&lt;String&gt;** |  |  [optional]
**strategies** | [**AchievementStrategies**](AchievementStrategies.md) |  |  [optional]



