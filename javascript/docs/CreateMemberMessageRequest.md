# @ZiqniTechAdminApiClient.CreateMemberMessageRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**eventRefType** | [**EventRefType**](EventRefType.md) |  | 
**eventRefId** | **String** | The reference ID of the event object | [optional] 
**messageType** | [**MessageType**](MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**prize** | **String** | Unique system identifier of an Award | [readonly] 
**status** | [**MessageStatus**](MessageStatus.md) |  | 
**expiry** | **Date** | The time that the message will disappear after. ISO8601 timestamp | 
**memberId** | **[String]** | The reference ID of the event object | 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**translatableFields** | **[String]** | Message translatable fields | [optional] [readonly] 


