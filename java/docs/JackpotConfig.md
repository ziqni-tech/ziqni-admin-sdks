

# JackpotConfig

Jackpot configuration that controls how contributions, pool amounts, and payouts work

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of this jackpot config |  [optional]
**name** | **String** | Human-friendly jackpot name |  [optional]
**description** | **String** | Longer text description of the jackpot |  [optional]
**type** | **JackpotConfigType** |  |  [optional]
**status** | **JackpotConfigStatus** |  |  [optional]
**contributionPercentage** | **Double** | Fraction (0–1) of each qualifying amount that is actually contributed to the pool *before* applying operator/member splits. For example, 0.10 means 10% of a qualifying amount goes into the pool.  |  [optional]
**startDate** | **OffsetDateTime** | The date and time when this jackpot starts running |  [optional]
**endDate** | **OffsetDateTime** | The date and time when this jackpot stops running (if any) |  [optional]
**created** | **OffsetDateTime** | When this config was created |  [optional]
**operatorSplitPercentage** | **Double** | The percentage of each player&#39;s contribution that goes to the operator&#39;s share of the jackpot. For example, if this is 20, and a player contributes 100, then 20 goes to the operator pool.  |  [optional]
**memberSplitPercentage** | **Double** | The percentage of each player&#39;s contribution that goes to the player&#39;s share of the jackpot. For example, if this is 80, and a player contributes 100, then 80 goes to the player pool.  |  [optional]
**currentPoolAmount** | **BigDecimal** | The total amount of money currently in the jackpot pool (both player and operator contributions).  |  [optional]
**mustDropAfterHours** | **Long** | If this number of hours passes without a winner, the jackpot is forced to drop to someone.  |  [optional]
**jackpotThreshold** | **Long** | When the pool reaches this amount, the chance of dropping starts increasing faster.  |  [optional]
**payouts** | **Long** | How many times this jackpot can pay out before it ends.  |  [optional]
**dropAmount** | **BigDecimal** | The amount that will be paid out to a winner when the jackpot drops.  |  [optional]
**seedAmount** | **BigDecimal** | The starting amount of the jackpot when this config is created.  |  [optional]
**dropProbability** | **Double** | The base chance of the jackpot dropping with each contribution. For example, 0.002 means a 0.2% chance per entry.  |  [optional]
**eventActions** | [**DependantOn**](DependantOn.md) |  |  [optional]
**productTags** | [**DependantOn**](DependantOn.md) |  |  [optional]
**productIds** | **List&lt;String&gt;** | Product IDs for the config |  [optional]
**logScalingFactor** | **Double** | A number that controls how fast the drop chance increases after reaching the threshold. A higher number means slower growth; lower means faster.  |  [optional]
**spaceName** | **String** | The name of the account this jackpot belongs to |  [optional]
**accountId** | **String** | The id of the account this jackpot belongs to |  [optional]
**customFields** | **Map&lt;String, Object&gt;** |  |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]



