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
    /// RewardReducedAllOf
    /// </summary>
    [DataContract]
    public partial class RewardReducedAllOf :  IEquatable<RewardReducedAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RewardReducedAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected RewardReducedAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="RewardReducedAllOf" /> class.
        /// </summary>
        /// <param name="rewardRank">If used in the context of contest this will associate with the rank of the leaderboard (required).</param>
        /// <param name="name">The name of a reward (required).</param>
        /// <param name="rewardValue">Numerical value of the reward that will be issued based on the reward type (required).</param>
        /// <param name="rewardType">Reward Type key (required).</param>
        /// <param name="rewardTypeId">A unique id of the Reward Type (required).</param>
        public RewardReducedAllOf(string rewardRank = default(string), string name = default(string), double rewardValue = default(double), string rewardType = default(string), string rewardTypeId = default(string))
        {
            // to ensure "rewardRank" is required (not null)
            if (rewardRank == null)
            {
                throw new InvalidDataException("rewardRank is a required property for RewardReducedAllOf and cannot be null");
            }
            else
            {
                this.RewardRank = rewardRank;
            }

            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for RewardReducedAllOf and cannot be null");
            }
            else
            {
                this.Name = name;
            }

            // to ensure "rewardValue" is required (not null)
            if (rewardValue == null)
            {
                throw new InvalidDataException("rewardValue is a required property for RewardReducedAllOf and cannot be null");
            }
            else
            {
                this.RewardValue = rewardValue;
            }

            // to ensure "rewardType" is required (not null)
            if (rewardType == null)
            {
                throw new InvalidDataException("rewardType is a required property for RewardReducedAllOf and cannot be null");
            }
            else
            {
                this.RewardType = rewardType;
            }

            // to ensure "rewardTypeId" is required (not null)
            if (rewardTypeId == null)
            {
                throw new InvalidDataException("rewardTypeId is a required property for RewardReducedAllOf and cannot be null");
            }
            else
            {
                this.RewardTypeId = rewardTypeId;
            }

        }

        /// <summary>
        /// If used in the context of contest this will associate with the rank of the leaderboard
        /// </summary>
        /// <value>If used in the context of contest this will associate with the rank of the leaderboard</value>
        [DataMember(Name="rewardRank", EmitDefaultValue=true)]
        public string RewardRank { get; set; }

        /// <summary>
        /// The name of a reward
        /// </summary>
        /// <value>The name of a reward</value>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// Numerical value of the reward that will be issued based on the reward type
        /// </summary>
        /// <value>Numerical value of the reward that will be issued based on the reward type</value>
        [DataMember(Name="rewardValue", EmitDefaultValue=true)]
        public double RewardValue { get; set; }

        /// <summary>
        /// Reward Type key
        /// </summary>
        /// <value>Reward Type key</value>
        [DataMember(Name="rewardType", EmitDefaultValue=true)]
        public string RewardType { get; set; }

        /// <summary>
        /// A unique id of the Reward Type
        /// </summary>
        /// <value>A unique id of the Reward Type</value>
        [DataMember(Name="rewardTypeId", EmitDefaultValue=true)]
        public string RewardTypeId { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class RewardReducedAllOf {\n");
            sb.Append("  RewardRank: ").Append(RewardRank).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  RewardValue: ").Append(RewardValue).Append("\n");
            sb.Append("  RewardType: ").Append(RewardType).Append("\n");
            sb.Append("  RewardTypeId: ").Append(RewardTypeId).Append("\n");
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
            return this.Equals(input as RewardReducedAllOf);
        }

        /// <summary>
        /// Returns true if RewardReducedAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of RewardReducedAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(RewardReducedAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.RewardRank == input.RewardRank ||
                    (this.RewardRank != null &&
                    this.RewardRank.Equals(input.RewardRank))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.RewardValue == input.RewardValue ||
                    (this.RewardValue != null &&
                    this.RewardValue.Equals(input.RewardValue))
                ) && 
                (
                    this.RewardType == input.RewardType ||
                    (this.RewardType != null &&
                    this.RewardType.Equals(input.RewardType))
                ) && 
                (
                    this.RewardTypeId == input.RewardTypeId ||
                    (this.RewardTypeId != null &&
                    this.RewardTypeId.Equals(input.RewardTypeId))
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
                if (this.RewardRank != null)
                    hashCode = hashCode * 59 + this.RewardRank.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.RewardValue != null)
                    hashCode = hashCode * 59 + this.RewardValue.GetHashCode();
                if (this.RewardType != null)
                    hashCode = hashCode * 59 + this.RewardType.GetHashCode();
                if (this.RewardTypeId != null)
                    hashCode = hashCode * 59 + this.RewardTypeId.GetHashCode();
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
