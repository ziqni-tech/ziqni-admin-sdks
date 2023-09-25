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
    /// AchievementReduced
    /// </summary>
    [DataContract(Name = "AchievementReduced")]
    public partial class AchievementReduced : IEquatable<AchievementReduced>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets AchievementLiveStatus
        /// </summary>
        [DataMember(Name = "achievementLiveStatus", IsRequired = true, EmitDefaultValue = false)]
        public AchievementLiveStatus AchievementLiveStatus { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="AchievementReduced" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected AchievementReduced() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="AchievementReduced" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="spaceName">This is the space name which is linked to the account (required).</param>
        /// <param name="created">ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone (required).</param>
        /// <param name="name">A name for the Achievement. Can be translated (required).</param>
        /// <param name="achievementLiveStatus">achievementLiveStatus (required).</param>
        /// <param name="tagsId">Categorisation of the achievements.</param>
        /// <param name="dependantOn">dependantOn.</param>
        public AchievementReduced(string id = default(string), string spaceName = default(string), DateTime created = default(DateTime), string name = default(string), AchievementLiveStatus achievementLiveStatus = default(AchievementLiveStatus), List<string> tagsId = default(List<string>), List<Dependancy> dependantOn = default(List<Dependancy>))
        {
            // to ensure "id" is required (not null)
            this.Id = id ?? throw new ArgumentNullException("id is a required property for AchievementReduced and cannot be null");
            // to ensure "spaceName" is required (not null)
            this.SpaceName = spaceName ?? throw new ArgumentNullException("spaceName is a required property for AchievementReduced and cannot be null");
            this.Created = created;
            // to ensure "name" is required (not null)
            this.Name = name ?? throw new ArgumentNullException("name is a required property for AchievementReduced and cannot be null");
            this.AchievementLiveStatus = achievementLiveStatus;
            this.TagsId = tagsId;
            this.DependantOn = dependantOn;
        }

        /// <summary>
        /// A unique system generated identifier
        /// </summary>
        /// <value>A unique system generated identifier</value>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// This is the space name which is linked to the account
        /// </summary>
        /// <value>This is the space name which is linked to the account</value>
        [DataMember(Name = "spaceName", IsRequired = true, EmitDefaultValue = false)]
        public string SpaceName { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone</value>
        [DataMember(Name = "created", IsRequired = true, EmitDefaultValue = false)]
        public DateTime Created { get; set; }

        /// <summary>
        /// A name for the Achievement. Can be translated
        /// </summary>
        /// <value>A name for the Achievement. Can be translated</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Categorisation of the achievements
        /// </summary>
        /// <value>Categorisation of the achievements</value>
        [DataMember(Name = "tagsId", EmitDefaultValue = false)]
        public List<string> TagsId { get; set; }

        /// <summary>
        /// Gets or Sets DependantOn
        /// </summary>
        [DataMember(Name = "dependantOn", EmitDefaultValue = false)]
        public List<Dependancy> DependantOn { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class AchievementReduced {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SpaceName: ").Append(SpaceName).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  AchievementLiveStatus: ").Append(AchievementLiveStatus).Append("\n");
            sb.Append("  TagsId: ").Append(TagsId).Append("\n");
            sb.Append("  DependantOn: ").Append(DependantOn).Append("\n");
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
            return this.Equals(input as AchievementReduced);
        }

        /// <summary>
        /// Returns true if AchievementReduced instances are equal
        /// </summary>
        /// <param name="input">Instance of AchievementReduced to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(AchievementReduced input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.SpaceName == input.SpaceName ||
                    (this.SpaceName != null &&
                    this.SpaceName.Equals(input.SpaceName))
                ) && 
                (
                    this.Created == input.Created ||
                    (this.Created != null &&
                    this.Created.Equals(input.Created))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.AchievementLiveStatus == input.AchievementLiveStatus ||
                    this.AchievementLiveStatus.Equals(input.AchievementLiveStatus)
                ) && 
                (
                    this.TagsId == input.TagsId ||
                    this.TagsId != null &&
                    input.TagsId != null &&
                    this.TagsId.SequenceEqual(input.TagsId)
                ) && 
                (
                    this.DependantOn == input.DependantOn ||
                    this.DependantOn != null &&
                    input.DependantOn != null &&
                    this.DependantOn.SequenceEqual(input.DependantOn)
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
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.SpaceName != null)
                    hashCode = hashCode * 59 + this.SpaceName.GetHashCode();
                if (this.Created != null)
                    hashCode = hashCode * 59 + this.Created.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                hashCode = hashCode * 59 + this.AchievementLiveStatus.GetHashCode();
                if (this.TagsId != null)
                    hashCode = hashCode * 59 + this.TagsId.GetHashCode();
                if (this.DependantOn != null)
                    hashCode = hashCode * 59 + this.DependantOn.GetHashCode();
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
