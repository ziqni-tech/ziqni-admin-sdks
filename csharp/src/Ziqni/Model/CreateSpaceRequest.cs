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
    /// CreateSpaceRequest
    /// </summary>
    [DataContract]
    public partial class CreateSpaceRequest :  IEquatable<CreateSpaceRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateSpaceRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateSpaceRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateSpaceRequest" /> class.
        /// </summary>
        /// <param name="name">The space name in the Ziqni system (required).</param>
        /// <param name="accountType">Type of account; personal or company or vendor (required).</param>
        /// <param name="masterSpace">The master account for this account.</param>
        /// <param name="unitsOfMeasure">Foreign key to unit of measure id..</param>
        /// <param name="constraints">Additional constraints, if set means true.</param>
        public CreateSpaceRequest(string name = default(string), string accountType = default(string), string masterSpace = default(string), List<string> unitsOfMeasure = default(List<string>), List<string> constraints = default(List<string>))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for CreateSpaceRequest and cannot be null");
            }
            else
            {
                this.Name = name;
            }

            // to ensure "accountType" is required (not null)
            if (accountType == null)
            {
                throw new InvalidDataException("accountType is a required property for CreateSpaceRequest and cannot be null");
            }
            else
            {
                this.AccountType = accountType;
            }

            this.MasterSpace = masterSpace;
            this.UnitsOfMeasure = unitsOfMeasure;
            this.Constraints = constraints;
        }

        /// <summary>
        /// The space name in the Ziqni system
        /// </summary>
        /// <value>The space name in the Ziqni system</value>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// Type of account; personal or company or vendor
        /// </summary>
        /// <value>Type of account; personal or company or vendor</value>
        [DataMember(Name="accountType", EmitDefaultValue=true)]
        public string AccountType { get; set; }

        /// <summary>
        /// The master account for this account
        /// </summary>
        /// <value>The master account for this account</value>
        [DataMember(Name="masterSpace", EmitDefaultValue=false)]
        public string MasterSpace { get; set; }

        /// <summary>
        /// Foreign key to unit of measure id.
        /// </summary>
        /// <value>Foreign key to unit of measure id.</value>
        [DataMember(Name="unitsOfMeasure", EmitDefaultValue=false)]
        public List<string> UnitsOfMeasure { get; set; }

        /// <summary>
        /// Additional constraints, if set means true
        /// </summary>
        /// <value>Additional constraints, if set means true</value>
        [DataMember(Name="constraints", EmitDefaultValue=false)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateSpaceRequest {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  AccountType: ").Append(AccountType).Append("\n");
            sb.Append("  MasterSpace: ").Append(MasterSpace).Append("\n");
            sb.Append("  UnitsOfMeasure: ").Append(UnitsOfMeasure).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
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
            return this.Equals(input as CreateSpaceRequest);
        }

        /// <summary>
        /// Returns true if CreateSpaceRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateSpaceRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateSpaceRequest input)
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
                    this.AccountType == input.AccountType ||
                    (this.AccountType != null &&
                    this.AccountType.Equals(input.AccountType))
                ) && 
                (
                    this.MasterSpace == input.MasterSpace ||
                    (this.MasterSpace != null &&
                    this.MasterSpace.Equals(input.MasterSpace))
                ) && 
                (
                    this.UnitsOfMeasure == input.UnitsOfMeasure ||
                    this.UnitsOfMeasure != null &&
                    input.UnitsOfMeasure != null &&
                    this.UnitsOfMeasure.SequenceEqual(input.UnitsOfMeasure)
                ) && 
                (
                    this.Constraints == input.Constraints ||
                    this.Constraints != null &&
                    input.Constraints != null &&
                    this.Constraints.SequenceEqual(input.Constraints)
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
                if (this.AccountType != null)
                    hashCode = hashCode * 59 + this.AccountType.GetHashCode();
                if (this.MasterSpace != null)
                    hashCode = hashCode * 59 + this.MasterSpace.GetHashCode();
                if (this.UnitsOfMeasure != null)
                    hashCode = hashCode * 59 + this.UnitsOfMeasure.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
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
