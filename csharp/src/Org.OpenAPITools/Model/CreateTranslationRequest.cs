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
    /// Translations to attach to the models.
    /// </summary>
    [DataContract]
    public partial class CreateTranslationRequest :  IEquatable<CreateTranslationRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateTranslationRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateTranslationRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateTranslationRequest" /> class.
        /// </summary>
        /// <param name="entityId">entityId (required).</param>
        /// <param name="entityType">entityType (required).</param>
        /// <param name="translations">translations (required).</param>
        /// <param name="languageId">languageId (required).</param>
        /// <param name="languageKey">languageKey (required).</param>
        public CreateTranslationRequest(string entityId = default(string), string entityType = default(string), List<TranslationEntry> translations = default(List<TranslationEntry>), string languageId = default(string), string languageKey = default(string))
        {
            // to ensure "entityId" is required (not null)
            if (entityId == null)
            {
                throw new InvalidDataException("entityId is a required property for CreateTranslationRequest and cannot be null");
            }
            else
            {
                this.EntityId = entityId;
            }

            // to ensure "entityType" is required (not null)
            if (entityType == null)
            {
                throw new InvalidDataException("entityType is a required property for CreateTranslationRequest and cannot be null");
            }
            else
            {
                this.EntityType = entityType;
            }

            // to ensure "translations" is required (not null)
            if (translations == null)
            {
                throw new InvalidDataException("translations is a required property for CreateTranslationRequest and cannot be null");
            }
            else
            {
                this.Translations = translations;
            }

            // to ensure "languageId" is required (not null)
            if (languageId == null)
            {
                throw new InvalidDataException("languageId is a required property for CreateTranslationRequest and cannot be null");
            }
            else
            {
                this.LanguageId = languageId;
            }

            // to ensure "languageKey" is required (not null)
            if (languageKey == null)
            {
                throw new InvalidDataException("languageKey is a required property for CreateTranslationRequest and cannot be null");
            }
            else
            {
                this.LanguageKey = languageKey;
            }

        }

        /// <summary>
        /// Gets or Sets EntityId
        /// </summary>
        [DataMember(Name="entityId", EmitDefaultValue=true)]
        public string EntityId { get; set; }

        /// <summary>
        /// Gets or Sets EntityType
        /// </summary>
        [DataMember(Name="entityType", EmitDefaultValue=true)]
        public string EntityType { get; set; }

        /// <summary>
        /// Gets or Sets Translations
        /// </summary>
        [DataMember(Name="translations", EmitDefaultValue=true)]
        public List<TranslationEntry> Translations { get; set; }

        /// <summary>
        /// Gets or Sets LanguageId
        /// </summary>
        [DataMember(Name="languageId", EmitDefaultValue=true)]
        public string LanguageId { get; set; }

        /// <summary>
        /// Gets or Sets LanguageKey
        /// </summary>
        [DataMember(Name="languageKey", EmitDefaultValue=true)]
        public string LanguageKey { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateTranslationRequest {\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  EntityType: ").Append(EntityType).Append("\n");
            sb.Append("  Translations: ").Append(Translations).Append("\n");
            sb.Append("  LanguageId: ").Append(LanguageId).Append("\n");
            sb.Append("  LanguageKey: ").Append(LanguageKey).Append("\n");
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
            return this.Equals(input as CreateTranslationRequest);
        }

        /// <summary>
        /// Returns true if CreateTranslationRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateTranslationRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateTranslationRequest input)
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
                    this.Translations == input.Translations ||
                    this.Translations != null &&
                    input.Translations != null &&
                    this.Translations.SequenceEqual(input.Translations)
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
                if (this.Translations != null)
                    hashCode = hashCode * 59 + this.Translations.GetHashCode();
                if (this.LanguageId != null)
                    hashCode = hashCode * 59 + this.LanguageId.GetHashCode();
                if (this.LanguageKey != null)
                    hashCode = hashCode * 59 + this.LanguageKey.GetHashCode();
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
