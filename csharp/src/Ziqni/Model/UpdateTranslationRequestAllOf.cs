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
    /// UpdateTranslationRequestAllOf
    /// </summary>
    [DataContract]
    public partial class UpdateTranslationRequestAllOf :  IEquatable<UpdateTranslationRequestAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateTranslationRequestAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateTranslationRequestAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateTranslationRequestAllOf" /> class.
        /// </summary>
        /// <param name="entityId">entityId.</param>
        /// <param name="entityType">entityType.</param>
        /// <param name="languageId">languageId.</param>
        /// <param name="languageKey">languageKey.</param>
        /// <param name="translations">translations (required).</param>
        public UpdateTranslationRequestAllOf(string entityId = default(string), string entityType = default(string), string languageId = default(string), string languageKey = default(string), List<TranslationEntry> translations = default(List<TranslationEntry>))
        {
            // to ensure "translations" is required (not null)
            if (translations == null)
            {
                throw new InvalidDataException("translations is a required property for UpdateTranslationRequestAllOf and cannot be null");
            }
            else
            {
                this.Translations = translations;
            }

            this.EntityId = entityId;
            this.EntityType = entityType;
            this.LanguageId = languageId;
            this.LanguageKey = languageKey;
        }

        /// <summary>
        /// Gets or Sets EntityId
        /// </summary>
        [DataMember(Name="entityId", EmitDefaultValue=false)]
        public string EntityId { get; set; }

        /// <summary>
        /// Gets or Sets EntityType
        /// </summary>
        [DataMember(Name="entityType", EmitDefaultValue=false)]
        public string EntityType { get; set; }

        /// <summary>
        /// Gets or Sets LanguageId
        /// </summary>
        [DataMember(Name="languageId", EmitDefaultValue=false)]
        public string LanguageId { get; set; }

        /// <summary>
        /// Gets or Sets LanguageKey
        /// </summary>
        [DataMember(Name="languageKey", EmitDefaultValue=false)]
        public string LanguageKey { get; set; }

        /// <summary>
        /// Gets or Sets Translations
        /// </summary>
        [DataMember(Name="translations", EmitDefaultValue=true)]
        public List<TranslationEntry> Translations { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateTranslationRequestAllOf {\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  EntityType: ").Append(EntityType).Append("\n");
            sb.Append("  LanguageId: ").Append(LanguageId).Append("\n");
            sb.Append("  LanguageKey: ").Append(LanguageKey).Append("\n");
            sb.Append("  Translations: ").Append(Translations).Append("\n");
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
            return this.Equals(input as UpdateTranslationRequestAllOf);
        }

        /// <summary>
        /// Returns true if UpdateTranslationRequestAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateTranslationRequestAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateTranslationRequestAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.EntityId == input.EntityId ||
                    (this.EntityId != null &&
                    this.EntityId.Equals(input.EntityId))
                ) && 
                (
                    this.EntityType == input.EntityType ||
                    (this.EntityType != null &&
                    this.EntityType.Equals(input.EntityType))
                ) && 
                (
                    this.LanguageId == input.LanguageId ||
                    (this.LanguageId != null &&
                    this.LanguageId.Equals(input.LanguageId))
                ) && 
                (
                    this.LanguageKey == input.LanguageKey ||
                    (this.LanguageKey != null &&
                    this.LanguageKey.Equals(input.LanguageKey))
                ) && 
                (
                    this.Translations == input.Translations ||
                    this.Translations != null &&
                    input.Translations != null &&
                    this.Translations.SequenceEqual(input.Translations)
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
                if (this.EntityId != null)
                    hashCode = hashCode * 59 + this.EntityId.GetHashCode();
                if (this.EntityType != null)
                    hashCode = hashCode * 59 + this.EntityType.GetHashCode();
                if (this.LanguageId != null)
                    hashCode = hashCode * 59 + this.LanguageId.GetHashCode();
                if (this.LanguageKey != null)
                    hashCode = hashCode * 59 + this.LanguageKey.GetHashCode();
                if (this.Translations != null)
                    hashCode = hashCode * 59 + this.Translations.GetHashCode();
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