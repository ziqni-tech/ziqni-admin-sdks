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
    /// CreateRewardTypeRequestAllOf
    /// </summary>
    [DataContract(Name = "CreateRewardTypeRequest_allOf")]
    public partial class CreateRewardTypeRequestAllOf : IEquatable<CreateRewardTypeRequestAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateRewardTypeRequestAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateRewardTypeRequestAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateRewardTypeRequestAllOf" /> class.
        /// </summary>
        /// <param name="name">The name of the Reward type (required).</param>
        /// <param name="description">The description of a reward type.</param>
        /// <param name="key">A unique key that represents the reward type (required).</param>
        /// <param name="translations">translations.</param>
        /// <param name="addConstraints">Additional constraints.</param>
        /// <param name="unitOfMeasure">unitOfMeasure (required).</param>
        public CreateRewardTypeRequestAllOf(string name = default(string), string description = default(string), string key = default(string), List<Translation> translations = default(List<Translation>), List<string> addConstraints = default(List<string>), string unitOfMeasure = default(string))
        {
            // to ensure "name" is required (not null)
            this.Name = name ?? throw new ArgumentNullException("name is a required property for CreateRewardTypeRequestAllOf and cannot be null");
            // to ensure "key" is required (not null)
            this.Key = key ?? throw new ArgumentNullException("key is a required property for CreateRewardTypeRequestAllOf and cannot be null");
            // to ensure "unitOfMeasure" is required (not null)
            this.UnitOfMeasure = unitOfMeasure ?? throw new ArgumentNullException("unitOfMeasure is a required property for CreateRewardTypeRequestAllOf and cannot be null");
            this.Description = description;
            this.Translations = translations;
            this.AddConstraints = addConstraints;
        }

        /// <summary>
        /// The name of the Reward type
        /// </summary>
        /// <value>The name of the Reward type</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// The description of a reward type
        /// </summary>
        /// <value>The description of a reward type</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// A unique key that represents the reward type
        /// </summary>
        /// <value>A unique key that represents the reward type</value>
        [DataMember(Name = "key", IsRequired = true, EmitDefaultValue = false)]
        public string Key { get; set; }

        /// <summary>
        /// Gets or Sets Translations
        /// </summary>
        [DataMember(Name = "translations", EmitDefaultValue = false)]
        public List<Translation> Translations { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name = "addConstraints", EmitDefaultValue = false)]
        public List<string> AddConstraints { get; set; }

        /// <summary>
        /// Gets or Sets UnitOfMeasure
        /// </summary>
        [DataMember(Name = "unitOfMeasure", IsRequired = true, EmitDefaultValue = false)]
        public string UnitOfMeasure { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateRewardTypeRequestAllOf {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Key: ").Append(Key).Append("\n");
            sb.Append("  Translations: ").Append(Translations).Append("\n");
            sb.Append("  AddConstraints: ").Append(AddConstraints).Append("\n");
            sb.Append("  UnitOfMeasure: ").Append(UnitOfMeasure).Append("\n");
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
            return this.Equals(input as CreateRewardTypeRequestAllOf);
        }

        /// <summary>
        /// Returns true if CreateRewardTypeRequestAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateRewardTypeRequestAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateRewardTypeRequestAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Key == input.Key ||
                    (this.Key != null &&
                    this.Key.Equals(input.Key))
                ) && 
                (
                    this.Translations == input.Translations ||
                    this.Translations != null &&
                    input.Translations != null &&
                    this.Translations.SequenceEqual(input.Translations)
                ) && 
                (
                    this.AddConstraints == input.AddConstraints ||
                    this.AddConstraints != null &&
                    input.AddConstraints != null &&
                    this.AddConstraints.SequenceEqual(input.AddConstraints)
                ) && 
                (
                    this.UnitOfMeasure == input.UnitOfMeasure ||
                    (this.UnitOfMeasure != null &&
                    this.UnitOfMeasure.Equals(input.UnitOfMeasure))
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Key != null)
                    hashCode = hashCode * 59 + this.Key.GetHashCode();
                if (this.Translations != null)
                    hashCode = hashCode * 59 + this.Translations.GetHashCode();
                if (this.AddConstraints != null)
                    hashCode = hashCode * 59 + this.AddConstraints.GetHashCode();
                if (this.UnitOfMeasure != null)
                    hashCode = hashCode * 59 + this.UnitOfMeasure.GetHashCode();
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
