# @ZiqniTechAdminApiClient.SqsConnection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **{String: Object}** |  | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The type of the consumer | 
**description** | **String** | The description of the consumer | [optional] 
**uri** | **String** | The SQS endpoint. | 
**acessKey** | **String** | The access key of the IAM user | 
**lastKnownStatus** | **String** | Last known status of the connection | 
**lastKnownStatusCode** | **Number** | Status code correspoding to the last known status | 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | 
**connectionType** | **String** | The type of connection | [optional] 


