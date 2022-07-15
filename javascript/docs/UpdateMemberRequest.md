# @ZiqniTechAdminApiClient.UpdateMemberRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of the member that is used on leader boards and public displays | [optional] 
**memberType** | [**MemberType**](MemberType.md) |  | [optional] 
**teamMembers** | **[String]** | A social group like Guilds | [optional] 
**addConstraints** | **[String]** | Additional constraints | [optional] 
**removeConstraints** | **[String]** | Additional constraints | [optional] 
**timeZoneOffset** | **String** | To what time zone teh emmber belongs to | [optional] 


