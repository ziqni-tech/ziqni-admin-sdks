# @ZiqniTechAdminApiClient.CreateKafkaConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of the consumer | 
**description** | **String** | The description of the consumer | [optional] 
**brokers** | **String** | Kafka broker endpoints. | 
**groupId** | **String** | Group Id for connection | 
**topic** | **String** | Topic name | 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | 


