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
    /// The target points to achieve
    /// </summary>
    [DataContract]
    public partial class PointsStrategy :  IEquatable<PointsStrategy>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets Operator
        /// </summary>
        [DataMember(Name="operator", EmitDefaultValue=true)]
        public ConditionalOperator Operator { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="PointsStrategy" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected PointsStrategy() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="PointsStrategy" /> class.
        /// </summary>
        /// <param name="_operator">_operator (required).</param>
        /// <param name="pointsValueUpper">The upper points to achieve. This is only used where secondary number are required like, between, or average between.</param>
        /// <param name="pointsValue">The points to achieve.</param>
        /// <param name="context">The context this strategy is bound to, like: achievement (required).</param>
        /// <param name="action">The action this strategy is bound to, like: achievement.points (required).</param>
        public PointsStrategy(ConditionalOperator _operator = default(ConditionalOperator), decimal pointsValueUpper = default(decimal), decimal pointsValue = default(decimal), string context = default(string), string action = default(string))
        {
            // to ensure "_operator" is required (not null)
            if (_operator == null)
            {
                throw new InvalidDataException("_operator is a required property for PointsStrategy and cannot be null");
            }
            else
            {
                this.Operator = _operator;
            }

            // to ensure "context" is required (not null)
            if (context == null)
            {
                throw new InvalidDataException("context is a required property for PointsStrategy and cannot be null");
            }
            else
            {
                this.Context = context;
            }

            // to ensure "action" is required (not null)
            if (action == null)
            {
                throw new InvalidDataException("action is a required property for PointsStrategy and cannot be null");
            }
            else
            {
                this.Action = action;
            }

            this.PointsValueUpper = pointsValueUpper;
            this.PointsValue = pointsValue;
        }


        /// <summary>
        /// The upper points to achieve. This is only used where secondary number are required like, between, or average between
        /// </summary>
        /// <value>The upper points to achieve. This is only used where secondary number are required like, between, or average between</value>
        [DataMember(Name="pointsValueUpper", EmitDefaultValue=false)]
        public decimal PointsValueUpper { get; set; }

        /// <summary>
        /// The points to achieve
        /// </summary>
        /// <value>The points to achieve</value>
        [DataMember(Name="pointsValue", EmitDefaultValue=false)]
        public decimal PointsValue { get; set; }

        /// <summary>
        /// The context this strategy is bound to, like: achievement
        /// </summary>
        /// <value>The context this strategy is bound to, like: achievement</value>
        [DataMember(Name="context", EmitDefaultValue=true)]
        public string Context { get; set; }

        /// <summary>
        /// The action this strategy is bound to, like: achievement.points
        /// </summary>
        /// <value>The action this strategy is bound to, like: achievement.points</value>
        [DataMember(Name="action", EmitDefaultValue=true)]
        public string Action { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class PointsStrategy {\n");
            sb.Append("  Operator: ").Append(Operator).Append("\n");
            sb.Append("  PointsValueUpper: ").Append(PointsValueUpper).Append("\n");
            sb.Append("  PointsValue: ").Append(PointsValue).Append("\n");
            sb.Append("  Context: ").Append(Context).Append("\n");
            sb.Append("  Action: ").Append(Action).Append("\n");
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
            return this.Equals(input as PointsStrategy);
        }

        /// <summary>
        /// Returns true if PointsStrategy instances are equal
        /// </summary>
        /// <param name="input">Instance of PointsStrategy to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(PointsStrategy input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Operator == input.Operator ||
                    (this.Operator != null &&
                    this.Operator.Equals(input.Operator))
                ) && 
                (
                    this.PointsValueUpper == input.PointsValueUpper ||
                    (this.PointsValueUpper != null &&
                    this.PointsValueUpper.Equals(input.PointsValueUpper))
                ) && 
                (
                    this.PointsValue == input.PointsValue ||
                    (this.PointsValue != null &&
                    this.PointsValue.Equals(input.PointsValue))
                ) && 
                (
                    this.Context == input.Context ||
                    (this.Context != null &&
                    this.Context.Equals(input.Context))
                ) && 
                (
                    this.Action == input.Action ||
                    (this.Action != null &&
                    this.Action.Equals(input.Action))
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
                if (this.Operator != null)
                    hashCode = hashCode * 59 + this.Operator.GetHashCode();
                if (this.PointsValueUpper != null)
                    hashCode = hashCode * 59 + this.PointsValueUpper.GetHashCode();
                if (this.PointsValue != null)
                    hashCode = hashCode * 59 + this.PointsValue.GetHashCode();
                if (this.Context != null)
                    hashCode = hashCode * 59 + this.Context.GetHashCode();
                if (this.Action != null)
                    hashCode = hashCode * 59 + this.Action.GetHashCode();
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
