
# Ziqni.Model.Connection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**Name** | **string** | The name of the consumer | 
**Description** | **string** | The description of the consumer | [optional] 
**LastKnownStatus** | **string** | Last known status of the connection | 
**LastKnownStatusCode** | **int** | Status code correspoding to the last known status | 
**Constraints** | **List&lt;string&gt;** | Additional constraints | 
**TransformerId** | **string** | The transformer to use, if empty the default system transformer will be used | 
**ConnectionType** | **ConnectionType** |  | [optional] 
**Secret** | **string** | Consumer secret used for authentication | 
**User** | **string** | Consumer username for authentication | 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

