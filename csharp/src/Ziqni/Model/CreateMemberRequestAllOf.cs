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
    /// CreateMemberRequestAllOf
    /// </summary>
    [DataContract(Name = "CreateMemberRequest_allOf")]
    public partial class CreateMemberRequestAllOf : IEquatable<CreateMemberRequestAllOf>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets MemberType
        /// </summary>
        [DataMember(Name = "memberType", IsRequired = true, EmitDefaultValue = false)]
        public MemberType MemberType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateMemberRequestAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateMemberRequestAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateMemberRequestAllOf" /> class.
        /// </summary>
        /// <param name="name">The name of the member that is used on leader boards and public displays (required).</param>
        /// <param name="memberRefId">The reference to this member in your system (required).</param>
        /// <param name="memberType">memberType (required).</param>
        /// <param name="icon">An Icon id that has been pre uploaded to the system to display for Member.</param>
        /// <param name="teamMembers">A social group like Guilds.</param>
        /// <param name="addConstraints">Additional constraints.</param>
        /// <param name="timeZoneOffset">To what time zone teh emmber belongs to.</param>
        public CreateMemberRequestAllOf(string name = default(string), string memberRefId = default(string), MemberType memberType = default(MemberType), string icon = default(string), List<string> teamMembers = default(List<string>), List<string> addConstraints = default(List<string>), string timeZoneOffset = default(string))
        {
            // to ensure "name" is required (not null)
            this.Name = name ?? throw new ArgumentNullException("name is a required property for CreateMemberRequestAllOf and cannot be null");
            // to ensure "memberRefId" is required (not null)
            this.MemberRefId = memberRefId ?? throw new ArgumentNullException("memberRefId is a required property for CreateMemberRequestAllOf and cannot be null");
            this.MemberType = memberType;
            this.Icon = icon;
            this.TeamMembers = teamMembers;
            this.AddConstraints = addConstraints;
            this.TimeZoneOffset = timeZoneOffset;
        }

        /// <summary>
        /// The name of the member that is used on leader boards and public displays
        /// </summary>
        /// <value>The name of the member that is used on leader boards and public displays</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// The reference to this member in your system
        /// </summary>
        /// <value>The reference to this member in your system</value>
        [DataMember(Name = "memberRefId", IsRequired = true, EmitDefaultValue = false)]
        public string MemberRefId { get; set; }

        /// <summary>
        /// An Icon id that has been pre uploaded to the system to display for Member
        /// </summary>
        /// <value>An Icon id that has been pre uploaded to the system to display for Member</value>
        [DataMember(Name = "icon", EmitDefaultValue = false)]
        public string Icon { get; set; }

        /// <summary>
        /// A social group like Guilds
        /// </summary>
        /// <value>A social group like Guilds</value>
        [DataMember(Name = "teamMembers", EmitDefaultValue = false)]
        public List<string> TeamMembers { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name = "addConstraints", EmitDefaultValue = false)]
        public List<string> AddConstraints { get; set; }

        /// <summary>
        /// To what time zone teh emmber belongs to
        /// </summary>
        /// <value>To what time zone teh emmber belongs to</value>
        [DataMember(Name = "timeZoneOffset", EmitDefaultValue = false)]
        public string TimeZoneOffset { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateMemberRequestAllOf {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  MemberRefId: ").Append(MemberRefId).Append("\n");
            sb.Append("  MemberType: ").Append(MemberType).Append("\n");
            sb.Append("  Icon: ").Append(Icon).Append("\n");
            sb.Append("  TeamMembers: ").Append(TeamMembers).Append("\n");
            sb.Append("  AddConstraints: ").Append(AddConstraints).Append("\n");
            sb.Append("  TimeZoneOffset: ").Append(TimeZoneOffset).Append("\n");
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
            return this.Equals(input as CreateMemberRequestAllOf);
        }

        /// <summary>
        /// Returns true if CreateMemberRequestAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateMemberRequestAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateMemberRequestAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.MemberRefId == input.MemberRefId ||
                    (this.MemberRefId != null &&
                    this.MemberRefId.Equals(input.MemberRefId))
                ) && 
                (
                    this.MemberType == input.MemberType ||
                    this.MemberType.Equals(input.MemberType)
                ) && 
                (
                    this.Icon == input.Icon ||
                    (this.Icon != null &&
                    this.Icon.Equals(input.Icon))
                ) && 
                (
                    this.TeamMembers == input.TeamMembers ||
                    this.TeamMembers != null &&
                    input.TeamMembers != null &&
                    this.TeamMembers.SequenceEqual(input.TeamMembers)
                ) && 
                (
                    this.AddConstraints == input.AddConstraints ||
                    this.AddConstraints != null &&
                    input.AddConstraints != null &&
                    this.AddConstraints.SequenceEqual(input.AddConstraints)
                ) && 
                (
                    this.TimeZoneOffset == input.TimeZoneOffset ||
                    (this.TimeZoneOffset != null &&
                    this.TimeZoneOffset.Equals(input.TimeZoneOffset))
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.MemberRefId != null)
                    hashCode = hashCode * 59 + this.MemberRefId.GetHashCode();
                hashCode = hashCode * 59 + this.MemberType.GetHashCode();
                if (this.Icon != null)
                    hashCode = hashCode * 59 + this.Icon.GetHashCode();
                if (this.TeamMembers != null)
                    hashCode = hashCode * 59 + this.TeamMembers.GetHashCode();
                if (this.AddConstraints != null)
                    hashCode = hashCode * 59 + this.AddConstraints.GetHashCode();
                if (this.TimeZoneOffset != null)
                    hashCode = hashCode * 59 + this.TimeZoneOffset.GetHashCode();
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
