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
import com.ziqni.sdk.admin.model.LeaderboardMember;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * LeaderboardEntry
 */
@JsonPropertyOrder({
  LeaderboardEntry.JSON_PROPERTY_RANK,
  LeaderboardEntry.JSON_PROPERTY_SCORE,
  LeaderboardEntry.JSON_PROPERTY_BEST_SCORES,
  LeaderboardEntry.JSON_PROPERTY_MEMBERS
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class LeaderboardEntry {
  public static final String JSON_PROPERTY_RANK = "rank";
  private Integer rank;

  public static final String JSON_PROPERTY_SCORE = "score";
  private Double score;

  public static final String JSON_PROPERTY_BEST_SCORES = "bestScores";
  private List<Double> bestScores = null;

  public static final String JSON_PROPERTY_MEMBERS = "members";
  private List<LeaderboardMember> members = null;


  public LeaderboardEntry rank(Integer rank) {
    this.rank = rank;
    return this;
  }

   /**
   * The reank of the player
   * @return rank
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "1", required = true, value = "The reank of the player")
  @JsonProperty(JSON_PROPERTY_RANK)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Integer getRank() {
    return rank;
  }


  @JsonProperty(JSON_PROPERTY_RANK)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRank(Integer rank) {
    this.rank = rank;
  }


  public LeaderboardEntry score(Double score) {
    this.score = score;
    return this;
  }

   /**
   * The multiplier to apply to source values received for this product action helper events
   * @return score
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "100", value = "The multiplier to apply to source values received for this product action helper events")
  @JsonProperty(JSON_PROPERTY_SCORE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Double getScore() {
    return score;
  }


  @JsonProperty(JSON_PROPERTY_SCORE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setScore(Double score) {
    this.score = score;
  }


  public LeaderboardEntry bestScores(List<Double> bestScores) {
    this.bestScores = bestScores;
    return this;
  }

  public LeaderboardEntry addBestScoresItem(Double bestScoresItem) {
    if (this.bestScores == null) {
      this.bestScores = new ArrayList<>();
    }
    this.bestScores.add(bestScoresItem);
    return this;
  }

   /**
   * The multiplier to apply to source values received for this product action helper events
   * @return bestScores
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "100", value = "The multiplier to apply to source values received for this product action helper events")
  @JsonProperty(JSON_PROPERTY_BEST_SCORES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<Double> getBestScores() {
    return bestScores;
  }


  @JsonProperty(JSON_PROPERTY_BEST_SCORES)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setBestScores(List<Double> bestScores) {
    this.bestScores = bestScores;
  }


  public LeaderboardEntry members(List<LeaderboardMember> members) {
    this.members = members;
    return this;
  }

  public LeaderboardEntry addMembersItem(LeaderboardMember membersItem) {
    if (this.members == null) {
      this.members = new ArrayList<>();
    }
    this.members.add(membersItem);
    return this;
  }

   /**
   * Member details
   * @return members
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Member details")
  @JsonProperty(JSON_PROPERTY_MEMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<LeaderboardMember> getMembers() {
    return members;
  }


  @JsonProperty(JSON_PROPERTY_MEMBERS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMembers(List<LeaderboardMember> members) {
    this.members = members;
  }


  /**
   * Return true if this LeaderboardEntry object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LeaderboardEntry leaderboardEntry = (LeaderboardEntry) o;
    return Objects.equals(this.rank, leaderboardEntry.rank) &&
        Objects.equals(this.score, leaderboardEntry.score) &&
        Objects.equals(this.bestScores, leaderboardEntry.bestScores) &&
        Objects.equals(this.members, leaderboardEntry.members);
  }

  @Override
  public int hashCode() {
    return Objects.hash(rank, score, bestScores, members);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LeaderboardEntry {\n");
    sb.append("    rank: ").append(toIndentedString(rank)).append("\n");
    sb.append("    score: ").append(toIndentedString(score)).append("\n");
    sb.append("    bestScores: ").append(toIndentedString(bestScores)).append("\n");
    sb.append("    members: ").append(toIndentedString(members)).append("\n");
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

