

# CreateConnectionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **Map&lt;String, Object&gt;** | A list of custom field entries |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | The name of the consumer | 
**description** | **String** | The description of the consumer |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used |  [optional]
**connectionType** | **ConnectionType** |  | 
**secret** | **String** | Consumer secret used for authentication |  [optional]
**user** | **String** | Consumer username for authentication |  [optional]



