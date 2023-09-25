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
    /// The reference to the DataSets.
    /// </summary>
    [DataContract(Name = "DataSetsReference")]
    public partial class DataSetsReference : IEquatable<DataSetsReference>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DataSetsReference" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected DataSetsReference() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="DataSetsReference" /> class.
        /// </summary>
        /// <param name="style">The type of graph to inject the DataSets into..</param>
        /// <param name="key">Data set values to retrive from DataSets map of the response. (required).</param>
        public DataSetsReference(string style = default(string), string key = default(string))
        {
            // to ensure "key" is required (not null)
            this.Key = key ?? throw new ArgumentNullException("key is a required property for DataSetsReference and cannot be null");
            this.Style = style;
        }

        /// <summary>
        /// The type of graph to inject the DataSets into.
        /// </summary>
        /// <value>The type of graph to inject the DataSets into.</value>
        [DataMember(Name = "style", EmitDefaultValue = false)]
        public string Style { get; set; }

        /// <summary>
        /// Data set values to retrive from DataSets map of the response.
        /// </summary>
        /// <value>Data set values to retrive from DataSets map of the response.</value>
        [DataMember(Name = "key", IsRequired = true, EmitDefaultValue = false)]
        public string Key { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DataSetsReference {\n");
            sb.Append("  Style: ").Append(Style).Append("\n");
            sb.Append("  Key: ").Append(Key).Append("\n");
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
            return this.Equals(input as DataSetsReference);
        }

        /// <summary>
        /// Returns true if DataSetsReference instances are equal
        /// </summary>
        /// <param name="input">Instance of DataSetsReference to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DataSetsReference input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Style == input.Style ||
                    (this.Style != null &&
                    this.Style.Equals(input.Style))
                ) && 
                (
                    this.Key == input.Key ||
                    (this.Key != null &&
                    this.Key.Equals(input.Key))
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
                if (this.Style != null)
                    hashCode = hashCode * 59 + this.Style.GetHashCode();
                if (this.Key != null)
                    hashCode = hashCode * 59 + this.Key.GetHashCode();
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
