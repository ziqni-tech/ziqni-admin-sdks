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
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * RangeQuery
 */
@JsonPropertyOrder({
  RangeQuery.JSON_PROPERTY_QUERY_FIELD,
  RangeQuery.JSON_PROPERTY_GT,
  RangeQuery.JSON_PROPERTY_LT,
  RangeQuery.JSON_PROPERTY_CONSTRAINTS
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class RangeQuery {
  public static final String JSON_PROPERTY_QUERY_FIELD = "queryField";
  private String queryField;

  public static final String JSON_PROPERTY_GT = "gt";
  private String gt;

  public static final String JSON_PROPERTY_LT = "lt";
  private String lt;

  public static final String JSON_PROPERTY_CONSTRAINTS = "constraints";
  private List<String> constraints = null;


  public RangeQuery queryField(String queryField) {
    this.queryField = queryField;
    return this;
  }

   /**
   * The key of the parameter that is being searched   
   * @return queryField
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "The key of the parameter that is being searched   ")
  @JsonProperty(JSON_PROPERTY_QUERY_FIELD)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getQueryField() {
    return queryField;
  }


  @JsonProperty(JSON_PROPERTY_QUERY_FIELD)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setQueryField(String queryField) {
    this.queryField = queryField;
  }


  public RangeQuery gt(String gt) {
    this.gt = gt;
    return this;
  }

   /**
   * Greater than value
   * @return gt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Greater than value")
  @JsonProperty(JSON_PROPERTY_GT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getGt() {
    return gt;
  }


  @JsonProperty(JSON_PROPERTY_GT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setGt(String gt) {
    this.gt = gt;
  }


  public RangeQuery lt(String lt) {
    this.lt = lt;
    return this;
  }

   /**
   * Less than value
   * @return lt
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Less than value")
  @JsonProperty(JSON_PROPERTY_LT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getLt() {
    return lt;
  }


  @JsonProperty(JSON_PROPERTY_LT)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setLt(String lt) {
    this.lt = lt;
  }


  public RangeQuery constraints(List<String> constraints) {
    this.constraints = constraints;
    return this;
  }

  public RangeQuery addConstraintsItem(String constraintsItem) {
    if (this.constraints == null) {
      this.constraints = new ArrayList<>();
    }
    this.constraints.add(constraintsItem);
    return this;
  }

   /**
   * Additional constraints
   * @return constraints
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Additional constraints")
  @JsonProperty(JSON_PROPERTY_CONSTRAINTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<String> getConstraints() {
    return constraints;
  }


  @JsonProperty(JSON_PROPERTY_CONSTRAINTS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setConstraints(List<String> constraints) {
    this.constraints = constraints;
  }


  /**
   * Return true if this RangeQuery object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RangeQuery rangeQuery = (RangeQuery) o;
    return Objects.equals(this.queryField, rangeQuery.queryField) &&
        Objects.equals(this.gt, rangeQuery.gt) &&
        Objects.equals(this.lt, rangeQuery.lt) &&
        Objects.equals(this.constraints, rangeQuery.constraints);
  }

  @Override
  public int hashCode() {
    return Objects.hash(queryField, gt, lt, constraints);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RangeQuery {\n");
    sb.append("    queryField: ").append(toIndentedString(queryField)).append("\n");
    sb.append("    gt: ").append(toIndentedString(gt)).append("\n");
    sb.append("    lt: ").append(toIndentedString(lt)).append("\n");
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

