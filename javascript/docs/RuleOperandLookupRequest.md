# @ZiqniTechAdminApiClient.RuleOperandLookupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **String** | The object context to search within | 
**searchText** | **String** | The text to search, at least 3 characters are required. | [optional] 
**id** | **[String]** | The identifier to retrieve, if this is set search text will be ignored | [optional] 
**skip** | **Number** | How many response objects will be skipped for preview. Deafault is zero [0] | [optional] 
**limit** | **Number** | How many response objects will be returned. Deafult is zero [0] and the maximum is fifty [50] | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 


