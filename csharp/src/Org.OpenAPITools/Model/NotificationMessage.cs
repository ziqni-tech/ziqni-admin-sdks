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
    /// NotificationMessage
    /// </summary>
    [DataContract]
    public partial class NotificationMessage :  IEquatable<NotificationMessage>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="NotificationMessage" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected NotificationMessage() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="NotificationMessage" /> class.
        /// </summary>
        /// <param name="entityId">entityId.</param>
        /// <param name="entityType">entityType (required).</param>
        /// <param name="changedAt">changedAt.</param>
        /// <param name="changedBy">changedBy.</param>
        /// <param name="typeOffChange">typeOffChange.</param>
        /// <param name="displayName">displayName.</param>
        /// <param name="accountId">accountId.</param>
        /// <param name="sequenceNumber">sequenceNumber.</param>
        /// <param name="entityRefId">entityRefId.</param>
        /// <param name="entityParentId">entityParentId.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="previousState">previousState.</param>
        /// <param name="currentState">currentState.</param>
        /// <param name="subscriptionId">subscriptionId (required).</param>
        /// <param name="constraints">Constraints of this subscription like gauranteedDelivery.</param>
        /// <param name="topic">/user/queue/callbacks.</param>
        /// <param name="meta">meta.</param>
        /// <param name="data">data.</param>
        /// <param name="errors">errors.</param>
        public NotificationMessage(string entityId = default(string), List<string> entityType = default(List<string>), DateTime changedAt = default(DateTime), string changedBy = default(string), int typeOffChange = default(int), string displayName = default(string), string accountId = default(string), long sequenceNumber = default(long), string entityRefId = default(string), string entityParentId = default(string), Object metadata = default(Object), int previousState = default(int), int currentState = default(int), string subscriptionId = default(string), List<string> constraints = default(List<string>), string topic = default(string), MetaBasic meta = default(MetaBasic), List<EntityChangeSubscription> data = default(List<EntityChangeSubscription>), List<Error> errors = default(List<Error>))
        {
            // to ensure "entityType" is required (not null)
            if (entityType == null)
            {
                throw new InvalidDataException("entityType is a required property for NotificationMessage and cannot be null");
            }
            else
            {
                this.EntityType = entityType;
            }

            // to ensure "subscriptionId" is required (not null)
            if (subscriptionId == null)
            {
                throw new InvalidDataException("subscriptionId is a required property for NotificationMessage and cannot be null");
            }
            else
            {
                this.SubscriptionId = subscriptionId;
            }

            this.EntityId = entityId;
            this.ChangedAt = changedAt;
            this.ChangedBy = changedBy;
            this.TypeOffChange = typeOffChange;
            this.DisplayName = displayName;
            this.AccountId = accountId;
            this.SequenceNumber = sequenceNumber;
            this.EntityRefId = entityRefId;
            this.EntityParentId = entityParentId;
            this.Metadata = metadata;
            this.PreviousState = previousState;
            this.CurrentState = currentState;
            this.Constraints = constraints;
            this.Topic = topic;
            this.Meta = meta;
            this.Data = data;
            this.Errors = errors;
        }

        /// <summary>
        /// Gets or Sets EntityId
        /// </summary>
        [DataMember(Name="entityId", EmitDefaultValue=false)]
        public string EntityId { get; set; }

        /// <summary>
        /// Gets or Sets EntityType
        /// </summary>
        [DataMember(Name="entityType", EmitDefaultValue=true)]
        public List<string> EntityType { get; set; }

        /// <summary>
        /// Gets or Sets ChangedAt
        /// </summary>
        [DataMember(Name="changedAt", EmitDefaultValue=false)]
        public DateTime ChangedAt { get; set; }

        /// <summary>
        /// Gets or Sets ChangedBy
        /// </summary>
        [DataMember(Name="changedBy", EmitDefaultValue=false)]
        public string ChangedBy { get; set; }

        /// <summary>
        /// Gets or Sets TypeOffChange
        /// </summary>
        [DataMember(Name="typeOffChange", EmitDefaultValue=false)]
        public int TypeOffChange { get; set; }

        /// <summary>
        /// Gets or Sets DisplayName
        /// </summary>
        [DataMember(Name="displayName", EmitDefaultValue=false)]
        public string DisplayName { get; set; }

        /// <summary>
        /// Gets or Sets AccountId
        /// </summary>
        [DataMember(Name="accountId", EmitDefaultValue=false)]
        public string AccountId { get; set; }

        /// <summary>
        /// Gets or Sets SequenceNumber
        /// </summary>
        [DataMember(Name="sequenceNumber", EmitDefaultValue=false)]
        public long SequenceNumber { get; set; }

        /// <summary>
        /// Gets or Sets EntityRefId
        /// </summary>
        [DataMember(Name="entityRefId", EmitDefaultValue=false)]
        public string EntityRefId { get; set; }

        /// <summary>
        /// Gets or Sets EntityParentId
        /// </summary>
        [DataMember(Name="entityParentId", EmitDefaultValue=false)]
        public string EntityParentId { get; set; }

        /// <summary>
        /// Gets or Sets Metadata
        /// </summary>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public Object Metadata { get; set; }

        /// <summary>
        /// Gets or Sets PreviousState
        /// </summary>
        [DataMember(Name="previousState", EmitDefaultValue=false)]
        public int PreviousState { get; set; }

        /// <summary>
        /// Gets or Sets CurrentState
        /// </summary>
        [DataMember(Name="currentState", EmitDefaultValue=false)]
        public int CurrentState { get; set; }

        /// <summary>
        /// Gets or Sets SubscriptionId
        /// </summary>
        [DataMember(Name="subscriptionId", EmitDefaultValue=true)]
        public string SubscriptionId { get; set; }

        /// <summary>
        /// Constraints of this subscription like gauranteedDelivery
        /// </summary>
        /// <value>Constraints of this subscription like gauranteedDelivery</value>
        [DataMember(Name="constraints", EmitDefaultValue=false)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// /user/queue/callbacks
        /// </summary>
        /// <value>/user/queue/callbacks</value>
        [DataMember(Name="topic", EmitDefaultValue=false)]
        public string Topic { get; set; }

        /// <summary>
        /// Gets or Sets Meta
        /// </summary>
        [DataMember(Name="meta", EmitDefaultValue=false)]
        public MetaBasic Meta { get; set; }

        /// <summary>
        /// Gets or Sets Data
        /// </summary>
        [DataMember(Name="data", EmitDefaultValue=false)]
        public List<EntityChangeSubscription> Data { get; set; }

        /// <summary>
        /// Gets or Sets Errors
        /// </summary>
        [DataMember(Name="errors", EmitDefaultValue=false)]
        public List<Error> Errors { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class NotificationMessage {\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  EntityType: ").Append(EntityType).Append("\n");
            sb.Append("  ChangedAt: ").Append(ChangedAt).Append("\n");
            sb.Append("  ChangedBy: ").Append(ChangedBy).Append("\n");
            sb.Append("  TypeOffChange: ").Append(TypeOffChange).Append("\n");
            sb.Append("  DisplayName: ").Append(DisplayName).Append("\n");
            sb.Append("  AccountId: ").Append(AccountId).Append("\n");
            sb.Append("  SequenceNumber: ").Append(SequenceNumber).Append("\n");
            sb.Append("  EntityRefId: ").Append(EntityRefId).Append("\n");
            sb.Append("  EntityParentId: ").Append(EntityParentId).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  PreviousState: ").Append(PreviousState).Append("\n");
            sb.Append("  CurrentState: ").Append(CurrentState).Append("\n");
            sb.Append("  SubscriptionId: ").Append(SubscriptionId).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
            sb.Append("  Topic: ").Append(Topic).Append("\n");
            sb.Append("  Meta: ").Append(Meta).Append("\n");
            sb.Append("  Data: ").Append(Data).Append("\n");
            sb.Append("  Errors: ").Append(Errors).Append("\n");
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
            return this.Equals(input as NotificationMessage);
        }

        /// <summary>
        /// Returns true if NotificationMessage instances are equal
        /// </summary>
        /// <param name="input">Instance of NotificationMessage to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(NotificationMessage input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.EntityId == input.EntityId ||
                    (this.EntityId != null &&
                    this.EntityId.Equals(input.EntityId))
                ) && 
                (
                    this.EntityType == input.EntityType ||
                    this.EntityType != null &&
                    input.EntityType != null &&
                    this.EntityType.SequenceEqual(input.EntityType)
                ) && 
                (
                    this.ChangedAt == input.ChangedAt ||
                    (this.ChangedAt != null &&
                    this.ChangedAt.Equals(input.ChangedAt))
                ) && 
                (
                    this.ChangedBy == input.ChangedBy ||
                    (this.ChangedBy != null &&
                    this.ChangedBy.Equals(input.ChangedBy))
                ) && 
                (
                    this.TypeOffChange == input.TypeOffChange ||
                    (this.TypeOffChange != null &&
                    this.TypeOffChange.Equals(input.TypeOffChange))
                ) && 
                (
                    this.DisplayName == input.DisplayName ||
                    (this.DisplayName != null &&
                    this.DisplayName.Equals(input.DisplayName))
                ) && 
                (
                    this.AccountId == input.AccountId ||
                    (this.AccountId != null &&
                    this.AccountId.Equals(input.AccountId))
                ) && 
                (
                    this.SequenceNumber == input.SequenceNumber ||
                    (this.SequenceNumber != null &&
                    this.SequenceNumber.Equals(input.SequenceNumber))
                ) && 
                (
                    this.EntityRefId == input.EntityRefId ||
                    (this.EntityRefId != null &&
                    this.EntityRefId.Equals(input.EntityRefId))
                ) && 
                (
                    this.EntityParentId == input.EntityParentId ||
                    (this.EntityParentId != null &&
                    this.EntityParentId.Equals(input.EntityParentId))
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    (this.Metadata != null &&
                    this.Metadata.Equals(input.Metadata))
                ) && 
                (
                    this.PreviousState == input.PreviousState ||
                    (this.PreviousState != null &&
                    this.PreviousState.Equals(input.PreviousState))
                ) && 
                (
                    this.CurrentState == input.CurrentState ||
                    (this.CurrentState != null &&
                    this.CurrentState.Equals(input.CurrentState))
                ) && 
                (
                    this.SubscriptionId == input.SubscriptionId ||
                    (this.SubscriptionId != null &&
                    this.SubscriptionId.Equals(input.SubscriptionId))
                ) && 
                (
                    this.Constraints == input.Constraints ||
                    this.Constraints != null &&
                    input.Constraints != null &&
                    this.Constraints.SequenceEqual(input.Constraints)
                ) && 
                (
                    this.Topic == input.Topic ||
                    (this.Topic != null &&
                    this.Topic.Equals(input.Topic))
                ) && 
                (
                    this.Meta == input.Meta ||
                    (this.Meta != null &&
                    this.Meta.Equals(input.Meta))
                ) && 
                (
                    this.Data == input.Data ||
                    this.Data != null &&
                    input.Data != null &&
                    this.Data.SequenceEqual(input.Data)
                ) && 
                (
                    this.Errors == input.Errors ||
                    this.Errors != null &&
                    input.Errors != null &&
                    this.Errors.SequenceEqual(input.Errors)
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
                if (this.EntityId != null)
                    hashCode = hashCode * 59 + this.EntityId.GetHashCode();
                if (this.EntityType != null)
                    hashCode = hashCode * 59 + this.EntityType.GetHashCode();
                if (this.ChangedAt != null)
                    hashCode = hashCode * 59 + this.ChangedAt.GetHashCode();
                if (this.ChangedBy != null)
                    hashCode = hashCode * 59 + this.ChangedBy.GetHashCode();
                if (this.TypeOffChange != null)
                    hashCode = hashCode * 59 + this.TypeOffChange.GetHashCode();
                if (this.DisplayName != null)
                    hashCode = hashCode * 59 + this.DisplayName.GetHashCode();
                if (this.AccountId != null)
                    hashCode = hashCode * 59 + this.AccountId.GetHashCode();
                if (this.SequenceNumber != null)
                    hashCode = hashCode * 59 + this.SequenceNumber.GetHashCode();
                if (this.EntityRefId != null)
                    hashCode = hashCode * 59 + this.EntityRefId.GetHashCode();
                if (this.EntityParentId != null)
                    hashCode = hashCode * 59 + this.EntityParentId.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.PreviousState != null)
                    hashCode = hashCode * 59 + this.PreviousState.GetHashCode();
                if (this.CurrentState != null)
                    hashCode = hashCode * 59 + this.CurrentState.GetHashCode();
                if (this.SubscriptionId != null)
                    hashCode = hashCode * 59 + this.SubscriptionId.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
                if (this.Topic != null)
                    hashCode = hashCode * 59 + this.Topic.GetHashCode();
                if (this.Meta != null)
                    hashCode = hashCode * 59 + this.Meta.GetHashCode();
                if (this.Data != null)
                    hashCode = hashCode * 59 + this.Data.GetHashCode();
                if (this.Errors != null)
                    hashCode = hashCode * 59 + this.Errors.GetHashCode();
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
