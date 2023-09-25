
# Ziqni.Model.UpdateContestRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** | A list of id&#39;s used to add cutom fields | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**Name** | **string** | A name for the Contest. Can be translated | [optional] 
**Description** | **string** | A name for the Contest. Can be translated | [optional] 
**TermsAndConditions** | **string** | A name for the Contest. Can be translated | [optional] 
**RoundType** | **RoundType** |  | [optional] 
**MaxNumberOfEntrants** | **int** | Maximum number of entrants for the contest | [optional] 
**MinNumberOfEntrants** | **int** | Minimum number of entrants for the contest | [optional] 
**ScheduledStartDate** | **DateTime** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | [optional] 
**ScheduledEndDate** | **DateTime** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | [optional] 
**Strategies** | [**TournamentStrategies**](TournamentStrategies.md) |  | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | [optional] 
**Icon** | **string** | Link to the icon | [optional] 
**Banner** | **string** | Link to the banner | [optional] 
**BannerLowResolution** | **string** | Link to the bannerLowResolution | [optional] 
**BannerHighResolution** | **string** | Link to the bannerHighResolution | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

