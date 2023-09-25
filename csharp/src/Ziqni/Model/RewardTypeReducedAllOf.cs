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
    /// RewardTypeReducedAllOf
    /// </summary>
    [DataContract(Name = "RewardTypeReduced_allOf")]
    public partial class RewardTypeReducedAllOf : IEquatable<RewardTypeReducedAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RewardTypeReducedAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected RewardTypeReducedAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="RewardTypeReducedAllOf" /> class.
        /// </summary>
        /// <param name="key">A unique key that represents the reward type (required).</param>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="spaceName">This is the space name which is linked to the account (required).</param>
        public RewardTypeReducedAllOf(string key = default(string), string id = default(string), string spaceName = default(string))
        {
            // to ensure "key" is required (not null)
            this.Key = key ?? throw new ArgumentNullException("key is a required property for RewardTypeReducedAllOf and cannot be null");
            // to ensure "id" is required (not null)
            this.Id = id ?? throw new ArgumentNullException("id is a required property for RewardTypeReducedAllOf and cannot be null");
            // to ensure "spaceName" is required (not null)
            this.SpaceName = spaceName ?? throw new ArgumentNullException("spaceName is a required property for RewardTypeReducedAllOf and cannot be null");
        }

        /// <summary>
        /// A unique key that represents the reward type
        /// </summary>
        /// <value>A unique key that represents the reward type</value>
        [DataMember(Name = "key", IsRequired = true, EmitDefaultValue = false)]
        public string Key { get; set; }

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
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class RewardTypeReducedAllOf {\n");
            sb.Append("  Key: ").Append(Key).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SpaceName: ").Append(SpaceName).Append("\n");
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
            return this.Equals(input as RewardTypeReducedAllOf);
        }

        /// <summary>
        /// Returns true if RewardTypeReducedAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of RewardTypeReducedAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(RewardTypeReducedAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Key == input.Key ||
                    (this.Key != null &&
                    this.Key.Equals(input.Key))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.SpaceName == input.SpaceName ||
                    (this.SpaceName != null &&
                    this.SpaceName.Equals(input.SpaceName))
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
                if (this.Key != null)
                    hashCode = hashCode * 59 + this.Key.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.SpaceName != null)
                    hashCode = hashCode * 59 + this.SpaceName.GetHashCode();
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
