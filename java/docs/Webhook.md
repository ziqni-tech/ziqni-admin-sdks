

# Webhook


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **Map&lt;String, Object&gt;** |  |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**postToUrl** | **String** | A URL to post the webhook to | 
**triggers** | **List&lt;String&gt;** | A list of event triggers | 
**description** | **String** | The description of a Webhook |  [optional]
**name** | **String** | The name of a Webhook | 
**headers** | **Map&lt;String, String&gt;** |  |  [optional]
**status** | **ConnectionState** |  | 



