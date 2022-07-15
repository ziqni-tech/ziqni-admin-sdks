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
import com.ziqni.sdk.admin.model.LeaderboardEntry;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * LeaderboardAllOf
 */
@JsonPropertyOrder({
  LeaderboardAllOf.JSON_PROPERTY_LEADERBOARD_ENTRIES,
  LeaderboardAllOf.JSON_PROPERTY_CONSTRAINTS,
  LeaderboardAllOf.JSON_PROPERTY_SEQUENCE
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class LeaderboardAllOf {
  public static final String JSON_PROPERTY_LEADERBOARD_ENTRIES = "leaderboardEntries";
  private List<LeaderboardEntry> leaderboardEntries = null;

  public static final String JSON_PROPERTY_CONSTRAINTS = "constraints";
  private List<String> constraints = new ArrayList<>();

  public static final String JSON_PROPERTY_SEQUENCE = "sequence";
  private Integer sequence;


  public LeaderboardAllOf leaderboardEntries(List<LeaderboardEntry> leaderboardEntries) {
    this.leaderboardEntries = leaderboardEntries;
    return this;
  }

  public LeaderboardAllOf addLeaderboardEntriesItem(LeaderboardEntry leaderboardEntriesItem) {
    if (this.leaderboardEntries == null) {
      this.leaderboardEntries = new ArrayList<>();
    }
    this.leaderboardEntries.add(leaderboardEntriesItem);
    return this;
  }

   /**
   * Get leaderboardEntries
   * @return leaderboardEntries
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_LEADERBOARD_ENTRIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<LeaderboardEntry> getLeaderboardEntries() {
    return leaderboardEntries;
  }


  @JsonProperty(JSON_PROPERTY_LEADERBOARD_ENTRIES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLeaderboardEntries(List<LeaderboardEntry> leaderboardEntries) {
    this.leaderboardEntries = leaderboardEntries;
  }


  public LeaderboardAllOf constraints(List<String> constraints) {
    this.constraints = constraints;
    return this;
  }

  public LeaderboardAllOf addConstraintsItem(String constraintsItem) {
    this.constraints.add(constraintsItem);
    return this;
  }

   /**
   * Additional constraints
   * @return constraints
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "- goalReached", required = true, value = "Additional constraints")
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


  public LeaderboardAllOf sequence(Integer sequence) {
    this.sequence = sequence;
    return this;
  }

   /**
   * how many changes were made to teh leaderboard
   * @return sequence
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "1", value = "how many changes were made to teh leaderboard")
  @JsonProperty(JSON_PROPERTY_SEQUENCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Integer getSequence() {
    return sequence;
  }


  @JsonProperty(JSON_PROPERTY_SEQUENCE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setSequence(Integer sequence) {
    this.sequence = sequence;
  }


  /**
   * Return true if this Leaderboard_allOf object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LeaderboardAllOf leaderboardAllOf = (LeaderboardAllOf) o;
    return Objects.equals(this.leaderboardEntries, leaderboardAllOf.leaderboardEntries) &&
        Objects.equals(this.constraints, leaderboardAllOf.constraints) &&
        Objects.equals(this.sequence, leaderboardAllOf.sequence);
  }

  @Override
  public int hashCode() {
    return Objects.hash(leaderboardEntries, constraints, sequence);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LeaderboardAllOf {\n");
    sb.append("    leaderboardEntries: ").append(toIndentedString(leaderboardEntries)).append("\n");
    sb.append("    constraints: ").append(toIndentedString(constraints)).append("\n");
    sb.append("    sequence: ").append(toIndentedString(sequence)).append("\n");
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

