# @ZiqniTechAdminApiClient.CreateNotificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**messageType** | [**MessageType**](MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | [**MessageStatus**](MessageStatus.md) |  | 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**constraints** | **[String]** | Additional constraints | 
**memberTags** | **[String]** |  | [optional] 
**memberIds** | **[String]** |  | [optional] 


