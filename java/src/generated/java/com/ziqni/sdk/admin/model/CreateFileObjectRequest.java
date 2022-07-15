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
import com.ziqni.sdk.admin.model.CreateFileObjectRequestAllOf;
import com.ziqni.sdk.admin.model.CreateOptParamModels;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * CreateFileObjectRequest
 */
@JsonPropertyOrder({
  CreateFileObjectRequest.JSON_PROPERTY_CUSTOM_FIELDS,
  CreateFileObjectRequest.JSON_PROPERTY_TAGS,
  CreateFileObjectRequest.JSON_PROPERTY_METADATA,
  CreateFileObjectRequest.JSON_PROPERTY_REPOSITORY_ID,
  CreateFileObjectRequest.JSON_PROPERTY_NAME,
  CreateFileObjectRequest.JSON_PROPERTY_MIME_TYPE,
  CreateFileObjectRequest.JSON_PROPERTY_PARENT_FOLDER_PATH,
  CreateFileObjectRequest.JSON_PROPERTY_CONSTRAINTS
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class CreateFileObjectRequest {
  public static final String JSON_PROPERTY_CUSTOM_FIELDS = "customFields";
  private Map<String, Object> customFields = null;

  public static final String JSON_PROPERTY_TAGS = "tags";
  private List<String> tags = null;

  public static final String JSON_PROPERTY_METADATA = "metadata";
  private Map<String, String> metadata = null;

  public static final String JSON_PROPERTY_REPOSITORY_ID = "repositoryId";
  private String repositoryId;

  public static final String JSON_PROPERTY_NAME = "name";
  private String name;

  public static final String JSON_PROPERTY_MIME_TYPE = "mimeType";
  private String mimeType;

  public static final String JSON_PROPERTY_PARENT_FOLDER_PATH = "parentFolderPath";
  private String parentFolderPath;

  public static final String JSON_PROPERTY_CONSTRAINTS = "constraints";
  private List<String> constraints = null;


  public CreateFileObjectRequest customFields(Map<String, Object> customFields) {
    this.customFields = customFields;
    return this;
  }

  public CreateFileObjectRequest putCustomFieldsItem(String key, Object customFieldsItem) {
    if (this.customFields == null) {
      this.customFields = new HashMap<>();
    }
    this.customFields.put(key, customFieldsItem);
    return this;
  }

   /**
   * A list of custom field entries
   * @return customFields
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "A list of custom field entries")
  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELDS)
  @JsonInclude(content = JsonInclude.Include.ALWAYS, value = JsonInclude.Include.USE_DEFAULTS)

  public Map<String, Object> getCustomFields() {
    return customFields;
  }


  @JsonProperty(JSON_PROPERTY_CUSTOM_FIELDS)
  @JsonInclude(content = JsonInclude.Include.ALWAYS, value = JsonInclude.Include.USE_DEFAULTS)
  public void setCustomFields(Map<String, Object> customFields) {
    this.customFields = customFields;
  }


  public CreateFileObjectRequest tags(List<String> tags) {
    this.tags = tags;
    return this;
  }

  public CreateFileObjectRequest addTagsItem(String tagsItem) {
    if (this.tags == null) {
      this.tags = new ArrayList<>();
    }
    this.tags.add(tagsItem);
    return this;
  }

   /**
   * A list of id&#39;s used to tag models
   * @return tags
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "[\"Dc4swmQBVd51K6gPQqFx\",\"Dc4swmQBVd51K6gPQqF2\"]", value = "A list of id's used to tag models")
  @JsonProperty(JSON_PROPERTY_TAGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<String> getTags() {
    return tags;
  }


  @JsonProperty(JSON_PROPERTY_TAGS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setTags(List<String> tags) {
    this.tags = tags;
  }


  public CreateFileObjectRequest metadata(Map<String, String> metadata) {
    this.metadata = metadata;
    return this;
  }

  public CreateFileObjectRequest putMetadataItem(String key, String metadataItem) {
    if (this.metadata == null) {
      this.metadata = new HashMap<>();
    }
    this.metadata.put(key, metadataItem);
    return this;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
  @JsonProperty(JSON_PROPERTY_METADATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public Map<String, String> getMetadata() {
    return metadata;
  }


  @JsonProperty(JSON_PROPERTY_METADATA)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }


  public CreateFileObjectRequest repositoryId(String repositoryId) {
    this.repositoryId = repositoryId;
    return this;
  }

   /**
   * The repository identifier this file belongs too
   * @return repositoryId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "sample", required = true, value = "The repository identifier this file belongs too")
  @JsonProperty(JSON_PROPERTY_REPOSITORY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getRepositoryId() {
    return repositoryId;
  }


  @JsonProperty(JSON_PROPERTY_REPOSITORY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setRepositoryId(String repositoryId) {
    this.repositoryId = repositoryId;
  }


  public CreateFileObjectRequest name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the original file uploaded
   * @return name
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "First-upload-file-sample.png", required = true, value = "Name of the original file uploaded")
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


  public CreateFileObjectRequest mimeType(String mimeType) {
    this.mimeType = mimeType;
    return this;
  }

   /**
   * Mime type of the file. Example mime types - text/csv or application/vmd.ms-excel or application/x-directory for directories
   * @return mimeType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "application/vnd.png", required = true, value = "Mime type of the file. Example mime types - text/csv or application/vmd.ms-excel or application/x-directory for directories")
  @JsonProperty(JSON_PROPERTY_MIME_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getMimeType() {
    return mimeType;
  }


  @JsonProperty(JSON_PROPERTY_MIME_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setMimeType(String mimeType) {
    this.mimeType = mimeType;
  }


  public CreateFileObjectRequest parentFolderPath(String parentFolderPath) {
    this.parentFolderPath = parentFolderPath;
    return this;
  }

   /**
   * The folder containing the file within the repository
   * @return parentFolderPath
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "/achievement-icons", required = true, value = "The folder containing the file within the repository")
  @JsonProperty(JSON_PROPERTY_PARENT_FOLDER_PATH)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getParentFolderPath() {
    return parentFolderPath;
  }


  @JsonProperty(JSON_PROPERTY_PARENT_FOLDER_PATH)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setParentFolderPath(String parentFolderPath) {
    this.parentFolderPath = parentFolderPath;
  }


  public CreateFileObjectRequest constraints(List<String> constraints) {
    this.constraints = constraints;
    return this;
  }

  public CreateFileObjectRequest addConstraintsItem(String constraintsItem) {
    if (this.constraints == null) {
      this.constraints = new ArrayList<>();
    }
    this.constraints.add(constraintsItem);
    return this;
  }

   /**
   * Additional constraints, if the value is present it means the
   * @return constraints
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "Additional constraints, if the value is present it means the")
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
   * Return true if this CreateFileObjectRequest object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateFileObjectRequest createFileObjectRequest = (CreateFileObjectRequest) o;
    return Objects.equals(this.customFields, createFileObjectRequest.customFields) &&
        Objects.equals(this.tags, createFileObjectRequest.tags) &&
        Objects.equals(this.metadata, createFileObjectRequest.metadata) &&
        Objects.equals(this.repositoryId, createFileObjectRequest.repositoryId) &&
        Objects.equals(this.name, createFileObjectRequest.name) &&
        Objects.equals(this.mimeType, createFileObjectRequest.mimeType) &&
        Objects.equals(this.parentFolderPath, createFileObjectRequest.parentFolderPath) &&
        Objects.equals(this.constraints, createFileObjectRequest.constraints);
  }

  @Override
  public int hashCode() {
    return Objects.hash(customFields, tags, metadata, repositoryId, name, mimeType, parentFolderPath, constraints);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateFileObjectRequest {\n");
    sb.append("    customFields: ").append(toIndentedString(customFields)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    repositoryId: ").append(toIndentedString(repositoryId)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    mimeType: ").append(toIndentedString(mimeType)).append("\n");
    sb.append("    parentFolderPath: ").append(toIndentedString(parentFolderPath)).append("\n");
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

