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
    /// EventAllOf
    /// </summary>
    [DataContract]
    public partial class EventAllOf :  IEquatable<EventAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EventAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected EventAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="EventAllOf" /> class.
        /// </summary>
        /// <param name="memberId">Unique system identifier of a Member.</param>
        /// <param name="memberRefId">The reference to this member in external system.</param>
        /// <param name="action">The identifier that describes the meaning of this event (required).</param>
        /// <param name="batchId">The batch identifier is used to group related event stream data together. This could be as simple as a UUID or your internal reference to that distinct player session event.</param>
        /// <param name="entityId">It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award.</param>
        /// <param name="eventRefId">It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award.</param>
        /// <param name="entityRefId">It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award.</param>
        /// <param name="sourceValue">The actual numerical value related to the event (required).</param>
        /// <param name="points">A value derived from the source value field. In the context of Product additionally an adjustment factor will be applied (required).</param>
        /// <param name="transactionTimestamp">ISO8601 timestamp for when this event happened. All records are stored in UTC time zone (required).</param>
        /// <param name="metadata">Event metadata map..</param>
        /// <param name="customFields">customFields.</param>
        /// <param name="tags">A list of Strings of groups that the tag belongs to.</param>
        /// <param name="relatesTo">relatesTo.</param>
        /// <param name="relatesToExternal">relatesToExternal.</param>
        /// <param name="unitOfMeasure">The unit of measure is used to determine the type of the source value. It is used to normalize points values for currency based calculations by normalizing the source value..</param>
        public EventAllOf(string memberId = default(string), string memberRefId = default(string), string action = default(string), string batchId = default(string), string entityId = default(string), string eventRefId = default(string), string entityRefId = default(string), double sourceValue = default(double), double points = default(double), DateTime transactionTimestamp = default(DateTime), Dictionary<string, Object> metadata = default(Dictionary<string, Object>), Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), List<string> relatesTo = default(List<string>), List<string> relatesToExternal = default(List<string>), string unitOfMeasure = default(string))
        {
            // to ensure "action" is required (not null)
            if (action == null)
            {
                throw new InvalidDataException("action is a required property for EventAllOf and cannot be null");
            }
            else
            {
                this.Action = action;
            }

            // to ensure "sourceValue" is required (not null)
            if (sourceValue == null)
            {
                throw new InvalidDataException("sourceValue is a required property for EventAllOf and cannot be null");
            }
            else
            {
                this.SourceValue = sourceValue;
            }

            // to ensure "points" is required (not null)
            if (points == null)
            {
                throw new InvalidDataException("points is a required property for EventAllOf and cannot be null");
            }
            else
            {
                this.Points = points;
            }

            // to ensure "transactionTimestamp" is required (not null)
            if (transactionTimestamp == null)
            {
                throw new InvalidDataException("transactionTimestamp is a required property for EventAllOf and cannot be null");
            }
            else
            {
                this.TransactionTimestamp = transactionTimestamp;
            }

            this.MemberId = memberId;
            this.MemberRefId = memberRefId;
            this.BatchId = batchId;
            this.EntityId = entityId;
            this.EventRefId = eventRefId;
            this.EntityRefId = entityRefId;
            this.Metadata = metadata;
            this.CustomFields = customFields;
            this.Tags = tags;
            this.RelatesTo = relatesTo;
            this.RelatesToExternal = relatesToExternal;
            this.UnitOfMeasure = unitOfMeasure;
        }

        /// <summary>
        /// Unique system identifier of a Member
        /// </summary>
        /// <value>Unique system identifier of a Member</value>
        [DataMember(Name="memberId", EmitDefaultValue=false)]
        public string MemberId { get; set; }

        /// <summary>
        /// The reference to this member in external system
        /// </summary>
        /// <value>The reference to this member in external system</value>
        [DataMember(Name="memberRefId", EmitDefaultValue=false)]
        public string MemberRefId { get; set; }

        /// <summary>
        /// The identifier that describes the meaning of this event
        /// </summary>
        /// <value>The identifier that describes the meaning of this event</value>
        [DataMember(Name="action", EmitDefaultValue=true)]
        public string Action { get; set; }

        /// <summary>
        /// The batch identifier is used to group related event stream data together. This could be as simple as a UUID or your internal reference to that distinct player session event
        /// </summary>
        /// <value>The batch identifier is used to group related event stream data together. This could be as simple as a UUID or your internal reference to that distinct player session event</value>
        [DataMember(Name="batchId", EmitDefaultValue=false)]
        public string BatchId { get; set; }

        /// <summary>
        /// It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award
        /// </summary>
        /// <value>It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award</value>
        [DataMember(Name="entityId", EmitDefaultValue=false)]
        public string EntityId { get; set; }

        /// <summary>
        /// It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award
        /// </summary>
        /// <value>It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award</value>
        [DataMember(Name="eventRefId", EmitDefaultValue=false)]
        public string EventRefId { get; set; }

        /// <summary>
        /// It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award
        /// </summary>
        /// <value>It is a reference to a models ID for any of the following objects - Product, Achievement, Reward, Award</value>
        [DataMember(Name="entityRefId", EmitDefaultValue=false)]
        public string EntityRefId { get; set; }

        /// <summary>
        /// The actual numerical value related to the event
        /// </summary>
        /// <value>The actual numerical value related to the event</value>
        [DataMember(Name="sourceValue", EmitDefaultValue=true)]
        public double SourceValue { get; set; }

        /// <summary>
        /// A value derived from the source value field. In the context of Product additionally an adjustment factor will be applied
        /// </summary>
        /// <value>A value derived from the source value field. In the context of Product additionally an adjustment factor will be applied</value>
        [DataMember(Name="points", EmitDefaultValue=true)]
        public double Points { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when this event happened. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when this event happened. All records are stored in UTC time zone</value>
        [DataMember(Name="transactionTimestamp", EmitDefaultValue=true)]
        public DateTime TransactionTimestamp { get; set; }

        /// <summary>
        /// Event metadata map.
        /// </summary>
        /// <value>Event metadata map.</value>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public Dictionary<string, Object> Metadata { get; set; }

        /// <summary>
        /// Gets or Sets CustomFields
        /// </summary>
        [DataMember(Name="customFields", EmitDefaultValue=false)]
        public Dictionary<string, Object> CustomFields { get; set; }

        /// <summary>
        /// A list of Strings of groups that the tag belongs to
        /// </summary>
        /// <value>A list of Strings of groups that the tag belongs to</value>
        [DataMember(Name="tags", EmitDefaultValue=false)]
        public List<string> Tags { get; set; }

        /// <summary>
        /// Gets or Sets RelatesTo
        /// </summary>
        [DataMember(Name="relatesTo", EmitDefaultValue=false)]
        public List<string> RelatesTo { get; set; }

        /// <summary>
        /// Gets or Sets RelatesToExternal
        /// </summary>
        [DataMember(Name="relatesToExternal", EmitDefaultValue=false)]
        public List<string> RelatesToExternal { get; set; }

        /// <summary>
        /// The unit of measure is used to determine the type of the source value. It is used to normalize points values for currency based calculations by normalizing the source value.
        /// </summary>
        /// <value>The unit of measure is used to determine the type of the source value. It is used to normalize points values for currency based calculations by normalizing the source value.</value>
        [DataMember(Name="unitOfMeasure", EmitDefaultValue=false)]
        public string UnitOfMeasure { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EventAllOf {\n");
            sb.Append("  MemberId: ").Append(MemberId).Append("\n");
            sb.Append("  MemberRefId: ").Append(MemberRefId).Append("\n");
            sb.Append("  Action: ").Append(Action).Append("\n");
            sb.Append("  BatchId: ").Append(BatchId).Append("\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  EventRefId: ").Append(EventRefId).Append("\n");
            sb.Append("  EntityRefId: ").Append(EntityRefId).Append("\n");
            sb.Append("  SourceValue: ").Append(SourceValue).Append("\n");
            sb.Append("  Points: ").Append(Points).Append("\n");
            sb.Append("  TransactionTimestamp: ").Append(TransactionTimestamp).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  RelatesTo: ").Append(RelatesTo).Append("\n");
            sb.Append("  RelatesToExternal: ").Append(RelatesToExternal).Append("\n");
            sb.Append("  UnitOfMeasure: ").Append(UnitOfMeasure).Append("\n");
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
            return this.Equals(input as EventAllOf);
        }

        /// <summary>
        /// Returns true if EventAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of EventAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EventAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.MemberId == input.MemberId ||
                    (this.MemberId != null &&
                    this.MemberId.Equals(input.MemberId))
                ) && 
                (
                    this.MemberRefId == input.MemberRefId ||
                    (this.MemberRefId != null &&
                    this.MemberRefId.Equals(input.MemberRefId))
                ) && 
                (
                    this.Action == input.Action ||
                    (this.Action != null &&
                    this.Action.Equals(input.Action))
                ) && 
                (
                    this.BatchId == input.BatchId ||
                    (this.BatchId != null &&
                    this.BatchId.Equals(input.BatchId))
                ) && 
                (
                    this.EntityId == input.EntityId ||
                    (this.EntityId != null &&
                    this.EntityId.Equals(input.EntityId))
                ) && 
                (
                    this.EventRefId == input.EventRefId ||
                    (this.EventRefId != null &&
                    this.EventRefId.Equals(input.EventRefId))
                ) && 
                (
                    this.EntityRefId == input.EntityRefId ||
                    (this.EntityRefId != null &&
                    this.EntityRefId.Equals(input.EntityRefId))
                ) && 
                (
                    this.SourceValue == input.SourceValue ||
                    (this.SourceValue != null &&
                    this.SourceValue.Equals(input.SourceValue))
                ) && 
                (
                    this.Points == input.Points ||
                    (this.Points != null &&
                    this.Points.Equals(input.Points))
                ) && 
                (
                    this.TransactionTimestamp == input.TransactionTimestamp ||
                    (this.TransactionTimestamp != null &&
                    this.TransactionTimestamp.Equals(input.TransactionTimestamp))
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    input.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
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
                    this.RelatesTo == input.RelatesTo ||
                    this.RelatesTo != null &&
                    input.RelatesTo != null &&
                    this.RelatesTo.SequenceEqual(input.RelatesTo)
                ) && 
                (
                    this.RelatesToExternal == input.RelatesToExternal ||
                    this.RelatesToExternal != null &&
                    input.RelatesToExternal != null &&
                    this.RelatesToExternal.SequenceEqual(input.RelatesToExternal)
                ) && 
                (
                    this.UnitOfMeasure == input.UnitOfMeasure ||
                    (this.UnitOfMeasure != null &&
                    this.UnitOfMeasure.Equals(input.UnitOfMeasure))
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
                if (this.MemberId != null)
                    hashCode = hashCode * 59 + this.MemberId.GetHashCode();
                if (this.MemberRefId != null)
                    hashCode = hashCode * 59 + this.MemberRefId.GetHashCode();
                if (this.Action != null)
                    hashCode = hashCode * 59 + this.Action.GetHashCode();
                if (this.BatchId != null)
                    hashCode = hashCode * 59 + this.BatchId.GetHashCode();
                if (this.EntityId != null)
                    hashCode = hashCode * 59 + this.EntityId.GetHashCode();
                if (this.EventRefId != null)
                    hashCode = hashCode * 59 + this.EventRefId.GetHashCode();
                if (this.EntityRefId != null)
                    hashCode = hashCode * 59 + this.EntityRefId.GetHashCode();
                if (this.SourceValue != null)
                    hashCode = hashCode * 59 + this.SourceValue.GetHashCode();
                if (this.Points != null)
                    hashCode = hashCode * 59 + this.Points.GetHashCode();
                if (this.TransactionTimestamp != null)
                    hashCode = hashCode * 59 + this.TransactionTimestamp.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.CustomFields != null)
                    hashCode = hashCode * 59 + this.CustomFields.GetHashCode();
                if (this.Tags != null)
                    hashCode = hashCode * 59 + this.Tags.GetHashCode();
                if (this.RelatesTo != null)
                    hashCode = hashCode * 59 + this.RelatesTo.GetHashCode();
                if (this.RelatesToExternal != null)
                    hashCode = hashCode * 59 + this.RelatesToExternal.GetHashCode();
                if (this.UnitOfMeasure != null)
                    hashCode = hashCode * 59 + this.UnitOfMeasure.GetHashCode();
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
