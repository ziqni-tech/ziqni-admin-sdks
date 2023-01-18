

# ProductReduced

This is a Product model with fewer parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**name** | **String** | The name of the product |  [optional]
**productRefId** | **String** | The reference to this product in your system. The reference identifier can not be changed after the product has been created | 
**tags** | **List&lt;String&gt;** | A list of Strings used to tag products with taxonomy terms |  [optional]



