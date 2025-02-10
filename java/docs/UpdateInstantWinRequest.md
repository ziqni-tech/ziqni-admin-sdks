

# UpdateInstantWinRequest

This is a request for Instant win update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **Map&lt;String, Object&gt;** | A list of id&#39;s used to add cutom fields |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** |  |  [optional]
**description** | **String** |  |  [optional]
**termsAndConditions** | **String** |  |  [optional]
**constraints** | **List&lt;String&gt;** |  |  [optional]
**statusCode** | **Integer** | integer |  [optional]
**startDate** | **OffsetDateTime** | The start date and time of a schedule. ISO8601 timestamp |  [optional]
**endDate** | **OffsetDateTime** | The end date and time of a schedule. ISO8601 timestamp |  [optional]
**instantWinType** | **Integer** | integer |  [optional]
**icon** | **String** | Attachement id for the corresponding icon image. |  [optional]
**banner** | **String** | Link to the banner |  [optional]
**bannerLowResolution** | **String** | Link to the bannerLowResolution |  [optional]
**bannerHighResolution** | **String** | Link to the bannerHighResolution |  [optional]
**tiles** | [**List&lt;UpdateInstantWinTile&gt;**](UpdateInstantWinTile.md) |  |  [optional]
**style** | **String** | A link link to the cms entry for this objects style sheet |  [optional]



