

# UpdateKafkaConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **Map&lt;String, Object&gt;** | A list of id&#39;s used to add cutom fields |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | The name of the consumer |  [optional]
**description** | **String** | The description of the consumer |  [optional]
**brokers** | **String** | Kafka broker endpoints. |  [optional]
**groupId** | **String** | Group Id for connection |  [optional]
**topic** | **String** | Topic name |  [optional]
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used |  [optional]
**id** | **String** | A unique system generated identifier | 



