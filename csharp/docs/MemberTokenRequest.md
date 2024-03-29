
# Ziqni.Model.MemberTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApiKey** | **string** | The API key to use to generate this token. | 
**IsReferenceId** | **bool** | Default is FALSE, if set to TRUE then the meberId will be assumed to be client provided reference id, if set to false then the memberId will be assumed to be a ZIQNI generated identifier. | [optional] 
**Origins** | **List&lt;string&gt;** | Allowed origins for the generated token. Leave empty to permit all origins, Alternative provide up to 3 allowed origin URIs like https://my-space.api.ziqni.app  | [optional] 
**Member** | **string** | The identifier used to find the member information. if this value is set to \&quot;__PUBLIC__\&quot; and isReferenceId is set to \&quot;FALSE\&quot; then a genral use, non-member specific token will be issued | 
**Expires** | **int** | The number of minutes this token will be valid for. If left blank the token will only be valid for 30 minutes | [optional] 
**Resource** | **string** | This will be ziqni-gapi or similar | 
**DisabledServices** | **List&lt;string&gt;** | A list of services to be disabled for this web token  | [optional] 
**LanguageKey** | **string** | The language code to use if none is provided in the member api requests  | [optional] 
**CurrencyKey** | **string** | The language key to use if none is provided in the member api requests | [optional] 
**TimeZoneOffset** | **int** | The time zone to use when returning date and time values | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

