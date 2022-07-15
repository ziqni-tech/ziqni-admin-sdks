# @ZiqniTechAdminApiClient.DependantOn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**must** | **[String]** | A rule indicating that it has to be included. Players that are in the EU group with a MUST rule - that means only players that have that group can participate | [optional] 
**mustNot** | **[String]** | A rule indicating that it will not be included. Players that are in the EU group with a MUST-NOT rule - that means that players that have that group can NOT participate | [optional] 
**should** | **[String]** | A rule indicating that some of them have to be included. Dependancy on shouldMatchAtLeast parameter. Players that are in the EU and DE groups with a SHOULD rule and a shouldMatchAtLeast with a value of 1 - that means that players that have 1 of the groups can participate | [optional] 
**shouldMatchAtLeast** | **Number** | Dependant on should. Triggered when 2 or more should parameters selected | [optional] 


