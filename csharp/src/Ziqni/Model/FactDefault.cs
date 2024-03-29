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
    /// FactDefault
    /// </summary>
    [DataContract]
    public partial class FactDefault :  IEquatable<FactDefault>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FactDefault" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected FactDefault() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="FactDefault" /> class.
        /// </summary>
        /// <param name="operators">The operators supported by the fact (required).</param>
        /// <param name="constantType">The data type of the constant (required).</param>
        /// <param name="constantExample">Example of the constant (required).</param>
        /// <param name="defaultVale">The default value of the constant for the fact.</param>
        /// <param name="macros">macros.</param>
        public FactDefault(List<string> operators = default(List<string>), string constantType = default(string), string constantExample = default(string), string defaultVale = default(string), List<Macro> macros = default(List<Macro>))
        {
            // to ensure "operators" is required (not null)
            if (operators == null)
            {
                throw new InvalidDataException("operators is a required property for FactDefault and cannot be null");
            }
            else
            {
                this.Operators = operators;
            }

            // to ensure "constantType" is required (not null)
            if (constantType == null)
            {
                throw new InvalidDataException("constantType is a required property for FactDefault and cannot be null");
            }
            else
            {
                this.ConstantType = constantType;
            }

            // to ensure "constantExample" is required (not null)
            if (constantExample == null)
            {
                throw new InvalidDataException("constantExample is a required property for FactDefault and cannot be null");
            }
            else
            {
                this.ConstantExample = constantExample;
            }

            this.DefaultVale = defaultVale;
            this.Macros = macros;
        }

        /// <summary>
        /// The operators supported by the fact
        /// </summary>
        /// <value>The operators supported by the fact</value>
        [DataMember(Name="operators", EmitDefaultValue=true)]
        public List<string> Operators { get; set; }

        /// <summary>
        /// The data type of the constant
        /// </summary>
        /// <value>The data type of the constant</value>
        [DataMember(Name="constantType", EmitDefaultValue=true)]
        public string ConstantType { get; set; }

        /// <summary>
        /// Example of the constant
        /// </summary>
        /// <value>Example of the constant</value>
        [DataMember(Name="constantExample", EmitDefaultValue=true)]
        public string ConstantExample { get; set; }

        /// <summary>
        /// The default value of the constant for the fact
        /// </summary>
        /// <value>The default value of the constant for the fact</value>
        [DataMember(Name="defaultVale", EmitDefaultValue=false)]
        public string DefaultVale { get; set; }

        /// <summary>
        /// Gets or Sets Macros
        /// </summary>
        [DataMember(Name="macros", EmitDefaultValue=false)]
        public List<Macro> Macros { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class FactDefault {\n");
            sb.Append("  Operators: ").Append(Operators).Append("\n");
            sb.Append("  ConstantType: ").Append(ConstantType).Append("\n");
            sb.Append("  ConstantExample: ").Append(ConstantExample).Append("\n");
            sb.Append("  DefaultVale: ").Append(DefaultVale).Append("\n");
            sb.Append("  Macros: ").Append(Macros).Append("\n");
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
            return this.Equals(input as FactDefault);
        }

        /// <summary>
        /// Returns true if FactDefault instances are equal
        /// </summary>
        /// <param name="input">Instance of FactDefault to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(FactDefault input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Operators == input.Operators ||
                    this.Operators != null &&
                    input.Operators != null &&
                    this.Operators.SequenceEqual(input.Operators)
                ) && 
                (
                    this.ConstantType == input.ConstantType ||
                    (this.ConstantType != null &&
                    this.ConstantType.Equals(input.ConstantType))
                ) && 
                (
                    this.ConstantExample == input.ConstantExample ||
                    (this.ConstantExample != null &&
                    this.ConstantExample.Equals(input.ConstantExample))
                ) && 
                (
                    this.DefaultVale == input.DefaultVale ||
                    (this.DefaultVale != null &&
                    this.DefaultVale.Equals(input.DefaultVale))
                ) && 
                (
                    this.Macros == input.Macros ||
                    this.Macros != null &&
                    input.Macros != null &&
                    this.Macros.SequenceEqual(input.Macros)
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
                if (this.Operators != null)
                    hashCode = hashCode * 59 + this.Operators.GetHashCode();
                if (this.ConstantType != null)
                    hashCode = hashCode * 59 + this.ConstantType.GetHashCode();
                if (this.ConstantExample != null)
                    hashCode = hashCode * 59 + this.ConstantExample.GetHashCode();
                if (this.DefaultVale != null)
                    hashCode = hashCode * 59 + this.DefaultVale.GetHashCode();
                if (this.Macros != null)
                    hashCode = hashCode * 59 + this.Macros.GetHashCode();
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
