# @ZiqniTechAdminApiClient.CreateJackpotConfigRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Human-friendly jackpot name | [optional] 
**description** | **String** | Longer text description of the jackpot | [optional] 
**type** | [**JackpotConfigType**](JackpotConfigType.md) |  | [optional] 
**startDate** | **Date** | The date and time when this jackpot starts running | [optional] 
**endDate** | **Date** | The date and time when this jackpot stops running (if any) | [optional] 
**contributionPercentage** | **Number** | Fraction (0–1) of each qualifying amount that is actually contributed to the pool *before* applying operator/member splits. For example, 0.10 means 10% of a qualifying amount goes into the pool.  | [optional] 
**operatorSplitPercentage** | **Number** | The percentage of each player&#39;s contribution that goes to the operator&#39;s share of the jackpot.  | [optional] 
**memberSplitPercentage** | **Number** | The percentage of each player&#39;s contribution that goes to the player&#39;s share of the jackpot.  | [optional] 
**mustDropAfterHours** | **Number** | If this number of hours passes without a winner, the jackpot is forced to drop to someone.  | [optional] 
**jackpotThreshold** | **Number** | When the pool reaches this amount, the chance of dropping starts increasing faster.  | [optional] 
**payouts** | **Number** | How many times this jackpot can pay out before it ends.  | [optional] 
**dropAmount** | **Number** | The amount that will be paid out to a winner when the jackpot drops.  | [optional] 
**eventActions** | [**DependantOn**](DependantOn.md) |  | [optional] 
**productTags** | [**DependantOn**](DependantOn.md) |  | [optional] 
**productIds** | **[String]** | Product IDs for the config | [optional] 
**seedAmount** | **Number** | The starting amount of the jackpot when this config is created.  | [optional] 
**dropProbability** | **Number** | The base chance of the jackpot dropping with each contribution. For example, 0.002 means a 0.2% chance per entry.  | [optional] 
**logScalingFactor** | **Number** | A number that controls how fast the drop chance increases after reaching the threshold.  | [optional] 
**customFields** | **{String: Object}** | A list of custom field entries | [optional] 
**tags** | **[String]** | A list of id&#39;s used to tag models | [optional] 
**metadata** | **{String: String}** |  | [optional] 


