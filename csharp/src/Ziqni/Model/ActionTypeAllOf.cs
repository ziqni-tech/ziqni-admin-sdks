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
    /// ActionTypeAllOf
    /// </summary>
    [DataContract(Name = "ActionType_allOf")]
    public partial class ActionTypeAllOf : IEquatable<ActionTypeAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ActionTypeAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ActionTypeAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ActionTypeAllOf" /> class.
        /// </summary>
        /// <param name="name">The name of the Action Helper (required).</param>
        /// <param name="key">A unique key that represents an action helper (required).</param>
        /// <param name="description">The description of the rule action helper for your reference.</param>
        /// <param name="constraints">Additional constraints (required).</param>
        /// <param name="unitOfMeasure">unit of measure id (required).</param>
        public ActionTypeAllOf(string name = default(string), string key = default(string), string description = default(string), List<string> constraints = default(List<string>), string unitOfMeasure = default(string))
        {
            // to ensure "name" is required (not null)
            this.Name = name ?? throw new ArgumentNullException("name is a required property for ActionTypeAllOf and cannot be null");
            // to ensure "key" is required (not null)
            this.Key = key ?? throw new ArgumentNullException("key is a required property for ActionTypeAllOf and cannot be null");
            // to ensure "constraints" is required (not null)
            this.Constraints = constraints ?? throw new ArgumentNullException("constraints is a required property for ActionTypeAllOf and cannot be null");
            // to ensure "unitOfMeasure" is required (not null)
            this.UnitOfMeasure = unitOfMeasure ?? throw new ArgumentNullException("unitOfMeasure is a required property for ActionTypeAllOf and cannot be null");
            this.Description = description;
        }

        /// <summary>
        /// The name of the Action Helper
        /// </summary>
        /// <value>The name of the Action Helper</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// A unique key that represents an action helper
        /// </summary>
        /// <value>A unique key that represents an action helper</value>
        [DataMember(Name = "key", IsRequired = true, EmitDefaultValue = false)]
        public string Key { get; set; }

        /// <summary>
        /// The description of the rule action helper for your reference
        /// </summary>
        /// <value>The description of the rule action helper for your reference</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name = "constraints", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// unit of measure id
        /// </summary>
        /// <value>unit of measure id</value>
        [DataMember(Name = "unitOfMeasure", IsRequired = true, EmitDefaultValue = false)]
        public string UnitOfMeasure { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ActionTypeAllOf {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Key: ").Append(Key).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
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
            return this.Equals(input as ActionTypeAllOf);
        }

        /// <summary>
        /// Returns true if ActionTypeAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of ActionTypeAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ActionTypeAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Key == input.Key ||
                    (this.Key != null &&
                    this.Key.Equals(input.Key))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Constraints == input.Constraints ||
                    this.Constraints != null &&
                    input.Constraints != null &&
                    this.Constraints.SequenceEqual(input.Constraints)
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Key != null)
                    hashCode = hashCode * 59 + this.Key.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
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
