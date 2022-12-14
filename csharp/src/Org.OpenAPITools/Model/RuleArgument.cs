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
    /// RuleArgument
    /// </summary>
    [DataContract]
    public partial class RuleArgument :  IEquatable<RuleArgument>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RuleArgument" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected RuleArgument() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="RuleArgument" /> class.
        /// </summary>
        /// <param name="argument">argument (required).</param>
        /// <param name="value">value.</param>
        /// <param name="type">type.</param>
        /// <param name="order">order.</param>
        public RuleArgument(string argument = default(string), string value = default(string), string type = default(string), int order = default(int))
        {
            // to ensure "argument" is required (not null)
            if (argument == null)
            {
                throw new InvalidDataException("argument is a required property for RuleArgument and cannot be null");
            }
            else
            {
                this.Argument = argument;
            }

            this.Value = value;
            this.Type = type;
            this.Order = order;
        }

        /// <summary>
        /// Gets or Sets Argument
        /// </summary>
        [DataMember(Name="argument", EmitDefaultValue=true)]
        public string Argument { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name="value", EmitDefaultValue=false)]
        public string Value { get; set; }

        /// <summary>
        /// Gets or Sets Type
        /// </summary>
        [DataMember(Name="type", EmitDefaultValue=false)]
        public string Type { get; set; }

        /// <summary>
        /// Gets or Sets Order
        /// </summary>
        [DataMember(Name="order", EmitDefaultValue=false)]
        public int Order { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class RuleArgument {\n");
            sb.Append("  Argument: ").Append(Argument).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
            sb.Append("  Type: ").Append(Type).Append("\n");
            sb.Append("  Order: ").Append(Order).Append("\n");
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
            return this.Equals(input as RuleArgument);
        }

        /// <summary>
        /// Returns true if RuleArgument instances are equal
        /// </summary>
        /// <param name="input">Instance of RuleArgument to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(RuleArgument input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Argument == input.Argument ||
                    (this.Argument != null &&
                    this.Argument.Equals(input.Argument))
                ) && 
                (
                    this.Value == input.Value ||
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
                ) && 
                (
                    this.Type == input.Type ||
                    (this.Type != null &&
                    this.Type.Equals(input.Type))
                ) && 
                (
                    this.Order == input.Order ||
                    (this.Order != null &&
                    this.Order.Equals(input.Order))
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
                if (this.Argument != null)
                    hashCode = hashCode * 59 + this.Argument.GetHashCode();
                if (this.Value != null)
                    hashCode = hashCode * 59 + this.Value.GetHashCode();
                if (this.Type != null)
                    hashCode = hashCode * 59 + this.Type.GetHashCode();
                if (this.Order != null)
                    hashCode = hashCode * 59 + this.Order.GetHashCode();
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
