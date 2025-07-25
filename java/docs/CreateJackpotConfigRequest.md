

# CreateJackpotConfigRequest

Jackpot configuration that controls how contributions, pool amounts, and payouts work

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startDate** | **OffsetDateTime** | The date and time when this jackpot starts running |  [optional]
**endDate** | **OffsetDateTime** | The date and time when this jackpot stops running (if any) |  [optional]
**operatorSplitPercentage** | **Double** | The percentage of each player&#39;s contribution that goes to the operator&#39;s share of the jackpot. For example, if this is 20, and a player contributes 100, then 20 goes to the operator pool.  |  [optional]
**memberSplitPercentage** | **Double** | The percentage of each player&#39;s contribution that goes to the player&#39;s share of the jackpot. For example, if this is 80, and a player contributes 100, then 80 goes to the player pool.  |  [optional]
**mustDropAfterHours** | **Long** | If this number of hours passes without a winner, the jackpot is forced to drop to someone.  |  [optional]
**jackpotThreshold** | **Long** | When the pool reaches this amount, the chance of dropping starts increasing faster.  |  [optional]
**payouts** | **Long** | How many times this jackpot can pay out before it ends.  |  [optional]
**dropAmount** | **BigDecimal** | The amount that will be paid out to a winner when the jackpot drops.  |  [optional]
**eventActionsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**seedAmount** | **BigDecimal** | The starting amount of the jackpot when this config is created.  |  [optional]
**dropProbability** | **Double** | The base chance of the jackpot dropping with each contribution. For example, 0.002 means a 0.2% chance per entry.  |  [optional]
**logScalingFactor** | **Double** | A number that controls how fast the drop chance increases after reaching the threshold. A higher number means slower growth; lower means faster.  |  [optional]
**customFields** | **Map&lt;String, Object&gt;** | A list of custom field entries |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]



