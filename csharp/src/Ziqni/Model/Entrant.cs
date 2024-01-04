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
    /// Entrant
    /// </summary>
    [DataContract]
    public partial class Entrant :  IEquatable<Entrant>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets EntrantAction
        /// </summary>
        [DataMember(Name="entrantAction", EmitDefaultValue=false)]
        public EntrantAction? EntrantAction { get; set; }
        /// <summary>
        /// Gets or Sets EntrantStatus
        /// </summary>
        [DataMember(Name="entrantStatus", EmitDefaultValue=true)]
        public EntrantStatus EntrantStatus { get; set; }
        /// <summary>
        /// Gets or Sets EntityType
        /// </summary>
        [DataMember(Name="entityType", EmitDefaultValue=false)]
        public EntityType? EntityType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Entrant" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Entrant() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Entrant" /> class.
        /// </summary>
        /// <param name="entrantAction">entrantAction.</param>
        /// <param name="memberId">Unique member identifier. A member has to exist in the Ziqni database (required).</param>
        /// <param name="entrantStatus">entrantStatus (required).</param>
        /// <param name="entityId">Unique identifier of the entity.</param>
        /// <param name="entityType">entityType.</param>
        public Entrant(EntrantAction? entrantAction = default(EntrantAction?), string memberId = default(string), EntrantStatus entrantStatus = default(EntrantStatus), string entityId = default(string), EntityType? entityType = default(EntityType?))
        {
            // to ensure "memberId" is required (not null)
            if (memberId == null)
            {
                throw new InvalidDataException("memberId is a required property for Entrant and cannot be null");
            }
            else
            {
                this.MemberId = memberId;
            }

            // to ensure "entrantStatus" is required (not null)
            if (entrantStatus == null)
            {
                throw new InvalidDataException("entrantStatus is a required property for Entrant and cannot be null");
            }
            else
            {
                this.EntrantStatus = entrantStatus;
            }

            this.EntrantAction = entrantAction;
            this.EntityId = entityId;
            this.EntityType = entityType;
        }


        /// <summary>
        /// Unique member identifier. A member has to exist in the Ziqni database
        /// </summary>
        /// <value>Unique member identifier. A member has to exist in the Ziqni database</value>
        [DataMember(Name="memberId", EmitDefaultValue=true)]
        public string MemberId { get; set; }


        /// <summary>
        /// Unique identifier of the entity
        /// </summary>
        /// <value>Unique identifier of the entity</value>
        [DataMember(Name="entityId", EmitDefaultValue=false)]
        public string EntityId { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Entrant {\n");
            sb.Append("  EntrantAction: ").Append(EntrantAction).Append("\n");
            sb.Append("  MemberId: ").Append(MemberId).Append("\n");
            sb.Append("  EntrantStatus: ").Append(EntrantStatus).Append("\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  EntityType: ").Append(EntityType).Append("\n");
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
            return this.Equals(input as Entrant);
        }

        /// <summary>
        /// Returns true if Entrant instances are equal
        /// </summary>
        /// <param name="input">Instance of Entrant to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Entrant input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.EntrantAction == input.EntrantAction ||
                    (this.EntrantAction != null &&
                    this.EntrantAction.Equals(input.EntrantAction))
                ) && 
                (
                    this.MemberId == input.MemberId ||
                    (this.MemberId != null &&
                    this.MemberId.Equals(input.MemberId))
                ) && 
                (
                    this.EntrantStatus == input.EntrantStatus ||
                    (this.EntrantStatus != null &&
                    this.EntrantStatus.Equals(input.EntrantStatus))
                ) && 
                (
                    this.EntityId == input.EntityId ||
                    (this.EntityId != null &&
                    this.EntityId.Equals(input.EntityId))
                ) && 
                (
                    this.EntityType == input.EntityType ||
                    (this.EntityType != null &&
                    this.EntityType.Equals(input.EntityType))
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
                if (this.EntrantAction != null)
                    hashCode = hashCode * 59 + this.EntrantAction.GetHashCode();
                if (this.MemberId != null)
                    hashCode = hashCode * 59 + this.MemberId.GetHashCode();
                if (this.EntrantStatus != null)
                    hashCode = hashCode * 59 + this.EntrantStatus.GetHashCode();
                if (this.EntityId != null)
                    hashCode = hashCode * 59 + this.EntityId.GetHashCode();
                if (this.EntityType != null)
                    hashCode = hashCode * 59 + this.EntityType.GetHashCode();
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