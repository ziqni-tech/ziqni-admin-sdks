# @ZiqniTechAdminApiClient.ApiKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **{String: Object}** |  | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**description** | **String** | The description of an Api key | [optional] 
**whiteListIPs** | **[String]** | the IP&#39;s that need to be whitelisted with the Api key | [optional] 
**key** | **String** | An Api key hash | 
**role** | [**Role**](Role.md) |  | 
**constraints** | **[String]** | Additional constraints | 


