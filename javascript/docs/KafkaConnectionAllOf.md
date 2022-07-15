# @ZiqniTechAdminApiClient.KafkaConnectionAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the consumer | 
**description** | **String** | The description of the consumer | [optional] 
**brokers** | **String** | Kafka broker endpoints. | 
**groupId** | **String** | Group Id for connection | 
**topic** | **String** | Topic name | 
**lastKnownStatus** | **String** | Last known status of the connection | 
**lastKnownStatusCode** | **Number** | Status code correspoding to the last known status | 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | 
**connectionType** | **String** | The type of connection | [optional] 


