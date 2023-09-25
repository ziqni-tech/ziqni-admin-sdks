
# Ziqni.Model.CreateNotificationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomFields** | **Dictionary&lt;string, Object&gt;** | A list of custom field entries | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**MessageType** | **MessageType** |  | 
**Subject** | **string** | The title of the message | 
**Body** | **string** | The context of the message | 
**Status** | **MessageStatus** |  | 
**Translations** | [**List&lt;Translation&gt;**](Translation.md) |  | [optional] 
**Scheduling** | [**Scheduling**](Scheduling.md) |  | 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 
**MemberTags** | **List&lt;string&gt;** |  | [optional] 
**MemberIds** | **List&lt;string&gt;** |  | [optional] 
**ExpireAfterDate** | **DateTime** | Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified. | [optional] 
**ExpireAfterDays** | **int** | Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

