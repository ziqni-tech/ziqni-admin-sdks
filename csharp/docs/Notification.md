
# Org.OpenAPITools.Model.Notification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**MessageType** | **MessageType** |  | 
**Subject** | **string** | The title of the message | 
**Body** | **string** | The context of the message | 
**Status** | **NotificationStatus** |  | 
**Translations** | [**List&lt;Translation&gt;**](Translation.md) |  | [optional] 
**Scheduling** | [**Scheduling**](Scheduling.md) |  | 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 
**MemberTags** | **List&lt;string&gt;** |  | [optional] 
**MemberIds** | **List&lt;string&gt;** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

