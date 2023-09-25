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
    /// EntrantCountResponse
    /// </summary>
    [DataContract(Name = "EntrantCountResponse")]
    public partial class EntrantCountResponse : IEquatable<EntrantCountResponse>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EntrantCountResponse" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected EntrantCountResponse() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="EntrantCountResponse" /> class.
        /// </summary>
        /// <param name="errors">errors.</param>
        /// <param name="numberOfRecords">numberOfRecords (required).</param>
        /// <param name="downloadUrl">downloadUrl (required).</param>
        public EntrantCountResponse(List<Error> errors = default(List<Error>), int numberOfRecords = default(int), string downloadUrl = default(string))
        {
            this.NumberOfRecords = numberOfRecords;
            // to ensure "downloadUrl" is required (not null)
            this.DownloadUrl = downloadUrl ?? throw new ArgumentNullException("downloadUrl is a required property for EntrantCountResponse and cannot be null");
            this.Errors = errors;
        }

        /// <summary>
        /// Gets or Sets Errors
        /// </summary>
        [DataMember(Name = "errors", EmitDefaultValue = false)]
        public List<Error> Errors { get; set; }

        /// <summary>
        /// Gets or Sets NumberOfRecords
        /// </summary>
        [DataMember(Name = "numberOfRecords", IsRequired = true, EmitDefaultValue = false)]
        public int NumberOfRecords { get; set; }

        /// <summary>
        /// Gets or Sets DownloadUrl
        /// </summary>
        [DataMember(Name = "downloadUrl", IsRequired = true, EmitDefaultValue = false)]
        public string DownloadUrl { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EntrantCountResponse {\n");
            sb.Append("  Errors: ").Append(Errors).Append("\n");
            sb.Append("  NumberOfRecords: ").Append(NumberOfRecords).Append("\n");
            sb.Append("  DownloadUrl: ").Append(DownloadUrl).Append("\n");
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
            return this.Equals(input as EntrantCountResponse);
        }

        /// <summary>
        /// Returns true if EntrantCountResponse instances are equal
        /// </summary>
        /// <param name="input">Instance of EntrantCountResponse to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EntrantCountResponse input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Errors == input.Errors ||
                    this.Errors != null &&
                    input.Errors != null &&
                    this.Errors.SequenceEqual(input.Errors)
                ) && 
                (
                    this.NumberOfRecords == input.NumberOfRecords ||
                    this.NumberOfRecords.Equals(input.NumberOfRecords)
                ) && 
                (
                    this.DownloadUrl == input.DownloadUrl ||
                    (this.DownloadUrl != null &&
                    this.DownloadUrl.Equals(input.DownloadUrl))
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
                if (this.Errors != null)
                    hashCode = hashCode * 59 + this.Errors.GetHashCode();
                hashCode = hashCode * 59 + this.NumberOfRecords.GetHashCode();
                if (this.DownloadUrl != null)
                    hashCode = hashCode * 59 + this.DownloadUrl.GetHashCode();
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
