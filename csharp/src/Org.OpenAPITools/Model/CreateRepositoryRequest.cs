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
    /// CreateRepositoryRequest
    /// </summary>
    [DataContract]
    public partial class CreateRepositoryRequest :  IEquatable<CreateRepositoryRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateRepositoryRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateRepositoryRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateRepositoryRequest" /> class.
        /// </summary>
        /// <param name="customFields">A list of custom field entries.</param>
        /// <param name="tags">A list of id&#39;s used to tag models.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="name">The name of the repository. No special charaters or spaces permitted (required).</param>
        /// <param name="description">The description of the repository.</param>
        /// <param name="constraints">Additional constraints (required).</param>
        /// <param name="hostingOptions">hostingOptions.</param>
        public CreateRepositoryRequest(Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), string name = default(string), string description = default(string), List<string> constraints = default(List<string>), HostingOptions hostingOptions = default(HostingOptions))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for CreateRepositoryRequest and cannot be null");
            }
            else
            {
                this.Name = name;
            }

            // to ensure "constraints" is required (not null)
            if (constraints == null)
            {
                throw new InvalidDataException("constraints is a required property for CreateRepositoryRequest and cannot be null");
            }
            else
            {
                this.Constraints = constraints;
            }

            this.CustomFields = customFields;
            this.Tags = tags;
            this.Metadata = metadata;
            this.Description = description;
            this.HostingOptions = hostingOptions;
        }

        /// <summary>
        /// A list of custom field entries
        /// </summary>
        /// <value>A list of custom field entries</value>
        [DataMember(Name="customFields", EmitDefaultValue=false)]
        public Dictionary<string, Object> CustomFields { get; set; }

        /// <summary>
        /// A list of id&#39;s used to tag models
        /// </summary>
        /// <value>A list of id&#39;s used to tag models</value>
        [DataMember(Name="tags", EmitDefaultValue=false)]
        public List<string> Tags { get; set; }

        /// <summary>
        /// Gets or Sets Metadata
        /// </summary>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public Dictionary<string, string> Metadata { get; set; }

        /// <summary>
        /// The name of the repository. No special charaters or spaces permitted
        /// </summary>
        /// <value>The name of the repository. No special charaters or spaces permitted</value>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// The description of the repository
        /// </summary>
        /// <value>The description of the repository</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name="constraints", EmitDefaultValue=true)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// Gets or Sets HostingOptions
        /// </summary>
        [DataMember(Name="hostingOptions", EmitDefaultValue=false)]
        public HostingOptions HostingOptions { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateRepositoryRequest {\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
            sb.Append("  HostingOptions: ").Append(HostingOptions).Append("\n");
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
            return this.Equals(input as CreateRepositoryRequest);
        }

        /// <summary>
        /// Returns true if CreateRepositoryRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateRepositoryRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateRepositoryRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CustomFields == input.CustomFields ||
                    this.CustomFields != null &&
                    input.CustomFields != null &&
                    this.CustomFields.SequenceEqual(input.CustomFields)
                ) && 
                (
                    this.Tags == input.Tags ||
                    this.Tags != null &&
                    input.Tags != null &&
                    this.Tags.SequenceEqual(input.Tags)
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    input.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
                ) && 
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
                    this.Constraints == input.Constraints ||
                    this.Constraints != null &&
                    input.Constraints != null &&
                    this.Constraints.SequenceEqual(input.Constraints)
                ) && 
                (
                    this.HostingOptions == input.HostingOptions ||
                    (this.HostingOptions != null &&
                    this.HostingOptions.Equals(input.HostingOptions))
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
                if (this.CustomFields != null)
                    hashCode = hashCode * 59 + this.CustomFields.GetHashCode();
                if (this.Tags != null)
                    hashCode = hashCode * 59 + this.Tags.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
                if (this.HostingOptions != null)
                    hashCode = hashCode * 59 + this.HostingOptions.GetHashCode();
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
