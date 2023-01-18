

# RabbitMqConnection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **Map&lt;String, Object&gt;** |  |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
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



