# @ZiqniTechAdminApiClient.UpdateConnectionRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the consumer | [optional] 
**description** | **String** | The description of the consumer | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | [optional] 
**connectionType** | [**ConnectionType**](ConnectionType.md) |  | [optional] 
**secret** | **String** | Consumer secret used for authentication | [optional] 
**user** | **String** | Consumer username for authentication | [optional] 


