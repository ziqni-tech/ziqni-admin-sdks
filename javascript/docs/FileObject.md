# @ZiqniTechAdminApiClient.FileObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**spaceName** | **String** | This is the space name which is linked to the account | 
**created** | **Date** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**customFields** | **{String: Object}** |  | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 
**repositoryId** | **String** | The repository identifier this file belongs too | 
**name** | **String** | Name of the original file uploaded | 
**mimeType** | **String** | Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excelor or application/x-directory for directories | 
**path** | **String** | The name of the attachment within the bucket | 
**parentFolderPath** | **String** | The folder name containing the attachment within the bucket | 
**uri** | **String** | The uniform resource identifier where the file can be viewed/downloaded | [optional] 
**size** | **Number** | The size of the file | [optional] 
**constraints** | **[String]** | Additional constraints, if the value is present it means the | [optional] 


