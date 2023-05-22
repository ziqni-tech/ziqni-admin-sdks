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

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// UpdateCollaboratorRequestAllOf
    /// </summary>
    [DataContract(Name = "UpdateCollaboratorRequest_allOf")]
    public partial class UpdateCollaboratorRequestAllOf : IEquatable<UpdateCollaboratorRequestAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateCollaboratorRequestAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateCollaboratorRequestAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateCollaboratorRequestAllOf" /> class.
        /// </summary>
        /// <param name="email">email (required).</param>
        /// <param name="addRoles">addRoles.</param>
        /// <param name="removeRoles">removeRoles.</param>
        public UpdateCollaboratorRequestAllOf(string email = default(string), List<string> addRoles = default(List<string>), List<string> removeRoles = default(List<string>))
        {
            // to ensure "email" is required (not null)
            this.Email = email ?? throw new ArgumentNullException("email is a required property for UpdateCollaboratorRequestAllOf and cannot be null");
            this.AddRoles = addRoles;
            this.RemoveRoles = removeRoles;
        }

        /// <summary>
        /// Gets or Sets Email
        /// </summary>
        [DataMember(Name = "email", IsRequired = true, EmitDefaultValue = false)]
        public string Email { get; set; }

        /// <summary>
        /// Gets or Sets AddRoles
        /// </summary>
        [DataMember(Name = "addRoles", EmitDefaultValue = false)]
        public List<string> AddRoles { get; set; }

        /// <summary>
        /// Gets or Sets RemoveRoles
        /// </summary>
        [DataMember(Name = "removeRoles", EmitDefaultValue = false)]
        public List<string> RemoveRoles { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateCollaboratorRequestAllOf {\n");
            sb.Append("  Email: ").Append(Email).Append("\n");
            sb.Append("  AddRoles: ").Append(AddRoles).Append("\n");
            sb.Append("  RemoveRoles: ").Append(RemoveRoles).Append("\n");
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
            return this.Equals(input as UpdateCollaboratorRequestAllOf);
        }

        /// <summary>
        /// Returns true if UpdateCollaboratorRequestAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateCollaboratorRequestAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateCollaboratorRequestAllOf input)
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
                ) && 
                (
                    this.RemoveRoles == input.RemoveRoles ||
                    this.RemoveRoles != null &&
                    input.RemoveRoles != null &&
                    this.RemoveRoles.SequenceEqual(input.RemoveRoles)
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
                if (this.RemoveRoles != null)
                    hashCode = hashCode * 59 + this.RemoveRoles.GetHashCode();
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
