# @ZiqniTechAdminApiClient.UpdateSqsConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of the consumer | [optional] 
**description** | **String** | The description of the consumer | [optional] 
**uri** | **String** | The SQS endpoint. | [optional] 
**acessKey** | **String** | The access key of the IAM user | [optional] 
**secretKey** | **String** | The secret key of IAM user | [optional] 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | [optional] 
**id** | **String** | A unique system generated identifier | 


