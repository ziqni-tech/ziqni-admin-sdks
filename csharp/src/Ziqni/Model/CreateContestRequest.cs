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
    /// CreateContestRequest
    /// </summary>
    [DataContract]
    public partial class CreateContestRequest :  IEquatable<CreateContestRequest>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets RoundType
        /// </summary>
        [DataMember(Name="roundType", EmitDefaultValue=true)]
        public RoundType RoundType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateContestRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateContestRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateContestRequest" /> class.
        /// </summary>
        /// <param name="customFields">A list of custom field entries.</param>
        /// <param name="tags">A list of id&#39;s used to tag models.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="row">The row number for displaying the Contest in a table.</param>
        /// <param name="round">To what round does the contest belong.</param>
        /// <param name="entrantsFromContest">A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional..</param>
        /// <param name="name">A name for the Contest. Can be translated (required).</param>
        /// <param name="description">A name for the Contest. Can be translated.</param>
        /// <param name="termsAndConditions">A name for the Contest. Can be translated.</param>
        /// <param name="roundType">roundType (required).</param>
        /// <param name="maxNumberOfEntrants">Maximum number of entrants for the contest.</param>
        /// <param name="minNumberOfEntrants">Minimum number of entrants for the contest (required).</param>
        /// <param name="rules">rules.</param>
        /// <param name="scheduledStartDate">ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone (required).</param>
        /// <param name="scheduledEndDate">ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone (required).</param>
        /// <param name="strategies">strategies (required).</param>
        /// <param name="constraints">Additional constraints (required).</param>
        /// <param name="addConstraints">Additional constraints.</param>
        /// <param name="translations">translations.</param>
        /// <param name="rewards">rewards.</param>
        /// <param name="icon">Link to the icon.</param>
        /// <param name="banner">Link to the banner.</param>
        /// <param name="bannerLowResolution">Link to the bannerLowResolution.</param>
        /// <param name="bannerHighResolution">Link to the bannerHighResolution.</param>
        public CreateContestRequest(Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), int row = default(int), int round = default(int), List<string> entrantsFromContest = default(List<string>), string name = default(string), string description = default(string), string termsAndConditions = default(string), RoundType roundType = default(RoundType), int maxNumberOfEntrants = default(int), int minNumberOfEntrants = default(int), List<Rule> rules = default(List<Rule>), DateTime scheduledStartDate = default(DateTime), DateTime scheduledEndDate = default(DateTime), TournamentStrategies strategies = default(TournamentStrategies), List<string> constraints = default(List<string>), List<string> addConstraints = default(List<string>), List<Translation> translations = default(List<Translation>), List<CreateRewardRequest> rewards = default(List<CreateRewardRequest>), string icon = default(string), string banner = default(string), string bannerLowResolution = default(string), string bannerHighResolution = default(string))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for CreateContestRequest and cannot be null");
            }
            else
            {
                this.Name = name;
            }

            // to ensure "roundType" is required (not null)
            if (roundType == null)
            {
                throw new InvalidDataException("roundType is a required property for CreateContestRequest and cannot be null");
            }
            else
            {
                this.RoundType = roundType;
            }

            // to ensure "minNumberOfEntrants" is required (not null)
            if (minNumberOfEntrants == null)
            {
                throw new InvalidDataException("minNumberOfEntrants is a required property for CreateContestRequest and cannot be null");
            }
            else
            {
                this.MinNumberOfEntrants = minNumberOfEntrants;
            }

            // to ensure "scheduledStartDate" is required (not null)
            if (scheduledStartDate == null)
            {
                throw new InvalidDataException("scheduledStartDate is a required property for CreateContestRequest and cannot be null");
            }
            else
            {
                this.ScheduledStartDate = scheduledStartDate;
            }

            // to ensure "scheduledEndDate" is required (not null)
            if (scheduledEndDate == null)
            {
                throw new InvalidDataException("scheduledEndDate is a required property for CreateContestRequest and cannot be null");
            }
            else
            {
                this.ScheduledEndDate = scheduledEndDate;
            }

            // to ensure "strategies" is required (not null)
            if (strategies == null)
            {
                throw new InvalidDataException("strategies is a required property for CreateContestRequest and cannot be null");
            }
            else
            {
                this.Strategies = strategies;
            }

            // to ensure "constraints" is required (not null)
            if (constraints == null)
            {
                throw new InvalidDataException("constraints is a required property for CreateContestRequest and cannot be null");
            }
            else
            {
                this.Constraints = constraints;
            }

            this.CustomFields = customFields;
            this.Tags = tags;
            this.Metadata = metadata;
            this.Row = row;
            this.Round = round;
            this.EntrantsFromContest = entrantsFromContest;
            this.Description = description;
            this.TermsAndConditions = termsAndConditions;
            this.MaxNumberOfEntrants = maxNumberOfEntrants;
            this.Rules = rules;
            this.AddConstraints = addConstraints;
            this.Translations = translations;
            this.Rewards = rewards;
            this.Icon = icon;
            this.Banner = banner;
            this.BannerLowResolution = bannerLowResolution;
            this.BannerHighResolution = bannerHighResolution;
        }

        /// <summary>
        /// A list of custom field entries
        /// </summary>
        /// <value>A list of custom field entries</value>
        [DataMember(Name="customFields", EmitDefaultValue=false)]
        public Dictionary<string, Object> CustomFields { get; set; }

        /// <summary>
        /// A list of id&#39;s used to tag models
        /// </summary>
        /// <value>A list of id&#39;s used to tag models</value>
        [DataMember(Name="tags", EmitDefaultValue=false)]
        public List<string> Tags { get; set; }

        /// <summary>
        /// Gets or Sets Metadata
        /// </summary>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public Dictionary<string, string> Metadata { get; set; }

        /// <summary>
        /// The row number for displaying the Contest in a table
        /// </summary>
        /// <value>The row number for displaying the Contest in a table</value>
        [DataMember(Name="row", EmitDefaultValue=false)]
        public int Row { get; set; }

        /// <summary>
        /// To what round does the contest belong
        /// </summary>
        /// <value>To what round does the contest belong</value>
        [DataMember(Name="round", EmitDefaultValue=false)]
        public int Round { get; set; }

        /// <summary>
        /// A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.
        /// </summary>
        /// <value>A list of Ziqni contest identifiers to allow contests chaining. When a Progression competition is active and you have a 2 round competition the first round has to reference the second round then this parameter becomes mandatory instead of Optional.</value>
        [DataMember(Name="entrantsFromContest", EmitDefaultValue=false)]
        public List<string> EntrantsFromContest { get; set; }

        /// <summary>
        /// A name for the Contest. Can be translated
        /// </summary>
        /// <value>A name for the Contest. Can be translated</value>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// A name for the Contest. Can be translated
        /// </summary>
        /// <value>A name for the Contest. Can be translated</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// A name for the Contest. Can be translated
        /// </summary>
        /// <value>A name for the Contest. Can be translated</value>
        [DataMember(Name="termsAndConditions", EmitDefaultValue=false)]
        public string TermsAndConditions { get; set; }


        /// <summary>
        /// Maximum number of entrants for the contest
        /// </summary>
        /// <value>Maximum number of entrants for the contest</value>
        [DataMember(Name="maxNumberOfEntrants", EmitDefaultValue=false)]
        public int MaxNumberOfEntrants { get; set; }

        /// <summary>
        /// Minimum number of entrants for the contest
        /// </summary>
        /// <value>Minimum number of entrants for the contest</value>
        [DataMember(Name="minNumberOfEntrants", EmitDefaultValue=true)]
        public int MinNumberOfEntrants { get; set; }

        /// <summary>
        /// Gets or Sets Rules
        /// </summary>
        [DataMember(Name="rules", EmitDefaultValue=false)]
        public List<Rule> Rules { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Contest should start. All records are stored in UTC time zone</value>
        [DataMember(Name="scheduledStartDate", EmitDefaultValue=true)]
        public DateTime ScheduledStartDate { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Contest should end. All records are stored in UTC time zone</value>
        [DataMember(Name="scheduledEndDate", EmitDefaultValue=true)]
        public DateTime ScheduledEndDate { get; set; }

        /// <summary>
        /// Gets or Sets Strategies
        /// </summary>
        [DataMember(Name="strategies", EmitDefaultValue=true)]
        public TournamentStrategies Strategies { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name="constraints", EmitDefaultValue=true)]
        [Obsolete]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name="addConstraints", EmitDefaultValue=false)]
        public List<string> AddConstraints { get; set; }

        /// <summary>
        /// Gets or Sets Translations
        /// </summary>
        [DataMember(Name="translations", EmitDefaultValue=false)]
        public List<Translation> Translations { get; set; }

        /// <summary>
        /// Gets or Sets Rewards
        /// </summary>
        [DataMember(Name="rewards", EmitDefaultValue=false)]
        public List<CreateRewardRequest> Rewards { get; set; }

        /// <summary>
        /// Link to the icon
        /// </summary>
        /// <value>Link to the icon</value>
        [DataMember(Name="icon", EmitDefaultValue=false)]
        public string Icon { get; set; }

        /// <summary>
        /// Link to the banner
        /// </summary>
        /// <value>Link to the banner</value>
        [DataMember(Name="banner", EmitDefaultValue=false)]
        public string Banner { get; set; }

        /// <summary>
        /// Link to the bannerLowResolution
        /// </summary>
        /// <value>Link to the bannerLowResolution</value>
        [DataMember(Name="bannerLowResolution", EmitDefaultValue=false)]
        public string BannerLowResolution { get; set; }

        /// <summary>
        /// Link to the bannerHighResolution
        /// </summary>
        /// <value>Link to the bannerHighResolution</value>
        [DataMember(Name="bannerHighResolution", EmitDefaultValue=false)]
        public string BannerHighResolution { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateContestRequest {\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Row: ").Append(Row).Append("\n");
            sb.Append("  Round: ").Append(Round).Append("\n");
            sb.Append("  EntrantsFromContest: ").Append(EntrantsFromContest).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  TermsAndConditions: ").Append(TermsAndConditions).Append("\n");
            sb.Append("  RoundType: ").Append(RoundType).Append("\n");
            sb.Append("  MaxNumberOfEntrants: ").Append(MaxNumberOfEntrants).Append("\n");
            sb.Append("  MinNumberOfEntrants: ").Append(MinNumberOfEntrants).Append("\n");
            sb.Append("  Rules: ").Append(Rules).Append("\n");
            sb.Append("  ScheduledStartDate: ").Append(ScheduledStartDate).Append("\n");
            sb.Append("  ScheduledEndDate: ").Append(ScheduledEndDate).Append("\n");
            sb.Append("  Strategies: ").Append(Strategies).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
            sb.Append("  AddConstraints: ").Append(AddConstraints).Append("\n");
            sb.Append("  Translations: ").Append(Translations).Append("\n");
            sb.Append("  Rewards: ").Append(Rewards).Append("\n");
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
            return this.Equals(input as CreateContestRequest);
        }

        /// <summary>
        /// Returns true if CreateContestRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateContestRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateContestRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.CustomFields == input.CustomFields ||
                    this.CustomFields != null &&
                    input.CustomFields != null &&
                    this.CustomFields.SequenceEqual(input.CustomFields)
                ) && 
                (
                    this.Tags == input.Tags ||
                    this.Tags != null &&
                    input.Tags != null &&
                    this.Tags.SequenceEqual(input.Tags)
                ) && 
                (
                    this.Metadata == input.Metadata ||
                    this.Metadata != null &&
                    input.Metadata != null &&
                    this.Metadata.SequenceEqual(input.Metadata)
                ) && 
                (
                    this.Row == input.Row ||
                    (this.Row != null &&
                    this.Row.Equals(input.Row))
                ) && 
                (
                    this.Round == input.Round ||
                    (this.Round != null &&
                    this.Round.Equals(input.Round))
                ) && 
                (
                    this.EntrantsFromContest == input.EntrantsFromContest ||
                    this.EntrantsFromContest != null &&
                    input.EntrantsFromContest != null &&
                    this.EntrantsFromContest.SequenceEqual(input.EntrantsFromContest)
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
                    this.RoundType == input.RoundType ||
                    (this.RoundType != null &&
                    this.RoundType.Equals(input.RoundType))
                ) && 
                (
                    this.MaxNumberOfEntrants == input.MaxNumberOfEntrants ||
                    (this.MaxNumberOfEntrants != null &&
                    this.MaxNumberOfEntrants.Equals(input.MaxNumberOfEntrants))
                ) && 
                (
                    this.MinNumberOfEntrants == input.MinNumberOfEntrants ||
                    (this.MinNumberOfEntrants != null &&
                    this.MinNumberOfEntrants.Equals(input.MinNumberOfEntrants))
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
                    this.AddConstraints == input.AddConstraints ||
                    this.AddConstraints != null &&
                    input.AddConstraints != null &&
                    this.AddConstraints.SequenceEqual(input.AddConstraints)
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
                if (this.CustomFields != null)
                    hashCode = hashCode * 59 + this.CustomFields.GetHashCode();
                if (this.Tags != null)
                    hashCode = hashCode * 59 + this.Tags.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.Row != null)
                    hashCode = hashCode * 59 + this.Row.GetHashCode();
                if (this.Round != null)
                    hashCode = hashCode * 59 + this.Round.GetHashCode();
                if (this.EntrantsFromContest != null)
                    hashCode = hashCode * 59 + this.EntrantsFromContest.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.TermsAndConditions != null)
                    hashCode = hashCode * 59 + this.TermsAndConditions.GetHashCode();
                if (this.RoundType != null)
                    hashCode = hashCode * 59 + this.RoundType.GetHashCode();
                if (this.MaxNumberOfEntrants != null)
                    hashCode = hashCode * 59 + this.MaxNumberOfEntrants.GetHashCode();
                if (this.MinNumberOfEntrants != null)
                    hashCode = hashCode * 59 + this.MinNumberOfEntrants.GetHashCode();
                if (this.Rules != null)
                    hashCode = hashCode * 59 + this.Rules.GetHashCode();
                if (this.ScheduledStartDate != null)
                    hashCode = hashCode * 59 + this.ScheduledStartDate.GetHashCode();
                if (this.ScheduledEndDate != null)
                    hashCode = hashCode * 59 + this.ScheduledEndDate.GetHashCode();
                if (this.Strategies != null)
                    hashCode = hashCode * 59 + this.Strategies.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
                if (this.AddConstraints != null)
                    hashCode = hashCode * 59 + this.AddConstraints.GetHashCode();
                if (this.Translations != null)
                    hashCode = hashCode * 59 + this.Translations.GetHashCode();
                if (this.Rewards != null)
                    hashCode = hashCode * 59 + this.Rewards.GetHashCode();
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
