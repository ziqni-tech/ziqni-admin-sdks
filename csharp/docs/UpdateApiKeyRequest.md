
# Org.OpenAPITools.Model.UpdateApiKeyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** | A list of id&#39;s used to add cutom fields | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**Description** | **string** | The description of an Api key | [optional] 
**WhiteListIPs** | **List&lt;string&gt;** | the IP&#39;s that need to be whitelisted with the Api key | [optional] 
**Key** | **string** | An Api key hash | [optional] [readonly] 
**Role** | **Role** |  | [optional] 
**AddConstraints** | **List&lt;string&gt;** | Additional constraints | [optional] 
**RemoveConstraints** | **List&lt;string&gt;** | Additional constraints | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

