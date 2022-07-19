

# UpdateProductRequest

This is a request for Product update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **Map&lt;String, Object&gt;** | A list of id&#39;s used to add cutom fields |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | The name of the product |  [optional]
**description** | **String** | The description of the product for your reference |  [optional]
**adjustmentFactor** | **Double** | The multiplier to apply to source values received for this product events |  [optional]
**actionTypeAdjustmentFactors** | [**List&lt;ActionTypeAdjustmentFactor&gt;**](ActionTypeAdjustmentFactor.md) |  |  [optional]



