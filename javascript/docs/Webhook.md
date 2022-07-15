# @ZiqniTechAdminApiClient.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **{String: Object}** |  | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**postToUrl** | **String** | A URL to post the webhook to | 
**triggers** | **[String]** | A list of event triggers | 
**description** | **String** | The description of a Webhook | [optional] 
**name** | **String** | The name of a Webhook | 
**headers** | **{String: String}** |  | [optional] 
**status** | [**ConnectionState**](ConnectionState.md) |  | 


