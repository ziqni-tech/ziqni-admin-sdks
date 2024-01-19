

# CreateRabbitMqConnectionRequestAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the consumer |  [optional]
**description** | **String** | The description of the consumer |  [optional]
**port** | **Integer** | The port number on which consumer will connect on rabbitmq broker | 
**virtualHost** | **String** | The virtual host of the rabbitmq broker |  [optional]
**uri** | **String** | Broker endpoint | 
**userName** | **String** | Consumer username for authentication | 
**password** | **String** | Consumer password for authentication | 
**queueName** | **String** | Name of the queue | 
**exchange** | **String** | Exchange to bind to |  [optional]
**routingKey** | **String** | Routing key to use |  [optional]
**addConstraints** | **List&lt;String&gt;** | Additional constraints.   Supported values:  - ssl  - durable  - exclusive  - autoDelete |  [optional]
**transformerId** | **String** |  | 



