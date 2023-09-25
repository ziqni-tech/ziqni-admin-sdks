
# Ziqni.Model.Member

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**Name** | **string** | The name of the member that is used on leader boards and public displays | 
**MemberRefId** | **string** | The reference to this member in your system | 
**MemberType** | **MemberType** |  | 
**Icon** | **string** | An Icon id that has been pre uploaded to the system to display for Member | [optional] 
**TeamMembers** | **List&lt;string&gt;** | A social group like Guilds | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints | [optional] 
**TimeZoneOffset** | **string** | The timezone offset from UTC to use for this member | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

