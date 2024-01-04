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
    /// Relation
    /// </summary>
    [DataContract]
    public partial class Relation :  IEquatable<Relation>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Relation" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Relation() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Relation" /> class.
        /// </summary>
        /// <param name="id">A unique system identifier to which this record is related to (required).</param>
        /// <param name="relationType">Entity type of the id (required).</param>
        public Relation(string id = default(string), string relationType = default(string))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new InvalidDataException("id is a required property for Relation and cannot be null");
            }
            else
            {
                this.Id = id;
            }

            // to ensure "relationType" is required (not null)
            if (relationType == null)
            {
                throw new InvalidDataException("relationType is a required property for Relation and cannot be null");
            }
            else
            {
                this.RelationType = relationType;
            }

        }

        /// <summary>
        /// A unique system identifier to which this record is related to
        /// </summary>
        /// <value>A unique system identifier to which this record is related to</value>
        [DataMember(Name="id", EmitDefaultValue=true)]
        public string Id { get; set; }

        /// <summary>
        /// Entity type of the id
        /// </summary>
        /// <value>Entity type of the id</value>
        [DataMember(Name="relationType", EmitDefaultValue=true)]
        public string RelationType { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Relation {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  RelationType: ").Append(RelationType).Append("\n");
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
            return this.Equals(input as Relation);
        }

        /// <summary>
        /// Returns true if Relation instances are equal
        /// </summary>
        /// <param name="input">Instance of Relation to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Relation input)
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
                    this.RelationType == input.RelationType ||
                    (this.RelationType != null &&
                    this.RelationType.Equals(input.RelationType))
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
                if (this.RelationType != null)
                    hashCode = hashCode * 59 + this.RelationType.GetHashCode();
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