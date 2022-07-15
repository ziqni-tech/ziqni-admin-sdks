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
import com.ziqni.sdk.admin.model.EventRefType;
import com.ziqni.sdk.admin.model.MessageStatus;
import com.ziqni.sdk.admin.model.MessageType;
import com.ziqni.sdk.admin.model.Translation;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;


/**
 * CreateMemberMessageRequestAllOf
 */
@JsonPropertyOrder({
  CreateMemberMessageRequestAllOf.JSON_PROPERTY_EVENT_REF_TYPE,
  CreateMemberMessageRequestAllOf.JSON_PROPERTY_EVENT_REF_ID,
  CreateMemberMessageRequestAllOf.JSON_PROPERTY_MESSAGE_TYPE,
  CreateMemberMessageRequestAllOf.JSON_PROPERTY_SUBJECT,
  CreateMemberMessageRequestAllOf.JSON_PROPERTY_BODY,
  CreateMemberMessageRequestAllOf.JSON_PROPERTY_PRIZE,
  CreateMemberMessageRequestAllOf.JSON_PROPERTY_STATUS,
  CreateMemberMessageRequestAllOf.JSON_PROPERTY_EXPIRY,
  CreateMemberMessageRequestAllOf.JSON_PROPERTY_MEMBER_ID,
  CreateMemberMessageRequestAllOf.JSON_PROPERTY_TRANSLATIONS,
  CreateMemberMessageRequestAllOf.JSON_PROPERTY_TRANSLATABLE_FIELDS
})
@javax.annotation.processing.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen")
public class CreateMemberMessageRequestAllOf {
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

  public static final String JSON_PROPERTY_PRIZE = "prize";
  private String prize;

  public static final String JSON_PROPERTY_STATUS = "status";
  private MessageStatus status;

  public static final String JSON_PROPERTY_EXPIRY = "expiry";
  private OffsetDateTime expiry;

  public static final String JSON_PROPERTY_MEMBER_ID = "memberId";
  private List<String> memberId = new ArrayList<>();

  public static final String JSON_PROPERTY_TRANSLATIONS = "translations";
  private List<Translation> translations = null;

  public static final String JSON_PROPERTY_TRANSLATABLE_FIELDS = "translatableFields";
  private List<String> translatableFields = null;


