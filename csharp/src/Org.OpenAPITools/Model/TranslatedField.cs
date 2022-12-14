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
    /// TranslatedField
    /// </summary>
    [DataContract]
    public partial class TranslatedField :  IEquatable<TranslatedField>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TranslatedField" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected TranslatedField() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="TranslatedField" /> class.
        /// </summary>
        /// <param name="fieldName">The name of the translatable field of the model. Reference to translatableFields (required).</param>
        /// <param name="text">The text of the selected language (required).</param>
        public TranslatedField(string fieldName = default(string), string text = default(string))
        {
            // to ensure "fieldName" is required (not null)
            if (fieldName == null)
            {
                throw new InvalidDataException("fieldName is a required property for TranslatedField and cannot be null");
            }
            else
            {
                this.FieldName = fieldName;
            }

            // to ensure "text" is required (not null)
            if (text == null)
            {
                throw new InvalidDataException("text is a required property for TranslatedField and cannot be null");
            }
            else
            {
                this.Text = text;
            }

        }

        /// <summary>
        /// The name of the translatable field of the model. Reference to translatableFields
        /// </summary>
        /// <value>The name of the translatable field of the model. Reference to translatableFields</value>
        [DataMember(Name="fieldName", EmitDefaultValue=true)]
        public string FieldName { get; set; }

        /// <summary>
        /// The text of the selected language
        /// </summary>
        /// <value>The text of the selected language</value>
        [DataMember(Name="text", EmitDefaultValue=true)]
        public string Text { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class TranslatedField {\n");
            sb.Append("  FieldName: ").Append(FieldName).Append("\n");
            sb.Append("  Text: ").Append(Text).Append("\n");
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
            return this.Equals(input as TranslatedField);
        }

        /// <summary>
        /// Returns true if TranslatedField instances are equal
        /// </summary>
        /// <param name="input">Instance of TranslatedField to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TranslatedField input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.FieldName == input.FieldName ||
                    (this.FieldName != null &&
                    this.FieldName.Equals(input.FieldName))
                ) && 
                (
                    this.Text == input.Text ||
                    (this.Text != null &&
                    this.Text.Equals(input.Text))
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
                if (this.FieldName != null)
                    hashCode = hashCode * 59 + this.FieldName.GetHashCode();
                if (this.Text != null)
                    hashCode = hashCode * 59 + this.Text.GetHashCode();
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
