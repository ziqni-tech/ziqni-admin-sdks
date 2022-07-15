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
import com.ziqni.sdk.admin.model.Role;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * ApiKeyAllOf
 */
@JsonPropertyOrder({
  ApiKeyAllOf.JSON_PROPERTY_DESCRIPTION,
  ApiKeyAllOf.JSON_PROPERTY_WHITE_LIST_I_PS,
  ApiKeyAllOf.JSON_PROPERTY_KEY,
  ApiKeyAllOf.JSON_PROPERTY_ROLE,
  ApiKeyAllOf.JSON_PROPERTY_CONSTRAINTS
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ApiKeyAllOf {
  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public static final String JSON_PROPERTY_WHITE_LIST_I_PS = "whiteListIPs";
  private List<String> whiteListIPs = null;

  public static final String JSON_PROPERTY_KEY = "key";
  private String key;

  public static final String JSON_PROPERTY_ROLE = "role";
  private Role role;

  public static final String JSON_PROPERTY_CONSTRAINTS = "constraints";
  private List<String> constraints = new ArrayList<>();


  public ApiKeyAllOf description(String description) {
    this.description = description;
    return this;
  }

   /**
   * The description of an Api key
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "User api key", value = "The description of an Api key")
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


  public ApiKeyAllOf whiteListIPs(List<String> whiteListIPs) {
    this.whiteListIPs = whiteListIPs;
    return this;
  }

  public ApiKeyAllOf addWhiteListIPsItem(String whiteListIPsItem) {
    if (this.whiteListIPs == null) {
      this.whiteListIPs = new ArrayList<>();
    }
    this.whiteListIPs.add(whiteListIPsItem);
    return this;
  }

   /**
   * the IP&#39;s that need to be whitelisted with the Api key
   * @return whiteListIPs
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"123.221.22.1\",\"333.224.34.1\"]", value = "the IP's that need to be whitelisted with the Api key")
  @JsonProperty(JSON_PROPERTY_WHITE_LIST_I_PS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<String> getWhiteListIPs() {
    return whiteListIPs;
  }


  @JsonProperty(JSON_PROPERTY_WHITE_LIST_I_PS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setWhiteListIPs(List<String> whiteListIPs) {
    this.whiteListIPs = whiteListIPs;
  }


  public ApiKeyAllOf key(String key) {
    this.key = key;
    return this;
  }

   /**
   * An Api key hash
   * @return key
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "UUID.randomUUID.toString.replace", required = true, value = "An Api key hash")
  @JsonProperty(JSON_PROPERTY_KEY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getKey() {
    return key;
  }


  @JsonProperty(JSON_PROPERTY_KEY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setKey(String key) {
    this.key = key;
  }


  public ApiKeyAllOf role(Role role) {
    this.role = role;
    return this;
  }

   /**
   * Get role
   * @return role
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_ROLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Role getRole() {
    return role;
  }


  @JsonProperty(JSON_PROPERTY_ROLE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRole(Role role) {
    this.role = role;
  }


  public ApiKeyAllOf constraints(List<String> constraints) {
    this.constraints = constraints;
    return this;
  }

  public ApiKeyAllOf addConstraintsItem(String constraintsItem) {
    this.constraints.add(constraintsItem);
    return this;
  }

   /**
   * Additional constraints
   * @return constraints
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "- active - default", required = true, value = "Additional constraints")
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
   * Return true if this ApiKey_allOf object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApiKeyAllOf apiKeyAllOf = (ApiKeyAllOf) o;
    return Objects.equals(this.description, apiKeyAllOf.description) &&
        Objects.equals(this.whiteListIPs, apiKeyAllOf.whiteListIPs) &&
        Objects.equals(this.key, apiKeyAllOf.key) &&
        Objects.equals(this.role, apiKeyAllOf.role) &&
        Objects.equals(this.constraints, apiKeyAllOf.constraints);
  }

  @Override
  public int hashCode() {
    return Objects.hash(description, whiteListIPs, key, role, constraints);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApiKeyAllOf {\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    whiteListIPs: ").append(toIndentedString(whiteListIPs)).append("\n");
    sb.append("    key: ").append(toIndentedString(key)).append("\n");
    sb.append("    role: ").append(toIndentedString(role)).append("\n");
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

