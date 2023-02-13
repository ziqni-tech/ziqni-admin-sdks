

# Connection


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
**lastKnownStatus** | **String** | Last known status of the connection | 
**lastKnownStatusCode** | **Integer** | Status code correspoding to the last known status | 
**constraints** | **List&lt;String&gt;** | Additional constraints | 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | 
**connectionType** | **ConnectionType** |  |  [optional]
**secret** | **String** | Consumer secret used for authentication | 
**user** | **String** | Consumer username for authentication | 



