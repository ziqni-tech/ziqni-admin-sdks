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
    /// The base type for custom field entries
    /// </summary>
    [DataContract]
    public partial class CustomFieldEntryStringArray :  IEquatable<CustomFieldEntryStringArray>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CustomFieldEntryStringArray" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CustomFieldEntryStringArray() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CustomFieldEntryStringArray" /> class.
        /// </summary>
        /// <param name="fieldType">The data type stored in this generic object ( string, number, string[], number[]) (required).</param>
        /// <param name="value">value.</param>
        public CustomFieldEntryStringArray(string fieldType = default(string), List<string> value = default(List<string>))
        {
            // to ensure "fieldType" is required (not null)
            if (fieldType == null)
            {
                throw new InvalidDataException("fieldType is a required property for CustomFieldEntryStringArray and cannot be null");
            }
            else
            {
                this.FieldType = fieldType;
            }

            this.Value = value;
        }

        /// <summary>
        /// The data type stored in this generic object ( string, number, string[], number[])
        /// </summary>
        /// <value>The data type stored in this generic object ( string, number, string[], number[])</value>
        [DataMember(Name="fieldType", EmitDefaultValue=true)]
        public string FieldType { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name="value", EmitDefaultValue=false)]
        public List<string> Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CustomFieldEntryStringArray {\n");
            sb.Append("  FieldType: ").Append(FieldType).Append("\n");
            sb.Append("  Value: ").Append(Value).Append("\n");
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
            return this.Equals(input as CustomFieldEntryStringArray);
        }

        /// <summary>
        /// Returns true if CustomFieldEntryStringArray instances are equal
        /// </summary>
        /// <param name="input">Instance of CustomFieldEntryStringArray to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CustomFieldEntryStringArray input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.FieldType == input.FieldType ||
                    (this.FieldType != null &&
                    this.FieldType.Equals(input.FieldType))
                ) && 
                (
                    this.Value == input.Value ||
                    this.Value != null &&
                    input.Value != null &&
                    this.Value.SequenceEqual(input.Value)
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
                if (this.FieldType != null)
                    hashCode = hashCode * 59 + this.FieldType.GetHashCode();
                if (this.Value != null)
                    hashCode = hashCode * 59 + this.Value.GetHashCode();
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
