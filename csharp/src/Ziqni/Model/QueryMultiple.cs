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
    /// QueryMultiple
    /// </summary>
    [DataContract]
    public partial class QueryMultiple :  IEquatable<QueryMultiple>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="QueryMultiple" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected QueryMultiple() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="QueryMultiple" /> class.
        /// </summary>
        /// <param name="queryField">The key of the parameter that is being searched (required).</param>
        /// <param name="queryValues">Multiple values for parameter that is being searched (required).</param>
        public QueryMultiple(string queryField = default(string), List<string> queryValues = default(List<string>))
        {
            // to ensure "queryField" is required (not null)
            if (queryField == null)
            {
                throw new InvalidDataException("queryField is a required property for QueryMultiple and cannot be null");
            }
            else
            {
                this.QueryField = queryField;
            }

            // to ensure "queryValues" is required (not null)
            if (queryValues == null)
            {
                throw new InvalidDataException("queryValues is a required property for QueryMultiple and cannot be null");
            }
            else
            {
                this.QueryValues = queryValues;
            }

        }

        /// <summary>
        /// The key of the parameter that is being searched
        /// </summary>
        /// <value>The key of the parameter that is being searched</value>
        [DataMember(Name="queryField", EmitDefaultValue=true)]
        public string QueryField { get; set; }

        /// <summary>
        /// Multiple values for parameter that is being searched
        /// </summary>
        /// <value>Multiple values for parameter that is being searched</value>
        [DataMember(Name="queryValues", EmitDefaultValue=true)]
        public List<string> QueryValues { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class QueryMultiple {\n");
            sb.Append("  QueryField: ").Append(QueryField).Append("\n");
            sb.Append("  QueryValues: ").Append(QueryValues).Append("\n");
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
            return this.Equals(input as QueryMultiple);
        }

        /// <summary>
        /// Returns true if QueryMultiple instances are equal
        /// </summary>
        /// <param name="input">Instance of QueryMultiple to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(QueryMultiple input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.QueryField == input.QueryField ||
                    (this.QueryField != null &&
                    this.QueryField.Equals(input.QueryField))
                ) && 
                (
                    this.QueryValues == input.QueryValues ||
                    this.QueryValues != null &&
                    input.QueryValues != null &&
                    this.QueryValues.SequenceEqual(input.QueryValues)
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
                if (this.QueryField != null)
                    hashCode = hashCode * 59 + this.QueryField.GetHashCode();
                if (this.QueryValues != null)
                    hashCode = hashCode * 59 + this.QueryValues.GetHashCode();
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