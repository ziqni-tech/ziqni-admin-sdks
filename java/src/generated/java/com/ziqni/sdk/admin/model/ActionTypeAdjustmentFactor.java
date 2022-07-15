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
 * ActionTypeAdjustmentFactor
 */
@JsonPropertyOrder({
  ActionTypeAdjustmentFactor.JSON_PROPERTY_ADJUSTMENT_FACTOR,
  ActionTypeAdjustmentFactor.JSON_PROPERTY_ACTION_TYPE_ID
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ActionTypeAdjustmentFactor {
  public static final String JSON_PROPERTY_ADJUSTMENT_FACTOR = "adjustmentFactor";
  private Double adjustmentFactor;

  public static final String JSON_PROPERTY_ACTION_TYPE_ID = "actionTypeId";
  private String actionTypeId;


  public ActionTypeAdjustmentFactor adjustmentFactor(Double adjustmentFactor) {
    this.adjustmentFactor = adjustmentFactor;
    return this;
  }

   /**
   * The multiplier to apply to source values received for this product events
   * @return adjustmentFactor
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "1", required = true, value = "The multiplier to apply to source values received for this product events")
  @JsonProperty(JSON_PROPERTY_ADJUSTMENT_FACTOR)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public Double getAdjustmentFactor() {
    return adjustmentFactor;
  }


  @JsonProperty(JSON_PROPERTY_ADJUSTMENT_FACTOR)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setAdjustmentFactor(Double adjustmentFactor) {
    this.adjustmentFactor = adjustmentFactor;
  }


  public ActionTypeAdjustmentFactor actionTypeId(String actionTypeId) {
    this.actionTypeId = actionTypeId;
    return this;
  }

   /**
   * A unique system generated identifier for Action Type
   * @return actionTypeId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "er5samHBdr48KgaPQq89asd", required = true, value = "A unique system generated identifier for Action Type")
  @JsonProperty(JSON_PROPERTY_ACTION_TYPE_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getActionTypeId() {
    return actionTypeId;
  }


  @JsonProperty(JSON_PROPERTY_ACTION_TYPE_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setActionTypeId(String actionTypeId) {
    this.actionTypeId = actionTypeId;
  }


  /**
   * Return true if this ActionTypeAdjustmentFactor object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ActionTypeAdjustmentFactor actionTypeAdjustmentFactor = (ActionTypeAdjustmentFactor) o;
    return Objects.equals(this.adjustmentFactor, actionTypeAdjustmentFactor.adjustmentFactor) &&
        Objects.equals(this.actionTypeId, actionTypeAdjustmentFactor.actionTypeId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(adjustmentFactor, actionTypeId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ActionTypeAdjustmentFactor {\n");
    sb.append("    adjustmentFactor: ").append(toIndentedString(adjustmentFactor)).append("\n");
    sb.append("    actionTypeId: ").append(toIndentedString(actionTypeId)).append("\n");
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

