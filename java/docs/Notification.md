

# Notification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **Map&lt;String, Object&gt;** |  |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**messageType** | **MessageType** |  | 
**subject** | **String** | The title of the message | 
**body** | **String** | The context of the message | 
**status** | **NotificationStatus** |  | 
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]
**scheduling** | [**Scheduling**](Scheduling.md) |  | 
**constraints** | **List&lt;String&gt;** | Additional constraints | 
**memberTags** | **List&lt;String&gt;** |  |  [optional]
**memberIds** | **List&lt;String&gt;** |  |  [optional]



