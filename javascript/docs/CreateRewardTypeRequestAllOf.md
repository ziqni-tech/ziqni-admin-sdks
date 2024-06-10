# @ZiqniTechAdminApiClient.CreateRewardTypeRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the Reward type | 
**description** | **String** | The description of a reward type | [optional] 
**key** | **String** | A unique key that represents the reward type | 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 
**addConstraints** | **[String]** | Additional constraints | [optional] 
**unitOfMeasure** | **String** |  | 
**scheduling** | [**[AwardScheduling]**](AwardScheduling.md) | Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award | [optional] 


