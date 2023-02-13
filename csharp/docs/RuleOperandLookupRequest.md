
# Org.OpenAPITools.Model.RuleOperandLookupRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Context** | **string** | The object context to search within | 
**SearchText** | **string** | The text to search, at least 3 characters are required. | [optional] 
**Id** | **List&lt;string&gt;** | The identifier to retrieve, if this is set search text will be ignored | [optional] 
**Skip** | **int** | How many response objects will be skipped for preview. Deafault is zero [0] | [optional] 
**Limit** | **int** | How many response objects will be returned. Deafult is zero [0] and the maximum is fifty [50] | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | [optional] 
**Operand** | **string** | The operand like \&quot;product.tags\&quot; or \&quot;member.tags\&quot; or \&quot;event.product\&quot; | 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

