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
    /// CustomFieldReducedAllOf
    /// </summary>
    [DataContract]
    public partial class CustomFieldReducedAllOf :  IEquatable<CustomFieldReducedAllOf>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets FieldType
        /// </summary>
        [DataMember(Name="fieldType", EmitDefaultValue=true)]
        public FieldType FieldType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CustomFieldReducedAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CustomFieldReducedAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CustomFieldReducedAllOf" /> class.
        /// </summary>
        /// <param name="key">The key of a Custom field (required).</param>
        /// <param name="fieldType">fieldType (required).</param>
        public CustomFieldReducedAllOf(string key = default(string), FieldType fieldType = default(FieldType))
        {
            // to ensure "key" is required (not null)
            if (key == null)
            {
                throw new InvalidDataException("key is a required property for CustomFieldReducedAllOf and cannot be null");
            }
            else
            {
                this.Key = key;
            }

            // to ensure "fieldType" is required (not null)
            if (fieldType == null)
            {
                throw new InvalidDataException("fieldType is a required property for CustomFieldReducedAllOf and cannot be null");
            }
            else
            {
                this.FieldType = fieldType;
            }

        }

        /// <summary>
        /// The key of a Custom field
        /// </summary>
        /// <value>The key of a Custom field</value>
        [DataMember(Name="key", EmitDefaultValue=true)]
        public string Key { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CustomFieldReducedAllOf {\n");
            sb.Append("  Key: ").Append(Key).Append("\n");
            sb.Append("  FieldType: ").Append(FieldType).Append("\n");
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
            return this.Equals(input as CustomFieldReducedAllOf);
        }

        /// <summary>
        /// Returns true if CustomFieldReducedAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of CustomFieldReducedAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CustomFieldReducedAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Key == input.Key ||
                    (this.Key != null &&
                    this.Key.Equals(input.Key))
                ) && 
                (
                    this.FieldType == input.FieldType ||
                    (this.FieldType != null &&
                    this.FieldType.Equals(input.FieldType))
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
                if (this.Key != null)
                    hashCode = hashCode * 59 + this.Key.GetHashCode();
                if (this.FieldType != null)
                    hashCode = hashCode * 59 + this.FieldType.GetHashCode();
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
