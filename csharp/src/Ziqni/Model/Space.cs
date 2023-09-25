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
    /// Space
    /// </summary>
    [DataContract(Name = "Space")]
    public partial class Space : IEquatable<Space>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Space" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Space() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Space" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="spaceName">This is the space name which is linked to the account (required).</param>
        /// <param name="created">ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone (required).</param>
        /// <param name="accountType">Type of account; personal or company or vendor (required).</param>
        /// <param name="masterSpace">The master account for this account.</param>
        public Space(string id = default(string), string spaceName = default(string), DateTime created = default(DateTime), string accountType = default(string), string masterSpace = default(string))
        {
            // to ensure "id" is required (not null)
            this.Id = id ?? throw new ArgumentNullException("id is a required property for Space and cannot be null");
            // to ensure "spaceName" is required (not null)
            this.SpaceName = spaceName ?? throw new ArgumentNullException("spaceName is a required property for Space and cannot be null");
            this.Created = created;
            // to ensure "accountType" is required (not null)
            this.AccountType = accountType ?? throw new ArgumentNullException("accountType is a required property for Space and cannot be null");
            this.MasterSpace = masterSpace;
        }

        /// <summary>
        /// A unique system generated identifier
        /// </summary>
        /// <value>A unique system generated identifier</value>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// This is the space name which is linked to the account
        /// </summary>
        /// <value>This is the space name which is linked to the account</value>
        [DataMember(Name = "spaceName", IsRequired = true, EmitDefaultValue = false)]
        public string SpaceName { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone</value>
        [DataMember(Name = "created", IsRequired = true, EmitDefaultValue = false)]
        public DateTime Created { get; set; }

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
            sb.Append("class Space {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SpaceName: ").Append(SpaceName).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
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
            return this.Equals(input as Space);
        }

        /// <summary>
        /// Returns true if Space instances are equal
        /// </summary>
        /// <param name="input">Instance of Space to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Space input)
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.SpaceName != null)
                    hashCode = hashCode * 59 + this.SpaceName.GetHashCode();
                if (this.Created != null)
                    hashCode = hashCode * 59 + this.Created.GetHashCode();
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
