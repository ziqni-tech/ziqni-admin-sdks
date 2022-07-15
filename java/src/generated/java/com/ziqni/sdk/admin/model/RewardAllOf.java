/*
 * ZIQNI Admin API
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.ziqni.sdk.admin.model;

import java.util.Objects;
import java.util.Arrays;
import java.util.Map;
import java.util.HashMap;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import com.ziqni.sdk.admin.model.EntityType;
import com.ziqni.sdk.admin.model.RewardTypeReduced;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * RewardAllOf
 */
@JsonPropertyOrder({
  RewardAllOf.JSON_PROPERTY_ENTITY_TYPE,
  RewardAllOf.JSON_PROPERTY_ENTITY_ID,
  RewardAllOf.JSON_PROPERTY_NAME,
  RewardAllOf.JSON_PROPERTY_DESCRIPTION,
  RewardAllOf.JSON_PROPERTY_REWARD_RANK,
  RewardAllOf.JSON_PROPERTY_REWARD_VALUE,
  RewardAllOf.JSON_PROPERTY_REWARD_TYPE,
  RewardAllOf.JSON_PROPERTY_ICON,
  RewardAllOf.JSON_PROPERTY_ISSUE_LIMIT,
  RewardAllOf.JSON_PROPERTY_DELAY,
  RewardAllOf.JSON_PROPERTY_POINT_IN_TIME,
  RewardAllOf.JSON_PROPERTY_PERIOD,
  RewardAllOf.JSON_PROPERTY_CONSTRAINTS
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class RewardAllOf {
  public static final String JSON_PROPERTY_ENTITY_TYPE = "entityType";
  private EntityType entityType;

  public static final String JSON_PROPERTY_ENTITY_ID = "entityId";
  private String entityId;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public static final String JSON_PROPERTY_REWARD_RANK = "rewardRank";
  private String rewardRank;

  public static final String JSON_PROPERTY_REWARD_VALUE = "rewardValue";
  private Double rewardValue;

  public static final String JSON_PROPERTY_REWARD_TYPE = "rewardType";
  private RewardTypeReduced rewardType;

  public static final String JSON_PROPERTY_ICON = "icon";
  private String icon;

  public static final String JSON_PROPERTY_ISSUE_LIMIT = "issueLimit";
  private Integer issueLimit;

  public static final String JSON_PROPERTY_DELAY = "delay";
  private Integer delay;

  public static final String JSON_PROPERTY_POINT_IN_TIME = "pointInTime";
  private OffsetDateTime pointInTime;

  public static final String JSON_PROPERTY_PERIOD = "period";
  private Integer period;

  public static final String JSON_PROPERTY_CONSTRAINTS = "constraints";
  private List<String> constraints = new ArrayList<>();


  public RewardAllOf entityType(EntityType entityType) {
    this.entityType = entityType;
    return this;
  }

   /**
   * Get entityType
   * @return entityType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ENTITY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public EntityType getEntityType() {
    return entityType;
  }


  @JsonProperty(JSON_PROPERTY_ENTITY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEntityType(EntityType entityType) {
    this.entityType = entityType;
  }


  public RewardAllOf entityId(String entityId) {
    this.entityId = entityId;
    return this;
  }

   /**
   * A unique identifier of an achievement or contest. Dependant on entityType
   * @return entityId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Dc4swmQBVd51K6gPQqFx", value = "A unique identifier of an achievement or contest. Dependant on entityType")
  @JsonProperty(JSON_PROPERTY_ENTITY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEntityId() {
    return entityId;
  }


  @JsonProperty(JSON_PROPERTY_ENTITY_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEntityId(String entityId) {
    this.entityId = entityId;
  }


  public RewardAllOf name(String name) {
    this.name = name;
    return this;
  }

   /**
   * The name of a reward
   * @return name
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Welcome badge", value = "The name of a reward")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setName(String name) {
    this.name = name;
  }


  public RewardAllOf description(String description) {
    this.description = description;
    return this;
  }

   /**
   * The description of a Reward
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "A badge to welcome a new player", value = "The description of a Reward")
  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getDescription() {
    return description;
  }


  @JsonProperty(JSON_PROPERTY_DESCRIPTION)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDescription(String description) {
    this.description = description;
  }


  public RewardAllOf rewardRank(String rewardRank) {
    this.rewardRank = rewardRank;
    return this;
  }

   /**
   * If used in the context of contest this will associate with the rank of the leaderboard
   * @return rewardRank
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "1,2 3 ...10", required = true, value = "If used in the context of contest this will associate with the rank of the leaderboard")
  @JsonProperty(JSON_PROPERTY_REWARD_RANK)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getRewardRank() {
    return rewardRank;
  }


  @JsonProperty(JSON_PROPERTY_REWARD_RANK)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRewardRank(String rewardRank) {
    this.rewardRank = rewardRank;
  }


  public RewardAllOf rewardValue(Double rewardValue) {
    this.rewardValue = rewardValue;
    return this;
  }

   /**
   * Numerical value of the reward that will be issued based on the reward type
   * @return rewardValue
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "1", required = true, value = "Numerical value of the reward that will be issued based on the reward type")
  @JsonProperty(JSON_PROPERTY_REWARD_VALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Double getRewardValue() {
    return rewardValue;
  }


  @JsonProperty(JSON_PROPERTY_REWARD_VALUE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRewardValue(Double rewardValue) {
    this.rewardValue = rewardValue;
  }


  public RewardAllOf rewardType(RewardTypeReduced rewardType) {
    this.rewardType = rewardType;
    return this;
  }

   /**
   * Get rewardType
   * @return rewardType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_REWARD_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public RewardTypeReduced getRewardType() {
    return rewardType;
  }


  @JsonProperty(JSON_PROPERTY_REWARD_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRewardType(RewardTypeReduced rewardType) {
    this.rewardType = rewardType;
  }


  public RewardAllOf icon(String icon) {
    this.icon = icon;
    return this;
  }

   /**
   * An Icon id that has been pre uploaded to the system to display for reward
   * @return icon
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Dc4swmQBVd51K6gPQqFx", value = "An Icon id that has been pre uploaded to the system to display for reward")
  @JsonProperty(JSON_PROPERTY_ICON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getIcon() {
    return icon;
  }


  @JsonProperty(JSON_PROPERTY_ICON)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIcon(String icon) {
    this.icon = icon;
  }


  public RewardAllOf issueLimit(Integer issueLimit) {
    this.issueLimit = issueLimit;
    return this;
  }

   /**
   * how many of thsese rewards are
   * @return issueLimit
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2", value = "how many of thsese rewards are")
  @JsonProperty(JSON_PROPERTY_ISSUE_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getIssueLimit() {
    return issueLimit;
  }


  @JsonProperty(JSON_PROPERTY_ISSUE_LIMIT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIssueLimit(Integer issueLimit) {
    this.issueLimit = issueLimit;
  }


  public RewardAllOf delay(Integer delay) {
    this.delay = delay;
    return this;
  }

   /**
   * Delay of issuing a reward in minutes
   * @return delay
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2", value = "Delay of issuing a reward in minutes")
  @JsonProperty(JSON_PROPERTY_DELAY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getDelay() {
    return delay;
  }


  @JsonProperty(JSON_PROPERTY_DELAY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setDelay(Integer delay) {
    this.delay = delay;
  }


  public RewardAllOf pointInTime(OffsetDateTime pointInTime) {
    this.pointInTime = pointInTime;
    return this;
  }

   /**
   * ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone
   * @return pointInTime
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone")
  @JsonProperty(JSON_PROPERTY_POINT_IN_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OffsetDateTime getPointInTime() {
    return pointInTime;
  }


  @JsonProperty(JSON_PROPERTY_POINT_IN_TIME)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPointInTime(OffsetDateTime pointInTime) {
    this.pointInTime = pointInTime;
  }


  public RewardAllOf period(Integer period) {
    this.period = period;
    return this;
  }

   /**
   * Reward available for a period of time from issuing in minutes
   * @return period
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "2", value = "Reward available for a period of time from issuing in minutes")
  @JsonProperty(JSON_PROPERTY_PERIOD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getPeriod() {
    return period;
  }


  @JsonProperty(JSON_PROPERTY_PERIOD)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setPeriod(Integer period) {
    this.period = period;
  }


  public RewardAllOf constraints(List<String> constraints) {
    this.constraints = constraints;
    return this;
  }

  public RewardAllOf addConstraintsItem(String constraintsItem) {
    this.constraints.add(constraintsItem);
    return this;
  }

   /**
   * Additional constraints
   * @return constraints
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "- notifyMember - isMemberAcknowledgmentRequired", required = true, value = "Additional constraints")
  @JsonProperty(JSON_PROPERTY_CONSTRAINTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public List<String> getConstraints() {
    return constraints;
  }


  @JsonProperty(JSON_PROPERTY_CONSTRAINTS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setConstraints(List<String> constraints) {
    this.constraints = constraints;
  }


  /**
   * Return true if this Reward_allOf object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RewardAllOf rewardAllOf = (RewardAllOf) o;
    return Objects.equals(this.entityType, rewardAllOf.entityType) &&
        Objects.equals(this.entityId, rewardAllOf.entityId) &&
        Objects.equals(this.name, rewardAllOf.name) &&
        Objects.equals(this.description, rewardAllOf.description) &&
        Objects.equals(this.rewardRank, rewardAllOf.rewardRank) &&
        Objects.equals(this.rewardValue, rewardAllOf.rewardValue) &&
        Objects.equals(this.rewardType, rewardAllOf.rewardType) &&
        Objects.equals(this.icon, rewardAllOf.icon) &&
        Objects.equals(this.issueLimit, rewardAllOf.issueLimit) &&
        Objects.equals(this.delay, rewardAllOf.delay) &&
        Objects.equals(this.pointInTime, rewardAllOf.pointInTime) &&
        Objects.equals(this.period, rewardAllOf.period) &&
        Objects.equals(this.constraints, rewardAllOf.constraints);
  }

  @Override
  public int hashCode() {
    return Objects.hash(entityType, entityId, name, description, rewardRank, rewardValue, rewardType, icon, issueLimit, delay, pointInTime, period, constraints);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RewardAllOf {\n");
    sb.append("    entityType: ").append(toIndentedString(entityType)).append("\n");
    sb.append("    entityId: ").append(toIndentedString(entityId)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    rewardRank: ").append(toIndentedString(rewardRank)).append("\n");
    sb.append("    rewardValue: ").append(toIndentedString(rewardValue)).append("\n");
    sb.append("    rewardType: ").append(toIndentedString(rewardType)).append("\n");
    sb.append("    icon: ").append(toIndentedString(icon)).append("\n");
    sb.append("    issueLimit: ").append(toIndentedString(issueLimit)).append("\n");
    sb.append("    delay: ").append(toIndentedString(delay)).append("\n");
    sb.append("    pointInTime: ").append(toIndentedString(pointInTime)).append("\n");
    sb.append("    period: ").append(toIndentedString(period)).append("\n");
    sb.append("    constraints: ").append(toIndentedString(constraints)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

