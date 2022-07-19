

# CreateMemberMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **Map&lt;String, Object&gt;** | A list of custom field entries |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**eventRefType** | **EventRefType** |  | 
**eventRefId** | **String** | The reference ID of the event object |  [optional]
**messageType** | **MessageType** |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**prize** | **String** | Unique system identifier of an Award |  [readonly]
**status** | **MessageStatus** |  | 
**expiry** | **OffsetDateTime** | The time that the message will disappear after. ISO8601 timestamp | 
**memberId** | **List&lt;String&gt;** | The reference ID of the event object | 
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]
**translatableFields** | **List&lt;String&gt;** | Message translatable fields |  [optional] [readonly]



