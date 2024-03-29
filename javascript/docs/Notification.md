# @ZiqniTechAdminApiClient.Notification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **{String: Object}** |  | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**messageType** | [**MessageType**](MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | [**NotificationStatus**](NotificationStatus.md) |  | 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**constraints** | **[String]** | Additional constraints | 
**memberTags** | **[String]** |  | [optional] 
**memberIds** | **[String]** |  | [optional] 


