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
    /// AchievementReducedAllOf
    /// </summary>
    [DataContract(Name = "AchievementReduced_allOf")]
    public partial class AchievementReducedAllOf : IEquatable<AchievementReducedAllOf>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets AchievementLiveStatus
        /// </summary>
        [DataMember(Name = "achievementLiveStatus", IsRequired = true, EmitDefaultValue = false)]
        public AchievementLiveStatus AchievementLiveStatus { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="AchievementReducedAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected AchievementReducedAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="AchievementReducedAllOf" /> class.
        /// </summary>
        /// <param name="name">A name for the Achievement. Can be translated (required).</param>
        /// <param name="achievementLiveStatus">achievementLiveStatus (required).</param>
        /// <param name="tagsId">Categorisation of the achievements.</param>
        /// <param name="dependantOn">dependantOn.</param>
        public AchievementReducedAllOf(string name = default(string), AchievementLiveStatus achievementLiveStatus = default(AchievementLiveStatus), List<string> tagsId = default(List<string>), List<Dependancy> dependantOn = default(List<Dependancy>))
        {
            // to ensure "name" is required (not null)
            this.Name = name ?? throw new ArgumentNullException("name is a required property for AchievementReducedAllOf and cannot be null");
            this.AchievementLiveStatus = achievementLiveStatus;
            this.TagsId = tagsId;
            this.DependantOn = dependantOn;
        }

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
            sb.Append("class AchievementReducedAllOf {\n");
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
            return this.Equals(input as AchievementReducedAllOf);
        }

        /// <summary>
        /// Returns true if AchievementReducedAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of AchievementReducedAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(AchievementReducedAllOf input)
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
