# @ZiqniTechAdminApiClient.UpdateProductRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of the product | [optional] 
**productType** | **String** | Product type | [optional] 
**description** | **String** | The description of the product for your reference | [optional] 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Product | [optional] 
**banner** | **String** | Link to the banner | [optional] 
**bannerLowResolution** | **String** | Link to the bannerLowResolution | [optional] 
**bannerHighResolution** | **String** | Link to the bannerHighResolution | [optional] 
**adjustmentFactor** | **Number** | The multiplier to apply to source values received for this product events | [optional] 
**actionTypeAdjustmentFactors** | [**[ActionTypeAdjustmentFactor]**](ActionTypeAdjustmentFactor.md) |  | [optional] 


