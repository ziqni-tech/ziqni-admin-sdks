
# Org.OpenAPITools.Model.Webhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**PostToUrl** | **string** | A URL to post the webhook to | 
**Triggers** | **List&lt;string&gt;** | A list of event triggers | 
**Description** | **string** | The description of a Webhook | [optional] 
**Name** | **string** | The name of a Webhook | 
**Headers** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**Status** | **ConnectionState** |  | 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