  public CreateMemberMessageRequestAllOf eventRefType(EventRefType eventRefType) {
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


  public CreateMemberMessageRequestAllOf eventRefId(String eventRefId) {
    this.eventRefId = eventRefId;
    return this;
  }

   /**
   * The reference ID of the event object
   * @return eventRefId
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "Dc4swmQBVd51K6gPQqFx", value = "The reference ID of the event object")
  @JsonProperty(JSON_PROPERTY_EVENT_REF_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public String getEventRefId() {
    return eventRefId;
  }


  @JsonProperty(JSON_PROPERTY_EVENT_REF_ID)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)
  public void setEventRefId(String eventRefId) {
    this.eventRefId = eventRefId;
  }


  public CreateMemberMessageRequestAllOf messageType(MessageType messageType) {
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


  public CreateMemberMessageRequestAllOf subject(String subject) {
    this.subject = subject;
    return this;
  }

   /**
   * The title of the message
   * @return subject
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Hello and welcome", required = true, value = "The title of the message")
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


  public CreateMemberMessageRequestAllOf body(String body) {
    this.body = body;
    return this;
  }

   /**
   * The context of the message
   * @return body
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Here is a message to welcome you on board!", required = true, value = "The context of the message")
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


   /**
   * Unique system identifier of an Award
   * @return prize
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "Dc4swmQBVd51K6gPQqFx", required = true, value = "Unique system identifier of an Award")
  @JsonProperty(JSON_PROPERTY_PRIZE)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public String getPrize() {
    return prize;
  }




  public CreateMemberMessageRequestAllOf status(MessageStatus status) {
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


  public CreateMemberMessageRequestAllOf expiry(OffsetDateTime expiry) {
    this.expiry = expiry;
    return this;
  }

   /**
   * The time that the message will disappear after. ISO8601 timestamp
   * @return expiry
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(required = true, value = "The time that the message will disappear after. ISO8601 timestamp")
  @JsonProperty(JSON_PROPERTY_EXPIRY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public OffsetDateTime getExpiry() {
    return expiry;
  }


  @JsonProperty(JSON_PROPERTY_EXPIRY)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setExpiry(OffsetDateTime expiry) {
    this.expiry = expiry;
  }


  public CreateMemberMessageRequestAllOf memberId(List<String> memberId) {
    this.memberId = memberId;
    return this;
  }

  public CreateMemberMessageRequestAllOf addMemberIdItem(String memberIdItem) {
    this.memberId.add(memberIdItem);
    return this;
  }

   /**
   * The reference ID of the event object
   * @return memberId
  **/
  @javax.annotation.Nonnull
  @ApiModelProperty(example = "- Dc4swmQBVd51K6gPQqFx", required = true, value = "The reference ID of the event object")
  @JsonProperty(JSON_PROPERTY_MEMBER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)

  public List<String> getMemberId() {
    return memberId;
  }


  @JsonProperty(JSON_PROPERTY_MEMBER_ID)
  @JsonInclude(value = JsonInclude.Include.ALWAYS)
  public void setMemberId(List<String> memberId) {
    this.memberId = memberId;
  }


  public CreateMemberMessageRequestAllOf translations(List<Translation> translations) {
    this.translations = translations;
    return this;
  }

  public CreateMemberMessageRequestAllOf addTranslationsItem(Translation translationsItem) {
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
   * Message translatable fields
   * @return translatableFields
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(example = "- subject - body", value = "Message translatable fields")
  @JsonProperty(JSON_PROPERTY_TRANSLATABLE_FIELDS)
  @JsonInclude(value = JsonInclude.Include.USE_DEFAULTS)

  public List<String> getTranslatableFields() {
    return translatableFields;
  }




  /**
   * Return true if this CreateMemberMessageRequest_allOf object is equal to o.
   */
  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateMemberMessageRequestAllOf createMemberMessageRequestAllOf = (CreateMemberMessageRequestAllOf) o;
    return Objects.equals(this.eventRefType, createMemberMessageRequestAllOf.eventRefType) &&
        Objects.equals(this.eventRefId, createMemberMessageRequestAllOf.eventRefId) &&
        Objects.equals(this.messageType, createMemberMessageRequestAllOf.messageType) &&
        Objects.equals(this.subject, createMemberMessageRequestAllOf.subject) &&
        Objects.equals(this.body, createMemberMessageRequestAllOf.body) &&
        Objects.equals(this.prize, createMemberMessageRequestAllOf.prize) &&
        Objects.equals(this.status, createMemberMessageRequestAllOf.status) &&
        Objects.equals(this.expiry, createMemberMessageRequestAllOf.expiry) &&
        Objects.equals(this.memberId, createMemberMessageRequestAllOf.memberId) &&
        Objects.equals(this.translations, createMemberMessageRequestAllOf.translations) &&
        Objects.equals(this.translatableFields, createMemberMessageRequestAllOf.translatableFields);
  }

  @Override
  public int hashCode() {
    return Objects.hash(eventRefType, eventRefId, messageType, subject, body, prize, status, expiry, memberId, translations, translatableFields);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateMemberMessageRequestAllOf {\n");
    sb.append("    eventRefType: ").append(toIndentedString(eventRefType)).append("\n");
    sb.append("    eventRefId: ").append(toIndentedString(eventRefId)).append("\n");
    sb.append("    messageType: ").append(toIndentedString(messageType)).append("\n");
    sb.append("    subject: ").append(toIndentedString(subject)).append("\n");
    sb.append("    body: ").append(toIndentedString(body)).append("\n");
    sb.append("    prize: ").append(toIndentedString(prize)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    expiry: ").append(toIndentedString(expiry)).append("\n");
    sb.append("    memberId: ").append(toIndentedString(memberId)).append("\n");
    sb.append("    translations: ").append(toIndentedString(translations)).append("\n");
    sb.append("    translatableFields: ").append(toIndentedString(translatableFields)).append("\n");
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

