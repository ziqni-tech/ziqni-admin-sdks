# @ZiqniTechAdminApiClient.UpdateRepositoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**name** | **String** | The name of the repository. No special charaters or spaces permitted | [optional] 
**description** | **String** | The description of the repository | [optional] 
**addConstraints** | **[String]** | Additional constraints | [optional] 
**removeConstraints** | **[String]** | Additional constraints | [optional] 
**hostingOptions** | [**HostingOptions**](HostingOptions.md) |  | [optional] 


