

# UpdateRewardRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique system generated identifier | 
**customFields** | **Map&lt;String, Object&gt;** | A list of id&#39;s used to add cutom fields |  [optional]
**tags** | **List&lt;String&gt;** | A list of id&#39;s used to tag models |  [optional]
**metadata** | **Map&lt;String, String&gt;** |  |  [optional]
**name** | **String** | The name of a reward |  [optional]
**description** | **String** | The description of a Reward |  [optional]
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard |  [optional]
**rewardValue** | **Double** | Numerical value of the reward that will be issued based on the reward type |  [optional]
**rewardTypeId** | **String** | A unique id of the Reward Type |  [optional]
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for reward |  [optional]
**issueLimit** | **Integer** | how many of thsese rewards are |  [optional]
**memberTagsFilter** | [**DependantOn**](DependantOn.md) |  |  [optional]
**delay** | **Integer** | Delay of issuing a reward in minutes |  [optional]
**pointInTime** | **OffsetDateTime** | ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone |  [optional]
**period** | **Integer** | Reward available for a period of time from issuing in minutes |  [optional]
**addConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**removeConstraints** | **List&lt;String&gt;** | Remove constraints |  [optional]



