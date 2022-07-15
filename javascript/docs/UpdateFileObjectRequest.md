# @ZiqniTechAdminApiClient.UpdateFileObjectRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **{String: Object}** | A list of id&#39;s used to add cutom fields | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**repositoryId** | **String** | The repository identifier this file belongs too | [optional] 
**name** | **String** | Name of the original file uploaded | [optional] 
**mimeType** | **String** | Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excel | [optional] 
**parentFolderPath** | **String** | The folder containing the attachment within the repository | [optional] 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | [optional] 


