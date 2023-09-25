# @ZiqniTechAdminApiClient.CreateEventRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberRefId** | **String** | The reference to this member in external system | 
**action** | **String** | The identifier that describes the meaning of this event | 
**batchId** | **String** | The batch identifier is used to group related event stream data together. This could be as simple as a UUID or your internal reference to that distinct player session event | [optional] 
**entityRefId** | **String** | It is a reference to a game/product ID from external system | 
**sourceValue** | **Number** | The actual numerical value related to the event | 
**transactionTimestamp** | **Date** | ISO8601 timestamp for when this event happened. All records are stored in UTC time zone | 
**tags** | **[String]** | A list of Strings of groups that the tag belongs to | [optional] 
**eventRefId** | **String** |  | 
**memberId** | **String** |  | [optional] 
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**unitOfMeasure** | **String** | The unit of measure is used to determine the type of the source value. It is used to normalize points values for currency based calculations by normalizing the source value. | [optional] 


