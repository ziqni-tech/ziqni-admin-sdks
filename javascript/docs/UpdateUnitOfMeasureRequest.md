# @ZiqniTechAdminApiClient.UpdateUnitOfMeasureRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of a unit of measure | [optional] 
**description** | **String** | The description of a unit of measure | [optional] 
**isoCode** | **String** | An alphabetical or numerical code to identify a unit of measure | [optional] 
**symbol** | **String** | The symbol of a unit of measure | [optional] 
**subUnit** | **String** | The subunit of a unit of measure | [optional] 
**subUnitSymbol** | **String** | The sub unit symbol of a unit of measure | [optional] 
**subUnitConversion** | **Number** | The sub unit conversion of a unit of measure | [optional] 
**multiplier** | **Number** | Is used to multiply the value from the standardised one that is being used | [optional] 
**unitOfMeasureType** | [**UnitOfMeasureType**](UnitOfMeasureType.md) |  | [optional] 


