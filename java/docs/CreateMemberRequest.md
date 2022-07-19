

# CreateMemberRequest

This is a request for Member creation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of the member that is used on leader boards and public displays | 
**memberRefId** | **String** | The reference to this member in your system | 
**memberType** | **MemberType** |  | 
**teamMembers** | **List&lt;String&gt;** | A social group like Guilds |  [optional]
**addConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**timeZoneOffset** | **String** | To what time zone teh emmber belongs to |  [optional]
**customFields** | **Map&lt;String, Object&gt;** | A list of custom field entries |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]



