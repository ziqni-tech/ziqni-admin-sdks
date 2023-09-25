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
    /// DataSetsValue
    /// </summary>
    [DataContract(Name = "DataSetsValue")]
    public partial class DataSetsValue : IEquatable<DataSetsValue>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DataSetsValue" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected DataSetsValue() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="DataSetsValue" /> class.
        /// </summary>
        /// <param name="label">Label of the data set (required).</param>
        /// <param name="labels">Labels to reference data sets (required).</param>
        /// <param name="data">The actual data points for the data set (required).</param>
        public DataSetsValue(string label = default(string), string labels = default(string), List<string> data = default(List<string>))
        {
            // to ensure "label" is required (not null)
            this.Label = label ?? throw new ArgumentNullException("label is a required property for DataSetsValue and cannot be null");
            // to ensure "labels" is required (not null)
            this.Labels = labels ?? throw new ArgumentNullException("labels is a required property for DataSetsValue and cannot be null");
            // to ensure "data" is required (not null)
            this.Data = data ?? throw new ArgumentNullException("data is a required property for DataSetsValue and cannot be null");
        }

        /// <summary>
        /// Label of the data set
        /// </summary>
        /// <value>Label of the data set</value>
        [DataMember(Name = "label", IsRequired = true, EmitDefaultValue = false)]
        public string Label { get; set; }

        /// <summary>
        /// Labels to reference data sets
        /// </summary>
        /// <value>Labels to reference data sets</value>
        [DataMember(Name = "labels", IsRequired = true, EmitDefaultValue = false)]
        public string Labels { get; set; }

        /// <summary>
        /// The actual data points for the data set
        /// </summary>
        /// <value>The actual data points for the data set</value>
        [DataMember(Name = "data", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Data { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DataSetsValue {\n");
            sb.Append("  Label: ").Append(Label).Append("\n");
            sb.Append("  Labels: ").Append(Labels).Append("\n");
            sb.Append("  Data: ").Append(Data).Append("\n");
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
            return this.Equals(input as DataSetsValue);
        }

        /// <summary>
        /// Returns true if DataSetsValue instances are equal
        /// </summary>
        /// <param name="input">Instance of DataSetsValue to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DataSetsValue input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Label == input.Label ||
                    (this.Label != null &&
                    this.Label.Equals(input.Label))
                ) && 
                (
                    this.Labels == input.Labels ||
                    (this.Labels != null &&
                    this.Labels.Equals(input.Labels))
                ) && 
                (
                    this.Data == input.Data ||
                    this.Data != null &&
                    input.Data != null &&
                    this.Data.SequenceEqual(input.Data)
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
                if (this.Label != null)
                    hashCode = hashCode * 59 + this.Label.GetHashCode();
                if (this.Labels != null)
                    hashCode = hashCode * 59 + this.Labels.GetHashCode();
                if (this.Data != null)
                    hashCode = hashCode * 59 + this.Data.GetHashCode();
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
