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
    /// MetaExtendedAllOf
    /// </summary>
    [DataContract]
    public partial class MetaExtendedAllOf :  IEquatable<MetaExtendedAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MetaExtendedAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected MetaExtendedAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="MetaExtendedAllOf" /> class.
        /// </summary>
        /// <param name="skip">Number of records to skip (required).</param>
        /// <param name="limit">Number of records to return (required).</param>
        public MetaExtendedAllOf(int skip = default(int), int limit = default(int))
        {
            // to ensure "skip" is required (not null)
            if (skip == null)
            {
                throw new InvalidDataException("skip is a required property for MetaExtendedAllOf and cannot be null");
            }
            else
            {
                this.Skip = skip;
            }

            // to ensure "limit" is required (not null)
            if (limit == null)
            {
                throw new InvalidDataException("limit is a required property for MetaExtendedAllOf and cannot be null");
            }
            else
            {
                this.Limit = limit;
            }

        }

        /// <summary>
        /// Number of records to skip
        /// </summary>
        /// <value>Number of records to skip</value>
        [DataMember(Name="skip", EmitDefaultValue=true)]
        public int Skip { get; set; }

        /// <summary>
        /// Number of records to return
        /// </summary>
        /// <value>Number of records to return</value>
        [DataMember(Name="limit", EmitDefaultValue=true)]
        public int Limit { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MetaExtendedAllOf {\n");
            sb.Append("  Skip: ").Append(Skip).Append("\n");
            sb.Append("  Limit: ").Append(Limit).Append("\n");
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
            return this.Equals(input as MetaExtendedAllOf);
        }

        /// <summary>
        /// Returns true if MetaExtendedAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of MetaExtendedAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MetaExtendedAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Skip == input.Skip ||
                    (this.Skip != null &&
                    this.Skip.Equals(input.Skip))
                ) && 
                (
                    this.Limit == input.Limit ||
                    (this.Limit != null &&
                    this.Limit.Equals(input.Limit))
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
                if (this.Skip != null)
                    hashCode = hashCode * 59 + this.Skip.GetHashCode();
                if (this.Limit != null)
                    hashCode = hashCode * 59 + this.Limit.GetHashCode();
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
