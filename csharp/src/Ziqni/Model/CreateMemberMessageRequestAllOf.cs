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
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;

namespace Ziqni.Model
{
    /// <summary>
    /// CreateMemberMessageRequestAllOf
    /// </summary>
    [DataContract(Name = "CreateMemberMessageRequest_allOf")]
    public partial class CreateMemberMessageRequestAllOf : IEquatable<CreateMemberMessageRequestAllOf>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets EventRefType
        /// </summary>
        [DataMember(Name = "eventRefType", IsRequired = true, EmitDefaultValue = false)]
        public EventRefType EventRefType { get; set; }

        /// <summary>
        /// Gets or Sets MessageType
        /// </summary>
        [DataMember(Name = "messageType", IsRequired = true, EmitDefaultValue = false)]
        public MessageType MessageType { get; set; }

        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name = "status", IsRequired = true, EmitDefaultValue = false)]
        public MessageStatus Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateMemberMessageRequestAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateMemberMessageRequestAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateMemberMessageRequestAllOf" /> class.
        /// </summary>
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
        public CreateMemberMessageRequestAllOf(EventRefType eventRefType = default(EventRefType), string eventRefId = default(string), MessageType messageType = default(MessageType), string subject = default(string), string body = default(string), MessageStatus status = default(MessageStatus), DateTime expireAfterDate = default(DateTime), int expireAfterDays = default(int), List<MessageLink> links = default(List<MessageLink>), List<string> memberIds = default(List<string>), List<Translation> translations = default(List<Translation>))
        {
            this.EventRefType = eventRefType;
            this.MessageType = messageType;
            // to ensure "subject" is required (not null)
            this.Subject = subject ?? throw new ArgumentNullException("subject is a required property for CreateMemberMessageRequestAllOf and cannot be null");
            // to ensure "body" is required (not null)
            this.Body = body ?? throw new ArgumentNullException("body is a required property for CreateMemberMessageRequestAllOf and cannot be null");
            this.Status = status;
            // to ensure "links" is required (not null)
            this.Links = links ?? throw new ArgumentNullException("links is a required property for CreateMemberMessageRequestAllOf and cannot be null");
            this.EventRefId = eventRefId;
            this.ExpireAfterDate = expireAfterDate;
            this.ExpireAfterDays = expireAfterDays;
            this.MemberIds = memberIds;
            this.Translations = translations;
        }

        /// <summary>
        /// The reference ID of the event object
        /// </summary>
        /// <value>The reference ID of the event object</value>
        [DataMember(Name = "eventRefId", EmitDefaultValue = false)]
        public string EventRefId { get; set; }

        /// <summary>
        /// The title of the message
        /// </summary>
        /// <value>The title of the message</value>
        [DataMember(Name = "subject", IsRequired = true, EmitDefaultValue = false)]
        public string Subject { get; set; }

        /// <summary>
        /// The context of the message
        /// </summary>
        /// <value>The context of the message</value>
        [DataMember(Name = "body", IsRequired = true, EmitDefaultValue = false)]
        public string Body { get; set; }

        /// <summary>
        /// Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified.
        /// </summary>
        /// <value>Specify the expiry as a date after creation of the record. If expireAfterDays is specified then expireAfterDate should not be specified.</value>
        [DataMember(Name = "expireAfterDate", EmitDefaultValue = false)]
        public DateTime ExpireAfterDate { get; set; }

        /// <summary>
        /// Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified.
        /// </summary>
        /// <value>Specify the expiry in number of days after creation of the record. If expireAfterDate is specified then expireAfterDays should not be specified.</value>
        [DataMember(Name = "expireAfterDays", EmitDefaultValue = false)]
        public int ExpireAfterDays { get; set; }

        /// <summary>
        /// Gets or Sets Links
        /// </summary>
        [DataMember(Name = "links", IsRequired = true, EmitDefaultValue = false)]
        public List<MessageLink> Links { get; set; }

        /// <summary>
        /// Gets or Sets MemberIds
        /// </summary>
        [DataMember(Name = "memberIds", EmitDefaultValue = false)]
        public List<string> MemberIds { get; set; }

        /// <summary>
        /// Gets or Sets Translations
        /// </summary>
        [DataMember(Name = "translations", EmitDefaultValue = false)]
        public List<Translation> Translations { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateMemberMessageRequestAllOf {\n");
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
            return this.Equals(input as CreateMemberMessageRequestAllOf);
        }

        /// <summary>
        /// Returns true if CreateMemberMessageRequestAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateMemberMessageRequestAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateMemberMessageRequestAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.EventRefType == input.EventRefType ||
                    this.EventRefType.Equals(input.EventRefType)
                ) && 
                (
                    this.EventRefId == input.EventRefId ||
                    (this.EventRefId != null &&
                    this.EventRefId.Equals(input.EventRefId))
                ) && 
                (
                    this.MessageType == input.MessageType ||
                    this.MessageType.Equals(input.MessageType)
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
                    this.Status.Equals(input.Status)
                ) && 
                (
                    this.ExpireAfterDate == input.ExpireAfterDate ||
                    (this.ExpireAfterDate != null &&
                    this.ExpireAfterDate.Equals(input.ExpireAfterDate))
                ) && 
                (
                    this.ExpireAfterDays == input.ExpireAfterDays ||
                    this.ExpireAfterDays.Equals(input.ExpireAfterDays)
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
                hashCode = hashCode * 59 + this.EventRefType.GetHashCode();
                if (this.EventRefId != null)
                    hashCode = hashCode * 59 + this.EventRefId.GetHashCode();
                hashCode = hashCode * 59 + this.MessageType.GetHashCode();
                if (this.Subject != null)
                    hashCode = hashCode * 59 + this.Subject.GetHashCode();
                if (this.Body != null)
                    hashCode = hashCode * 59 + this.Body.GetHashCode();
                hashCode = hashCode * 59 + this.Status.GetHashCode();
                if (this.ExpireAfterDate != null)
                    hashCode = hashCode * 59 + this.ExpireAfterDate.GetHashCode();
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
