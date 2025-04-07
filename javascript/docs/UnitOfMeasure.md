# @ZiqniTechAdminApiClient.UnitOfMeasure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **{String: Object}** |  | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of a unit of measure | 
**key** | **String** | The reference to the unit of measure in your system | 
**description** | **String** | The description of a unit of measure | [optional] 
**isoCode** | **String** | An alphabetical or numerical code to identify a unit of measure | [optional] 
**symbol** | **String** | The symbol of a unit of measure | [optional] 
**subUnit** | **String** | The subunit of a unit of measure | [optional] 
**subUnitSymbol** | **String** | The sub unit symbol of a unit of measure | [optional] 
**subUnitConversion** | **Number** | The sub unit conversion | [optional] 
**multiplier** | **Number** | Is used to multiply the value from the standardised one that is being used | 
**unitOfMeasureType** | [**UnitOfMeasureType**](UnitOfMeasureType.md) |  | 


