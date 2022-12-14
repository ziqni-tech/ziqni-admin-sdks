

# UpdateContestRequestAllOf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A name for the Contest. Can be translated |  [optional]
**description** | **String** | A name for the Contest. Can be translated |  [optional]
**termsAndConditions** | **String** | A name for the Contest. Can be translated |  [optional]
**roundType** | **RoundType** |  |  [optional]
**maxNumberOfEntrants** | **Integer** | Maximum number of entrants for the contest |  [optional]
**minNumberOfEntrants** | **Integer** | Minimum number of entrants for the contest |  [optional]
**scheduledStartDate** | **OffsetDateTime** | ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone |  [optional]
**scheduledEndDate** | **OffsetDateTime** | ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone |  [optional]
**strategies** | [**Strategy**](Strategy.md) |  |  [optional]
**constraints** | **List&lt;String&gt;** | Additional constraints |  [optional]



