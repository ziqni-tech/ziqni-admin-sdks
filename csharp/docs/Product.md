
# Org.OpenAPITools.Model.Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**Name** | **string** | The name of the product | 
**Description** | **string** | The description of the product for your reference | [optional] 
**AdjustmentFactor** | **double** | The multiplier to apply to source values received for this product events | 
**ProductRefId** | **string** | The reference to this product in your system. The reference identifier can not be changed after the product has been created | 
**ActionTypeAdjustmentFactors** | [**List&lt;ActionTypeAdjustmentFactor&gt;**](ActionTypeAdjustmentFactor.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

