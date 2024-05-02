

# Achievement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **Map&lt;String, Object&gt;** |  |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | A name for the Achievement. Can be translated | 
**description** | **String** | A name for the Achievement. Can be translated |  [optional]
**termsAndConditions** | **String** | Terms and conditions of an achievement. Can be translated |  [optional]
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Achievement | 
**banner** | **String** | A banner id that has been pre uploaded to the system to display for Achievement |  [optional]
**bannerLowResolution** | **String** | A bannerLowResolution id that has been pre uploaded to the system to display for Achievement |  [optional]
**bannerHighResolution** | **String** | A bannerHighResolution id that has been pre uploaded to the system to display for Achievement |  [optional]
**scheduling** | [**Scheduling**](Scheduling.md) |  |  [optional]
**maxNumberOfIssues** | **Integer** | Maximum number of issued achievements |  [optional]
**status** | **AchievementStatus** |  |  [optional]
**statusCode** | **Integer** | The code of the contest |  [optional] [readonly]
**constraints** | **List&lt;String&gt;** | Additional constraints, if set means true | 
**achievementDependencies** | [**DependantOn**](DependantOn.md) |  |  [optional]
**memberTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**products** | [**List&lt;ProductReduced&gt;**](ProductReduced.md) | Restrict this to specific products |  [optional]
**productTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**strategies** | [**AchievementStrategies**](AchievementStrategies.md) |  |  [optional]



