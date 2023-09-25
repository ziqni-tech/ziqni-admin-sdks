
# Ziqni.Model.RuleExpression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | condition or expression or routine | 
**MustMatchAll** | **bool** | All expressions in the condition must either evaluate to TRUE or FALSE if set to TRUE | [optional] 
**MustEvaluateTo** | **bool** | All the expressions of this condition must either evaluate to TRUE or FALSE | [optional] 
**Scope** | **string** | The scope of the operand used in the expression | [optional] 
**Operand** | **string** | The operand for the rule. | [optional] 
**Operator** | **string** | [ *.* ] or [ .* ] or [ &#x3D;&#x3D; ] or [ &gt; ] or [ &gt;&#x3D; ] or [ &lt;&#x3D;]  or [ &lt; ] or [ &lt;&gt; ] | [optional] 
**Value** | **string** | The value associated with the expression | [optional] 
**Rules** | [**List&lt;RuleExpression&gt;**](RuleExpression.md) |  | [optional] 
**Then** | [**List&lt;RuleRoutine&gt;**](RuleRoutine.md) | The routine to run when all the conditions have evaluted to the required level | [optional] 
**LineNumber** | **int** | The order the rules have to be executed in. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

