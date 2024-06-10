# @ZiqniTechAdminApiClient.CreateRewardTypeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of the Reward type | 
**description** | **String** | The description of a reward type | [optional] 
**key** | **String** | A unique key that represents the reward type | 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**addConstraints** | **[String]** | Additional constraints | [optional] 
**unitOfMeasure** | **String** |  | 
**scheduling** | [**[AwardScheduling]**](AwardScheduling.md) | Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award | [optional] 


