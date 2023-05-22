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
    /// UpdateContestStateRequest
    /// </summary>
    [DataContract]
    public partial class UpdateContestStateRequest :  IEquatable<UpdateContestStateRequest>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name="status", EmitDefaultValue=false)]
        public ContestStateOperations? Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateContestStateRequest" /> class.
        /// </summary>
        /// <param name="contestId">A unique identifier of a Contest.</param>
        /// <param name="status">status.</param>
        public UpdateContestStateRequest(string contestId = default(string), ContestStateOperations? status = default(ContestStateOperations?))
        {
            this.ContestId = contestId;
            this.Status = status;
        }

        /// <summary>
        /// A unique identifier of a Contest
        /// </summary>
        /// <value>A unique identifier of a Contest</value>
        [DataMember(Name="contestId", EmitDefaultValue=false)]
        public string ContestId { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateContestStateRequest {\n");
            sb.Append("  ContestId: ").Append(ContestId).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
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
            return this.Equals(input as UpdateContestStateRequest);
        }

        /// <summary>
        /// Returns true if UpdateContestStateRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateContestStateRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateContestStateRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ContestId == input.ContestId ||
                    (this.ContestId != null &&
                    this.ContestId.Equals(input.ContestId))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
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
                if (this.ContestId != null)
                    hashCode = hashCode * 59 + this.ContestId.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
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
