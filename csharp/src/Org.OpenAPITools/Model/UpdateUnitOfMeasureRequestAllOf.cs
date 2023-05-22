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
    /// UpdateUnitOfMeasureRequestAllOf
    /// </summary>
    [DataContract]
    public partial class UpdateUnitOfMeasureRequestAllOf :  IEquatable<UpdateUnitOfMeasureRequestAllOf>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets UnitOfMeasureType
        /// </summary>
        [DataMember(Name="unitOfMeasureType", EmitDefaultValue=false)]
        public UnitOfMeasureType? UnitOfMeasureType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateUnitOfMeasureRequestAllOf" /> class.
        /// </summary>
        /// <param name="name">The name of a unit of measure.</param>
        /// <param name="description">The description of a unit of measure.</param>
        /// <param name="isoCode">An alphabetical or numerical code to identify a unit of measure.</param>
        /// <param name="symbol">The symbol of a unit of measure.</param>
        /// <param name="multiplier">Is used to multiply the value from the standardised one that is being used.</param>
        /// <param name="unitOfMeasureType">unitOfMeasureType.</param>
        public UpdateUnitOfMeasureRequestAllOf(string name = default(string), string description = default(string), string isoCode = default(string), string symbol = default(string), double multiplier = default(double), UnitOfMeasureType? unitOfMeasureType = default(UnitOfMeasureType?))
        {
            this.Name = name;
            this.Description = description;
            this.IsoCode = isoCode;
            this.Symbol = symbol;
            this.Multiplier = multiplier;
            this.UnitOfMeasureType = unitOfMeasureType;
        }

        /// <summary>
        /// The name of a unit of measure
        /// </summary>
        /// <value>The name of a unit of measure</value>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// The description of a unit of measure
        /// </summary>
        /// <value>The description of a unit of measure</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// An alphabetical or numerical code to identify a unit of measure
        /// </summary>
        /// <value>An alphabetical or numerical code to identify a unit of measure</value>
        [DataMember(Name="isoCode", EmitDefaultValue=false)]
        public string IsoCode { get; set; }

        /// <summary>
        /// The symbol of a unit of measure
        /// </summary>
        /// <value>The symbol of a unit of measure</value>
        [DataMember(Name="symbol", EmitDefaultValue=false)]
        public string Symbol { get; set; }

        /// <summary>
        /// Is used to multiply the value from the standardised one that is being used
        /// </summary>
        /// <value>Is used to multiply the value from the standardised one that is being used</value>
        [DataMember(Name="multiplier", EmitDefaultValue=false)]
        public double Multiplier { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateUnitOfMeasureRequestAllOf {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
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
            return this.Equals(input as UpdateUnitOfMeasureRequestAllOf);
        }

        /// <summary>
        /// Returns true if UpdateUnitOfMeasureRequestAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateUnitOfMeasureRequestAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateUnitOfMeasureRequestAllOf input)
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
                    (this.Multiplier != null &&
                    this.Multiplier.Equals(input.Multiplier))
                ) && 
                (
                    this.UnitOfMeasureType == input.UnitOfMeasureType ||
                    (this.UnitOfMeasureType != null &&
                    this.UnitOfMeasureType.Equals(input.UnitOfMeasureType))
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
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.IsoCode != null)
                    hashCode = hashCode * 59 + this.IsoCode.GetHashCode();
                if (this.Symbol != null)
                    hashCode = hashCode * 59 + this.Symbol.GetHashCode();
                if (this.Multiplier != null)
                    hashCode = hashCode * 59 + this.Multiplier.GetHashCode();
                if (this.UnitOfMeasureType != null)
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
