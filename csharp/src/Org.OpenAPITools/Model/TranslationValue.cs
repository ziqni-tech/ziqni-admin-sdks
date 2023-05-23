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
    /// TranslationValue
    /// </summary>
    [DataContract]
    public partial class TranslationValue :  IEquatable<TranslationValue>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="TranslationValue" /> class.
        /// </summary>
        /// <param name="key">This is the field from language key.</param>
        /// <param name="translatedFields">translatedFields.</param>
        public TranslationValue(string key = default(string), List<TranslatedField> translatedFields = default(List<TranslatedField>))
        {
            this.Key = key;
            this.TranslatedFields = translatedFields;
        }

        /// <summary>
        /// This is the field from language key
        /// </summary>
        /// <value>This is the field from language key</value>
        [DataMember(Name="key", EmitDefaultValue=false)]
        public string Key { get; set; }

        /// <summary>
        /// Gets or Sets TranslatedFields
        /// </summary>
        [DataMember(Name="translatedFields", EmitDefaultValue=false)]
        public List<TranslatedField> TranslatedFields { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class TranslationValue {\n");
            sb.Append("  Key: ").Append(Key).Append("\n");
            sb.Append("  TranslatedFields: ").Append(TranslatedFields).Append("\n");
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
            return this.Equals(input as TranslationValue);
        }

        /// <summary>
        /// Returns true if TranslationValue instances are equal
        /// </summary>
        /// <param name="input">Instance of TranslationValue to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(TranslationValue input)
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
                    this.TranslatedFields == input.TranslatedFields ||
                    this.TranslatedFields != null &&
                    input.TranslatedFields != null &&
                    this.TranslatedFields.SequenceEqual(input.TranslatedFields)
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
                if (this.TranslatedFields != null)
                    hashCode = hashCode * 59 + this.TranslatedFields.GetHashCode();
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