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
    /// EntrantRequest
    /// </summary>
    [DataContract]
    public partial class EntrantRequest :  IEquatable<EntrantRequest>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets EntrantStatus
        /// </summary>
        [DataMember(Name="entrantStatus", EmitDefaultValue=true)]
        public EntrantStatus EntrantStatus { get; set; }
        /// <summary>
        /// Gets or Sets EntrantAction
        /// </summary>
        [DataMember(Name="entrantAction", EmitDefaultValue=true)]
        public EntrantAction EntrantAction { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="EntrantRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected EntrantRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="EntrantRequest" /> class.
        /// </summary>
        /// <param name="memberId">Unique member identifier. A member has to exist in the Ziqni database.</param>
        /// <param name="entityId">Unique competition identifier (required).</param>
        /// <param name="entrantStatus">entrantStatus (required).</param>
        /// <param name="entrantAction">entrantAction (required).</param>
        public EntrantRequest(string memberId = default(string), string entityId = default(string), EntrantStatus entrantStatus = default(EntrantStatus), EntrantAction entrantAction = default(EntrantAction))
        {
            // to ensure "entityId" is required (not null)
            if (entityId == null)
            {
                throw new InvalidDataException("entityId is a required property for EntrantRequest and cannot be null");
            }
            else
            {
                this.EntityId = entityId;
            }

            // to ensure "entrantStatus" is required (not null)
            if (entrantStatus == null)
            {
                throw new InvalidDataException("entrantStatus is a required property for EntrantRequest and cannot be null");
            }
            else
            {
                this.EntrantStatus = entrantStatus;
            }

            // to ensure "entrantAction" is required (not null)
            if (entrantAction == null)
            {
                throw new InvalidDataException("entrantAction is a required property for EntrantRequest and cannot be null");
            }
            else
            {
                this.EntrantAction = entrantAction;
            }

            this.MemberId = memberId;
        }

        /// <summary>
        /// Unique member identifier. A member has to exist in the Ziqni database
        /// </summary>
        /// <value>Unique member identifier. A member has to exist in the Ziqni database</value>
        [DataMember(Name="memberId", EmitDefaultValue=false)]
        public string MemberId { get; set; }

        /// <summary>
        /// Unique competition identifier
        /// </summary>
        /// <value>Unique competition identifier</value>
        [DataMember(Name="entityId", EmitDefaultValue=true)]
        public string EntityId { get; set; }



        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EntrantRequest {\n");
            sb.Append("  MemberId: ").Append(MemberId).Append("\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  EntrantStatus: ").Append(EntrantStatus).Append("\n");
            sb.Append("  EntrantAction: ").Append(EntrantAction).Append("\n");
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
            return this.Equals(input as EntrantRequest);
        }

        /// <summary>
        /// Returns true if EntrantRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of EntrantRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EntrantRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.MemberId == input.MemberId ||
                    (this.MemberId != null &&
                    this.MemberId.Equals(input.MemberId))
                ) && 
                (
                    this.EntityId == input.EntityId ||
                    (this.EntityId != null &&
                    this.EntityId.Equals(input.EntityId))
                ) && 
                (
                    this.EntrantStatus == input.EntrantStatus ||
                    (this.EntrantStatus != null &&
                    this.EntrantStatus.Equals(input.EntrantStatus))
                ) && 
                (
                    this.EntrantAction == input.EntrantAction ||
                    (this.EntrantAction != null &&
                    this.EntrantAction.Equals(input.EntrantAction))
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
                if (this.MemberId != null)
                    hashCode = hashCode * 59 + this.MemberId.GetHashCode();
                if (this.EntityId != null)
                    hashCode = hashCode * 59 + this.EntityId.GetHashCode();
                if (this.EntrantStatus != null)
                    hashCode = hashCode * 59 + this.EntrantStatus.GetHashCode();
                if (this.EntrantAction != null)
                    hashCode = hashCode * 59 + this.EntrantAction.GetHashCode();
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
