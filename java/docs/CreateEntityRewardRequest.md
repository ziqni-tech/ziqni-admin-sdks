

# CreateEntityRewardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customFields** | **Map&lt;String, Object&gt;** | A list of custom field entries |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**entityType** | **RewardEntityType** |  | 
**entityId** | **String** | A unique identifier of an achievement or contest. Dependant on entityType | 
**name** | **String** | The name of a reward | 
**description** | **String** | The description of a Reward |  [optional]
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard | 
**rewardValue** | **Double** | Numerical value of the reward that will be issued based on the reward type | 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for reward |  [optional]
**issueLimit** | **Integer** | how many of thsese rewards are |  [optional]
**delay** | **Integer** | ***DEPRECATED, use scheduling*** Delay of issuing a reward in minutes |  [optional]
**pointInTime** | **OffsetDateTime** | ***DEPRECATED, use scheduling*** ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone |  [optional]
**period** | **Integer** | ***DEPRECATED, use scheduling*** Reward available for a period of time from issuing in minutes |  [optional]
**memberTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints | 
**rewardTypeId** | **String** | A unique id of the Reward Type | 
**scheduling** | [**List&lt;AwardScheduling&gt;**](AwardScheduling.md) | Set the default time based constraints using either an exact point in time or duration to manage the life cycle of the award |  [optional]



