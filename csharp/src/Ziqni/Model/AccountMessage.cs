/*
 * ZIQNI Admin API
 *
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.9
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
using OpenAPIDateConverter = Ziqni.Client.OpenAPIDateConverter;

namespace Ziqni.Model
{
    /// <summary>
    /// AccountMessage
    /// </summary>
    [DataContract]
    public partial class AccountMessage :  IEquatable<AccountMessage>, IValidatableObject
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
        /// Initializes a new instance of the <see cref="AccountMessage" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected AccountMessage() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="AccountMessage" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="spaceName">This is the space name which is linked to the account (required).</param>
        /// <param name="created">ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone (required).</param>
        /// <param name="customFields">customFields.</param>
        /// <param name="tags">A list of id&#39;s used to tag models.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="expiry">The time that the message will disappear after. ISO8601 timestamp.</param>
        /// <param name="eventRefType">eventRefType (required).</param>
        /// <param name="eventRefId">The reference ID of the event object (required).</param>
        /// <param name="messageType">messageType (required).</param>
        /// <param name="subject">The title of the message (required).</param>
        /// <param name="body">The context of the message (required).</param>
        /// <param name="status">status (required).</param>
        /// <param name="userId">userId (required).</param>
        /// <param name="links">links (required).</param>
        public AccountMessage(string id = default(string), string spaceName = default(string), DateTime created = default(DateTime), Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), DateTime expiry = default(DateTime), EventRefType eventRefType = default(EventRefType), string eventRefId = default(string), MessageType messageType = default(MessageType), string subject = default(string), string body = default(string), MessageStatus status = default(MessageStatus), string userId = default(string), List<MessageLink> links = default(List<MessageLink>))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new InvalidDataException("id is a required property for AccountMessage and cannot be null");
            }
            else
            {
                this.Id = id;
            }

            // to ensure "spaceName" is required (not null)
            if (spaceName == null)
            {
                throw new InvalidDataException("spaceName is a required property for AccountMessage and cannot be null");
            }
            else
            {
                this.SpaceName = spaceName;
            }

            // to ensure "created" is required (not null)
            if (created == null)
            {
                throw new InvalidDataException("created is a required property for AccountMessage and cannot be null");
            }
            else
            {
                this.Created = created;
            }

            // to ensure "eventRefType" is required (not null)
            if (eventRefType == null)
            {
                throw new InvalidDataException("eventRefType is a required property for AccountMessage and cannot be null");
            }
            else
            {
                this.EventRefType = eventRefType;
            }

            // to ensure "eventRefId" is required (not null)
            if (eventRefId == null)
            {
                throw new InvalidDataException("eventRefId is a required property for AccountMessage and cannot be null");
            }
            else
            {
                this.EventRefId = eventRefId;
            }

            // to ensure "messageType" is required (not null)
            if (messageType == null)
            {
                throw new InvalidDataException("messageType is a required property for AccountMessage and cannot be null");
            }
            else
            {
                this.MessageType = messageType;
            }

            // to ensure "subject" is required (not null)
            if (subject == null)
            {
                throw new InvalidDataException("subject is a required property for AccountMessage and cannot be null");
            }
            else
            {
                this.Subject = subject;
            }

            // to ensure "body" is required (not null)
            if (body == null)
            {
                throw new InvalidDataException("body is a required property for AccountMessage and cannot be null");
            }
            else
            {
                this.Body = body;
            }

            // to ensure "status" is required (not null)
            if (status == null)
            {
                throw new InvalidDataException("status is a required property for AccountMessage and cannot be null");
            }
            else
            {
                this.Status = status;
            }

            // to ensure "userId" is required (not null)
            if (userId == null)
            {
                throw new InvalidDataException("userId is a required property for AccountMessage and cannot be null");
            }
            else
            {
                this.UserId = userId;
            }

            // to ensure "links" is required (not null)
            if (links == null)
            {
                throw new InvalidDataException("links is a required property for AccountMessage and cannot be null");
            }
            else
            {
                this.Links = links;
            }

            this.CustomFields = customFields;
            this.Tags = tags;
            this.Metadata = metadata;
            this.Expiry = expiry;
        }

        /// <summary>
        /// A unique system generated identifier
        /// </summary>
        /// <value>A unique system generated identifier</value>
        [DataMember(Name="id", EmitDefaultValue=true)]
        public string Id { get; set; }

        /// <summary>
        /// This is the space name which is linked to the account
        /// </summary>
        /// <value>This is the space name which is linked to the account</value>
        [DataMember(Name="spaceName", EmitDefaultValue=true)]
        public string SpaceName { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone</value>
        [DataMember(Name="created", EmitDefaultValue=true)]
        public DateTime Created { get; set; }

        /// <summary>
        /// Gets or Sets CustomFields
        /// </summary>
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
        /// The time that the message will disappear after. ISO8601 timestamp
        /// </summary>
        /// <value>The time that the message will disappear after. ISO8601 timestamp</value>
        [DataMember(Name="expiry", EmitDefaultValue=false)]
        public DateTime Expiry { get; set; }


        /// <summary>
        /// The reference ID of the event object
        /// </summary>
        /// <value>The reference ID of the event object</value>
        [DataMember(Name="eventRefId", EmitDefaultValue=true)]
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
        /// Gets or Sets UserId
        /// </summary>
        [DataMember(Name="userId", EmitDefaultValue=true)]
        public string UserId { get; set; }

        /// <summary>
        /// Gets or Sets Links
        /// </summary>
        [DataMember(Name="links", EmitDefaultValue=true)]
        public List<MessageLink> Links { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class AccountMessage {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SpaceName: ").Append(SpaceName).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Expiry: ").Append(Expiry).Append("\n");
            sb.Append("  EventRefType: ").Append(EventRefType).Append("\n");
            sb.Append("  EventRefId: ").Append(EventRefId).Append("\n");
            sb.Append("  MessageType: ").Append(MessageType).Append("\n");
            sb.Append("  Subject: ").Append(Subject).Append("\n");
            sb.Append("  Body: ").Append(Body).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  UserId: ").Append(UserId).Append("\n");
            sb.Append("  Links: ").Append(Links).Append("\n");
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
            return this.Equals(input as AccountMessage);
        }

        /// <summary>
        /// Returns true if AccountMessage instances are equal
        /// </summary>
        /// <param name="input">Instance of AccountMessage to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(AccountMessage input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.SpaceName == input.SpaceName ||
                    (this.SpaceName != null &&
                    this.SpaceName.Equals(input.SpaceName))
                ) && 
                (
                    this.Created == input.Created ||
                    (this.Created != null &&
                    this.Created.Equals(input.Created))
                ) && 
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
                    this.Expiry == input.Expiry ||
                    (this.Expiry != null &&
                    this.Expiry.Equals(input.Expiry))
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
                    this.UserId == input.UserId ||
                    (this.UserId != null &&
                    this.UserId.Equals(input.UserId))
                ) && 
                (
                    this.Links == input.Links ||
                    this.Links != null &&
                    input.Links != null &&
                    this.Links.SequenceEqual(input.Links)
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.SpaceName != null)
                    hashCode = hashCode * 59 + this.SpaceName.GetHashCode();
                if (this.Created != null)
                    hashCode = hashCode * 59 + this.Created.GetHashCode();
                if (this.CustomFields != null)
                    hashCode = hashCode * 59 + this.CustomFields.GetHashCode();
                if (this.Tags != null)
                    hashCode = hashCode * 59 + this.Tags.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.Expiry != null)
                    hashCode = hashCode * 59 + this.Expiry.GetHashCode();
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
                if (this.UserId != null)
                    hashCode = hashCode * 59 + this.UserId.GetHashCode();
                if (this.Links != null)
                    hashCode = hashCode * 59 + this.Links.GetHashCode();
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