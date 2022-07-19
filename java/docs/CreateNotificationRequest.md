

# CreateNotificationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **Map&lt;String, Object&gt;** | A list of custom field entries |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**messageType** | **MessageType** |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | **MessageStatus** |  | 
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]
**memberGroup** | **List&lt;String&gt;** | The reference ID of the event object |  [optional]
**memberId** | **List&lt;String&gt;** | The reference ID of the event object | 
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**constraints** | **List&lt;String&gt;** | Additional constraints | 



