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
    /// OptinStatus
    /// </summary>
    [DataContract(Name = "OptinStatus")]
    public partial class OptinStatus : IEquatable<OptinStatus>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="OptinStatus" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected OptinStatus() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="OptinStatus" /> class.
        /// </summary>
        /// <param name="entityType">entityType (required).</param>
        /// <param name="entityId">entityId (required).</param>
        /// <param name="statusCode">Processing &#x3D; 0, NotEntered &#x3D; 5, Entering &#x3D; 10, Entrant &#x3D; 15, Preparing &#x3D; 20, Running &#x3D; 25, Completing &#x3D; 30, Completed &#x3D; 35 (required).</param>
        /// <param name="status">Processing &#x3D; 0, NotEntered &#x3D; 5, Entering &#x3D; 10, Entrant &#x3D; 15,\\             \\ Preparing &#x3D; 20, Running &#x3D; 25, Completing &#x3D; 30, Completed &#x3D; 35 (required).</param>
        /// <param name="percentageComplete">What percentage has been completed so far, this is a number between 0 and 100.</param>
        public OptinStatus(string entityType = default(string), string entityId = default(string), int statusCode = default(int), string status = default(string), decimal percentageComplete = default(decimal))
        {
            // to ensure "entityType" is required (not null)
            this.EntityType = entityType ?? throw new ArgumentNullException("entityType is a required property for OptinStatus and cannot be null");
            // to ensure "entityId" is required (not null)
            this.EntityId = entityId ?? throw new ArgumentNullException("entityId is a required property for OptinStatus and cannot be null");
            this.StatusCode = statusCode;
            // to ensure "status" is required (not null)
            this.Status = status ?? throw new ArgumentNullException("status is a required property for OptinStatus and cannot be null");
            this.PercentageComplete = percentageComplete;
        }

        /// <summary>
        /// Gets or Sets EntityType
        /// </summary>
        [DataMember(Name = "entityType", IsRequired = true, EmitDefaultValue = false)]
        public string EntityType { get; set; }

        /// <summary>
        /// Gets or Sets EntityId
        /// </summary>
        [DataMember(Name = "entityId", IsRequired = true, EmitDefaultValue = false)]
        public string EntityId { get; set; }

        /// <summary>
        /// Processing &#x3D; 0, NotEntered &#x3D; 5, Entering &#x3D; 10, Entrant &#x3D; 15, Preparing &#x3D; 20, Running &#x3D; 25, Completing &#x3D; 30, Completed &#x3D; 35
        /// </summary>
        /// <value>Processing &#x3D; 0, NotEntered &#x3D; 5, Entering &#x3D; 10, Entrant &#x3D; 15, Preparing &#x3D; 20, Running &#x3D; 25, Completing &#x3D; 30, Completed &#x3D; 35</value>
        [DataMember(Name = "statusCode", IsRequired = true, EmitDefaultValue = false)]
        public int StatusCode { get; set; }

        /// <summary>
        /// Processing &#x3D; 0, NotEntered &#x3D; 5, Entering &#x3D; 10, Entrant &#x3D; 15,\\             \\ Preparing &#x3D; 20, Running &#x3D; 25, Completing &#x3D; 30, Completed &#x3D; 35
        /// </summary>
        /// <value>Processing &#x3D; 0, NotEntered &#x3D; 5, Entering &#x3D; 10, Entrant &#x3D; 15,\\             \\ Preparing &#x3D; 20, Running &#x3D; 25, Completing &#x3D; 30, Completed &#x3D; 35</value>
        [DataMember(Name = "status", IsRequired = true, EmitDefaultValue = false)]
        public string Status { get; set; }

        /// <summary>
        /// What percentage has been completed so far, this is a number between 0 and 100
        /// </summary>
        /// <value>What percentage has been completed so far, this is a number between 0 and 100</value>
        [DataMember(Name = "percentageComplete", EmitDefaultValue = false)]
        public decimal PercentageComplete { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class OptinStatus {\n");
            sb.Append("  EntityType: ").Append(EntityType).Append("\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  StatusCode: ").Append(StatusCode).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  PercentageComplete: ").Append(PercentageComplete).Append("\n");
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
            return this.Equals(input as OptinStatus);
        }

        /// <summary>
        /// Returns true if OptinStatus instances are equal
        /// </summary>
        /// <param name="input">Instance of OptinStatus to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(OptinStatus input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.EntityType == input.EntityType ||
                    (this.EntityType != null &&
                    this.EntityType.Equals(input.EntityType))
                ) && 
                (
                    this.EntityId == input.EntityId ||
                    (this.EntityId != null &&
                    this.EntityId.Equals(input.EntityId))
                ) && 
                (
                    this.StatusCode == input.StatusCode ||
                    this.StatusCode.Equals(input.StatusCode)
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                ) && 
                (
                    this.PercentageComplete == input.PercentageComplete ||
                    this.PercentageComplete.Equals(input.PercentageComplete)
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
                if (this.EntityType != null)
                    hashCode = hashCode * 59 + this.EntityType.GetHashCode();
                if (this.EntityId != null)
                    hashCode = hashCode * 59 + this.EntityId.GetHashCode();
                hashCode = hashCode * 59 + this.StatusCode.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
                hashCode = hashCode * 59 + this.PercentageComplete.GetHashCode();
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
