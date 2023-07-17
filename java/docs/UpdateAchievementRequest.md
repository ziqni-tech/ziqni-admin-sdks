

# UpdateAchievementRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **Map&lt;String, Object&gt;** | A list of id&#39;s used to add cutom fields |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | A name for the Achievement. Can be translated |  [optional]
**description** | **String** | A name for the Achievement. Can be translated |  [optional]
**termsAndConditions** | **String** | Terms and conditions of an achievement. Can be translated |  [optional]
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement |  [optional]
**scheduling** | [**Scheduling**](Scheduling.md) |  |  [optional]
**achievementLiveStatus** | **AchievementLiveStatus** |  |  [optional]
**maxNumberOfIssues** | **Integer** | Maximum number of issued achievements |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**achievementDependencies** | [**DependantOn**](DependantOn.md) |  |  [optional]
**memberTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**productIds** | **List&lt;String&gt;** |  |  [optional]
**productTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**addConstraints** | **List&lt;String&gt;** |  |  [optional]
**removeConstraints** | **List&lt;String&gt;** |  |  [optional]
**strategies** | [**AchievementStrategies**](AchievementStrategies.md) |  |  [optional]



