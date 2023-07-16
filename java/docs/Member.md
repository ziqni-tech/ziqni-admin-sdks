

# Member

This is the Member model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **OffsetDateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **Map&lt;String, Object&gt;** |  |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | The name of the member that is used on leader boards and public displays | 
**memberRefId** | **String** | The reference to this member in your system | 
**memberType** | **MemberType** |  | 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for Member |  [optional]
**teamMembers** | **List&lt;String&gt;** | A social group like Guilds |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**timeZoneOffset** | **String** | The timezone offset from UTC to use for this member |  [optional]



