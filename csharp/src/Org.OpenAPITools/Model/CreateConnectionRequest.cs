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
    /// CreateConnectionRequest
    /// </summary>
    [DataContract]
    public partial class CreateConnectionRequest :  IEquatable<CreateConnectionRequest>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets ConnectionType
        /// </summary>
        [DataMember(Name="connectionType", EmitDefaultValue=true)]
        public ConnectionType ConnectionType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateConnectionRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateConnectionRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateConnectionRequest" /> class.
        /// </summary>
        /// <param name="customFields">A list of custom field entries.</param>
        /// <param name="tags">A list of id&#39;s used to tag models.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="name">The name of the consumer (required).</param>
        /// <param name="description">The description of the consumer.</param>
        /// <param name="constraints">Additional constraints.</param>
        /// <param name="transformerId">The transformer to use, if empty the default system transformer will be used.</param>
        /// <param name="connectionType">connectionType (required).</param>
        /// <param name="secret">Consumer secret used for authentication.</param>
        /// <param name="user">Consumer username for authentication.</param>
        public CreateConnectionRequest(Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), string name = default(string), string description = default(string), List<string> constraints = default(List<string>), string transformerId = default(string), ConnectionType connectionType = default(ConnectionType), string secret = default(string), string user = default(string))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for CreateConnectionRequest and cannot be null");
            }
            else
            {
                this.Name = name;
            }

            // to ensure "connectionType" is required (not null)
            if (connectionType == null)
            {
                throw new InvalidDataException("connectionType is a required property for CreateConnectionRequest and cannot be null");
            }
            else
            {
                this.ConnectionType = connectionType;
            }

            this.CustomFields = customFields;
            this.Tags = tags;
            this.Metadata = metadata;
            this.Description = description;
            this.Constraints = constraints;
            this.TransformerId = transformerId;
            this.Secret = secret;
            this.User = user;
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
        /// The name of the consumer
        /// </summary>
        /// <value>The name of the consumer</value>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// The description of the consumer
        /// </summary>
        /// <value>The description of the consumer</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name="constraints", EmitDefaultValue=false)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// The transformer to use, if empty the default system transformer will be used
        /// </summary>
        /// <value>The transformer to use, if empty the default system transformer will be used</value>
        [DataMember(Name="transformerId", EmitDefaultValue=false)]
        public string TransformerId { get; set; }


        /// <summary>
        /// Consumer secret used for authentication
        /// </summary>
        /// <value>Consumer secret used for authentication</value>
        [DataMember(Name="secret", EmitDefaultValue=false)]
        public string Secret { get; set; }

        /// <summary>
        /// Consumer username for authentication
        /// </summary>
        /// <value>Consumer username for authentication</value>
        [DataMember(Name="user", EmitDefaultValue=false)]
        public string User { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateConnectionRequest {\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
            sb.Append("  TransformerId: ").Append(TransformerId).Append("\n");
            sb.Append("  ConnectionType: ").Append(ConnectionType).Append("\n");
            sb.Append("  Secret: ").Append(Secret).Append("\n");
            sb.Append("  User: ").Append(User).Append("\n");
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
            return this.Equals(input as CreateConnectionRequest);
        }

        /// <summary>
        /// Returns true if CreateConnectionRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateConnectionRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateConnectionRequest input)
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
                    this.TransformerId == input.TransformerId ||
                    (this.TransformerId != null &&
                    this.TransformerId.Equals(input.TransformerId))
                ) && 
                (
                    this.ConnectionType == input.ConnectionType ||
                    (this.ConnectionType != null &&
                    this.ConnectionType.Equals(input.ConnectionType))
                ) && 
                (
                    this.Secret == input.Secret ||
                    (this.Secret != null &&
                    this.Secret.Equals(input.Secret))
                ) && 
                (
                    this.User == input.User ||
                    (this.User != null &&
                    this.User.Equals(input.User))
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
                if (this.TransformerId != null)
                    hashCode = hashCode * 59 + this.TransformerId.GetHashCode();
                if (this.ConnectionType != null)
                    hashCode = hashCode * 59 + this.ConnectionType.GetHashCode();
                if (this.Secret != null)
                    hashCode = hashCode * 59 + this.Secret.GetHashCode();
                if (this.User != null)
                    hashCode = hashCode * 59 + this.User.GetHashCode();
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
