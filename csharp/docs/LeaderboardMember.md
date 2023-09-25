
# Ziqni.Model.LeaderboardMember

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the player | 
**MemberId** | **string** | Unique system identifier of a Member | 
**MemberRefId** | **string** | The reference to this member in your system | 
**RankChangeFrom** | **int** | Previous rank held, null if no changes are recorded | [optional] 
**RankChangeType** | **int** | [-1] for rank-down, like 5 to 8. [0] for no change, [1] for rank-up like 9 to 3 | [optional] 
**Params** | **Dictionary&lt;string, decimal&gt;** | The user defined values used in the rules builder | [optional] 

[[Back to Model list]](../README.md#documentation-for-models)
[[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to README]](../README.md)

