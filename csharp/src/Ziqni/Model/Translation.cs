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
    /// Translations to attach to the models.
    /// </summary>
    [DataContract(Name = "Translation")]
    public partial class Translation : IEquatable<Translation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Translation" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Translation() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Translation" /> class.
        /// </summary>
        /// <param name="id">id (required).</param>
        /// <param name="accountId">accountId (required).</param>
        /// <param name="entityId">entityId (required).</param>
        /// <param name="entityType">entityType (required).</param>
        /// <param name="version">version (required).</param>
        /// <param name="created">date-time (required).</param>
        /// <param name="translations">translations (required).</param>
        /// <param name="languageKey">languageKey (required).</param>
        public Translation(string id = default(string), string accountId = default(string), string entityId = default(string), string entityType = default(string), long version = default(long), DateTime created = default(DateTime), List<TranslationEntry> translations = default(List<TranslationEntry>), string languageKey = default(string))
        {
            // to ensure "id" is required (not null)
            this.Id = id ?? throw new ArgumentNullException("id is a required property for Translation and cannot be null");
            // to ensure "accountId" is required (not null)
            this.AccountId = accountId ?? throw new ArgumentNullException("accountId is a required property for Translation and cannot be null");
            // to ensure "entityId" is required (not null)
            this.EntityId = entityId ?? throw new ArgumentNullException("entityId is a required property for Translation and cannot be null");
            // to ensure "entityType" is required (not null)
            this.EntityType = entityType ?? throw new ArgumentNullException("entityType is a required property for Translation and cannot be null");
            this._Version = version;
            this.Created = created;
            // to ensure "translations" is required (not null)
            this.Translations = translations ?? throw new ArgumentNullException("translations is a required property for Translation and cannot be null");
            // to ensure "languageKey" is required (not null)
            this.LanguageKey = languageKey ?? throw new ArgumentNullException("languageKey is a required property for Translation and cannot be null");
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// Gets or Sets AccountId
        /// </summary>
        [DataMember(Name = "accountId", IsRequired = true, EmitDefaultValue = false)]
        public string AccountId { get; set; }

        /// <summary>
        /// Gets or Sets EntityId
        /// </summary>
        [DataMember(Name = "entityId", IsRequired = true, EmitDefaultValue = false)]
        public string EntityId { get; set; }

        /// <summary>
        /// Gets or Sets EntityType
        /// </summary>
        [DataMember(Name = "entityType", IsRequired = true, EmitDefaultValue = false)]
        public string EntityType { get; set; }

        /// <summary>
        /// Gets or Sets _Version
        /// </summary>
        [DataMember(Name = "version", IsRequired = true, EmitDefaultValue = false)]
        public long _Version { get; set; }

        /// <summary>
        /// date-time
        /// </summary>
        /// <value>date-time</value>
        [DataMember(Name = "created", IsRequired = true, EmitDefaultValue = false)]
        public DateTime Created { get; set; }

        /// <summary>
        /// Gets or Sets Translations
        /// </summary>
        [DataMember(Name = "translations", IsRequired = true, EmitDefaultValue = false)]
        public List<TranslationEntry> Translations { get; set; }

        /// <summary>
        /// Gets or Sets LanguageKey
        /// </summary>
        [DataMember(Name = "languageKey", IsRequired = true, EmitDefaultValue = false)]
        public string LanguageKey { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Translation {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  AccountId: ").Append(AccountId).Append("\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  EntityType: ").Append(EntityType).Append("\n");
            sb.Append("  _Version: ").Append(_Version).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  Translations: ").Append(Translations).Append("\n");
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
            return this.Equals(input as Translation);
        }

        /// <summary>
        /// Returns true if Translation instances are equal
        /// </summary>
        /// <param name="input">Instance of Translation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Translation input)
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
                    this.AccountId == input.AccountId ||
                    (this.AccountId != null &&
                    this.AccountId.Equals(input.AccountId))
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
                    this._Version == input._Version ||
                    this._Version.Equals(input._Version)
                ) && 
                (
                    this.Created == input.Created ||
                    (this.Created != null &&
                    this.Created.Equals(input.Created))
                ) && 
                (
                    this.Translations == input.Translations ||
                    this.Translations != null &&
                    input.Translations != null &&
                    this.Translations.SequenceEqual(input.Translations)
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.AccountId != null)
                    hashCode = hashCode * 59 + this.AccountId.GetHashCode();
                if (this.EntityId != null)
                    hashCode = hashCode * 59 + this.EntityId.GetHashCode();
                if (this.EntityType != null)
                    hashCode = hashCode * 59 + this.EntityType.GetHashCode();
                hashCode = hashCode * 59 + this._Version.GetHashCode();
                if (this.Created != null)
                    hashCode = hashCode * 59 + this.Created.GetHashCode();
                if (this.Translations != null)
                    hashCode = hashCode * 59 + this.Translations.GetHashCode();
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
