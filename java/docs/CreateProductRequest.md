

# CreateProductRequest

This is a request for Product creation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **Map&lt;String, Object&gt;** | A list of custom field entries |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | The name of the product | 
**description** | **String** | The description of the product for your reference |  [optional]
**adjustmentFactor** | **Double** | The multiplier to apply to source values received for this product events | 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Product |  [optional]
**productRefId** | **String** | The reference to this product in your system. The reference identifier can not be changed after the product has been created | 
**productType** | **String** | The type to this product in your system. |  [optional]
**actionTypeAdjustmentFactors** | [**List&lt;ActionTypeAdjustmentFactor&gt;**](ActionTypeAdjustmentFactor.md) |  |  [optional]
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]



