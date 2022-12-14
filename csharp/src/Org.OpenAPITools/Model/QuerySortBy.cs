/*
 * ZIQNI Admin API
 *
 * Ziqni Application Services are used to manage and configure spaces.
 *
 * The version of the OpenAPI document: 3.0.1
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
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// QuerySortBy
    /// </summary>
    [DataContract]
    public partial class QuerySortBy :  IEquatable<QuerySortBy>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets Order
        /// </summary>
        [DataMember(Name="order", EmitDefaultValue=true)]
        public SortOrder Order { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="QuerySortBy" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected QuerySortBy() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="QuerySortBy" /> class.
        /// </summary>
        /// <param name="queryField">The key of the parameter that is being searched (required).</param>
        /// <param name="order">order (required).</param>
        public QuerySortBy(string queryField = default(string), SortOrder order = default(SortOrder))
        {
            // to ensure "queryField" is required (not null)
            if (queryField == null)
            {
                throw new InvalidDataException("queryField is a required property for QuerySortBy and cannot be null");
            }
            else
            {
                this.QueryField = queryField;
            }

            // to ensure "order" is required (not null)
            if (order == null)
            {
                throw new InvalidDataException("order is a required property for QuerySortBy and cannot be null");
            }
            else
            {
                this.Order = order;
            }

        }

        /// <summary>
        /// The key of the parameter that is being searched
        /// </summary>
        /// <value>The key of the parameter that is being searched</value>
        [DataMember(Name="queryField", EmitDefaultValue=true)]
        public string QueryField { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class QuerySortBy {\n");
            sb.Append("  QueryField: ").Append(QueryField).Append("\n");
            sb.Append("  Order: ").Append(Order).Append("\n");
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
            return this.Equals(input as QuerySortBy);
        }

        /// <summary>
        /// Returns true if QuerySortBy instances are equal
        /// </summary>
        /// <param name="input">Instance of QuerySortBy to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(QuerySortBy input)
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
                    this.Order == input.Order ||
                    (this.Order != null &&
                    this.Order.Equals(input.Order))
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
                if (this.Order != null)
                    hashCode = hashCode * 59 + this.Order.GetHashCode();
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
