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
import com.ziqni.sdk.admin.model.ActionTypeAdjustmentFactor;
import com.ziqni.sdk.admin.model.Translation;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * CreateProductRequestAllOf
 */
@JsonPropertyOrder({
  CreateProductRequestAllOf.JSON_PROPERTY_NAME,
  CreateProductRequestAllOf.JSON_PROPERTY_DESCRIPTION,
  CreateProductRequestAllOf.JSON_PROPERTY_ADJUSTMENT_FACTOR,
  CreateProductRequestAllOf.JSON_PROPERTY_PRODUCT_REF_ID,
  CreateProductRequestAllOf.JSON_PROPERTY_ACTION_TYPE_ADJUSTMENT_FACTORS,
  CreateProductRequestAllOf.JSON_PROPERTY_TRANSLATIONS
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class CreateProductRequestAllOf {
  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_DESCRIPTION = "description";
  private String description;

  public static final String JSON_PROPERTY_ADJUSTMENT_FACTOR = "adjustmentFactor";
  private Double adjustmentFactor;

  public static final String JSON_PROPERTY_PRODUCT_REF_ID = "productRefId";
  private String productRefId;

  public static final String JSON_PROPERTY_ACTION_TYPE_ADJUSTMENT_FACTORS = "actionTypeAdjustmentFactors";
  private List<ActionTypeAdjustmentFactor> actionTypeAdjustmentFactors = null;

  public static final String JSON_PROPERTY_TRANSLATIONS = "translations";
  private List<Translation> translations = null;


  public CreateProductRequestAllOf name(String name) {
    this.name = name;
    return this;
  }

   /**
   * The name of the product
   * @return name
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Hockey madness", required = true, value = "The name of the product")
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


  public CreateProductRequestAllOf description(String description) {
    this.description = description;
    return this;
  }

   /**
   * The description of the product for your reference
   * @return description
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Spin the hockey wheal", value = "The description of the product for your reference")
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


  public CreateProductRequestAllOf adjustmentFactor(Double adjustmentFactor) {
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


  public CreateProductRequestAllOf productRefId(String productRefId) {
    this.productRefId = productRefId;
    return this;
  }

   /**
   * The reference to this product in your system. The reference identifier can not be changed after the product has been created
   * @return productRefId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "hockey-madness", required = true, value = "The reference to this product in your system. The reference identifier can not be changed after the product has been created")
  @JsonProperty(JSON_PROPERTY_PRODUCT_REF_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getProductRefId() {
    return productRefId;
  }


  @JsonProperty(JSON_PROPERTY_PRODUCT_REF_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setProductRefId(String productRefId) {
    this.productRefId = productRefId;
  }


  public CreateProductRequestAllOf actionTypeAdjustmentFactors(List<ActionTypeAdjustmentFactor> actionTypeAdjustmentFactors) {
    this.actionTypeAdjustmentFactors = actionTypeAdjustmentFactors;
    return this;
  }

  public CreateProductRequestAllOf addActionTypeAdjustmentFactorsItem(ActionTypeAdjustmentFactor actionTypeAdjustmentFactorsItem) {
    if (this.actionTypeAdjustmentFactors == null) {
      this.actionTypeAdjustmentFactors = new ArrayList<>();
    }
    this.actionTypeAdjustmentFactors.add(actionTypeAdjustmentFactorsItem);
    return this;
  }

   /**
   * Get actionTypeAdjustmentFactors
   * @return actionTypeAdjustmentFactors
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_ACTION_TYPE_ADJUSTMENT_FACTORS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<ActionTypeAdjustmentFactor> getActionTypeAdjustmentFactors() {
    return actionTypeAdjustmentFactors;
  }


  @JsonProperty(JSON_PROPERTY_ACTION_TYPE_ADJUSTMENT_FACTORS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setActionTypeAdjustmentFactors(List<ActionTypeAdjustmentFactor> actionTypeAdjustmentFactors) {
    this.actionTypeAdjustmentFactors = actionTypeAdjustmentFactors;
  }


  public CreateProductRequestAllOf translations(List<Translation> translations) {
    this.translations = translations;
    return this;
  }

  public CreateProductRequestAllOf addTranslationsItem(Translation translationsItem) {
    if (this.translations == null) {
      this.translations = new ArrayList<>();
    }
    this.translations.add(translationsItem);
    return this;
  }

   /**
   * Get translations
   * @return translations
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_TRANSLATIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<Translation> getTranslations() {
    return translations;
  }


  @JsonProperty(JSON_PROPERTY_TRANSLATIONS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTranslations(List<Translation> translations) {
    this.translations = translations;
  }


  /**
   * Return true if this CreateProductRequest_allOf object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateProductRequestAllOf createProductRequestAllOf = (CreateProductRequestAllOf) o;
    return Objects.equals(this.name, createProductRequestAllOf.name) &&
        Objects.equals(this.description, createProductRequestAllOf.description) &&
        Objects.equals(this.adjustmentFactor, createProductRequestAllOf.adjustmentFactor) &&
        Objects.equals(this.productRefId, createProductRequestAllOf.productRefId) &&
        Objects.equals(this.actionTypeAdjustmentFactors, createProductRequestAllOf.actionTypeAdjustmentFactors) &&
        Objects.equals(this.translations, createProductRequestAllOf.translations);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, description, adjustmentFactor, productRefId, actionTypeAdjustmentFactors, translations);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateProductRequestAllOf {\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    adjustmentFactor: ").append(toIndentedString(adjustmentFactor)).append("\n");
    sb.append("    productRefId: ").append(toIndentedString(productRefId)).append("\n");
    sb.append("    actionTypeAdjustmentFactors: ").append(toIndentedString(actionTypeAdjustmentFactors)).append("\n");
    sb.append("    translations: ").append(toIndentedString(translations)).append("\n");
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

