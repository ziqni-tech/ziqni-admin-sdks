
# Org.OpenAPITools.Model.UpdateContestRequestAllOf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | A name for the Contest. Can be translated | [optional] 
**Description** | **string** | A name for the Contest. Can be translated | [optional] 
**TermsAndConditions** | **string** | A name for the Contest. Can be translated | [optional] 
**RoundType** | **RoundType** |  | [optional] 
**MaxNumberOfEntrants** | **int** | Maximum number of entrants for the contest | [optional] 
**MinNumberOfEntrants** | **int** | Minimum number of entrants for the contest | [optional] 
**ScheduledStartDate** | **DateTime** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone | [optional] 
**ScheduledEndDate** | **DateTime** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone | [optional] 
**Strategies** | [**Strategy**](Strategy.md) |  | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

