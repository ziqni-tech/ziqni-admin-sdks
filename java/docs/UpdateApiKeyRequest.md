

# UpdateApiKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **Map&lt;String, Object&gt;** | A list of id&#39;s used to add cutom fields |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**description** | **String** | The description of an Api key |  [optional]
**whiteListIPs** | **List&lt;String&gt;** | the IP&#39;s that need to be whitelisted with the Api key |  [optional]
**key** | **String** | An Api key hash |  [optional] [readonly]
**role** | **Role** |  |  [optional]
**addConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**removeConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]



