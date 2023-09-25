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
    /// Request for tag creation
    /// </summary>
    [DataContract(Name = "CreateTagRequest")]
    public partial class CreateTagRequest : IEquatable<CreateTagRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateTagRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateTagRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateTagRequest" /> class.
        /// </summary>
        /// <param name="name">The name of the tag (required).</param>
        /// <param name="key">A unique key that represents a tag (required).</param>
        /// <param name="description">The description of the tag for your reference.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="entityTypes">The model name the tag refers to (required).</param>
        public CreateTagRequest(string name = default(string), string key = default(string), string description = default(string), Dictionary<string, string> metadata = default(Dictionary<string, string>), List<string> entityTypes = default(List<string>))
        {
            // to ensure "name" is required (not null)
            this.Name = name ?? throw new ArgumentNullException("name is a required property for CreateTagRequest and cannot be null");
            // to ensure "key" is required (not null)
            this.Key = key ?? throw new ArgumentNullException("key is a required property for CreateTagRequest and cannot be null");
            // to ensure "entityTypes" is required (not null)
            this.EntityTypes = entityTypes ?? throw new ArgumentNullException("entityTypes is a required property for CreateTagRequest and cannot be null");
            this.Description = description;
            this.Metadata = metadata;
        }

        /// <summary>
        /// The name of the tag
        /// </summary>
        /// <value>The name of the tag</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// A unique key that represents a tag
        /// </summary>
        /// <value>A unique key that represents a tag</value>
        [DataMember(Name = "key", IsRequired = true, EmitDefaultValue = false)]
        public string Key { get; set; }

        /// <summary>
        /// The description of the tag for your reference
        /// </summary>
        /// <value>The description of the tag for your reference</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Metadata
        /// </summary>
        [DataMember(Name = "metadata", EmitDefaultValue = false)]
        public Dictionary<string, string> Metadata { get; set; }

        /// <summary>
        /// The model name the tag refers to
        /// </summary>
        /// <value>The model name the tag refers to</value>
        [DataMember(Name = "entityTypes", IsRequired = true, EmitDefaultValue = false)]
        public List<string> EntityTypes { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateTagRequest {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Key: ").Append(Key).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  EntityTypes: ").Append(EntityTypes).Append("\n");
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
            return this.Equals(input as CreateTagRequest);
        }

        /// <summary>
        /// Returns true if CreateTagRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateTagRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateTagRequest input)
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
                    this.Key == input.Key ||
                    (this.Key != null &&
                    this.Key.Equals(input.Key))
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    input.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
                ) && 
                (
                    this.EntityTypes == input.EntityTypes ||
                    this.EntityTypes != null &&
                    input.EntityTypes != null &&
                    this.EntityTypes.SequenceEqual(input.EntityTypes)
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
                if (this.Key != null)
                    hashCode = hashCode * 59 + this.Key.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.EntityTypes != null)
                    hashCode = hashCode * 59 + this.EntityTypes.GetHashCode();
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
