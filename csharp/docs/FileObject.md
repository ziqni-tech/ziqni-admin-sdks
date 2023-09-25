
# Ziqni.Model.FileObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | A unique system generated identifier | 
**SpaceName** | **string** | This is the space name which is linked to the account | 
**Created** | **DateTime** | ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone | 
**CustomFields** | **Dictionary&lt;string, Object&gt;** |  | [optional] 
**Tags** | **List&lt;string&gt;** | A list of id&#39;s used to tag models | [optional] 
**Metadata** | **Dictionary&lt;string, string&gt;** |  | [optional] 
**RepositoryId** | **string** | The repository identifier this file belongs too | 
**Name** | **string** | Name of the original file uploaded | 
**MimeType** | **string** | Mime type of the file. Valid mime types - text/csv or application/vmd.ms-excelor or application/x-directory for directories | 
**Path** | **string** | The name of the attachment within the bucket | 
**ParentFolderPath** | **string** | The folder name containing the attachment within the bucket | 
**Uri** | **string** | The uniform resource identifier where the file can be viewed/downloaded | [optional] 
**Size** | **long** | The size of the file | [optional] 
**Constraints** | **List&lt;string&gt;** | Additional constraints, if the value is present it means the | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

