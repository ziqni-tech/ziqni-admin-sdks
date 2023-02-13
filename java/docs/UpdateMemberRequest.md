

# UpdateMemberRequest

This is a request for Member update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **Map&lt;String, Object&gt;** | A list of id&#39;s used to add cutom fields |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | The name of the member that is used on leader boards and public displays |  [optional]
**memberType** | **MemberType** |  |  [optional]
**teamMembers** | **List&lt;String&gt;** | A social group like Guilds |  [optional]
**addConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**removeConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**timeZoneOffset** | **String** | To what time zone teh emmber belongs to |  [optional]



