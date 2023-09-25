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
    /// SpaceAllOf
    /// </summary>
    [DataContract(Name = "Space_allOf")]
    public partial class SpaceAllOf : IEquatable<SpaceAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SpaceAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected SpaceAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="SpaceAllOf" /> class.
        /// </summary>
        /// <param name="accountType">Type of account; personal or company or vendor (required).</param>
        /// <param name="masterSpace">The master account for this account.</param>
        public SpaceAllOf(string accountType = default(string), string masterSpace = default(string))
        {
            // to ensure "accountType" is required (not null)
            this.AccountType = accountType ?? throw new ArgumentNullException("accountType is a required property for SpaceAllOf and cannot be null");
            this.MasterSpace = masterSpace;
        }

        /// <summary>
        /// Type of account; personal or company or vendor
        /// </summary>
        /// <value>Type of account; personal or company or vendor</value>
        [DataMember(Name = "accountType", IsRequired = true, EmitDefaultValue = false)]
        public string AccountType { get; set; }

        /// <summary>
        /// The master account for this account
        /// </summary>
        /// <value>The master account for this account</value>
        [DataMember(Name = "masterSpace", EmitDefaultValue = false)]
        public string MasterSpace { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class SpaceAllOf {\n");
            sb.Append("  AccountType: ").Append(AccountType).Append("\n");
            sb.Append("  MasterSpace: ").Append(MasterSpace).Append("\n");
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
            return this.Equals(input as SpaceAllOf);
        }

        /// <summary>
        /// Returns true if SpaceAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of SpaceAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(SpaceAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.AccountType == input.AccountType ||
                    (this.AccountType != null &&
                    this.AccountType.Equals(input.AccountType))
                ) && 
                (
                    this.MasterSpace == input.MasterSpace ||
                    (this.MasterSpace != null &&
                    this.MasterSpace.Equals(input.MasterSpace))
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
                if (this.AccountType != null)
                    hashCode = hashCode * 59 + this.AccountType.GetHashCode();
                if (this.MasterSpace != null)
                    hashCode = hashCode * 59 + this.MasterSpace.GetHashCode();
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
