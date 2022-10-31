# @ZiqniTechAdminApiClient.UpdateConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**id** | **String** | A unique system generated identifier | 
**name** | **String** | The name of the consumer | [optional] 
**description** | **String** | The description of the consumer | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | [optional] 
**connectionType** | [**ConnectionType**](ConnectionType.md) |  | [optional] 
**secret** | **String** | Consumer secret used for authentication | [optional] 
**user** | **String** | Consumer username for authentication | [optional] 


