

# MemberMessage

This is the Member Message model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **Map&lt;String, Object&gt;** |  |  [optional]
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



