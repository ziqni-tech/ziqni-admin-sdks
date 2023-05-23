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
    /// This the translationEntry model
    /// </summary>
    [DataContract]
    public partial class TranslationEntry :  IEquatable<TranslationEntry>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TranslationEntry" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected TranslationEntry() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="TranslationEntry" /> class.
        /// </summary>
        /// <param name="fieldName">Field name to associate the translationEntry to. (required).</param>
        /// <param name="text">Corresponding translated text (required).</param>
        public TranslationEntry(string fieldName = default(string), string text = default(string))
        {
            // to ensure "fieldName" is required (not null)
            if (fieldName == null)
            {
                throw new InvalidDataException("fieldName is a required property for TranslationEntry and cannot be null");
            }
            else
            {
                this.FieldName = fieldName;
            }

            // to ensure "text" is required (not null)
            if (text == null)
            {
                throw new InvalidDataException("text is a required property for TranslationEntry and cannot be null");
            }
            else
            {
                this.Text = text;
            }

        }

        /// <summary>
        /// Field name to associate the translationEntry to.
        /// </summary>
        /// <value>Field name to associate the translationEntry to.</value>
        [DataMember(Name="fieldName", EmitDefaultValue=true)]
        public string FieldName { get; set; }

        /// <summary>
        /// Corresponding translated text
        /// </summary>
        /// <value>Corresponding translated text</value>
        [DataMember(Name="text", EmitDefaultValue=true)]
        public string Text { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class TranslationEntry {\n");
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
            return this.Equals(input as TranslationEntry);
        }

        /// <summary>
        /// Returns true if TranslationEntry instances are equal
        /// </summary>
        /// <param name="input">Instance of TranslationEntry to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TranslationEntry input)
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