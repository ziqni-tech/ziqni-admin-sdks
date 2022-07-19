

# DependantOn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**must** | **List&lt;String&gt;** | A rule indicating that it has to be included. Players that are in the EU group with a MUST rule - that means only players that have that group can participate |  [optional]
**mustNot** | **List&lt;String&gt;** | A rule indicating that it will not be included. Players that are in the EU group with a MUST-NOT rule - that means that players that have that group can NOT participate |  [optional]
**should** | **List&lt;String&gt;** | A rule indicating that some of them have to be included. Dependancy on shouldMatchAtLeast parameter. Players that are in the EU and DE groups with a SHOULD rule and a shouldMatchAtLeast with a value of 1 - that means that players that have 1 of the groups can participate |  [optional]
**shouldMatchAtLeast** | **Integer** | Dependant on should. Triggered when 2 or more should parameters selected |  [optional]



