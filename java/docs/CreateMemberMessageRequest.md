

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
**status** | **MessageStatus** |  | 
**expireAfterDate** | **OffsetDateTime** | Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified. |  [optional]
**expireAfterDays** | **Integer** | Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified. |  [optional]
**links** | [**List&lt;MessageLink&gt;**](MessageLink.md) |  | 
**memberIds** | **List&lt;String&gt;** |  |  [optional]
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]



