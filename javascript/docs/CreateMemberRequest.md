# @ZiqniTechAdminApiClient.CreateMemberRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the member that is used on leader boards and public displays | 
**memberRefId** | **String** | The reference to this member in your system | 
**memberType** | [**MemberType**](MemberType.md) |  | 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Member | [optional] 
**teamMembers** | **[String]** | A social group like Guilds | [optional] 
**addConstraints** | **[String]** | Additional constraints | [optional] 
**timeZoneOffset** | **String** | To what time zone teh emmber belongs to | [optional] 
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 


