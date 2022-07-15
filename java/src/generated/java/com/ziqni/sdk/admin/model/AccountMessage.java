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
import com.ziqni.sdk.admin.model.AccountMessageAllOf;
import com.ziqni.sdk.admin.model.EventRefType;
import com.ziqni.sdk.admin.model.MessageStatus;
import com.ziqni.sdk.admin.model.MessageType;
import com.ziqni.sdk.admin.model.ModelDefault;
import com.ziqni.sdk.admin.model.OptParamModels;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * AccountMessage
 */
@JsonPropertyOrder({
  AccountMessage.JSON_PROPERTY_ID,
  AccountMessage.JSON_PROPERTY_SPACE_NAME,
  AccountMessage.JSON_PROPERTY_CREATED,
  AccountMessage.JSON_PROPERTY_CUSTOM_FIELDS,
  AccountMessage.JSON_PROPERTY_TAGS,
  AccountMessage.JSON_PROPERTY_METADATA,
  AccountMessage.JSON_PROPERTY_EXPIRY,
  AccountMessage.JSON_PROPERTY_EVENT_REF_TYPE,
  AccountMessage.JSON_PROPERTY_EVENT_REF_ID,
  AccountMessage.JSON_PROPERTY_MESSAGE_TYPE,
  AccountMessage.JSON_PROPERTY_SUBJECT,
  AccountMessage.JSON_PROPERTY_BODY,
  AccountMessage.JSON_PROPERTY_STATUS,
  AccountMessage.JSON_PROPERTY_USER_ID
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class AccountMessage {
  public static final String JSON_PROPERTY_ID = "id";
  private String id;

  public static final String JSON_PROPERTY_SPACE_NAME = "spaceName";
  private String spaceName;

  public static final String JSON_PROPERTY_CREATED = "created";
  private OffsetDateTime created;

  public static final String JSON_PROPERTY_CUSTOM_FIELDS = "customFields";
  private Map<String, Object> customFields = null;

  public static final String JSON_PROPERTY_TAGS = "tags";
  private List<String> tags = null;

  public static final String JSON_PROPERTY_METADATA = "metadata";
  private Map<String, String> metadata = null;

  public static final String JSON_PROPERTY_EXPIRY = "expiry";
  private OffsetDateTime expiry;

  public static final String JSON_PROPERTY_EVENT_REF_TYPE = "eventRefType";
  private EventRefType eventRefType;

  public static final String JSON_PROPERTY_EVENT_REF_ID = "eventRefId";
  private String eventRefId;

  public static final String JSON_PROPERTY_MESSAGE_TYPE = "messageType";
  private MessageType messageType;

  public static final String JSON_PROPERTY_SUBJECT = "subject";
  private String subject;

  public static final String JSON_PROPERTY_BODY = "body";
  private String body;

  public static final String JSON_PROPERTY_STATUS = "status";
  private MessageStatus status;

  public static final String JSON_PROPERTY_USER_ID = "userId";
  private String userId;


  public AccountMessage id(String id) {
    this.id = id;
    return this;
  }

   /**
   * A unique system generated identifier
   * @return id
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "sc1samQmVr61KgaPQq7x", required = true, value = "A unique system generated identifier")
  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getId() {
    return id;
  }


  @JsonProperty(JSON_PROPERTY_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setId(String id) {
    this.id = id;
  }


  public AccountMessage spaceName(String spaceName) {
    this.spaceName = spaceName;
    return this;
  }

   /**
   * This is the space name which is linked to the account
   * @return spaceName
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Your_space_name", required = true, value = "This is the space name which is linked to the account")
  @JsonProperty(JSON_PROPERTY_SPACE_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getSpaceName() {
    return spaceName;
  }


  @JsonProperty(JSON_PROPERTY_SPACE_NAME)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSpaceName(String spaceName) {
    this.spaceName = spaceName;
  }


  public AccountMessage created(OffsetDateTime created) {
    this.created = created;
    return this;
  }

   /**
   * ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
   * @return created
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone")
  @JsonProperty(JSON_PROPERTY_CREATED)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public OffsetDateTime getCreated() {
    return created;
  }


  @JsonProperty(JSON_PROPERTY_CREATED)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setCreated(OffsetDateTime created) {
    this.created = created;
  }


  public AccountMessage customFields(Map<String, Object> customFields) {
    this.customFields = customFields;
    return this;
  }

  public AccountMessage putCustomFieldsItem(String key, Object customFieldsItem) {
    if (this.customFields == null) {
      this.customFields = new HashMap<>();
    }
    this.customFields.put(key, customFieldsItem);
    return this;
  }

   /**
   * Get customFields
   * @return customFields
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")
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


  public AccountMessage tags(List<String> tags) {
    this.tags = tags;
    return this;
  }

  public AccountMessage addTagsItem(String tagsItem) {
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
  @ApiModelProperty(value = "A list of id's used to tag models")
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


  public AccountMessage metadata(Map<String, String> metadata) {
    this.metadata = metadata;
    return this;
  }

  public AccountMessage putMetadataItem(String key, String metadataItem) {
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


  public AccountMessage expiry(OffsetDateTime expiry) {
    this.expiry = expiry;
    return this;
  }

   /**
   * The time that the message will disappear after. ISO8601 timestamp
   * @return expiry
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "The time that the message will disappear after. ISO8601 timestamp")
  @JsonProperty(JSON_PROPERTY_EXPIRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public OffsetDateTime getExpiry() {
    return expiry;
  }


  @JsonProperty(JSON_PROPERTY_EXPIRY)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setExpiry(OffsetDateTime expiry) {
    this.expiry = expiry;
  }


  public AccountMessage eventRefType(EventRefType eventRefType) {
    this.eventRefType = eventRefType;
    return this;
  }

   /**
   * Get eventRefType
   * @return eventRefType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_EVENT_REF_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public EventRefType getEventRefType() {
    return eventRefType;
  }


  @JsonProperty(JSON_PROPERTY_EVENT_REF_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setEventRefType(EventRefType eventRefType) {
    this.eventRefType = eventRefType;
  }


  public AccountMessage eventRefId(String eventRefId) {
    this.eventRefId = eventRefId;
    return this;
  }

   /**
   * The reference ID of the event object
   * @return eventRefId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Dc4swmQBVd51K6gPQqFx", required = true, value = "The reference ID of the event object")
  @JsonProperty(JSON_PROPERTY_EVENT_REF_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getEventRefId() {
    return eventRefId;
  }


  @JsonProperty(JSON_PROPERTY_EVENT_REF_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setEventRefId(String eventRefId) {
    this.eventRefId = eventRefId;
  }


  public AccountMessage messageType(MessageType messageType) {
    this.messageType = messageType;
    return this;
  }

   /**
   * Get messageType
   * @return messageType
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_MESSAGE_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public MessageType getMessageType() {
    return messageType;
  }


  @JsonProperty(JSON_PROPERTY_MESSAGE_TYPE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setMessageType(MessageType messageType) {
    this.messageType = messageType;
  }


  public AccountMessage subject(String subject) {
    this.subject = subject;
    return this;
  }

   /**
   * The title of the message
   * @return subject
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Congratulations!", required = true, value = "The title of the message")
  @JsonProperty(JSON_PROPERTY_SUBJECT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getSubject() {
    return subject;
  }


  @JsonProperty(JSON_PROPERTY_SUBJECT)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setSubject(String subject) {
    this.subject = subject;
  }


  public AccountMessage body(String body) {
    this.body = body;
    return this;
  }

   /**
   * The context of the message
   * @return body
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "You have won", required = true, value = "The context of the message")
  @JsonProperty(JSON_PROPERTY_BODY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getBody() {
    return body;
  }


  @JsonProperty(JSON_PROPERTY_BODY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setBody(String body) {
    this.body = body;
  }


  public AccountMessage status(MessageStatus status) {
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public MessageStatus getStatus() {
    return status;
  }


  @JsonProperty(JSON_PROPERTY_STATUS)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setStatus(MessageStatus status) {
    this.status = status;
  }


  public AccountMessage userId(String userId) {
    this.userId = userId;
    return this;
  }

   /**
   * Get userId
   * @return userId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "")
  @JsonProperty(JSON_PROPERTY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getUserId() {
    return userId;
  }


  @JsonProperty(JSON_PROPERTY_USER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setUserId(String userId) {
    this.userId = userId;
  }


  /**
   * Return true if this AccountMessage object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountMessage accountMessage = (AccountMessage) o;
    return Objects.equals(this.id, accountMessage.id) &&
        Objects.equals(this.spaceName, accountMessage.spaceName) &&
        Objects.equals(this.created, accountMessage.created) &&
        Objects.equals(this.customFields, accountMessage.customFields) &&
        Objects.equals(this.tags, accountMessage.tags) &&
        Objects.equals(this.metadata, accountMessage.metadata) &&
        Objects.equals(this.expiry, accountMessage.expiry) &&
        Objects.equals(this.eventRefType, accountMessage.eventRefType) &&
        Objects.equals(this.eventRefId, accountMessage.eventRefId) &&
        Objects.equals(this.messageType, accountMessage.messageType) &&
        Objects.equals(this.subject, accountMessage.subject) &&
        Objects.equals(this.body, accountMessage.body) &&
        Objects.equals(this.status, accountMessage.status) &&
        Objects.equals(this.userId, accountMessage.userId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, spaceName, created, customFields, tags, metadata, expiry, eventRefType, eventRefId, messageType, subject, body, status, userId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountMessage {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    spaceName: ").append(toIndentedString(spaceName)).append("\n");
    sb.append("    created: ").append(toIndentedString(created)).append("\n");
    sb.append("    customFields: ").append(toIndentedString(customFields)).append("\n");
    sb.append("    tags: ").append(toIndentedString(tags)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    expiry: ").append(toIndentedString(expiry)).append("\n");
    sb.append("    eventRefType: ").append(toIndentedString(eventRefType)).append("\n");
    sb.append("    eventRefId: ").append(toIndentedString(eventRefId)).append("\n");
    sb.append("    messageType: ").append(toIndentedString(messageType)).append("\n");
    sb.append("    subject: ").append(toIndentedString(subject)).append("\n");
    sb.append("    body: ").append(toIndentedString(body)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    userId: ").append(toIndentedString(userId)).append("\n");
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

