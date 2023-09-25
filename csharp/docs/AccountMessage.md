
# Ziqni.Model.AccountMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**Expiry** | **DateTime** | The time that the message will disappear after. ISO8601 timestamp | [optional] 
**EventRefType** | **EventRefType** |  | 
**EventRefId** | **string** | The reference ID of the event object | 
**MessageType** | **MessageType** |  | 
**Subject** | **string** | The title of the message | 
**Body** | **string** | The context of the message | 
**Status** | **MessageStatus** |  | 
**UserId** | **string** |  | 
**Links** | [**List&lt;MessageLink&gt;**](MessageLink.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

