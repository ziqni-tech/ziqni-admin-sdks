# @ZiqniTechAdminApiClient.Member

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **{String: Object}** |  | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of the member that is used on leader boards and public displays | 
**memberRefId** | **String** | The reference to this member in your system | 
**memberType** | [**MemberType**](MemberType.md) |  | 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Member | [optional] 
**teamMembers** | **[String]** | A social group like Guilds | [optional] 
**constraints** | **[String]** | Additional constraints | [optional] 
**timeZoneOffset** | **String** | The timezone offset from UTC to use for this member | [optional] 


