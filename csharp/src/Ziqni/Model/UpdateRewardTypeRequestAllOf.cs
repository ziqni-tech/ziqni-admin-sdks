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
    /// UpdateRewardTypeRequestAllOf
    /// </summary>
    [DataContract]
    public partial class UpdateRewardTypeRequestAllOf :  IEquatable<UpdateRewardTypeRequestAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateRewardTypeRequestAllOf" /> class.
        /// </summary>
        /// <param name="name">The name of the Reward type.</param>
        /// <param name="description">The description of a reward type.</param>
        /// <param name="addConstraints">Additional constraints.</param>
        /// <param name="removeConstraints">Remove constraints.</param>
        /// <param name="unitOfMeasure">unitOfMeasure.</param>
        public UpdateRewardTypeRequestAllOf(string name = default(string), string description = default(string), List<string> addConstraints = default(List<string>), List<string> removeConstraints = default(List<string>), string unitOfMeasure = default(string))
        {
            this.Name = name;
            this.Description = description;
            this.AddConstraints = addConstraints;
            this.RemoveConstraints = removeConstraints;
            this.UnitOfMeasure = unitOfMeasure;
        }

        /// <summary>
        /// The name of the Reward type
        /// </summary>
        /// <value>The name of the Reward type</value>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// The description of a reward type
        /// </summary>
        /// <value>The description of a reward type</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name="addConstraints", EmitDefaultValue=false)]
        public List<string> AddConstraints { get; set; }

        /// <summary>
        /// Remove constraints
        /// </summary>
        /// <value>Remove constraints</value>
        [DataMember(Name="removeConstraints", EmitDefaultValue=false)]
        public List<string> RemoveConstraints { get; set; }

        /// <summary>
        /// Gets or Sets UnitOfMeasure
        /// </summary>
        [DataMember(Name="unitOfMeasure", EmitDefaultValue=false)]
        public string UnitOfMeasure { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateRewardTypeRequestAllOf {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  AddConstraints: ").Append(AddConstraints).Append("\n");
            sb.Append("  RemoveConstraints: ").Append(RemoveConstraints).Append("\n");
            sb.Append("  UnitOfMeasure: ").Append(UnitOfMeasure).Append("\n");
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
            return this.Equals(input as UpdateRewardTypeRequestAllOf);
        }

        /// <summary>
        /// Returns true if UpdateRewardTypeRequestAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateRewardTypeRequestAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateRewardTypeRequestAllOf input)
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
                ) && 
                (
                    this.UnitOfMeasure == input.UnitOfMeasure ||
                    (this.UnitOfMeasure != null &&
                    this.UnitOfMeasure.Equals(input.UnitOfMeasure))
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
                if (this.AddConstraints != null)
                    hashCode = hashCode * 59 + this.AddConstraints.GetHashCode();
                if (this.RemoveConstraints != null)
                    hashCode = hashCode * 59 + this.RemoveConstraints.GetHashCode();
                if (this.UnitOfMeasure != null)
                    hashCode = hashCode * 59 + this.UnitOfMeasure.GetHashCode();
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