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
    /// UpdateRuleRequestAllOf
    /// </summary>
    [DataContract]
    public partial class UpdateRuleRequestAllOf :  IEquatable<UpdateRuleRequestAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateRuleRequestAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateRuleRequestAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateRuleRequestAllOf" /> class.
        /// </summary>
        /// <param name="rules">rules (required).</param>
        public UpdateRuleRequestAllOf(Rule rules = default(Rule))
        {
            // to ensure "rules" is required (not null)
            if (rules == null)
            {
                throw new InvalidDataException("rules is a required property for UpdateRuleRequestAllOf and cannot be null");
            }
            else
            {
                this.Rules = rules;
            }

        }

        /// <summary>
        /// Gets or Sets Rules
        /// </summary>
        [DataMember(Name="rules", EmitDefaultValue=true)]
        public Rule Rules { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateRuleRequestAllOf {\n");
            sb.Append("  Rules: ").Append(Rules).Append("\n");
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
            return this.Equals(input as UpdateRuleRequestAllOf);
        }

        /// <summary>
        /// Returns true if UpdateRuleRequestAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateRuleRequestAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateRuleRequestAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Rules == input.Rules ||
                    (this.Rules != null &&
                    this.Rules.Equals(input.Rules))
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
                if (this.Rules != null)
                    hashCode = hashCode * 59 + this.Rules.GetHashCode();
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
