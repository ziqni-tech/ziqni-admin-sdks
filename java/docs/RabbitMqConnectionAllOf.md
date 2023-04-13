

# RabbitMqConnectionAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the consumer | 
**description** | **String** | The description of the consumer |  [optional]
**uri** | **String** | The SQS endpoint. | 
**virtualHost** | **String** | The virtual host of the rabbitmq broker | 
**port** | **Integer** | The port number on which consumer will connect on rabbitmq broker | 
**userName** | **String** | Consumer username for authentication | 
**password** | **String** | Consumer password for authentication | 
**queueName** | **String** | Name of the queue | 
**exchange** | **String** | Exchange to connect to |  [optional]
**routingKey** | **String** | Routing key to use |  [optional]
**lastKnownStatus** | **String** | Last known status of the connection | 
**lastKnownStatusCode** | **Integer** | Status code correspoding to the last known status | 
**constraints** | **List&lt;String&gt;** | Additional constraints | 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | 
**connectionType** | **String** | The type of connection |  [optional]



