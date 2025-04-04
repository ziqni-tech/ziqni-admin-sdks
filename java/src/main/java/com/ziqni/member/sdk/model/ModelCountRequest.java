/*
 * ZIQNI Member API
 * The ZIQNI Member-API is the primary resource used to build services and widgets for your members [customers, players, patients, etc]. The service is Stomp websokets with SOCK.js even though the system is decribed using OpenApi schema for convenience.
 *
 * The version of the OpenAPI document: 1.0.19
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package com.ziqni.member.sdk.model;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import io.swagger.annotations.ApiModelProperty;

import java.util.Objects;


/**
 * ModelCountRequest
 */
@JsonPropertyOrder({
  ModelCountRequest.JSON_PROPERTY_ENTITY_ID,
  ModelCountRequest.JSON_PROPERTY_ENTITY_TYPE,
  ModelCountRequest.JSON_PROPERTY_IS_REFERENCE_ID
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class ModelCountRequest {
  public static final String JSON_PROPERTY_ENTITY_ID = "entityId";
  private String entityId;

  public static final String JSON_PROPERTY_ENTITY_TYPE = "entityType";
  private String entityType;

  public static final String JSON_PROPERTY_IS_REFERENCE_ID = "isReferenceId";
  private Boolean isReferenceId;


  public ModelCountRequest entityId(String entityId) {
    this.entityId = entityId;
    return this;
  }

   /**
   * The entity id, like the meber reference id or ziqni member id or even a product id
   * @return entityId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The entity id, like the meber reference id or ziqni member id or even a product id")
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


  public ModelCountRequest entityType(String entityType) {
    this.entityType = entityType;
    return this;
  }

   /**
   * Product etc
   * @return entityType
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Product etc")
  @JsonProperty(JSON_PROPERTY_ENTITY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEntityType() {
    return entityType;
  }


  @JsonProperty(JSON_PROPERTY_ENTITY_TYPE)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEntityType(String entityType) {
    this.entityType = entityType;
  }


  public ModelCountRequest isReferenceId(Boolean isReferenceId) {
    this.isReferenceId = isReferenceId;
    return this;
  }

   /**
   * If true it is the objects reference ID otherwise it is the ZIQNI id
   * @return isReferenceId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "If true it is the objects reference ID otherwise it is the ZIQNI id")
  @JsonProperty(JSON_PROPERTY_IS_REFERENCE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Boolean getIsReferenceId() {
    return isReferenceId;
  }


  @JsonProperty(JSON_PROPERTY_IS_REFERENCE_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setIsReferenceId(Boolean isReferenceId) {
    this.isReferenceId = isReferenceId;
  }


  /**
   * Return true if this ModelCountRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ModelCountRequest modelCountRequest = (ModelCountRequest) o;
    return Objects.equals(this.entityId, modelCountRequest.entityId) &&
        Objects.equals(this.entityType, modelCountRequest.entityType) &&
        Objects.equals(this.isReferenceId, modelCountRequest.isReferenceId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(entityId, entityType, isReferenceId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModelCountRequest {\n");
    sb.append("    entityId: ").append(toIndentedString(entityId)).append("\n");
    sb.append("    entityType: ").append(toIndentedString(entityType)).append("\n");
    sb.append("    isReferenceId: ").append(toIndentedString(isReferenceId)).append("\n");
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

