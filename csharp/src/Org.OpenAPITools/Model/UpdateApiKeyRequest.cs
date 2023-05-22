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
    /// UpdateApiKeyRequest
    /// </summary>
    [DataContract]
    public partial class UpdateApiKeyRequest :  IEquatable<UpdateApiKeyRequest>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets Role
        /// </summary>
        [DataMember(Name="role", EmitDefaultValue=false)]
        public Role? Role { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateApiKeyRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateApiKeyRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateApiKeyRequest" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="customFields">A list of id&#39;s used to add cutom fields.</param>
        /// <param name="tags">A list of id&#39;s used to tag models.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="description">The description of an Api key.</param>
        /// <param name="whiteListIPs">the IP&#39;s that need to be whitelisted with the Api key.</param>
        /// <param name="role">role.</param>
        /// <param name="addConstraints">Additional constraints.</param>
        /// <param name="removeConstraints">Additional constraints.</param>
        public UpdateApiKeyRequest(string id = default(string), Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), string description = default(string), List<string> whiteListIPs = default(List<string>), Role? role = default(Role?), List<string> addConstraints = default(List<string>), List<string> removeConstraints = default(List<string>))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new InvalidDataException("id is a required property for UpdateApiKeyRequest and cannot be null");
            }
            else
            {
                this.Id = id;
            }

            this.CustomFields = customFields;
            this.Tags = tags;
            this.Metadata = metadata;
            this.Description = description;
            this.WhiteListIPs = whiteListIPs;
            this.Role = role;
            this.AddConstraints = addConstraints;
            this.RemoveConstraints = removeConstraints;
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
        /// The description of an Api key
        /// </summary>
        /// <value>The description of an Api key</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// the IP&#39;s that need to be whitelisted with the Api key
        /// </summary>
        /// <value>the IP&#39;s that need to be whitelisted with the Api key</value>
        [DataMember(Name="whiteListIPs", EmitDefaultValue=false)]
        public List<string> WhiteListIPs { get; set; }

        /// <summary>
        /// An Api key hash
        /// </summary>
        /// <value>An Api key hash</value>
        [DataMember(Name="key", EmitDefaultValue=false)]
        public string Key { get; private set; }


        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name="addConstraints", EmitDefaultValue=false)]
        public List<string> AddConstraints { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name="removeConstraints", EmitDefaultValue=false)]
        public List<string> RemoveConstraints { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateApiKeyRequest {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  WhiteListIPs: ").Append(WhiteListIPs).Append("\n");
            sb.Append("  Key: ").Append(Key).Append("\n");
            sb.Append("  Role: ").Append(Role).Append("\n");
            sb.Append("  AddConstraints: ").Append(AddConstraints).Append("\n");
            sb.Append("  RemoveConstraints: ").Append(RemoveConstraints).Append("\n");
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
            return this.Equals(input as UpdateApiKeyRequest);
        }

        /// <summary>
        /// Returns true if UpdateApiKeyRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateApiKeyRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateApiKeyRequest input)
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
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.WhiteListIPs == input.WhiteListIPs ||
                    this.WhiteListIPs != null &&
                    input.WhiteListIPs != null &&
                    this.WhiteListIPs.SequenceEqual(input.WhiteListIPs)
                ) && 
                (
                    this.Key == input.Key ||
                    (this.Key != null &&
                    this.Key.Equals(input.Key))
                ) && 
                (
                    this.Role == input.Role ||
                    (this.Role != null &&
                    this.Role.Equals(input.Role))
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
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.WhiteListIPs != null)
                    hashCode = hashCode * 59 + this.WhiteListIPs.GetHashCode();
                if (this.Key != null)
                    hashCode = hashCode * 59 + this.Key.GetHashCode();
                if (this.Role != null)
                    hashCode = hashCode * 59 + this.Role.GetHashCode();
                if (this.AddConstraints != null)
                    hashCode = hashCode * 59 + this.AddConstraints.GetHashCode();
                if (this.RemoveConstraints != null)
                    hashCode = hashCode * 59 + this.RemoveConstraints.GetHashCode();
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
