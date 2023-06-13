# @ZiqniTechAdminApiClient.MemberTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiKey** | **String** | The API key to use to generate this token. | 
**isReferenceId** | **Boolean** | Default is FALSE, if set to TRUE then the meberId will be assumed to be client provided reference id, if set to false then the memberId will be assumed to be a ZIQNI generated identifier. | [optional] 
**origins** | **[String]** | Allowed origins for the generated token. Leave empty to permit all origins, Alternative provide up to 3 allowed origin URIs like https://my-space.api.ziqni.app  | [optional] 
**member** | **String** | The identifier used to find the member information. if this value is set to \&quot;__PUBLIC__\&quot; and isReferenceId is set to \&quot;FALSE\&quot; then a genral use, non-member specific token will be issued | 
**expires** | **Number** | The number of minutes this token will be valid for. If left blank the token will only be valid for 30 minutes | [optional] 
**resource** | **String** | This will be ziqni-gapi or similar | 
**disabledServices** | **[String]** | A list of services to be disabled for this web token  | [optional] 
**languageKey** | **String** | The language code to use if none is provided in the member api requests  | [optional] 
**currencyKey** | **String** | The language key to use if none is provided in the member api requests | [optional] 
**timeZoneOffset** | **Number** | The time zone to use when returning date and time values | [optional] 


