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
    /// MetaBasic
    /// </summary>
    [DataContract(Name = "MetaBasic")]
    public partial class MetaBasic : IEquatable<MetaBasic>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MetaBasic" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected MetaBasic() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="MetaBasic" /> class.
        /// </summary>
        /// <param name="objectType">objectType (required).</param>
        /// <param name="totalRecords">The count of all results.</param>
        /// <param name="resultCount">The count of successful results (required).</param>
        /// <param name="errorCount">The count of errors (required).</param>
        public MetaBasic(string objectType = default(string), int totalRecords = default(int), int resultCount = default(int), int errorCount = default(int))
        {
            // to ensure "objectType" is required (not null)
            this.ObjectType = objectType ?? throw new ArgumentNullException("objectType is a required property for MetaBasic and cannot be null");
            this.ResultCount = resultCount;
            this.ErrorCount = errorCount;
            this.TotalRecords = totalRecords;
        }

        /// <summary>
        /// Gets or Sets ObjectType
        /// </summary>
        [DataMember(Name = "objectType", IsRequired = true, EmitDefaultValue = false)]
        public string ObjectType { get; set; }

        /// <summary>
        /// The count of all results
        /// </summary>
        /// <value>The count of all results</value>
        [DataMember(Name = "totalRecords", EmitDefaultValue = false)]
        public int TotalRecords { get; set; }

        /// <summary>
        /// The count of successful results
        /// </summary>
        /// <value>The count of successful results</value>
        [DataMember(Name = "resultCount", IsRequired = true, EmitDefaultValue = false)]
        public int ResultCount { get; set; }

        /// <summary>
        /// The count of errors
        /// </summary>
        /// <value>The count of errors</value>
        [DataMember(Name = "errorCount", IsRequired = true, EmitDefaultValue = false)]
        public int ErrorCount { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MetaBasic {\n");
            sb.Append("  ObjectType: ").Append(ObjectType).Append("\n");
            sb.Append("  TotalRecords: ").Append(TotalRecords).Append("\n");
            sb.Append("  ResultCount: ").Append(ResultCount).Append("\n");
            sb.Append("  ErrorCount: ").Append(ErrorCount).Append("\n");
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
            return this.Equals(input as MetaBasic);
        }

        /// <summary>
        /// Returns true if MetaBasic instances are equal
        /// </summary>
        /// <param name="input">Instance of MetaBasic to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MetaBasic input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ObjectType == input.ObjectType ||
                    (this.ObjectType != null &&
                    this.ObjectType.Equals(input.ObjectType))
                ) && 
                (
                    this.TotalRecords == input.TotalRecords ||
                    this.TotalRecords.Equals(input.TotalRecords)
                ) && 
                (
                    this.ResultCount == input.ResultCount ||
                    this.ResultCount.Equals(input.ResultCount)
                ) && 
                (
                    this.ErrorCount == input.ErrorCount ||
                    this.ErrorCount.Equals(input.ErrorCount)
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
                if (this.ObjectType != null)
                    hashCode = hashCode * 59 + this.ObjectType.GetHashCode();
                hashCode = hashCode * 59 + this.TotalRecords.GetHashCode();
                hashCode = hashCode * 59 + this.ResultCount.GetHashCode();
                hashCode = hashCode * 59 + this.ErrorCount.GetHashCode();
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
