# @ZiqniTechAdminApiClient.UpdateRabbitMqConnectionRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the consumer | [optional] 
**description** | **String** | The description of the consumer | [optional] 
**uri** | **String** | The SQS endpoint. | [optional] 
**virtualHost** | **String** | The virtual host of the rabbitmq broker | [optional] 
**port** | **Number** | The port number on which consumer will connect on rabbitmq broker | [optional] 
**userName** | **String** | Consumer username for authentication | [optional] 
**password** | **String** | Consumer password for authentication | [optional] 
**queueName** | **String** | Name of the queue | [optional] 
**exchange** | **String** | Exchange to connect to | [optional] 
**routingKey** | **String** | Routing key to use | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | [optional] 


