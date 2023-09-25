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
    /// CreateSimpleCompetitionRequestAllOf
    /// </summary>
    [DataContract(Name = "CreateSimpleCompetitionRequest_allOf")]
    public partial class CreateSimpleCompetitionRequestAllOf : IEquatable<CreateSimpleCompetitionRequestAllOf>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets CompetitionType
        /// </summary>
        [DataMember(Name = "competitionType", IsRequired = true, EmitDefaultValue = false)]
        public CompetitionType CompetitionType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateSimpleCompetitionRequestAllOf" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateSimpleCompetitionRequestAllOf() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateSimpleCompetitionRequestAllOf" /> class.
        /// </summary>
        /// <param name="competitionType">competitionType (required).</param>
        /// <param name="name">A name or a name of a competition. Can be translated (required).</param>
        /// <param name="description">Description of the competition. Can be translated.</param>
        /// <param name="termsAndConditions">Terms and conditions of a competition. Can be translated.</param>
        /// <param name="entrantMemberType">entrantMemberType.</param>
        /// <param name="maxNumberOfEntrants">Maximum number of partiipants allowed in a competition.</param>
        /// <param name="minNumberOfEntrants">Maximum number of partiipants allowed in a competition (required).</param>
        /// <param name="rules">rules.</param>
        /// <param name="scheduledStartDate">ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone (required).</param>
        /// <param name="scheduledEndDate">ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone (required).</param>
        /// <param name="translations">translations.</param>
        /// <param name="rewards">rewards.</param>
        /// <param name="addConstraints">Additional constraints.</param>
        /// <param name="productIds">productIds (required).</param>
        /// <param name="entrantMemberTagsFilter">entrantMemberTagsFilter.</param>
        /// <param name="productTagsFilter">productTagsFilter.</param>
        /// <param name="strategies">strategies.</param>
        /// <param name="icon">Link to the icon.</param>
        /// <param name="banner">Link to the banner.</param>
        /// <param name="bannerLowResolution">Link to the bannerLowResolution.</param>
        /// <param name="bannerHighResolution">Link to the bannerHighResolution.</param>
        public CreateSimpleCompetitionRequestAllOf(CompetitionType competitionType = default(CompetitionType), string name = default(string), string description = default(string), string termsAndConditions = default(string), string entrantMemberType = default(string), int maxNumberOfEntrants = default(int), int minNumberOfEntrants = default(int), List<Rule> rules = default(List<Rule>), DateTime scheduledStartDate = default(DateTime), DateTime scheduledEndDate = default(DateTime), List<Translation> translations = default(List<Translation>), List<CreateRewardRequest> rewards = default(List<CreateRewardRequest>), List<string> addConstraints = default(List<string>), List<string> productIds = default(List<string>), DependantOn entrantMemberTagsFilter = default(DependantOn), DependantOn productTagsFilter = default(DependantOn), TournamentStrategies strategies = default(TournamentStrategies), string icon = default(string), string banner = default(string), string bannerLowResolution = default(string), string bannerHighResolution = default(string))
        {
            this.CompetitionType = competitionType;
            // to ensure "name" is required (not null)
            this.Name = name ?? throw new ArgumentNullException("name is a required property for CreateSimpleCompetitionRequestAllOf and cannot be null");
            this.MinNumberOfEntrants = minNumberOfEntrants;
            this.ScheduledStartDate = scheduledStartDate;
            this.ScheduledEndDate = scheduledEndDate;
            // to ensure "productIds" is required (not null)
            this.ProductIds = productIds ?? throw new ArgumentNullException("productIds is a required property for CreateSimpleCompetitionRequestAllOf and cannot be null");
            this.Description = description;
            this.TermsAndConditions = termsAndConditions;
            this.EntrantMemberType = entrantMemberType;
            this.MaxNumberOfEntrants = maxNumberOfEntrants;
            this.Rules = rules;
            this.Translations = translations;
            this.Rewards = rewards;
            this.AddConstraints = addConstraints;
            this.EntrantMemberTagsFilter = entrantMemberTagsFilter;
            this.ProductTagsFilter = productTagsFilter;
            this.Strategies = strategies;
            this.Icon = icon;
            this.Banner = banner;
            this.BannerLowResolution = bannerLowResolution;
            this.BannerHighResolution = bannerHighResolution;
        }

        /// <summary>
        /// A name or a name of a competition. Can be translated
        /// </summary>
        /// <value>A name or a name of a competition. Can be translated</value>
        [DataMember(Name = "name", IsRequired = true, EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Description of the competition. Can be translated
        /// </summary>
        /// <value>Description of the competition. Can be translated</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Terms and conditions of a competition. Can be translated
        /// </summary>
        /// <value>Terms and conditions of a competition. Can be translated</value>
        [DataMember(Name = "termsAndConditions", EmitDefaultValue = false)]
        public string TermsAndConditions { get; set; }

        /// <summary>
        /// Gets or Sets EntrantMemberType
        /// </summary>
        [DataMember(Name = "entrantMemberType", EmitDefaultValue = false)]
        public string EntrantMemberType { get; set; }

        /// <summary>
        /// Maximum number of partiipants allowed in a competition
        /// </summary>
        /// <value>Maximum number of partiipants allowed in a competition</value>
        [DataMember(Name = "maxNumberOfEntrants", EmitDefaultValue = false)]
        public int MaxNumberOfEntrants { get; set; }

        /// <summary>
        /// Maximum number of partiipants allowed in a competition
        /// </summary>
        /// <value>Maximum number of partiipants allowed in a competition</value>
        [DataMember(Name = "minNumberOfEntrants", IsRequired = true, EmitDefaultValue = false)]
        public int MinNumberOfEntrants { get; set; }

        /// <summary>
        /// Gets or Sets Rules
        /// </summary>
        [DataMember(Name = "rules", EmitDefaultValue = false)]
        public List<Rule> Rules { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone</value>
        [DataMember(Name = "scheduledStartDate", IsRequired = true, EmitDefaultValue = false)]
        public DateTime ScheduledStartDate { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone</value>
        [DataMember(Name = "scheduledEndDate", IsRequired = true, EmitDefaultValue = false)]
        public DateTime ScheduledEndDate { get; set; }

        /// <summary>
        /// Gets or Sets Translations
        /// </summary>
        [DataMember(Name = "translations", EmitDefaultValue = false)]
        public List<Translation> Translations { get; set; }

        /// <summary>
        /// Gets or Sets Rewards
        /// </summary>
        [DataMember(Name = "rewards", EmitDefaultValue = false)]
        public List<CreateRewardRequest> Rewards { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name = "addConstraints", EmitDefaultValue = false)]
        public List<string> AddConstraints { get; set; }

        /// <summary>
        /// Gets or Sets ProductIds
        /// </summary>
        [DataMember(Name = "productIds", IsRequired = true, EmitDefaultValue = false)]
        public List<string> ProductIds { get; set; }

        /// <summary>
        /// Gets or Sets EntrantMemberTagsFilter
        /// </summary>
        [DataMember(Name = "entrantMemberTagsFilter", EmitDefaultValue = false)]
        public DependantOn EntrantMemberTagsFilter { get; set; }

        /// <summary>
        /// Gets or Sets ProductTagsFilter
        /// </summary>
        [DataMember(Name = "productTagsFilter", EmitDefaultValue = false)]
        public DependantOn ProductTagsFilter { get; set; }

        /// <summary>
        /// Gets or Sets Strategies
        /// </summary>
        [DataMember(Name = "strategies", EmitDefaultValue = false)]
        public TournamentStrategies Strategies { get; set; }

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
            sb.Append("class CreateSimpleCompetitionRequestAllOf {\n");
            sb.Append("  CompetitionType: ").Append(CompetitionType).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  TermsAndConditions: ").Append(TermsAndConditions).Append("\n");
            sb.Append("  EntrantMemberType: ").Append(EntrantMemberType).Append("\n");
            sb.Append("  MaxNumberOfEntrants: ").Append(MaxNumberOfEntrants).Append("\n");
            sb.Append("  MinNumberOfEntrants: ").Append(MinNumberOfEntrants).Append("\n");
            sb.Append("  Rules: ").Append(Rules).Append("\n");
            sb.Append("  ScheduledStartDate: ").Append(ScheduledStartDate).Append("\n");
            sb.Append("  ScheduledEndDate: ").Append(ScheduledEndDate).Append("\n");
            sb.Append("  Translations: ").Append(Translations).Append("\n");
            sb.Append("  Rewards: ").Append(Rewards).Append("\n");
            sb.Append("  AddConstraints: ").Append(AddConstraints).Append("\n");
            sb.Append("  ProductIds: ").Append(ProductIds).Append("\n");
            sb.Append("  EntrantMemberTagsFilter: ").Append(EntrantMemberTagsFilter).Append("\n");
            sb.Append("  ProductTagsFilter: ").Append(ProductTagsFilter).Append("\n");
            sb.Append("  Strategies: ").Append(Strategies).Append("\n");
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
            return this.Equals(input as CreateSimpleCompetitionRequestAllOf);
        }

        /// <summary>
        /// Returns true if CreateSimpleCompetitionRequestAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateSimpleCompetitionRequestAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateSimpleCompetitionRequestAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CompetitionType == input.CompetitionType ||
                    this.CompetitionType.Equals(input.CompetitionType)
                ) && 
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
                    this.EntrantMemberType == input.EntrantMemberType ||
                    (this.EntrantMemberType != null &&
                    this.EntrantMemberType.Equals(input.EntrantMemberType))
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
                    this.Rules == input.Rules ||
                    this.Rules != null &&
                    input.Rules != null &&
                    this.Rules.SequenceEqual(input.Rules)
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
                    this.Translations == input.Translations ||
                    this.Translations != null &&
                    input.Translations != null &&
                    this.Translations.SequenceEqual(input.Translations)
                ) && 
                (
                    this.Rewards == input.Rewards ||
                    this.Rewards != null &&
                    input.Rewards != null &&
                    this.Rewards.SequenceEqual(input.Rewards)
                ) && 
                (
                    this.AddConstraints == input.AddConstraints ||
                    this.AddConstraints != null &&
                    input.AddConstraints != null &&
                    this.AddConstraints.SequenceEqual(input.AddConstraints)
                ) && 
                (
                    this.ProductIds == input.ProductIds ||
                    this.ProductIds != null &&
                    input.ProductIds != null &&
                    this.ProductIds.SequenceEqual(input.ProductIds)
                ) && 
                (
                    this.EntrantMemberTagsFilter == input.EntrantMemberTagsFilter ||
                    (this.EntrantMemberTagsFilter != null &&
                    this.EntrantMemberTagsFilter.Equals(input.EntrantMemberTagsFilter))
                ) && 
                (
                    this.ProductTagsFilter == input.ProductTagsFilter ||
                    (this.ProductTagsFilter != null &&
                    this.ProductTagsFilter.Equals(input.ProductTagsFilter))
                ) && 
                (
                    this.Strategies == input.Strategies ||
                    (this.Strategies != null &&
                    this.Strategies.Equals(input.Strategies))
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
                hashCode = hashCode * 59 + this.CompetitionType.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.TermsAndConditions != null)
                    hashCode = hashCode * 59 + this.TermsAndConditions.GetHashCode();
                if (this.EntrantMemberType != null)
                    hashCode = hashCode * 59 + this.EntrantMemberType.GetHashCode();
                hashCode = hashCode * 59 + this.MaxNumberOfEntrants.GetHashCode();
                hashCode = hashCode * 59 + this.MinNumberOfEntrants.GetHashCode();
                if (this.Rules != null)
                    hashCode = hashCode * 59 + this.Rules.GetHashCode();
                if (this.ScheduledStartDate != null)
                    hashCode = hashCode * 59 + this.ScheduledStartDate.GetHashCode();
                if (this.ScheduledEndDate != null)
                    hashCode = hashCode * 59 + this.ScheduledEndDate.GetHashCode();
                if (this.Translations != null)
                    hashCode = hashCode * 59 + this.Translations.GetHashCode();
                if (this.Rewards != null)
                    hashCode = hashCode * 59 + this.Rewards.GetHashCode();
                if (this.AddConstraints != null)
                    hashCode = hashCode * 59 + this.AddConstraints.GetHashCode();
                if (this.ProductIds != null)
                    hashCode = hashCode * 59 + this.ProductIds.GetHashCode();
                if (this.EntrantMemberTagsFilter != null)
                    hashCode = hashCode * 59 + this.EntrantMemberTagsFilter.GetHashCode();
                if (this.ProductTagsFilter != null)
                    hashCode = hashCode * 59 + this.ProductTagsFilter.GetHashCode();
                if (this.Strategies != null)
                    hashCode = hashCode * 59 + this.Strategies.GetHashCode();
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
