# @ZiqniTechAdminApiClient.CreateProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of the product | 
**description** | **String** | The description of the product for your reference | [optional] 
**adjustmentFactor** | **Number** | The multiplier to apply to source values received for this product events | 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Product | [optional] 
**banner** | **String** | Link to the banner | [optional] 
**bannerLowResolution** | **String** | Link to the bannerLowResolution | [optional] 
**bannerHighResolution** | **String** | Link to the bannerHighResolution | [optional] 
**productRefId** | **String** | The reference to this product in your system. The reference identifier can not be changed after the product has been created | 
**productType** | **String** | The type to this product in your system. | [optional] 
**actionTypeAdjustmentFactors** | [**[ActionTypeAdjustmentFactor]**](ActionTypeAdjustmentFactor.md) |  | [optional] 
**translations** | [**[Translation]**](Translation.md) |  | [optional] 


