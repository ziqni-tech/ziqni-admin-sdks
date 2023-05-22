/*
 * ZIQNI Admin API
 *
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
 * Contact: support@ziqni.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// CreateMemberMessageRequest
    /// </summary>
    [DataContract]
    public partial class CreateMemberMessageRequest :  IEquatable<CreateMemberMessageRequest>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets EventRefType
        /// </summary>
        [DataMember(Name="eventRefType", EmitDefaultValue=true)]
        public EventRefType EventRefType { get; set; }
        /// <summary>
        /// Gets or Sets MessageType
        /// </summary>
        [DataMember(Name="messageType", EmitDefaultValue=true)]
        public MessageType MessageType { get; set; }
        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name="status", EmitDefaultValue=true)]
        public MessageStatus Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateMemberMessageRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateMemberMessageRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateMemberMessageRequest" /> class.
        /// </summary>
        /// <param name="customFields">A list of custom field entries.</param>
        /// <param name="tags">A list of id&#39;s used to tag models.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="eventRefType">eventRefType (required).</param>
        /// <param name="eventRefId">The reference ID of the event object.</param>
        /// <param name="messageType">messageType (required).</param>
        /// <param name="subject">The title of the message (required).</param>
        /// <param name="body">The context of the message (required).</param>
        /// <param name="status">status (required).</param>
        /// <param name="expireAfterDate">Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified..</param>
        /// <param name="expireAfterDays">Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified..</param>
        /// <param name="links">links (required).</param>
        /// <param name="memberIds">memberIds.</param>
        /// <param name="translations">translations.</param>
        public CreateMemberMessageRequest(Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), EventRefType eventRefType = default(EventRefType), string eventRefId = default(string), MessageType messageType = default(MessageType), string subject = default(string), string body = default(string), MessageStatus status = default(MessageStatus), DateTime expireAfterDate = default(DateTime), int expireAfterDays = default(int), List<MessageLink> links = default(List<MessageLink>), List<string> memberIds = default(List<string>), List<Translation> translations = default(List<Translation>))
        {
            // to ensure "eventRefType" is required (not null)
            if (eventRefType == null)
            {
                throw new InvalidDataException("eventRefType is a required property for CreateMemberMessageRequest and cannot be null");
            }
            else
            {
                this.EventRefType = eventRefType;
            }

            // to ensure "messageType" is required (not null)
            if (messageType == null)
            {
                throw new InvalidDataException("messageType is a required property for CreateMemberMessageRequest and cannot be null");
            }
            else
            {
                this.MessageType = messageType;
            }

            // to ensure "subject" is required (not null)
            if (subject == null)
            {
                throw new InvalidDataException("subject is a required property for CreateMemberMessageRequest and cannot be null");
            }
            else
            {
                this.Subject = subject;
            }

            // to ensure "body" is required (not null)
            if (body == null)
            {
                throw new InvalidDataException("body is a required property for CreateMemberMessageRequest and cannot be null");
            }
            else
            {
                this.Body = body;
            }

            // to ensure "status" is required (not null)
            if (status == null)
            {
                throw new InvalidDataException("status is a required property for CreateMemberMessageRequest and cannot be null");
            }
            else
            {
                this.Status = status;
            }

            // to ensure "links" is required (not null)
            if (links == null)
            {
                throw new InvalidDataException("links is a required property for CreateMemberMessageRequest and cannot be null");
            }
            else
            {
                this.Links = links;
            }

            this.CustomFields = customFields;
            this.Tags = tags;
            this.Metadata = metadata;
            this.EventRefId = eventRefId;
            this.ExpireAfterDate = expireAfterDate;
            this.ExpireAfterDays = expireAfterDays;
            this.MemberIds = memberIds;
            this.Translations = translations;
        }

        /// <summary>
        /// A list of custom field entries
        /// </summary>
        /// <value>A list of custom field entries</value>
        [DataMember(Name="customFields", EmitDefaultValue=false)]
        public Dictionary<string, Object> CustomFields { get; set; }

        /// <summary>
        /// A list of id&#39;s used to tag models
        /// </summary>
        /// <value>A list of id&#39;s used to tag models</value>
        [DataMember(Name="tags", EmitDefaultValue=false)]
        public List<string> Tags { get; set; }

        /// <summary>
        /// Gets or Sets Metadata
        /// </summary>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public Dictionary<string, string> Metadata { get; set; }


        /// <summary>
        /// The reference ID of the event object
        /// </summary>
        /// <value>The reference ID of the event object</value>
        [DataMember(Name="eventRefId", EmitDefaultValue=false)]
        public string EventRefId { get; set; }


        /// <summary>
        /// The title of the message
        /// </summary>
        /// <value>The title of the message</value>
        [DataMember(Name="subject", EmitDefaultValue=true)]
        public string Subject { get; set; }

        /// <summary>
        /// The context of the message
        /// </summary>
        /// <value>The context of the message</value>
        [DataMember(Name="body", EmitDefaultValue=true)]
        public string Body { get; set; }


        /// <summary>
        /// Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified.
        /// </summary>
        /// <value>Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified.</value>
        [DataMember(Name="expireAfterDate", EmitDefaultValue=false)]
        public DateTime ExpireAfterDate { get; set; }

        /// <summary>
        /// Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified.
        /// </summary>
        /// <value>Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified.</value>
        [DataMember(Name="expireAfterDays", EmitDefaultValue=false)]
        public int ExpireAfterDays { get; set; }

        /// <summary>
        /// Gets or Sets Links
        /// </summary>
        [DataMember(Name="links", EmitDefaultValue=true)]
        public List<MessageLink> Links { get; set; }

        /// <summary>
        /// Gets or Sets MemberIds
        /// </summary>
        [DataMember(Name="memberIds", EmitDefaultValue=false)]
        public List<string> MemberIds { get; set; }

        /// <summary>
        /// Gets or Sets Translations
        /// </summary>
        [DataMember(Name="translations", EmitDefaultValue=false)]
        public List<Translation> Translations { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateMemberMessageRequest {\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  EventRefType: ").Append(EventRefType).Append("\n");
            sb.Append("  EventRefId: ").Append(EventRefId).Append("\n");
            sb.Append("  MessageType: ").Append(MessageType).Append("\n");
            sb.Append("  Subject: ").Append(Subject).Append("\n");
            sb.Append("  Body: ").Append(Body).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  ExpireAfterDate: ").Append(ExpireAfterDate).Append("\n");
            sb.Append("  ExpireAfterDays: ").Append(ExpireAfterDays).Append("\n");
            sb.Append("  Links: ").Append(Links).Append("\n");
            sb.Append("  MemberIds: ").Append(MemberIds).Append("\n");
            sb.Append("  Translations: ").Append(Translations).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as CreateMemberMessageRequest);
        }

        /// <summary>
        /// Returns true if CreateMemberMessageRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateMemberMessageRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateMemberMessageRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CustomFields == input.CustomFields ||
                    this.CustomFields != null &&
                    input.CustomFields != null &&
                    this.CustomFields.SequenceEqual(input.CustomFields)
                ) && 
                (
                    this.Tags == input.Tags ||
                    this.Tags != null &&
                    input.Tags != null &&
                    this.Tags.SequenceEqual(input.Tags)
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    input.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
                ) && 
                (
                    this.EventRefType == input.EventRefType ||
                    (this.EventRefType != null &&
                    this.EventRefType.Equals(input.EventRefType))
                ) && 
                (
                    this.EventRefId == input.EventRefId ||
                    (this.EventRefId != null &&
                    this.EventRefId.Equals(input.EventRefId))
                ) && 
                (
                    this.MessageType == input.MessageType ||
                    (this.MessageType != null &&
                    this.MessageType.Equals(input.MessageType))
                ) && 
                (
                    this.Subject == input.Subject ||
                    (this.Subject != null &&
                    this.Subject.Equals(input.Subject))
                ) && 
                (
                    this.Body == input.Body ||
                    (this.Body != null &&
                    this.Body.Equals(input.Body))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                ) && 
                (
                    this.ExpireAfterDate == input.ExpireAfterDate ||
                    (this.ExpireAfterDate != null &&
                    this.ExpireAfterDate.Equals(input.ExpireAfterDate))
                ) && 
                (
                    this.ExpireAfterDays == input.ExpireAfterDays ||
                    (this.ExpireAfterDays != null &&
                    this.ExpireAfterDays.Equals(input.ExpireAfterDays))
                ) && 
                (
                    this.Links == input.Links ||
                    this.Links != null &&
                    input.Links != null &&
                    this.Links.SequenceEqual(input.Links)
                ) && 
                (
                    this.MemberIds == input.MemberIds ||
                    this.MemberIds != null &&
                    input.MemberIds != null &&
                    this.MemberIds.SequenceEqual(input.MemberIds)
                ) && 
                (
                    this.Translations == input.Translations ||
                    this.Translations != null &&
                    input.Translations != null &&
                    this.Translations.SequenceEqual(input.Translations)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.CustomFields != null)
                    hashCode = hashCode * 59 + this.CustomFields.GetHashCode();
                if (this.Tags != null)
                    hashCode = hashCode * 59 + this.Tags.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.EventRefType != null)
                    hashCode = hashCode * 59 + this.EventRefType.GetHashCode();
                if (this.EventRefId != null)
                    hashCode = hashCode * 59 + this.EventRefId.GetHashCode();
                if (this.MessageType != null)
                    hashCode = hashCode * 59 + this.MessageType.GetHashCode();
                if (this.Subject != null)
                    hashCode = hashCode * 59 + this.Subject.GetHashCode();
                if (this.Body != null)
                    hashCode = hashCode * 59 + this.Body.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
                if (this.ExpireAfterDate != null)
                    hashCode = hashCode * 59 + this.ExpireAfterDate.GetHashCode();
                if (this.ExpireAfterDays != null)
                    hashCode = hashCode * 59 + this.ExpireAfterDays.GetHashCode();
                if (this.Links != null)
                    hashCode = hashCode * 59 + this.Links.GetHashCode();
                if (this.MemberIds != null)
                    hashCode = hashCode * 59 + this.MemberIds.GetHashCode();
                if (this.Translations != null)
                    hashCode = hashCode * 59 + this.Translations.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
