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
    /// Condition
    /// </summary>
    [DataContract(Name = "Condition")]
    public partial class Condition : IEquatable<Condition>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets MatchCondition
        /// </summary>
        [DataMember(Name = "matchCondition", IsRequired = true, EmitDefaultValue = false)]
        public MatchCondition MatchCondition { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Condition" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Condition() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Condition" /> class.
        /// </summary>
        /// <param name="matchCondition">matchCondition (required).</param>
        /// <param name="rules">rules (required).</param>
        /// <param name="constraints">Additional constraints (required).</param>
        public Condition(MatchCondition matchCondition = default(MatchCondition), List<Rule> rules = default(List<Rule>), List<string> constraints = default(List<string>))
        {
            this.MatchCondition = matchCondition;
            // to ensure "rules" is required (not null)
            this.Rules = rules ?? throw new ArgumentNullException("rules is a required property for Condition and cannot be null");
            // to ensure "constraints" is required (not null)
            this.Constraints = constraints ?? throw new ArgumentNullException("constraints is a required property for Condition and cannot be null");
        }

        /// <summary>
        /// Gets or Sets Rules
        /// </summary>
        [DataMember(Name = "rules", IsRequired = true, EmitDefaultValue = false)]
        public List<Rule> Rules { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name = "constraints", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Condition {\n");
            sb.Append("  MatchCondition: ").Append(MatchCondition).Append("\n");
            sb.Append("  Rules: ").Append(Rules).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
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
            return this.Equals(input as Condition);
        }

        /// <summary>
        /// Returns true if Condition instances are equal
        /// </summary>
        /// <param name="input">Instance of Condition to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Condition input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.MatchCondition == input.MatchCondition ||
                    this.MatchCondition.Equals(input.MatchCondition)
                ) && 
                (
                    this.Rules == input.Rules ||
                    this.Rules != null &&
                    input.Rules != null &&
                    this.Rules.SequenceEqual(input.Rules)
                ) && 
                (
                    this.Constraints == input.Constraints ||
                    this.Constraints != null &&
                    input.Constraints != null &&
                    this.Constraints.SequenceEqual(input.Constraints)
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
                hashCode = hashCode * 59 + this.MatchCondition.GetHashCode();
                if (this.Rules != null)
                    hashCode = hashCode * 59 + this.Rules.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
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
