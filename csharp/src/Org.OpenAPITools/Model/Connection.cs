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
    /// Connection
    /// </summary>
    [DataContract]
    public partial class Connection :  IEquatable<Connection>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets ConnectionType
        /// </summary>
        [DataMember(Name="connectionType", EmitDefaultValue=false)]
        public ConnectionType? ConnectionType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Connection" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Connection() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Connection" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="spaceName">This is the space name which is linked to the account (required).</param>
        /// <param name="created">ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone (required).</param>
        /// <param name="customFields">customFields.</param>
        /// <param name="tags">A list of id&#39;s used to tag models.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="name">The name of the consumer (required).</param>
        /// <param name="description">The description of the consumer.</param>
        /// <param name="lastKnownStatus">Last known status of the connection (required).</param>
        /// <param name="lastKnownStatusCode">Status code correspoding to the last known status (required).</param>
        /// <param name="constraints">Additional constraints (required).</param>
        /// <param name="transformerId">The transformer to use, if empty the default system transformer will be used (required).</param>
        /// <param name="connectionType">connectionType.</param>
        /// <param name="secret">Consumer secret used for authentication (required).</param>
        /// <param name="user">Consumer username for authentication (required).</param>
        public Connection(string id = default(string), string spaceName = default(string), DateTime created = default(DateTime), Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), string name = default(string), string description = default(string), string lastKnownStatus = default(string), int lastKnownStatusCode = default(int), List<string> constraints = default(List<string>), string transformerId = default(string), ConnectionType? connectionType = default(ConnectionType?), string secret = default(string), string user = default(string))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new InvalidDataException("id is a required property for Connection and cannot be null");
            }
            else
            {
                this.Id = id;
            }

            // to ensure "spaceName" is required (not null)
            if (spaceName == null)
            {
                throw new InvalidDataException("spaceName is a required property for Connection and cannot be null");
            }
            else
            {
                this.SpaceName = spaceName;
            }

            // to ensure "created" is required (not null)
            if (created == null)
            {
                throw new InvalidDataException("created is a required property for Connection and cannot be null");
            }
            else
            {
                this.Created = created;
            }

            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for Connection and cannot be null");
            }
            else
            {
                this.Name = name;
            }

            // to ensure "lastKnownStatus" is required (not null)
            if (lastKnownStatus == null)
            {
                throw new InvalidDataException("lastKnownStatus is a required property for Connection and cannot be null");
            }
            else
            {
                this.LastKnownStatus = lastKnownStatus;
            }

            // to ensure "lastKnownStatusCode" is required (not null)
            if (lastKnownStatusCode == null)
            {
                throw new InvalidDataException("lastKnownStatusCode is a required property for Connection and cannot be null");
            }
            else
            {
                this.LastKnownStatusCode = lastKnownStatusCode;
            }

            // to ensure "constraints" is required (not null)
            if (constraints == null)
            {
                throw new InvalidDataException("constraints is a required property for Connection and cannot be null");
            }
            else
            {
                this.Constraints = constraints;
            }

            // to ensure "transformerId" is required (not null)
            if (transformerId == null)
            {
                throw new InvalidDataException("transformerId is a required property for Connection and cannot be null");
            }
            else
            {
                this.TransformerId = transformerId;
            }

            // to ensure "secret" is required (not null)
            if (secret == null)
            {
                throw new InvalidDataException("secret is a required property for Connection and cannot be null");
            }
            else
            {
                this.Secret = secret;
            }

            // to ensure "user" is required (not null)
            if (user == null)
            {
                throw new InvalidDataException("user is a required property for Connection and cannot be null");
            }
            else
            {
                this.User = user;
            }

            this.CustomFields = customFields;
            this.Tags = tags;
            this.Metadata = metadata;
            this.Description = description;
            this.ConnectionType = connectionType;
        }

        /// <summary>
        /// A unique system generated identifier
        /// </summary>
        /// <value>A unique system generated identifier</value>
        [DataMember(Name="id", EmitDefaultValue=true)]
        public string Id { get; set; }

        /// <summary>
        /// This is the space name which is linked to the account
        /// </summary>
        /// <value>This is the space name which is linked to the account</value>
        [DataMember(Name="spaceName", EmitDefaultValue=true)]
        public string SpaceName { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone</value>
        [DataMember(Name="created", EmitDefaultValue=true)]
        public DateTime Created { get; set; }

        /// <summary>
        /// Gets or Sets CustomFields
        /// </summary>
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
        /// Last known status of the connection
        /// </summary>
        /// <value>Last known status of the connection</value>
        [DataMember(Name="lastKnownStatus", EmitDefaultValue=true)]
        public string LastKnownStatus { get; set; }

        /// <summary>
        /// Status code correspoding to the last known status
        /// </summary>
        /// <value>Status code correspoding to the last known status</value>
        [DataMember(Name="lastKnownStatusCode", EmitDefaultValue=true)]
        public int LastKnownStatusCode { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name="constraints", EmitDefaultValue=true)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// The transformer to use, if empty the default system transformer will be used
        /// </summary>
        /// <value>The transformer to use, if empty the default system transformer will be used</value>
        [DataMember(Name="transformerId", EmitDefaultValue=true)]
        public string TransformerId { get; set; }


        /// <summary>
        /// Consumer secret used for authentication
        /// </summary>
        /// <value>Consumer secret used for authentication</value>
        [DataMember(Name="secret", EmitDefaultValue=true)]
        public string Secret { get; set; }

        /// <summary>
        /// Consumer username for authentication
        /// </summary>
        /// <value>Consumer username for authentication</value>
        [DataMember(Name="user", EmitDefaultValue=true)]
        public string User { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Connection {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SpaceName: ").Append(SpaceName).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  LastKnownStatus: ").Append(LastKnownStatus).Append("\n");
            sb.Append("  LastKnownStatusCode: ").Append(LastKnownStatusCode).Append("\n");
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
            return this.Equals(input as Connection);
        }

        /// <summary>
        /// Returns true if Connection instances are equal
        /// </summary>
        /// <param name="input">Instance of Connection to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Connection input)
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
                    this.SpaceName == input.SpaceName ||
                    (this.SpaceName != null &&
                    this.SpaceName.Equals(input.SpaceName))
                ) && 
                (
                    this.Created == input.Created ||
                    (this.Created != null &&
                    this.Created.Equals(input.Created))
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
                    this.LastKnownStatus == input.LastKnownStatus ||
                    (this.LastKnownStatus != null &&
                    this.LastKnownStatus.Equals(input.LastKnownStatus))
                ) && 
                (
                    this.LastKnownStatusCode == input.LastKnownStatusCode ||
                    (this.LastKnownStatusCode != null &&
                    this.LastKnownStatusCode.Equals(input.LastKnownStatusCode))
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.SpaceName != null)
                    hashCode = hashCode * 59 + this.SpaceName.GetHashCode();
                if (this.Created != null)
                    hashCode = hashCode * 59 + this.Created.GetHashCode();
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
                if (this.LastKnownStatus != null)
                    hashCode = hashCode * 59 + this.LastKnownStatus.GetHashCode();
                if (this.LastKnownStatusCode != null)
                    hashCode = hashCode * 59 + this.LastKnownStatusCode.GetHashCode();
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
