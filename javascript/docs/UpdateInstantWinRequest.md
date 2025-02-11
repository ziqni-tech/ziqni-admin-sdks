# @ZiqniTechAdminApiClient.UpdateInstantWinRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** |  | [optional] 
**description** | **String** |  | [optional] 
**termsAndConditions** | **String** |  | [optional] 
**constraints** | **[String]** |  | [optional] 
**statusCode** | **Number** | integer | [optional] 
**startDate** | **Date** | The start date and time of a schedule. ISO8601 timestamp | [optional] 
**endDate** | **Date** | The end date and time of a schedule. ISO8601 timestamp | [optional] 
**instantWinType** | **Number** | integer | [optional] 
**icon** | **String** | Attachement id for the corresponding icon image. | [optional] 
**banner** | **String** | Link to the banner | [optional] 
**bannerLowResolution** | **String** | Link to the bannerLowResolution | [optional] 
**bannerHighResolution** | **String** | Link to the bannerHighResolution | [optional] 
**tiles** | [**[UpdateInstantWinTile]**](UpdateInstantWinTile.md) |  | [optional] 
**style** | **String** | A link link to the cms entry for this objects style sheet | [optional] 


