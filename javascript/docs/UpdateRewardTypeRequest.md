# @ZiqniTechAdminApiClient.UpdateRewardTypeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of the Reward type | [optional] 
**description** | **String** | The description of a reward type | [optional] 
**addConstraints** | **[String]** | Additional constraints | [optional] 
**removeConstraints** | **[String]** | Remove constraints | [optional] 
**unitOfMeasure** | **String** |  | [optional] 
**scheduling** | [**[AwardScheduling]**](AwardScheduling.md) | Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award | [optional] 


