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
    /// CreateCollaboratorRequest
    /// </summary>
    [DataContract]
    public partial class CreateCollaboratorRequest :  IEquatable<CreateCollaboratorRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateCollaboratorRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateCollaboratorRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateCollaboratorRequest" /> class.
        /// </summary>
        /// <param name="email">The email of the user to log in (required).</param>
        /// <param name="addRoles">addRoles (required).</param>
        public CreateCollaboratorRequest(string email = default(string), List<string> addRoles = default(List<string>))
        {
            // to ensure "email" is required (not null)
            if (email == null)
            {
                throw new InvalidDataException("email is a required property for CreateCollaboratorRequest and cannot be null");
            }
            else
            {
                this.Email = email;
            }

            // to ensure "addRoles" is required (not null)
            if (addRoles == null)
            {
                throw new InvalidDataException("addRoles is a required property for CreateCollaboratorRequest and cannot be null");
            }
            else
            {
                this.AddRoles = addRoles;
            }

        }

        /// <summary>
        /// The email of the user to log in
        /// </summary>
        /// <value>The email of the user to log in</value>
        [DataMember(Name="email", EmitDefaultValue=true)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets AddRoles
        /// </summary>
        [DataMember(Name="addRoles", EmitDefaultValue=true)]
        public List<string> AddRoles { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateCollaboratorRequest {\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  AddRoles: ").Append(AddRoles).Append("\n");
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
            return this.Equals(input as CreateCollaboratorRequest);
        }

        /// <summary>
        /// Returns true if CreateCollaboratorRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateCollaboratorRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateCollaboratorRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Email == input.Email ||
                    (this.Email != null &&
                    this.Email.Equals(input.Email))
                ) && 
                (
                    this.AddRoles == input.AddRoles ||
                    this.AddRoles != null &&
                    input.AddRoles != null &&
                    this.AddRoles.SequenceEqual(input.AddRoles)
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
                if (this.Email != null)
                    hashCode = hashCode * 59 + this.Email.GetHashCode();
                if (this.AddRoles != null)
                    hashCode = hashCode * 59 + this.AddRoles.GetHashCode();
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
