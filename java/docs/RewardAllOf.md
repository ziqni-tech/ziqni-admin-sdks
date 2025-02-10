

# RewardAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entityType** | **EntityType** |  |  [optional]
**entityId** | **String** | A unique identifier of an achievement or contest. Dependant on entityType |  [optional]
**name** | **String** | The name of a reward |  [optional]
**description** | **String** | The description of a Reward |  [optional]
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard | 
**rewardValue** | **Double** | Numerical value of the reward that will be issued based on the reward type | 
**rewardType** | [**RewardTypeReduced**](RewardTypeReduced.md) |  | 
**memberTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for reward |  [optional]
**issueLimit** | **Integer** | how many of thsese rewards are available in total to all members |  [optional]
**delay** | **Integer** | ***DEPRECATED, use scheduling*** Delay of issuing a reward in minutes |  [optional]
**pointInTime** | **OffsetDateTime** | ***DEPRECATED, use scheduling*** ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone *** deprecation candidate - use scheduling *** |  [optional]
**period** | **Integer** | ***DEPRECATED, use scheduling*** Reward available for a period of time from issuing in minutes |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints | 
**scheduling** | [**List&lt;AwardScheduling&gt;**](AwardScheduling.md) | Set time based constraints using either an exact point in time or duration to manage the life cycle of the award |  [optional]
**order** | **Integer** | The order the rewards are issued |  [optional]



