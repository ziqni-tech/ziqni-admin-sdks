

# CreateEventRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberRefId** | **String** | The reference to this member in external system | 
**action** | **String** | The identifier that describes the meaning of this event | 
**batchId** | **String** | The batch identifier is used to group related event stream data together. This could be as simple as a UUID or your internal reference to that distinct player session event |  [optional]
**entityRefId** | **String** | It is a reference to a game/product ID from external system | 
**sourceValue** | **Double** | The actual numerical value related to the event | 
**transactionTimestamp** | **OffsetDateTime** | ISO8601 timestamp for when this event happened. All records are stored in UTC time zone | 
**tags** | **List&lt;String&gt;** | A list of Strings of groups that the tag belongs to |  [optional]
**eventRefId** | **String** |  | 
**memberId** | **String** |  |  [optional]
**customFields** | **Map&lt;String, Object&gt;** | A list of custom field entries |  [optional]



