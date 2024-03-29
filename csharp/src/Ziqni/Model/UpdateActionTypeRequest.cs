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
    /// UpdateActionTypeRequest
    /// </summary>
    [DataContract]
    public partial class UpdateActionTypeRequest :  IEquatable<UpdateActionTypeRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateActionTypeRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateActionTypeRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateActionTypeRequest" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="customFields">A list of id&#39;s used to add cutom fields.</param>
        /// <param name="tags">A list of id&#39;s used to tag models.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="name">The name of the Action Helper.</param>
        /// <param name="description">The description of the rule action helper for your reference.</param>
        /// <param name="addConstraints">Additional constraints, if the value is present it means the.</param>
        /// <param name="removeConstraints">Additional constraints, if the value is present it means the.</param>
        /// <param name="unitOfMeasure">unit of measure id.</param>
        public UpdateActionTypeRequest(string id = default(string), Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), string name = default(string), string description = default(string), List<string> addConstraints = default(List<string>), List<string> removeConstraints = default(List<string>), string unitOfMeasure = default(string))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new InvalidDataException("id is a required property for UpdateActionTypeRequest and cannot be null");
            }
            else
            {
                this.Id = id;
            }

            this.CustomFields = customFields;
            this.Tags = tags;
            this.Metadata = metadata;
            this.Name = name;
            this.Description = description;
            this.AddConstraints = addConstraints;
            this.RemoveConstraints = removeConstraints;
            this.UnitOfMeasure = unitOfMeasure;
        }

        /// <summary>
        /// A unique system generated identifier
        /// </summary>
        /// <value>A unique system generated identifier</value>
        [DataMember(Name="id", EmitDefaultValue=true)]
        public string Id { get; set; }

        /// <summary>
        /// A list of id&#39;s used to add cutom fields
        /// </summary>
        /// <value>A list of id&#39;s used to add cutom fields</value>
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
        /// The name of the Action Helper
        /// </summary>
        /// <value>The name of the Action Helper</value>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// The description of the rule action helper for your reference
        /// </summary>
        /// <value>The description of the rule action helper for your reference</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Additional constraints, if the value is present it means the
        /// </summary>
        /// <value>Additional constraints, if the value is present it means the</value>
        [DataMember(Name="addConstraints", EmitDefaultValue=false)]
        public List<string> AddConstraints { get; set; }

        /// <summary>
        /// Additional constraints, if the value is present it means the
        /// </summary>
        /// <value>Additional constraints, if the value is present it means the</value>
        [DataMember(Name="removeConstraints", EmitDefaultValue=false)]
        public List<string> RemoveConstraints { get; set; }

        /// <summary>
        /// unit of measure id
        /// </summary>
        /// <value>unit of measure id</value>
        [DataMember(Name="unitOfMeasure", EmitDefaultValue=false)]
        public string UnitOfMeasure { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateActionTypeRequest {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  AddConstraints: ").Append(AddConstraints).Append("\n");
            sb.Append("  RemoveConstraints: ").Append(RemoveConstraints).Append("\n");
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
            return this.Equals(input as UpdateActionTypeRequest);
        }

        /// <summary>
        /// Returns true if UpdateActionTypeRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateActionTypeRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateActionTypeRequest input)
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
                    this.AddConstraints == input.AddConstraints ||
                    this.AddConstraints != null &&
                    input.AddConstraints != null &&
                    this.AddConstraints.SequenceEqual(input.AddConstraints)
                ) && 
                (
                    this.RemoveConstraints == input.RemoveConstraints ||
                    this.RemoveConstraints != null &&
                    input.RemoveConstraints != null &&
                    this.RemoveConstraints.SequenceEqual(input.RemoveConstraints)
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
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
                if (this.AddConstraints != null)
                    hashCode = hashCode * 59 + this.AddConstraints.GetHashCode();
                if (this.RemoveConstraints != null)
                    hashCode = hashCode * 59 + this.RemoveConstraints.GetHashCode();
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
