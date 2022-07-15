# @ZiqniTechAdminApiClient.UpdateApiKeyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**description** | **String** | The description of an Api key | [optional] 
**whiteListIPs** | **[String]** | the IP&#39;s that need to be whitelisted with the Api key | [optional] 
**key** | **String** | An Api key hash | [optional] [readonly] 
**role** | [**Role**](Role.md) |  | [optional] 
**addConstraints** | **[String]** | Additional constraints | [optional] 
**removeConstraints** | **[String]** | Additional constraints | [optional] 


