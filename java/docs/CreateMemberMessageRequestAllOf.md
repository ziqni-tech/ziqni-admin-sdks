

# CreateMemberMessageRequestAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventRefType** | **EventRefType** |  | 
**eventRefId** | **String** | The reference ID of the event object |  [optional]
**messageType** | **MessageType** |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | **MessageStatus** |  | 
**expireAfterDate** | **OffsetDateTime** | Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified. |  [optional]
**expireAfterDays** | **Integer** | Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified. |  [optional]
**links** | [**List&lt;MessageLink&gt;**](MessageLink.md) |  | 
**memberIds** | **List&lt;String&gt;** |  |  [optional]
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]



