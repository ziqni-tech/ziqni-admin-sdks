

# RuleOperandLookupRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | **String** | The object context to search within | 
**searchText** | **String** | The text to search, at least 3 characters are required. |  [optional]
**id** | **List&lt;String&gt;** | The identifier to retrieve, if this is set search text will be ignored |  [optional]
**skip** | **Integer** | How many response objects will be skipped for preview. Deafault is zero [0] |  [optional]
**limit** | **Integer** | How many response objects will be returned. Deafult is zero [0] and the maximum is fifty [50] |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints |  [optional]



