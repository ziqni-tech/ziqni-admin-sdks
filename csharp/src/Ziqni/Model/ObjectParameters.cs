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
    /// ObjectParameters
    /// </summary>
    [DataContract]
    public partial class ObjectParameters :  IEquatable<ObjectParameters>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets ObjectType
        /// </summary>
        [DataMember(Name="objectType", EmitDefaultValue=true)]
        public AppliesTo ObjectType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="ObjectParameters" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ObjectParameters() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ObjectParameters" /> class.
        /// </summary>
        /// <param name="customFields">Custom fields for this object (required).</param>
        /// <param name="objectType">objectType (required).</param>
        /// <param name="objectSubType">The sub type of the object.</param>
        /// <param name="userConstraints">Valid contraints for this object type that the user can set and unset (required).</param>
        /// <param name="systemConstraints">System contraints that the user connot modify (required).</param>
        public ObjectParameters(List<CustomField> customFields = default(List<CustomField>), AppliesTo objectType = default(AppliesTo), string objectSubType = default(string), List<ObjectConstraint> userConstraints = default(List<ObjectConstraint>), List<ObjectConstraint> systemConstraints = default(List<ObjectConstraint>))
        {
            // to ensure "customFields" is required (not null)
            if (customFields == null)
            {
                throw new InvalidDataException("customFields is a required property for ObjectParameters and cannot be null");
            }
            else
            {
                this.CustomFields = customFields;
            }

            // to ensure "objectType" is required (not null)
            if (objectType == null)
            {
                throw new InvalidDataException("objectType is a required property for ObjectParameters and cannot be null");
            }
            else
            {
                this.ObjectType = objectType;
            }

            // to ensure "userConstraints" is required (not null)
            if (userConstraints == null)
            {
                throw new InvalidDataException("userConstraints is a required property for ObjectParameters and cannot be null");
            }
            else
            {
                this.UserConstraints = userConstraints;
            }

            // to ensure "systemConstraints" is required (not null)
            if (systemConstraints == null)
            {
                throw new InvalidDataException("systemConstraints is a required property for ObjectParameters and cannot be null");
            }
            else
            {
                this.SystemConstraints = systemConstraints;
            }

            this.ObjectSubType = objectSubType;
        }

        /// <summary>
        /// Custom fields for this object
        /// </summary>
        /// <value>Custom fields for this object</value>
        [DataMember(Name="customFields", EmitDefaultValue=true)]
        public List<CustomField> CustomFields { get; set; }


        /// <summary>
        /// The sub type of the object
        /// </summary>
        /// <value>The sub type of the object</value>
        [DataMember(Name="objectSubType", EmitDefaultValue=false)]
        public string ObjectSubType { get; set; }

        /// <summary>
        /// Valid contraints for this object type that the user can set and unset
        /// </summary>
        /// <value>Valid contraints for this object type that the user can set and unset</value>
        [DataMember(Name="userConstraints", EmitDefaultValue=true)]
        public List<ObjectConstraint> UserConstraints { get; set; }

        /// <summary>
        /// System contraints that the user connot modify
        /// </summary>
        /// <value>System contraints that the user connot modify</value>
        [DataMember(Name="systemConstraints", EmitDefaultValue=true)]
        public List<ObjectConstraint> SystemConstraints { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ObjectParameters {\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  ObjectType: ").Append(ObjectType).Append("\n");
            sb.Append("  ObjectSubType: ").Append(ObjectSubType).Append("\n");
            sb.Append("  UserConstraints: ").Append(UserConstraints).Append("\n");
            sb.Append("  SystemConstraints: ").Append(SystemConstraints).Append("\n");
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
            return this.Equals(input as ObjectParameters);
        }

        /// <summary>
        /// Returns true if ObjectParameters instances are equal
        /// </summary>
        /// <param name="input">Instance of ObjectParameters to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ObjectParameters input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CustomFields == input.CustomFields ||
                    this.CustomFields != null &&
                    input.CustomFields != null &&
                    this.CustomFields.SequenceEqual(input.CustomFields)
                ) && 
                (
                    this.ObjectType == input.ObjectType ||
                    (this.ObjectType != null &&
                    this.ObjectType.Equals(input.ObjectType))
                ) && 
                (
                    this.ObjectSubType == input.ObjectSubType ||
                    (this.ObjectSubType != null &&
                    this.ObjectSubType.Equals(input.ObjectSubType))
                ) && 
                (
                    this.UserConstraints == input.UserConstraints ||
                    this.UserConstraints != null &&
                    input.UserConstraints != null &&
                    this.UserConstraints.SequenceEqual(input.UserConstraints)
                ) && 
                (
                    this.SystemConstraints == input.SystemConstraints ||
                    this.SystemConstraints != null &&
                    input.SystemConstraints != null &&
                    this.SystemConstraints.SequenceEqual(input.SystemConstraints)
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
                if (this.CustomFields != null)
                    hashCode = hashCode * 59 + this.CustomFields.GetHashCode();
                if (this.ObjectType != null)
                    hashCode = hashCode * 59 + this.ObjectType.GetHashCode();
                if (this.ObjectSubType != null)
                    hashCode = hashCode * 59 + this.ObjectSubType.GetHashCode();
                if (this.UserConstraints != null)
                    hashCode = hashCode * 59 + this.UserConstraints.GetHashCode();
                if (this.SystemConstraints != null)
                    hashCode = hashCode * 59 + this.SystemConstraints.GetHashCode();
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
