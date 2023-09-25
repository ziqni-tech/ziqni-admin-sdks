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
    /// ConnectionAllOf
    /// </summary>
    [DataContract(Name = "Connection_allOf")]
    public partial class ConnectionAllOf : IEquatable<ConnectionAllOf>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets ConnectionType
        /// </summary>
        [DataMember(Name = "connectionType", EmitDefaultValue = false)]
        public ConnectionType? ConnectionType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ConnectionAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ConnectionAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ConnectionAllOf" /> class.
        /// </summary>
        /// <param name="name">The name of the consumer (required).</param>
        /// <param name="description">The description of the consumer.</param>
        /// <param name="lastKnownStatus">Last known status of the connection (required).</param>
        /// <param name="lastKnownStatusCode">Status code correspoding to the last known status (required).</param>
        /// <param name="constraints">Additional constraints (required).</param>
        /// <param name="transformerId">The transformer to use, if empty the default system transformer will be used (required).</param>
        /// <param name="connectionType">connectionType.</param>
        /// <param name="secret">Consumer secret used for authentication (required).</param>
        /// <param name="user">Consumer username for authentication (required).</param>
        public ConnectionAllOf(string name = default(string), string description = default(string), string lastKnownStatus = default(string), int lastKnownStatusCode = default(int), List<string> constraints = default(List<string>), string transformerId = default(string), ConnectionType? connectionType = default(ConnectionType?), string secret = default(string), string user = default(string))
        {
            // to ensure "name" is required (not null)
            this.Name = name ?? throw new ArgumentNullException("name is a required property for ConnectionAllOf and cannot be null");
            // to ensure "lastKnownStatus" is required (not null)
            this.LastKnownStatus = lastKnownStatus ?? throw new ArgumentNullException("lastKnownStatus is a required property for ConnectionAllOf and cannot be null");
            this.LastKnownStatusCode = lastKnownStatusCode;
            // to ensure "constraints" is required (not null)
            this.Constraints = constraints ?? throw new ArgumentNullException("constraints is a required property for ConnectionAllOf and cannot be null");
            // to ensure "transformerId" is required (not null)
            this.TransformerId = transformerId ?? throw new ArgumentNullException("transformerId is a required property for ConnectionAllOf and cannot be null");
            // to ensure "secret" is required (not null)
            this.Secret = secret ?? throw new ArgumentNullException("secret is a required property for ConnectionAllOf and cannot be null");
            // to ensure "user" is required (not null)
            this.User = user ?? throw new ArgumentNullException("user is a required property for ConnectionAllOf and cannot be null");
            this.Description = description;
            this.ConnectionType = connectionType;
        }

        /// <summary>
        /// The name of the consumer
        /// </summary>
        /// <value>The name of the consumer</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// The description of the consumer
        /// </summary>
        /// <value>The description of the consumer</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Last known status of the connection
        /// </summary>
        /// <value>Last known status of the connection</value>
        [DataMember(Name = "lastKnownStatus", IsRequired = true, EmitDefaultValue = false)]
        public string LastKnownStatus { get; set; }

        /// <summary>
        /// Status code correspoding to the last known status
        /// </summary>
        /// <value>Status code correspoding to the last known status</value>
        [DataMember(Name = "lastKnownStatusCode", IsRequired = true, EmitDefaultValue = false)]
        public int LastKnownStatusCode { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name = "constraints", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// The transformer to use, if empty the default system transformer will be used
        /// </summary>
        /// <value>The transformer to use, if empty the default system transformer will be used</value>
        [DataMember(Name = "transformerId", IsRequired = true, EmitDefaultValue = false)]
        public string TransformerId { get; set; }

        /// <summary>
        /// Consumer secret used for authentication
        /// </summary>
        /// <value>Consumer secret used for authentication</value>
        [DataMember(Name = "secret", IsRequired = true, EmitDefaultValue = false)]
        public string Secret { get; set; }

        /// <summary>
        /// Consumer username for authentication
        /// </summary>
        /// <value>Consumer username for authentication</value>
        [DataMember(Name = "user", IsRequired = true, EmitDefaultValue = false)]
        public string User { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ConnectionAllOf {\n");
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
            return this.Equals(input as ConnectionAllOf);
        }

        /// <summary>
        /// Returns true if ConnectionAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of ConnectionAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ConnectionAllOf input)
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
                    this.LastKnownStatus == input.LastKnownStatus ||
                    (this.LastKnownStatus != null &&
                    this.LastKnownStatus.Equals(input.LastKnownStatus))
                ) && 
                (
                    this.LastKnownStatusCode == input.LastKnownStatusCode ||
                    this.LastKnownStatusCode.Equals(input.LastKnownStatusCode)
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
                    this.ConnectionType.Equals(input.ConnectionType)
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.LastKnownStatus != null)
                    hashCode = hashCode * 59 + this.LastKnownStatus.GetHashCode();
                hashCode = hashCode * 59 + this.LastKnownStatusCode.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
                if (this.TransformerId != null)
                    hashCode = hashCode * 59 + this.TransformerId.GetHashCode();
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
