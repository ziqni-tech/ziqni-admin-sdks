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
    /// QueryRequest
    /// </summary>
    [DataContract]
    public partial class QueryRequest :  IEquatable<QueryRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="QueryRequest" /> class.
        /// </summary>
        /// <param name="must">must.</param>
        /// <param name="mustNot">mustNot.</param>
        /// <param name="should">should.</param>
        /// <param name="gte">gte.</param>
        /// <param name="gt">gt.</param>
        /// <param name="lte">lte.</param>
        /// <param name="lt">lt.</param>
        /// <param name="range">range.</param>
        /// <param name="sortBy">sortBy.</param>
        /// <param name="multiFields">multiFields.</param>
        /// <param name="includeFields">includeFields.</param>
        /// <param name="hasValue">hasValue.</param>
        /// <param name="hasNoValue">hasNoValue.</param>
        /// <param name="shouldMatch">shouldMatch.</param>
        /// <param name="skip">skip.</param>
        /// <param name="limit">limit.</param>
        /// <param name="constraints">constraints.</param>
        public QueryRequest(List<QueryMultiple> must = default(List<QueryMultiple>), List<QueryMultiple> mustNot = default(List<QueryMultiple>), List<QueryMultiple> should = default(List<QueryMultiple>), List<QuerySingle> gte = default(List<QuerySingle>), List<QuerySingle> gt = default(List<QuerySingle>), List<QuerySingle> lte = default(List<QuerySingle>), List<QuerySingle> lt = default(List<QuerySingle>), List<RangeQuery> range = default(List<RangeQuery>), List<QuerySortBy> sortBy = default(List<QuerySortBy>), List<QueryMultipleFields> multiFields = default(List<QueryMultipleFields>), List<string> includeFields = default(List<string>), List<string> hasValue = default(List<string>), List<string> hasNoValue = default(List<string>), int shouldMatch = default(int), int skip = default(int), int limit = default(int), List<string> constraints = default(List<string>))
        {
            this.Must = must;
            this.MustNot = mustNot;
            this.Should = should;
            this.Gte = gte;
            this.Gt = gt;
            this.Lte = lte;
            this.Lt = lt;
            this.Range = range;
            this.SortBy = sortBy;
            this.MultiFields = multiFields;
            this.IncludeFields = includeFields;
            this.HasValue = hasValue;
            this.HasNoValue = hasNoValue;
            this.ShouldMatch = shouldMatch;
            this.Skip = skip;
            this.Limit = limit;
            this.Constraints = constraints;
        }

        /// <summary>
        /// Gets or Sets Must
        /// </summary>
        [DataMember(Name="must", EmitDefaultValue=false)]
        public List<QueryMultiple> Must { get; set; }

        /// <summary>
        /// Gets or Sets MustNot
        /// </summary>
        [DataMember(Name="mustNot", EmitDefaultValue=false)]
        public List<QueryMultiple> MustNot { get; set; }

        /// <summary>
        /// Gets or Sets Should
        /// </summary>
        [DataMember(Name="should", EmitDefaultValue=false)]
        public List<QueryMultiple> Should { get; set; }

        /// <summary>
        /// Gets or Sets Gte
        /// </summary>
        [DataMember(Name="gte", EmitDefaultValue=false)]
        public List<QuerySingle> Gte { get; set; }

        /// <summary>
        /// Gets or Sets Gt
        /// </summary>
        [DataMember(Name="gt", EmitDefaultValue=false)]
        public List<QuerySingle> Gt { get; set; }

        /// <summary>
        /// Gets or Sets Lte
        /// </summary>
        [DataMember(Name="lte", EmitDefaultValue=false)]
        public List<QuerySingle> Lte { get; set; }

        /// <summary>
        /// Gets or Sets Lt
        /// </summary>
        [DataMember(Name="lt", EmitDefaultValue=false)]
        public List<QuerySingle> Lt { get; set; }

        /// <summary>
        /// Gets or Sets Range
        /// </summary>
        [DataMember(Name="range", EmitDefaultValue=false)]
        public List<RangeQuery> Range { get; set; }

        /// <summary>
        /// Gets or Sets SortBy
        /// </summary>
        [DataMember(Name="sortBy", EmitDefaultValue=false)]
        public List<QuerySortBy> SortBy { get; set; }

        /// <summary>
        /// Gets or Sets MultiFields
        /// </summary>
        [DataMember(Name="multiFields", EmitDefaultValue=false)]
        public List<QueryMultipleFields> MultiFields { get; set; }

        /// <summary>
        /// Gets or Sets IncludeFields
        /// </summary>
        [DataMember(Name="includeFields", EmitDefaultValue=false)]
        public List<string> IncludeFields { get; set; }

        /// <summary>
        /// Gets or Sets HasValue
        /// </summary>
        [DataMember(Name="hasValue", EmitDefaultValue=false)]
        public List<string> HasValue { get; set; }

        /// <summary>
        /// Gets or Sets HasNoValue
        /// </summary>
        [DataMember(Name="hasNoValue", EmitDefaultValue=false)]
        public List<string> HasNoValue { get; set; }

        /// <summary>
        /// Gets or Sets ShouldMatch
        /// </summary>
        [DataMember(Name="shouldMatch", EmitDefaultValue=false)]
        public int ShouldMatch { get; set; }

        /// <summary>
        /// Gets or Sets Skip
        /// </summary>
        [DataMember(Name="skip", EmitDefaultValue=false)]
        public int Skip { get; set; }

        /// <summary>
        /// Gets or Sets Limit
        /// </summary>
        [DataMember(Name="limit", EmitDefaultValue=false)]
        public int Limit { get; set; }

        /// <summary>
        /// Gets or Sets Constraints
        /// </summary>
        [DataMember(Name="constraints", EmitDefaultValue=false)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class QueryRequest {\n");
            sb.Append("  Must: ").Append(Must).Append("\n");
            sb.Append("  MustNot: ").Append(MustNot).Append("\n");
            sb.Append("  Should: ").Append(Should).Append("\n");
            sb.Append("  Gte: ").Append(Gte).Append("\n");
            sb.Append("  Gt: ").Append(Gt).Append("\n");
            sb.Append("  Lte: ").Append(Lte).Append("\n");
            sb.Append("  Lt: ").Append(Lt).Append("\n");
            sb.Append("  Range: ").Append(Range).Append("\n");
            sb.Append("  SortBy: ").Append(SortBy).Append("\n");
            sb.Append("  MultiFields: ").Append(MultiFields).Append("\n");
            sb.Append("  IncludeFields: ").Append(IncludeFields).Append("\n");
            sb.Append("  HasValue: ").Append(HasValue).Append("\n");
            sb.Append("  HasNoValue: ").Append(HasNoValue).Append("\n");
            sb.Append("  ShouldMatch: ").Append(ShouldMatch).Append("\n");
            sb.Append("  Skip: ").Append(Skip).Append("\n");
            sb.Append("  Limit: ").Append(Limit).Append("\n");
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
            return this.Equals(input as QueryRequest);
        }

        /// <summary>
        /// Returns true if QueryRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of QueryRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(QueryRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Must == input.Must ||
                    this.Must != null &&
                    input.Must != null &&
                    this.Must.SequenceEqual(input.Must)
                ) && 
                (
                    this.MustNot == input.MustNot ||
                    this.MustNot != null &&
                    input.MustNot != null &&
                    this.MustNot.SequenceEqual(input.MustNot)
                ) && 
                (
                    this.Should == input.Should ||
                    this.Should != null &&
                    input.Should != null &&
                    this.Should.SequenceEqual(input.Should)
                ) && 
                (
                    this.Gte == input.Gte ||
                    this.Gte != null &&
                    input.Gte != null &&
                    this.Gte.SequenceEqual(input.Gte)
                ) && 
                (
                    this.Gt == input.Gt ||
                    this.Gt != null &&
                    input.Gt != null &&
                    this.Gt.SequenceEqual(input.Gt)
                ) && 
                (
                    this.Lte == input.Lte ||
                    this.Lte != null &&
                    input.Lte != null &&
                    this.Lte.SequenceEqual(input.Lte)
                ) && 
                (
                    this.Lt == input.Lt ||
                    this.Lt != null &&
                    input.Lt != null &&
                    this.Lt.SequenceEqual(input.Lt)
                ) && 
                (
                    this.Range == input.Range ||
                    this.Range != null &&
                    input.Range != null &&
                    this.Range.SequenceEqual(input.Range)
                ) && 
                (
                    this.SortBy == input.SortBy ||
                    this.SortBy != null &&
                    input.SortBy != null &&
                    this.SortBy.SequenceEqual(input.SortBy)
                ) && 
                (
                    this.MultiFields == input.MultiFields ||
                    this.MultiFields != null &&
                    input.MultiFields != null &&
                    this.MultiFields.SequenceEqual(input.MultiFields)
                ) && 
                (
                    this.IncludeFields == input.IncludeFields ||
                    this.IncludeFields != null &&
                    input.IncludeFields != null &&
                    this.IncludeFields.SequenceEqual(input.IncludeFields)
                ) && 
                (
                    this.HasValue == input.HasValue ||
                    this.HasValue != null &&
                    input.HasValue != null &&
                    this.HasValue.SequenceEqual(input.HasValue)
                ) && 
                (
                    this.HasNoValue == input.HasNoValue ||
                    this.HasNoValue != null &&
                    input.HasNoValue != null &&
                    this.HasNoValue.SequenceEqual(input.HasNoValue)
                ) && 
                (
                    this.ShouldMatch == input.ShouldMatch ||
                    (this.ShouldMatch != null &&
                    this.ShouldMatch.Equals(input.ShouldMatch))
                ) && 
                (
                    this.Skip == input.Skip ||
                    (this.Skip != null &&
                    this.Skip.Equals(input.Skip))
                ) && 
                (
                    this.Limit == input.Limit ||
                    (this.Limit != null &&
                    this.Limit.Equals(input.Limit))
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
                if (this.Must != null)
                    hashCode = hashCode * 59 + this.Must.GetHashCode();
                if (this.MustNot != null)
                    hashCode = hashCode * 59 + this.MustNot.GetHashCode();
                if (this.Should != null)
                    hashCode = hashCode * 59 + this.Should.GetHashCode();
                if (this.Gte != null)
                    hashCode = hashCode * 59 + this.Gte.GetHashCode();
                if (this.Gt != null)
                    hashCode = hashCode * 59 + this.Gt.GetHashCode();
                if (this.Lte != null)
                    hashCode = hashCode * 59 + this.Lte.GetHashCode();
                if (this.Lt != null)
                    hashCode = hashCode * 59 + this.Lt.GetHashCode();
                if (this.Range != null)
                    hashCode = hashCode * 59 + this.Range.GetHashCode();
                if (this.SortBy != null)
                    hashCode = hashCode * 59 + this.SortBy.GetHashCode();
                if (this.MultiFields != null)
                    hashCode = hashCode * 59 + this.MultiFields.GetHashCode();
                if (this.IncludeFields != null)
                    hashCode = hashCode * 59 + this.IncludeFields.GetHashCode();
                if (this.HasValue != null)
                    hashCode = hashCode * 59 + this.HasValue.GetHashCode();
                if (this.HasNoValue != null)
                    hashCode = hashCode * 59 + this.HasNoValue.GetHashCode();
                if (this.ShouldMatch != null)
                    hashCode = hashCode * 59 + this.ShouldMatch.GetHashCode();
                if (this.Skip != null)
                    hashCode = hashCode * 59 + this.Skip.GetHashCode();
                if (this.Limit != null)
                    hashCode = hashCode * 59 + this.Limit.GetHashCode();
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
