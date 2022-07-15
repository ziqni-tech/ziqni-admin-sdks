# @ZiqniTechAdminApiClient.CreateSqsConnectionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of the consumer | 
**uri** | **String** | The SQS endpoint. | 
**acessKey** | **String** | The access key of the IAM user | 
**secretKey** | **String** | The secret key of IAM user | 
**description** | **String** | The description of the consumer | [optional] 
**transformerId** | **String** | The transformer to use, if empty the default system transformer will be used | 


