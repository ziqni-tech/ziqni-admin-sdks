
# Org.OpenAPITools.Model.CreateEventRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MemberRefId** | **string** | The reference to this member in external system | 
**Action** | **string** | The identifier that describes the meaning of this event | 
**BatchId** | **string** | The batch identifier is used to group related event stream data together. This could be as simple as a UUID or your internal reference to that distinct player session event | [optional] 
**EntityRefId** | **string** | It is a reference to a game/product ID from external system | 
**SourceValue** | **double** | The actual numerical value related to the event | 
**TransactionTimestamp** | **DateTime** | ISO8601 timestamp for when this event happened. All records are stored in UTC time zone | 
**Tags** | **List&lt;string&gt;** | A list of Strings of groups that the tag belongs to | [optional] 
**EventRefId** | **string** |  | 
**MemberId** | **string** |  | [optional] 
**CustomFields** | **Dictionary&lt;string, Object&gt;** | A list of custom field entries | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

