# @ZiqniTechAdminApiClient.MemberMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **{String: Object}** |  | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**eventRefType** | [**EventRefType**](EventRefType.md) |  | 
**eventRefId** | **String** | The reference ID of the event object | [optional] 
**messageType** | [**MessageType**](MessageType.md) |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | [**MessageStatus**](MessageStatus.md) |  | 
**expiry** | **Date** | The time that the message will disappear after. ISO8601 timestamp | 
**links** | [**MessageLink**](MessageLink.md) |  | 
**memberIds** | **[String]** |  | [optional] 


