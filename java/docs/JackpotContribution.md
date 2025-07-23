

# JackpotContribution

A record of a contribution made to a jackpot pool. This can be from a player or a system recontribution (e.g. after a jackpot win). The contribution is split between the player’s share and the operator’s share based on the configured percentages in `jackpot_config`. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique ID of this jackpot contribution record |  [optional]
**spaceName** | **String** | The account (or space) associated with the contribution. Used to group contributions under a specific  environment.  |  [optional]
**memberId** | **String** | The ID of the player who made the contribution or received the recontributed drop. If this was a system recontribution after a win, this is the winning player&#39;s ID.  |  [optional]
**contributionAmount** | **BigDecimal** | The full amount that was contributed to the jackpot pool. This amount will be split into &#x60;operatorAmount&#x60; and &#x60;playerAmount&#x60; based on configuration.  |  [optional]
**operatornAmount** | **Long** | The portion of the contribution that goes to the operator’s share of the pool. Calculated as: contributionAmount * operatorSplitPercentage / 100  |  [optional]
**playerAmount** | **Long** | The portion of the contribution that goes to the player’s share of the pool. Calculated as: contributionAmount * playerSplitPercentage / 100  |  [optional]
**contributionDate** | **OffsetDateTime** | The date and time when the contribution was made. This also applies to recontributed jackpot drop amounts.  |  [optional]



