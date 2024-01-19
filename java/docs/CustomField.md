

# CustomField

Custom field model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**name** | **String** | The name of a Custom field | 
**key** | **String** | The key of a Custom field | 
**description** | **String** | The description of a Custom field |  [optional]
**fieldType** | **FieldType** |  | 
**appliesTo** | **AppliesTo** |  | 
**constraints** | **List&lt;String&gt;** | For example \&quot;required\&quot; to indicate the field is required. |  [optional]



