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
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * MetaExtendedAllOf
 */
@JsonPropertyOrder({
  MetaExtendedAllOf.JSON_PROPERTY_SKIP,
  MetaExtendedAllOf.JSON_PROPERTY_LIMIT
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class MetaExtendedAllOf {
  public static final String JSON_PROPERTY_SKIP = "skip";
  private Integer skip;

  public static final String JSON_PROPERTY_LIMIT = "limit";
  private Integer limit;


  public MetaExtendedAllOf skip(Integer skip) {
    this.skip = skip;
    return this;
  }

   /**
   * Number of records to skip
   * @return skip
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "0", required = true, value = "Number of records to skip")
  @JsonProperty(JSON_PROPERTY_SKIP)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Integer getSkip() {
    return skip;
  }


  @JsonProperty(JSON_PROPERTY_SKIP)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSkip(Integer skip) {
    this.skip = skip;
  }


  public MetaExtendedAllOf limit(Integer limit) {
    this.limit = limit;
    return this;
  }

   /**
   * Number of records to return
   * @return limit
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "100", required = true, value = "Number of records to return")
  @JsonProperty(JSON_PROPERTY_LIMIT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Integer getLimit() {
    return limit;
  }


  @JsonProperty(JSON_PROPERTY_LIMIT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setLimit(Integer limit) {
    this.limit = limit;
  }


  /**
   * Return true if this MetaExtended_allOf object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MetaExtendedAllOf metaExtendedAllOf = (MetaExtendedAllOf) o;
    return Objects.equals(this.skip, metaExtendedAllOf.skip) &&
        Objects.equals(this.limit, metaExtendedAllOf.limit);
  }

  @Override
  public int hashCode() {
    return Objects.hash(skip, limit);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MetaExtendedAllOf {\n");
    sb.append("    skip: ").append(toIndentedString(skip)).append("\n");
    sb.append("    limit: ").append(toIndentedString(limit)).append("\n");
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

