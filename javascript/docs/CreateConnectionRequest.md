# @ZiqniTechAdminApiClient.CreateConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of the consumer | 
**description** | **String** | The description of the consumer | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | [optional] 
**connectionType** | [**ConnectionType**](ConnectionType.md) |  | 
**secret** | **String** | Consumer secret used for authentication | [optional] 
**user** | **String** | Consumer username for authentication | [optional] 


