# @ZiqniTechAdminApiClient.CreateMemberMessageRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eventRefType** | [**EventRefType**](EventRefType.md) |  | 
**eventRefId** | **String** | The reference ID of the event object | [optional] 
**messageType** | [**MessageType**](MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | [**MessageStatus**](MessageStatus.md) |  | 
**expireAfterDate** | **Date** | Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified. | [optional] 
**expireAfterDays** | **Number** | Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified. | [optional] 
**links** | [**[MessageLink]**](MessageLink.md) |  | 
**memberIds** | **[String]** |  | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 


