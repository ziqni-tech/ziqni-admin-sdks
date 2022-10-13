# @ZiqniTechAdminApiClient.CreateNotificationRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageType** | [**MessageType**](MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | [**MessageStatus**](MessageStatus.md) |  | 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**constraints** | **[String]** | Additional constraints | 
**memberTags** | **[String]** |  | [optional] 
**memberIds** | **[String]** |  | [optional] 
**expireAfterDate** | **Date** | Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified. | [optional] 
**expireAfterDays** | **Number** | Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified. | [optional] 


