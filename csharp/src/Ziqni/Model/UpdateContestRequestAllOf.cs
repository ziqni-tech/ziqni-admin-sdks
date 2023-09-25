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
    /// UpdateContestRequestAllOf
    /// </summary>
    [DataContract(Name = "UpdateContestRequest_allOf")]
    public partial class UpdateContestRequestAllOf : IEquatable<UpdateContestRequestAllOf>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets RoundType
        /// </summary>
        [DataMember(Name = "roundType", EmitDefaultValue = false)]
        public RoundType? RoundType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateContestRequestAllOf" /> class.
        /// </summary>
        /// <param name="name">A name for the Contest. Can be translated.</param>
        /// <param name="description">A name for the Contest. Can be translated.</param>
        /// <param name="termsAndConditions">A name for the Contest. Can be translated.</param>
        /// <param name="roundType">roundType.</param>
        /// <param name="maxNumberOfEntrants">Maximum number of entrants for the contest.</param>
        /// <param name="minNumberOfEntrants">Minimum number of entrants for the contest.</param>
        /// <param name="scheduledStartDate">ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone.</param>
        /// <param name="scheduledEndDate">ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone.</param>
        /// <param name="strategies">strategies.</param>
        /// <param name="constraints">Additional constraints.</param>
        /// <param name="icon">Link to the icon.</param>
        /// <param name="banner">Link to the banner.</param>
        /// <param name="bannerLowResolution">Link to the bannerLowResolution.</param>
        /// <param name="bannerHighResolution">Link to the bannerHighResolution.</param>
        public UpdateContestRequestAllOf(string name = default(string), string description = default(string), string termsAndConditions = default(string), RoundType? roundType = default(RoundType?), int maxNumberOfEntrants = default(int), int minNumberOfEntrants = default(int), DateTime scheduledStartDate = default(DateTime), DateTime scheduledEndDate = default(DateTime), TournamentStrategies strategies = default(TournamentStrategies), List<string> constraints = default(List<string>), string icon = default(string), string banner = default(string), string bannerLowResolution = default(string), string bannerHighResolution = default(string))
        {
            this.Name = name;
            this.Description = description;
            this.TermsAndConditions = termsAndConditions;
            this.RoundType = roundType;
            this.MaxNumberOfEntrants = maxNumberOfEntrants;
            this.MinNumberOfEntrants = minNumberOfEntrants;
            this.ScheduledStartDate = scheduledStartDate;
            this.ScheduledEndDate = scheduledEndDate;
            this.Strategies = strategies;
            this.Constraints = constraints;
            this.Icon = icon;
            this.Banner = banner;
            this.BannerLowResolution = bannerLowResolution;
            this.BannerHighResolution = bannerHighResolution;
        }

        /// <summary>
        /// A name for the Contest. Can be translated
        /// </summary>
        /// <value>A name for the Contest. Can be translated</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// A name for the Contest. Can be translated
        /// </summary>
        /// <value>A name for the Contest. Can be translated</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// A name for the Contest. Can be translated
        /// </summary>
        /// <value>A name for the Contest. Can be translated</value>
        [DataMember(Name = "termsAndConditions", EmitDefaultValue = false)]
        public string TermsAndConditions { get; set; }

        /// <summary>
        /// Maximum number of entrants for the contest
        /// </summary>
        /// <value>Maximum number of entrants for the contest</value>
        [DataMember(Name = "maxNumberOfEntrants", EmitDefaultValue = false)]
        public int MaxNumberOfEntrants { get; set; }

        /// <summary>
        /// Minimum number of entrants for the contest
        /// </summary>
        /// <value>Minimum number of entrants for the contest</value>
        [DataMember(Name = "minNumberOfEntrants", EmitDefaultValue = false)]
        public int MinNumberOfEntrants { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone</value>
        [DataMember(Name = "scheduledStartDate", EmitDefaultValue = false)]
        public DateTime ScheduledStartDate { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone</value>
        [DataMember(Name = "scheduledEndDate", EmitDefaultValue = false)]
        public DateTime ScheduledEndDate { get; set; }

        /// <summary>
        /// Gets or Sets Strategies
        /// </summary>
        [DataMember(Name = "strategies", EmitDefaultValue = false)]
        public TournamentStrategies Strategies { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name = "constraints", EmitDefaultValue = false)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// Link to the icon
        /// </summary>
        /// <value>Link to the icon</value>
        [DataMember(Name = "icon", EmitDefaultValue = false)]
        public string Icon { get; set; }

        /// <summary>
        /// Link to the banner
        /// </summary>
        /// <value>Link to the banner</value>
        [DataMember(Name = "banner", EmitDefaultValue = false)]
        public string Banner { get; set; }

        /// <summary>
        /// Link to the bannerLowResolution
        /// </summary>
        /// <value>Link to the bannerLowResolution</value>
        [DataMember(Name = "bannerLowResolution", EmitDefaultValue = false)]
        public string BannerLowResolution { get; set; }

        /// <summary>
        /// Link to the bannerHighResolution
        /// </summary>
        /// <value>Link to the bannerHighResolution</value>
        [DataMember(Name = "bannerHighResolution", EmitDefaultValue = false)]
        public string BannerHighResolution { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateContestRequestAllOf {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  TermsAndConditions: ").Append(TermsAndConditions).Append("\n");
            sb.Append("  RoundType: ").Append(RoundType).Append("\n");
            sb.Append("  MaxNumberOfEntrants: ").Append(MaxNumberOfEntrants).Append("\n");
            sb.Append("  MinNumberOfEntrants: ").Append(MinNumberOfEntrants).Append("\n");
            sb.Append("  ScheduledStartDate: ").Append(ScheduledStartDate).Append("\n");
            sb.Append("  ScheduledEndDate: ").Append(ScheduledEndDate).Append("\n");
            sb.Append("  Strategies: ").Append(Strategies).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
            sb.Append("  Icon: ").Append(Icon).Append("\n");
            sb.Append("  Banner: ").Append(Banner).Append("\n");
            sb.Append("  BannerLowResolution: ").Append(BannerLowResolution).Append("\n");
            sb.Append("  BannerHighResolution: ").Append(BannerHighResolution).Append("\n");
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
            return this.Equals(input as UpdateContestRequestAllOf);
        }

        /// <summary>
        /// Returns true if UpdateContestRequestAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateContestRequestAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateContestRequestAllOf input)
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
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.TermsAndConditions == input.TermsAndConditions ||
                    (this.TermsAndConditions != null &&
                    this.TermsAndConditions.Equals(input.TermsAndConditions))
                ) && 
                (
                    this.RoundType == input.RoundType ||
                    this.RoundType.Equals(input.RoundType)
                ) && 
                (
                    this.MaxNumberOfEntrants == input.MaxNumberOfEntrants ||
                    this.MaxNumberOfEntrants.Equals(input.MaxNumberOfEntrants)
                ) && 
                (
                    this.MinNumberOfEntrants == input.MinNumberOfEntrants ||
                    this.MinNumberOfEntrants.Equals(input.MinNumberOfEntrants)
                ) && 
                (
                    this.ScheduledStartDate == input.ScheduledStartDate ||
                    (this.ScheduledStartDate != null &&
                    this.ScheduledStartDate.Equals(input.ScheduledStartDate))
                ) && 
                (
                    this.ScheduledEndDate == input.ScheduledEndDate ||
                    (this.ScheduledEndDate != null &&
                    this.ScheduledEndDate.Equals(input.ScheduledEndDate))
                ) && 
                (
                    this.Strategies == input.Strategies ||
                    (this.Strategies != null &&
                    this.Strategies.Equals(input.Strategies))
                ) && 
                (
                    this.Constraints == input.Constraints ||
                    this.Constraints != null &&
                    input.Constraints != null &&
                    this.Constraints.SequenceEqual(input.Constraints)
                ) && 
                (
                    this.Icon == input.Icon ||
                    (this.Icon != null &&
                    this.Icon.Equals(input.Icon))
                ) && 
                (
                    this.Banner == input.Banner ||
                    (this.Banner != null &&
                    this.Banner.Equals(input.Banner))
                ) && 
                (
                    this.BannerLowResolution == input.BannerLowResolution ||
                    (this.BannerLowResolution != null &&
                    this.BannerLowResolution.Equals(input.BannerLowResolution))
                ) && 
                (
                    this.BannerHighResolution == input.BannerHighResolution ||
                    (this.BannerHighResolution != null &&
                    this.BannerHighResolution.Equals(input.BannerHighResolution))
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
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.TermsAndConditions != null)
                    hashCode = hashCode * 59 + this.TermsAndConditions.GetHashCode();
                hashCode = hashCode * 59 + this.RoundType.GetHashCode();
                hashCode = hashCode * 59 + this.MaxNumberOfEntrants.GetHashCode();
                hashCode = hashCode * 59 + this.MinNumberOfEntrants.GetHashCode();
                if (this.ScheduledStartDate != null)
                    hashCode = hashCode * 59 + this.ScheduledStartDate.GetHashCode();
                if (this.ScheduledEndDate != null)
                    hashCode = hashCode * 59 + this.ScheduledEndDate.GetHashCode();
                if (this.Strategies != null)
                    hashCode = hashCode * 59 + this.Strategies.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
                if (this.Icon != null)
                    hashCode = hashCode * 59 + this.Icon.GetHashCode();
                if (this.Banner != null)
                    hashCode = hashCode * 59 + this.Banner.GetHashCode();
                if (this.BannerLowResolution != null)
                    hashCode = hashCode * 59 + this.BannerLowResolution.GetHashCode();
                if (this.BannerHighResolution != null)
                    hashCode = hashCode * 59 + this.BannerHighResolution.GetHashCode();
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
