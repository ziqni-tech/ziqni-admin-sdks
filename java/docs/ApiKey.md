

# ApiKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **Map&lt;String, Object&gt;** |  |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**description** | **String** | The description of an Api key |  [optional]
**whiteListIPs** | **List&lt;String&gt;** | the IP&#39;s that need to be whitelisted with the Api key |  [optional]
**key** | **String** | An Api key hash | 
**role** | **Role** |  | 
**constraints** | **List&lt;String&gt;** | Additional constraints | 



