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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * MemberAchievementCountAllOf
 */
@JsonPropertyOrder({
  MemberAchievementCountAllOf.JSON_PROPERTY_NAME,
  MemberAchievementCountAllOf.JSON_PROPERTY_MEMBER_ID,
  MemberAchievementCountAllOf.JSON_PROPERTY_MEMBER_REF_ID,
  MemberAchievementCountAllOf.JSON_PROPERTY_LATEST_ISSUED_TIMESTAMP
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class MemberAchievementCountAllOf {
  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_MEMBER_ID = "memberId";
  private String memberId;

  public static final String JSON_PROPERTY_MEMBER_REF_ID = "memberRefId";
  private String memberRefId;

  public static final String JSON_PROPERTY_LATEST_ISSUED_TIMESTAMP = "latestIssuedTimestamp";
  private OffsetDateTime latestIssuedTimestamp;


  public MemberAchievementCountAllOf name(String name) {
    this.name = name;
    return this;
  }

   /**
   * A the name of the member
   * @return name
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Player 1", required = true, value = "A the name of the member")
  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getName() {
    return name;
  }


  @JsonProperty(JSON_PROPERTY_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setName(String name) {
    this.name = name;
  }


  public MemberAchievementCountAllOf memberId(String memberId) {
    this.memberId = memberId;
    return this;
  }

   /**
   * A unique identifier of a Member
   * @return memberId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Dc4swmQBVd51K6gPQqFx", required = true, value = "A unique identifier of a Member")
  @JsonProperty(JSON_PROPERTY_MEMBER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getMemberId() {
    return memberId;
  }


  @JsonProperty(JSON_PROPERTY_MEMBER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setMemberId(String memberId) {
    this.memberId = memberId;
  }


  public MemberAchievementCountAllOf memberRefId(String memberRefId) {
    this.memberRefId = memberRefId;
    return this;
  }

   /**
   * The reference to this member in your system
   * @return memberRefId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Player-1", required = true, value = "The reference to this member in your system")
  @JsonProperty(JSON_PROPERTY_MEMBER_REF_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getMemberRefId() {
    return memberRefId;
  }


  @JsonProperty(JSON_PROPERTY_MEMBER_REF_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setMemberRefId(String memberRefId) {
    this.memberRefId = memberRefId;
  }


   /**
   * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
   * @return latestIssuedTimestamp
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone")
  @JsonProperty(JSON_PROPERTY_LATEST_ISSUED_TIMESTAMP)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public OffsetDateTime getLatestIssuedTimestamp() {
    return latestIssuedTimestamp;
  }




  /**
   * Return true if this MemberAchievementCount_allOf object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MemberAchievementCountAllOf memberAchievementCountAllOf = (MemberAchievementCountAllOf) o;
    return Objects.equals(this.name, memberAchievementCountAllOf.name) &&
        Objects.equals(this.memberId, memberAchievementCountAllOf.memberId) &&
        Objects.equals(this.memberRefId, memberAchievementCountAllOf.memberRefId) &&
        Objects.equals(this.latestIssuedTimestamp, memberAchievementCountAllOf.latestIssuedTimestamp);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, memberId, memberRefId, latestIssuedTimestamp);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MemberAchievementCountAllOf {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    memberId: ").append(toIndentedString(memberId)).append("\n");
    sb.append("    memberRefId: ").append(toIndentedString(memberRefId)).append("\n");
    sb.append("    latestIssuedTimestamp: ").append(toIndentedString(latestIssuedTimestamp)).append("\n");
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

