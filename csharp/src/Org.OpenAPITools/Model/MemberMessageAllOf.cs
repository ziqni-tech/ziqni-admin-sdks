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
    /// MemberMessageAllOf
    /// </summary>
    [DataContract]
    public partial class MemberMessageAllOf :  IEquatable<MemberMessageAllOf>, IValidatableObject
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
        /// Initializes a new instance of the <see cref="MemberMessageAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected MemberMessageAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="MemberMessageAllOf" /> class.
        /// </summary>
        /// <param name="eventRefType">eventRefType (required).</param>
        /// <param name="eventRefId">The reference ID of the event object.</param>
        /// <param name="messageType">messageType (required).</param>
        /// <param name="subject">The title of the message (required).</param>
        /// <param name="body">The context of the message (required).</param>
        /// <param name="status">status (required).</param>
        /// <param name="expiry">The time that the message will disappear after. ISO8601 timestamp (required).</param>
        /// <param name="links">links (required).</param>
        /// <param name="memberIds">memberIds.</param>
        public MemberMessageAllOf(EventRefType eventRefType = default(EventRefType), string eventRefId = default(string), MessageType messageType = default(MessageType), string subject = default(string), string body = default(string), MessageStatus status = default(MessageStatus), DateTime expiry = default(DateTime), MessageLink links = default(MessageLink), List<string> memberIds = default(List<string>))
        {
            // to ensure "eventRefType" is required (not null)
            if (eventRefType == null)
            {
                throw new InvalidDataException("eventRefType is a required property for MemberMessageAllOf and cannot be null");
            }
            else
            {
                this.EventRefType = eventRefType;
            }

            // to ensure "messageType" is required (not null)
            if (messageType == null)
            {
                throw new InvalidDataException("messageType is a required property for MemberMessageAllOf and cannot be null");
            }
            else
            {
                this.MessageType = messageType;
            }

            // to ensure "subject" is required (not null)
            if (subject == null)
            {
                throw new InvalidDataException("subject is a required property for MemberMessageAllOf and cannot be null");
            }
            else
            {
                this.Subject = subject;
            }

            // to ensure "body" is required (not null)
            if (body == null)
            {
                throw new InvalidDataException("body is a required property for MemberMessageAllOf and cannot be null");
            }
            else
            {
                this.Body = body;
            }

            // to ensure "status" is required (not null)
            if (status == null)
            {
                throw new InvalidDataException("status is a required property for MemberMessageAllOf and cannot be null");
            }
            else
            {
                this.Status = status;
            }

            // to ensure "expiry" is required (not null)
            if (expiry == null)
            {
                throw new InvalidDataException("expiry is a required property for MemberMessageAllOf and cannot be null");
            }
            else
            {
                this.Expiry = expiry;
            }

            // to ensure "links" is required (not null)
            if (links == null)
            {
                throw new InvalidDataException("links is a required property for MemberMessageAllOf and cannot be null");
            }
            else
            {
                this.Links = links;
            }

            this.EventRefId = eventRefId;
            this.MemberIds = memberIds;
        }


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
        /// The time that the message will disappear after. ISO8601 timestamp
        /// </summary>
        /// <value>The time that the message will disappear after. ISO8601 timestamp</value>
        [DataMember(Name="expiry", EmitDefaultValue=true)]
        public DateTime Expiry { get; set; }

        /// <summary>
        /// Gets or Sets Links
        /// </summary>
        [DataMember(Name="links", EmitDefaultValue=true)]
        public MessageLink Links { get; set; }

        /// <summary>
        /// Gets or Sets MemberIds
        /// </summary>
        [DataMember(Name="memberIds", EmitDefaultValue=false)]
        public List<string> MemberIds { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MemberMessageAllOf {\n");
            sb.Append("  EventRefType: ").Append(EventRefType).Append("\n");
            sb.Append("  EventRefId: ").Append(EventRefId).Append("\n");
            sb.Append("  MessageType: ").Append(MessageType).Append("\n");
            sb.Append("  Subject: ").Append(Subject).Append("\n");
            sb.Append("  Body: ").Append(Body).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  Expiry: ").Append(Expiry).Append("\n");
            sb.Append("  Links: ").Append(Links).Append("\n");
            sb.Append("  MemberIds: ").Append(MemberIds).Append("\n");
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
            return this.Equals(input as MemberMessageAllOf);
        }

        /// <summary>
        /// Returns true if MemberMessageAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of MemberMessageAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MemberMessageAllOf input)
        {
            if (input == null)
                return false;

            return 
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
                    this.Expiry == input.Expiry ||
                    (this.Expiry != null &&
                    this.Expiry.Equals(input.Expiry))
                ) && 
                (
                    this.Links == input.Links ||
                    (this.Links != null &&
                    this.Links.Equals(input.Links))
                ) && 
                (
                    this.MemberIds == input.MemberIds ||
                    this.MemberIds != null &&
                    input.MemberIds != null &&
                    this.MemberIds.SequenceEqual(input.MemberIds)
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
                if (this.Expiry != null)
                    hashCode = hashCode * 59 + this.Expiry.GetHashCode();
                if (this.Links != null)
                    hashCode = hashCode * 59 + this.Links.GetHashCode();
                if (this.MemberIds != null)
                    hashCode = hashCode * 59 + this.MemberIds.GetHashCode();
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
