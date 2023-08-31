# @ZiqniTechAdminApiClient.EventAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memberId** | **String** | Unique system identifier of a Member | [optional] 
**memberRefId** | **String** | The reference to this member in external system | [optional] 
**action** | **String** | The identifier that describes the meaning of this event | 
**batchId** | **String** | The batch identifier is used to group related event stream data together. This could be as simple as a UUID or your internal reference to that distinct player session event | [optional] 
**entityId** | **String** | It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award | [optional] 
**eventRefId** | **String** | It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award | [optional] 
**entityRefId** | **String** | It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award | [optional] 
**sourceValue** | **Number** | The actual numerical value related to the event | 
**points** | **Number** | A value derived from the source value field. In the context of Product additionally an adjustment factor will be applied | 
**transactionTimestamp** | **Date** | ISO8601 timestamp for when this event happened. All records are stored in UTC time zone | 
**metadata** | **{String: Object}** | Event metadata map. | [optional] 
**customFields** | **{String: Object}** |  | [optional] 
**tags** | **[String]** | A list of Strings of groups that the tag belongs to | [optional] 
**relatesTo** | **[String]** |  | [optional] 
**relatesToExternal** | **[String]** |  | [optional] 
**unitOfMeasure** | **String** | The unit of measure is used to determine the type of the source value. It is used to normalize points values for currency based calculations by normalizing the source value. | [optional] 


