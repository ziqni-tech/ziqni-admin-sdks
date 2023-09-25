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
    /// The dashboard to be rendered.
    /// </summary>
    [DataContract(Name = "Dashboard")]
    public partial class Dashboard : IEquatable<Dashboard>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Dashboard" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Dashboard() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Dashboard" /> class.
        /// </summary>
        /// <param name="dataSets">This is a map of data sets. The keys for this map are the data set labels and values are complex object which consist of data to be populated. (required).</param>
        /// <param name="labels">Labels for the charts as a map. (required).</param>
        /// <param name="modules">Modules to inject into the chart for rendering. (required).</param>
        public Dashboard(Dictionary<string, DataSetsValue> dataSets = default(Dictionary<string, DataSetsValue>), Dictionary<string, List<string>> labels = default(Dictionary<string, List<string>>), List<Modules> modules = default(List<Modules>))
        {
            // to ensure "dataSets" is required (not null)
            this.DataSets = dataSets ?? throw new ArgumentNullException("dataSets is a required property for Dashboard and cannot be null");
            // to ensure "labels" is required (not null)
            this.Labels = labels ?? throw new ArgumentNullException("labels is a required property for Dashboard and cannot be null");
            // to ensure "modules" is required (not null)
            this.Modules = modules ?? throw new ArgumentNullException("modules is a required property for Dashboard and cannot be null");
        }

        /// <summary>
        /// This is a map of data sets. The keys for this map are the data set labels and values are complex object which consist of data to be populated.
        /// </summary>
        /// <value>This is a map of data sets. The keys for this map are the data set labels and values are complex object which consist of data to be populated.</value>
        [DataMember(Name = "dataSets", IsRequired = true, EmitDefaultValue = false)]
        public Dictionary<string, DataSetsValue> DataSets { get; set; }

        /// <summary>
        /// Labels for the charts as a map.
        /// </summary>
        /// <value>Labels for the charts as a map.</value>
        [DataMember(Name = "labels", IsRequired = true, EmitDefaultValue = false)]
        public Dictionary<string, List<string>> Labels { get; set; }

        /// <summary>
        /// Modules to inject into the chart for rendering.
        /// </summary>
        /// <value>Modules to inject into the chart for rendering.</value>
        [DataMember(Name = "modules", IsRequired = true, EmitDefaultValue = false)]
        public List<Modules> Modules { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Dashboard {\n");
            sb.Append("  DataSets: ").Append(DataSets).Append("\n");
            sb.Append("  Labels: ").Append(Labels).Append("\n");
            sb.Append("  Modules: ").Append(Modules).Append("\n");
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
            return this.Equals(input as Dashboard);
        }

        /// <summary>
        /// Returns true if Dashboard instances are equal
        /// </summary>
        /// <param name="input">Instance of Dashboard to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Dashboard input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.DataSets == input.DataSets ||
                    this.DataSets != null &&
                    input.DataSets != null &&
                    this.DataSets.SequenceEqual(input.DataSets)
                ) && 
                (
                    this.Labels == input.Labels ||
                    this.Labels != null &&
                    input.Labels != null &&
                    this.Labels.SequenceEqual(input.Labels)
                ) && 
                (
                    this.Modules == input.Modules ||
                    this.Modules != null &&
                    input.Modules != null &&
                    this.Modules.SequenceEqual(input.Modules)
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
                if (this.DataSets != null)
                    hashCode = hashCode * 59 + this.DataSets.GetHashCode();
                if (this.Labels != null)
                    hashCode = hashCode * 59 + this.Labels.GetHashCode();
                if (this.Modules != null)
                    hashCode = hashCode * 59 + this.Modules.GetHashCode();
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
