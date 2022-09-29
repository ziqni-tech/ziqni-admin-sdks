

# CreateRewardRequestAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The name of a reward | 
**description** | **String** | The description of a Reward |  [optional]
**rewardRank** | **String** | If used in the context of contest this will associate with the rank of the leaderboard | 
**rewardValue** | **Double** | Numerical value of the reward that will be issued based on the reward type | 
**icon** | **String** | An Icon id that has been pre uploaded to the system to display for reward |  [optional]
**issueLimit** | **Integer** | how many of thsese rewards are |  [optional]
**delay** | **Integer** | Delay of issuing a reward in minutes | 
**pointInTime** | **OffsetDateTime** | ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone |  [optional]
**period** | **Integer** | Reward available for a period of time from issuing in minutes |  [optional]
**translations** | [**List&lt;Translation&gt;**](Translation.md) |  |  [optional]
**addConstraints** | **List&lt;String&gt;** | Additional constraints |  [optional]
**rewardTypeId** | **String** | A unique id of the Reward Type | 



