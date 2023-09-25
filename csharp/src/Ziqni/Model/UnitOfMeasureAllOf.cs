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
    /// UnitOfMeasureAllOf
    /// </summary>
    [DataContract(Name = "UnitOfMeasure_allOf")]
    public partial class UnitOfMeasureAllOf : IEquatable<UnitOfMeasureAllOf>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets UnitOfMeasureType
        /// </summary>
        [DataMember(Name = "unitOfMeasureType", IsRequired = true, EmitDefaultValue = false)]
        public UnitOfMeasureType UnitOfMeasureType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UnitOfMeasureAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UnitOfMeasureAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UnitOfMeasureAllOf" /> class.
        /// </summary>
        /// <param name="name">The name of a unit of measure (required).</param>
        /// <param name="key">The reference to the unit of measure in your system (required).</param>
        /// <param name="description">The description of a unit of measure.</param>
        /// <param name="isoCode">An alphabetical or numerical code to identify a unit of measure.</param>
        /// <param name="symbol">The symbol of a unit of measure.</param>
        /// <param name="multiplier">Is used to multiply the value from the standardised one that is being used (required).</param>
        /// <param name="unitOfMeasureType">unitOfMeasureType (required).</param>
        public UnitOfMeasureAllOf(string name = default(string), string key = default(string), string description = default(string), string isoCode = default(string), string symbol = default(string), double multiplier = default(double), UnitOfMeasureType unitOfMeasureType = default(UnitOfMeasureType))
        {
            // to ensure "name" is required (not null)
            this.Name = name ?? throw new ArgumentNullException("name is a required property for UnitOfMeasureAllOf and cannot be null");
            // to ensure "key" is required (not null)
            this.Key = key ?? throw new ArgumentNullException("key is a required property for UnitOfMeasureAllOf and cannot be null");
            this.Multiplier = multiplier;
            this.UnitOfMeasureType = unitOfMeasureType;
            this.Description = description;
            this.IsoCode = isoCode;
            this.Symbol = symbol;
        }

        /// <summary>
        /// The name of a unit of measure
        /// </summary>
        /// <value>The name of a unit of measure</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// The reference to the unit of measure in your system
        /// </summary>
        /// <value>The reference to the unit of measure in your system</value>
        [DataMember(Name = "key", IsRequired = true, EmitDefaultValue = false)]
        public string Key { get; set; }

        /// <summary>
        /// The description of a unit of measure
        /// </summary>
        /// <value>The description of a unit of measure</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// An alphabetical or numerical code to identify a unit of measure
        /// </summary>
        /// <value>An alphabetical or numerical code to identify a unit of measure</value>
        [DataMember(Name = "isoCode", EmitDefaultValue = false)]
        public string IsoCode { get; set; }

        /// <summary>
        /// The symbol of a unit of measure
        /// </summary>
        /// <value>The symbol of a unit of measure</value>
        [DataMember(Name = "symbol", EmitDefaultValue = false)]
        public string Symbol { get; set; }

        /// <summary>
        /// Is used to multiply the value from the standardised one that is being used
        /// </summary>
        /// <value>Is used to multiply the value from the standardised one that is being used</value>
        [DataMember(Name = "multiplier", IsRequired = true, EmitDefaultValue = false)]
        public double Multiplier { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UnitOfMeasureAllOf {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Key: ").Append(Key).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  IsoCode: ").Append(IsoCode).Append("\n");
            sb.Append("  Symbol: ").Append(Symbol).Append("\n");
            sb.Append("  Multiplier: ").Append(Multiplier).Append("\n");
            sb.Append("  UnitOfMeasureType: ").Append(UnitOfMeasureType).Append("\n");
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
            return this.Equals(input as UnitOfMeasureAllOf);
        }

        /// <summary>
        /// Returns true if UnitOfMeasureAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of UnitOfMeasureAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UnitOfMeasureAllOf input)
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
                    this.IsoCode == input.IsoCode ||
                    (this.IsoCode != null &&
                    this.IsoCode.Equals(input.IsoCode))
                ) && 
                (
                    this.Symbol == input.Symbol ||
                    (this.Symbol != null &&
                    this.Symbol.Equals(input.Symbol))
                ) && 
                (
                    this.Multiplier == input.Multiplier ||
                    this.Multiplier.Equals(input.Multiplier)
                ) && 
                (
                    this.UnitOfMeasureType == input.UnitOfMeasureType ||
                    this.UnitOfMeasureType.Equals(input.UnitOfMeasureType)
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
                if (this.IsoCode != null)
                    hashCode = hashCode * 59 + this.IsoCode.GetHashCode();
                if (this.Symbol != null)
                    hashCode = hashCode * 59 + this.Symbol.GetHashCode();
                hashCode = hashCode * 59 + this.Multiplier.GetHashCode();
                hashCode = hashCode * 59 + this.UnitOfMeasureType.GetHashCode();
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
