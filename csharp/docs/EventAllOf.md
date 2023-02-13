
# Org.OpenAPITools.Model.EventAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MemberId** | **string** | Unique system identifier of a Member | [optional] 
**MemberRefId** | **string** | The reference to this member in external system | [optional] 
**Action** | **string** | The identifier that describes the meaning of this event | 
**BatchId** | **string** | The batch identifier is used to group related event stream data together. This could be as simple as a UUID or your internal reference to that distinct player session event | [optional] 
**EntityId** | **string** | It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award | [optional] 
**EntityRefId** | **string** | It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award | [optional] 
**SourceValue** | **double** | The actual numerical value related to the event | 
**Points** | **double** | A value derived from the source value field. In the context of Product additionally an adjustment factor will be applied | 
**TransactionTimestamp** | **DateTime** | ISO8601 timestamp for when this event happened. All records are stored in UTC time zone | 
**Metadata** | **Dictionary&lt;string, Object&gt;** | Event metadata map. | [optional] 
**CustomFields** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Tags** | **List&lt;string&gt;** | A list of Strings of groups that the tag belongs to | [optional] 
**RelatesTo** | **List&lt;string&gt;** |  | [optional] 
**RelatesToExternal** | **List&lt;string&gt;** |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

