

# Product

This is the Product model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **Map&lt;String, Object&gt;** |  |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | The name of the product | 
**description** | **String** | The description of the product for your reference |  [optional]
**adjustmentFactor** | **Double** | The multiplier to apply to source values received for this product events | 
**productRefId** | **String** | The reference to this product in your system. The reference identifier can not be changed after the product has been created | 
**productType** | **String** | The type to this product in your system. |  [optional]
**actionTypeAdjustmentFactors** | [**List&lt;ActionTypeAdjustmentFactor&gt;**](ActionTypeAdjustmentFactor.md) |  |  [optional]
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Product |  [optional]
**banner** | **String** | Link to the banner |  [optional]
**bannerLowResolution** | **String** | Link to the bannerLowResolution |  [optional]
**bannerHighResolution** | **String** | Link to the bannerHighResolution |  [optional]



