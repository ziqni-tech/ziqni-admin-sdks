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
    /// Various modules returned for rendering dashboard.
    /// </summary>
    [DataContract]
    public partial class Modules :  IEquatable<Modules>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Modules" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Modules() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Modules" /> class.
        /// </summary>
        /// <param name="key">Key of the chart. (required).</param>
        /// <param name="label">Label for the chart. (required).</param>
        /// <param name="moduleType">Type of chart to insert te data into. (required).</param>
        /// <param name="order">Order at which the chart appears on the web page. (required).</param>
        /// <param name="dataSets">Array of DataSets map reference keys. If style information is required for a specific chart type then it will be returned. (required).</param>
        public Modules(string key = default(string), string label = default(string), string moduleType = default(string), string order = default(string), List<DataSetsReference> dataSets = default(List<DataSetsReference>))
        {
            // to ensure "key" is required (not null)
            if (key == null)
            {
                throw new InvalidDataException("key is a required property for Modules and cannot be null");
            }
            else
            {
                this.Key = key;
            }

            // to ensure "label" is required (not null)
            if (label == null)
            {
                throw new InvalidDataException("label is a required property for Modules and cannot be null");
            }
            else
            {
                this.Label = label;
            }

            // to ensure "moduleType" is required (not null)
            if (moduleType == null)
            {
                throw new InvalidDataException("moduleType is a required property for Modules and cannot be null");
            }
            else
            {
                this.ModuleType = moduleType;
            }

            // to ensure "order" is required (not null)
            if (order == null)
            {
                throw new InvalidDataException("order is a required property for Modules and cannot be null");
            }
            else
            {
                this.Order = order;
            }

            // to ensure "dataSets" is required (not null)
            if (dataSets == null)
            {
                throw new InvalidDataException("dataSets is a required property for Modules and cannot be null");
            }
            else
            {
                this.DataSets = dataSets;
            }

        }

        /// <summary>
        /// Key of the chart.
        /// </summary>
        /// <value>Key of the chart.</value>
        [DataMember(Name="key", EmitDefaultValue=true)]
        public string Key { get; set; }

        /// <summary>
        /// Label for the chart.
        /// </summary>
        /// <value>Label for the chart.</value>
        [DataMember(Name="label", EmitDefaultValue=true)]
        public string Label { get; set; }

        /// <summary>
        /// Type of chart to insert te data into.
        /// </summary>
        /// <value>Type of chart to insert te data into.</value>
        [DataMember(Name="moduleType", EmitDefaultValue=true)]
        public string ModuleType { get; set; }

        /// <summary>
        /// Order at which the chart appears on the web page.
        /// </summary>
        /// <value>Order at which the chart appears on the web page.</value>
        [DataMember(Name="order", EmitDefaultValue=true)]
        public string Order { get; set; }

        /// <summary>
        /// Array of DataSets map reference keys. If style information is required for a specific chart type then it will be returned.
        /// </summary>
        /// <value>Array of DataSets map reference keys. If style information is required for a specific chart type then it will be returned.</value>
        [DataMember(Name="dataSets", EmitDefaultValue=true)]
        public List<DataSetsReference> DataSets { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Modules {\n");
            sb.Append("  Key: ").Append(Key).Append("\n");
            sb.Append("  Label: ").Append(Label).Append("\n");
            sb.Append("  ModuleType: ").Append(ModuleType).Append("\n");
            sb.Append("  Order: ").Append(Order).Append("\n");
            sb.Append("  DataSets: ").Append(DataSets).Append("\n");
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
            return this.Equals(input as Modules);
        }

        /// <summary>
        /// Returns true if Modules instances are equal
        /// </summary>
        /// <param name="input">Instance of Modules to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Modules input)
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
                    this.Label == input.Label ||
                    (this.Label != null &&
                    this.Label.Equals(input.Label))
                ) && 
                (
                    this.ModuleType == input.ModuleType ||
                    (this.ModuleType != null &&
                    this.ModuleType.Equals(input.ModuleType))
                ) && 
                (
                    this.Order == input.Order ||
                    (this.Order != null &&
                    this.Order.Equals(input.Order))
                ) && 
                (
                    this.DataSets == input.DataSets ||
                    this.DataSets != null &&
                    input.DataSets != null &&
                    this.DataSets.SequenceEqual(input.DataSets)
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
                if (this.Label != null)
                    hashCode = hashCode * 59 + this.Label.GetHashCode();
                if (this.ModuleType != null)
                    hashCode = hashCode * 59 + this.ModuleType.GetHashCode();
                if (this.Order != null)
                    hashCode = hashCode * 59 + this.Order.GetHashCode();
                if (this.DataSets != null)
                    hashCode = hashCode * 59 + this.DataSets.GetHashCode();
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
