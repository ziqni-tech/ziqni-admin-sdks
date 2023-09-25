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
    /// UpdateTranslationRequest
    /// </summary>
    [DataContract(Name = "UpdateTranslationRequest")]
    public partial class UpdateTranslationRequest : IEquatable<UpdateTranslationRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateTranslationRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateTranslationRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateTranslationRequest" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="entityId">entityId.</param>
        /// <param name="entityType">entityType.</param>
        /// <param name="languageId">languageId.</param>
        /// <param name="languageKey">languageKey.</param>
        /// <param name="translations">translations (required).</param>
        public UpdateTranslationRequest(string id = default(string), string entityId = default(string), string entityType = default(string), string languageId = default(string), string languageKey = default(string), List<TranslationEntry> translations = default(List<TranslationEntry>))
        {
            // to ensure "id" is required (not null)
            this.Id = id ?? throw new ArgumentNullException("id is a required property for UpdateTranslationRequest and cannot be null");
            // to ensure "translations" is required (not null)
            this.Translations = translations ?? throw new ArgumentNullException("translations is a required property for UpdateTranslationRequest and cannot be null");
            this.EntityId = entityId;
            this.EntityType = entityType;
            this.LanguageId = languageId;
            this.LanguageKey = languageKey;
        }

        /// <summary>
        /// A unique system generated identifier
        /// </summary>
        /// <value>A unique system generated identifier</value>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets EntityId
        /// </summary>
        [DataMember(Name = "entityId", EmitDefaultValue = false)]
        public string EntityId { get; set; }

        /// <summary>
        /// Gets or Sets EntityType
        /// </summary>
        [DataMember(Name = "entityType", EmitDefaultValue = false)]
        public string EntityType { get; set; }

        /// <summary>
        /// Gets or Sets LanguageId
        /// </summary>
        [DataMember(Name = "languageId", EmitDefaultValue = false)]
        public string LanguageId { get; set; }

        /// <summary>
        /// Gets or Sets LanguageKey
        /// </summary>
        [DataMember(Name = "languageKey", EmitDefaultValue = false)]
        public string LanguageKey { get; set; }

        /// <summary>
        /// Gets or Sets Translations
        /// </summary>
        [DataMember(Name = "translations", IsRequired = true, EmitDefaultValue = false)]
        public List<TranslationEntry> Translations { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateTranslationRequest {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
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
            return this.Equals(input as UpdateTranslationRequest);
        }

        /// <summary>
        /// Returns true if UpdateTranslationRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateTranslationRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateTranslationRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
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
