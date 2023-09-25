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
    /// ActionTypeAdjustmentFactor
    /// </summary>
    [DataContract(Name = "ActionTypeAdjustmentFactor")]
    public partial class ActionTypeAdjustmentFactor : IEquatable<ActionTypeAdjustmentFactor>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ActionTypeAdjustmentFactor" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ActionTypeAdjustmentFactor() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ActionTypeAdjustmentFactor" /> class.
        /// </summary>
        /// <param name="adjustmentFactor">The multiplier to apply to source values received for this product events (required).</param>
        /// <param name="actionTypeId">A unique system generated identifier for Action Type (required).</param>
        public ActionTypeAdjustmentFactor(double adjustmentFactor = default(double), string actionTypeId = default(string))
        {
            this.AdjustmentFactor = adjustmentFactor;
            // to ensure "actionTypeId" is required (not null)
            this.ActionTypeId = actionTypeId ?? throw new ArgumentNullException("actionTypeId is a required property for ActionTypeAdjustmentFactor and cannot be null");
        }

        /// <summary>
        /// The multiplier to apply to source values received for this product events
        /// </summary>
        /// <value>The multiplier to apply to source values received for this product events</value>
        [DataMember(Name = "adjustmentFactor", IsRequired = true, EmitDefaultValue = false)]
        public double AdjustmentFactor { get; set; }

        /// <summary>
        /// A unique system generated identifier for Action Type
        /// </summary>
        /// <value>A unique system generated identifier for Action Type</value>
        [DataMember(Name = "actionTypeId", IsRequired = true, EmitDefaultValue = false)]
        public string ActionTypeId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ActionTypeAdjustmentFactor {\n");
            sb.Append("  AdjustmentFactor: ").Append(AdjustmentFactor).Append("\n");
            sb.Append("  ActionTypeId: ").Append(ActionTypeId).Append("\n");
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
            return this.Equals(input as ActionTypeAdjustmentFactor);
        }

        /// <summary>
        /// Returns true if ActionTypeAdjustmentFactor instances are equal
        /// </summary>
        /// <param name="input">Instance of ActionTypeAdjustmentFactor to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ActionTypeAdjustmentFactor input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.AdjustmentFactor == input.AdjustmentFactor ||
                    this.AdjustmentFactor.Equals(input.AdjustmentFactor)
                ) && 
                (
                    this.ActionTypeId == input.ActionTypeId ||
                    (this.ActionTypeId != null &&
                    this.ActionTypeId.Equals(input.ActionTypeId))
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
                hashCode = hashCode * 59 + this.AdjustmentFactor.GetHashCode();
                if (this.ActionTypeId != null)
                    hashCode = hashCode * 59 + this.ActionTypeId.GetHashCode();
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
