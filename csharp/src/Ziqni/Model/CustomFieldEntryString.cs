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
    /// The base type for custom field entries
    /// </summary>
    [DataContract(Name = "CustomFieldEntryString")]
    public partial class CustomFieldEntryString : IEquatable<CustomFieldEntryString>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CustomFieldEntryString" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CustomFieldEntryString() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CustomFieldEntryString" /> class.
        /// </summary>
        /// <param name="fieldType">The data type stored in this generic object ( string, number, string[], number[]) (required).</param>
        /// <param name="value">value.</param>
        public CustomFieldEntryString(string fieldType = default(string), string value = default(string))
        {
            // to ensure "fieldType" is required (not null)
            this.FieldType = fieldType ?? throw new ArgumentNullException("fieldType is a required property for CustomFieldEntryString and cannot be null");
            this.Value = value;
        }

        /// <summary>
        /// The data type stored in this generic object ( string, number, string[], number[])
        /// </summary>
        /// <value>The data type stored in this generic object ( string, number, string[], number[])</value>
        [DataMember(Name = "fieldType", IsRequired = true, EmitDefaultValue = false)]
        public string FieldType { get; set; }

        /// <summary>
        /// Gets or Sets Value
        /// </summary>
        [DataMember(Name = "value", EmitDefaultValue = false)]
        public string Value { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CustomFieldEntryString {\n");
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
            return this.Equals(input as CustomFieldEntryString);
        }

        /// <summary>
        /// Returns true if CustomFieldEntryString instances are equal
        /// </summary>
        /// <param name="input">Instance of CustomFieldEntryString to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CustomFieldEntryString input)
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
                    (this.Value != null &&
                    this.Value.Equals(input.Value))
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
