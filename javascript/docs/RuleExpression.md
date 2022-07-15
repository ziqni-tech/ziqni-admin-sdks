# @ZiqniTechAdminApiClient.RuleExpression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | condition or expression or routine | 
**mustMatchAll** | **Boolean** | All expressions in the condition must either evaluate to TRUE or FALSE if set to TRUE | [optional] 
**mustEvaluateTo** | **Boolean** | All the expressions of this condition must either evaluate to TRUE or FALSE | [optional] 
**scope** | **String** | The scope of the operand used in the expression | [optional] 
**operand** | **String** | The order the rules have to be executed in. | [optional] 
**operator** | **String** | [ *.* ] or [ .* ] or [ &#x3D;&#x3D; ] or [ &gt; ] or [ &gt;&#x3D; ] or [ &lt;&#x3D;]  or [ &lt; ] or [ &lt;&gt; ] | [optional] 
**value** | **String** | The value associated with the expression | [optional] 
**rules** | [**[RuleExpression]**](RuleExpression.md) |  | [optional] 
**then** | [**[RuleRoutine]**](RuleRoutine.md) |  | [optional] 
**lineNumber** | **Number** |  | [optional] 


