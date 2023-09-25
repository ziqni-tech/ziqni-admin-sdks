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
    /// UpdateAchievementRequest
    /// </summary>
    [DataContract(Name = "UpdateAchievementRequest")]
    public partial class UpdateAchievementRequest : IEquatable<UpdateAchievementRequest>, IValidatableObject
    {

        /// <summary>
        /// Gets or Sets AchievementLiveStatus
        /// </summary>
        [DataMember(Name = "achievementLiveStatus", EmitDefaultValue = false)]
        public AchievementLiveStatus? AchievementLiveStatus { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateAchievementRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateAchievementRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateAchievementRequest" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="customFields">A list of id&#39;s used to add cutom fields.</param>
        /// <param name="tags">A list of id&#39;s used to tag models.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="name">A name for the Achievement. Can be translated.</param>
        /// <param name="description">A name for the Achievement. Can be translated.</param>
        /// <param name="termsAndConditions">Terms and conditions of an achievement. Can be translated.</param>
        /// <param name="icon">An Icon id that has been pre uploaded to the system to display for Achievement.</param>
        /// <param name="banner">A banner id that has been pre uploaded to the system to display for Achievement.</param>
        /// <param name="bannerLowResolution">A bannerLowResolution id that has been pre uploaded to the system to display for Achievement.</param>
        /// <param name="bannerHighResolution">A bannerHighResolution id that has been pre uploaded to the system to display for Achievement.</param>
        /// <param name="scheduling">scheduling.</param>
        /// <param name="achievementLiveStatus">achievementLiveStatus.</param>
        /// <param name="maxNumberOfIssues">Maximum number of issued achievements.</param>
        /// <param name="constraints">Additional constraints.</param>
        /// <param name="achievementDependencies">achievementDependencies.</param>
        /// <param name="memberTagsFilter">memberTagsFilter.</param>
        /// <param name="productIds">productIds.</param>
        /// <param name="productTagsFilter">productTagsFilter.</param>
        /// <param name="addConstraints">addConstraints.</param>
        /// <param name="removeConstraints">removeConstraints.</param>
        /// <param name="strategies">strategies.</param>
        public UpdateAchievementRequest(string id = default(string), Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), string name = default(string), string description = default(string), string termsAndConditions = default(string), string icon = default(string), string banner = default(string), string bannerLowResolution = default(string), string bannerHighResolution = default(string), Scheduling scheduling = default(Scheduling), AchievementLiveStatus? achievementLiveStatus = default(AchievementLiveStatus?), int maxNumberOfIssues = default(int), List<string> constraints = default(List<string>), DependantOn achievementDependencies = default(DependantOn), DependantOn memberTagsFilter = default(DependantOn), List<string> productIds = default(List<string>), DependantOn productTagsFilter = default(DependantOn), List<string> addConstraints = default(List<string>), List<string> removeConstraints = default(List<string>), AchievementStrategies strategies = default(AchievementStrategies))
        {
            // to ensure "id" is required (not null)
            this.Id = id ?? throw new ArgumentNullException("id is a required property for UpdateAchievementRequest and cannot be null");
            this.CustomFields = customFields;
            this.Tags = tags;
            this.Metadata = metadata;
            this.Name = name;
            this.Description = description;
            this.TermsAndConditions = termsAndConditions;
            this.Icon = icon;
            this.Banner = banner;
            this.BannerLowResolution = bannerLowResolution;
            this.BannerHighResolution = bannerHighResolution;
            this.Scheduling = scheduling;
            this.AchievementLiveStatus = achievementLiveStatus;
            this.MaxNumberOfIssues = maxNumberOfIssues;
            this.Constraints = constraints;
            this.AchievementDependencies = achievementDependencies;
            this.MemberTagsFilter = memberTagsFilter;
            this.ProductIds = productIds;
            this.ProductTagsFilter = productTagsFilter;
            this.AddConstraints = addConstraints;
            this.RemoveConstraints = removeConstraints;
            this.Strategies = strategies;
        }

        /// <summary>
        /// A unique system generated identifier
        /// </summary>
        /// <value>A unique system generated identifier</value>
        [DataMember(Name = "id", IsRequired = true, EmitDefaultValue = false)]
        public string Id { get; set; }

        /// <summary>
        /// A list of id&#39;s used to add cutom fields
        /// </summary>
        /// <value>A list of id&#39;s used to add cutom fields</value>
        [DataMember(Name = "customFields", EmitDefaultValue = false)]
        public Dictionary<string, Object> CustomFields { get; set; }

        /// <summary>
        /// A list of id&#39;s used to tag models
        /// </summary>
        /// <value>A list of id&#39;s used to tag models</value>
        [DataMember(Name = "tags", EmitDefaultValue = false)]
        public List<string> Tags { get; set; }

        /// <summary>
        /// Gets or Sets Metadata
        /// </summary>
        [DataMember(Name = "metadata", EmitDefaultValue = false)]
        public Dictionary<string, string> Metadata { get; set; }

        /// <summary>
        /// A name for the Achievement. Can be translated
        /// </summary>
        /// <value>A name for the Achievement. Can be translated</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// A name for the Achievement. Can be translated
        /// </summary>
        /// <value>A name for the Achievement. Can be translated</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Terms and conditions of an achievement. Can be translated
        /// </summary>
        /// <value>Terms and conditions of an achievement. Can be translated</value>
        [DataMember(Name = "termsAndConditions", EmitDefaultValue = false)]
        public string TermsAndConditions { get; set; }

        /// <summary>
        /// An Icon id that has been pre uploaded to the system to display for Achievement
        /// </summary>
        /// <value>An Icon id that has been pre uploaded to the system to display for Achievement</value>
        [DataMember(Name = "icon", EmitDefaultValue = false)]
        public string Icon { get; set; }

        /// <summary>
        /// A banner id that has been pre uploaded to the system to display for Achievement
        /// </summary>
        /// <value>A banner id that has been pre uploaded to the system to display for Achievement</value>
        [DataMember(Name = "banner", EmitDefaultValue = false)]
        public string Banner { get; set; }

        /// <summary>
        /// A bannerLowResolution id that has been pre uploaded to the system to display for Achievement
        /// </summary>
        /// <value>A bannerLowResolution id that has been pre uploaded to the system to display for Achievement</value>
        [DataMember(Name = "bannerLowResolution", EmitDefaultValue = false)]
        public string BannerLowResolution { get; set; }

        /// <summary>
        /// A bannerHighResolution id that has been pre uploaded to the system to display for Achievement
        /// </summary>
        /// <value>A bannerHighResolution id that has been pre uploaded to the system to display for Achievement</value>
        [DataMember(Name = "bannerHighResolution", EmitDefaultValue = false)]
        public string BannerHighResolution { get; set; }

        /// <summary>
        /// Gets or Sets Scheduling
        /// </summary>
        [DataMember(Name = "scheduling", EmitDefaultValue = false)]
        public Scheduling Scheduling { get; set; }

        /// <summary>
        /// Maximum number of issued achievements
        /// </summary>
        /// <value>Maximum number of issued achievements</value>
        [DataMember(Name = "maxNumberOfIssues", EmitDefaultValue = false)]
        public int MaxNumberOfIssues { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name = "constraints", EmitDefaultValue = false)]
        [Obsolete]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// Gets or Sets AchievementDependencies
        /// </summary>
        [DataMember(Name = "achievementDependencies", EmitDefaultValue = false)]
        public DependantOn AchievementDependencies { get; set; }

        /// <summary>
        /// Gets or Sets MemberTagsFilter
        /// </summary>
        [DataMember(Name = "memberTagsFilter", EmitDefaultValue = false)]
        public DependantOn MemberTagsFilter { get; set; }

        /// <summary>
        /// Gets or Sets ProductIds
        /// </summary>
        [DataMember(Name = "productIds", EmitDefaultValue = false)]
        public List<string> ProductIds { get; set; }

        /// <summary>
        /// Gets or Sets ProductTagsFilter
        /// </summary>
        [DataMember(Name = "productTagsFilter", EmitDefaultValue = false)]
        public DependantOn ProductTagsFilter { get; set; }

        /// <summary>
        /// Gets or Sets AddConstraints
        /// </summary>
        [DataMember(Name = "addConstraints", EmitDefaultValue = false)]
        public List<string> AddConstraints { get; set; }

        /// <summary>
        /// Gets or Sets RemoveConstraints
        /// </summary>
        [DataMember(Name = "removeConstraints", EmitDefaultValue = false)]
        public List<string> RemoveConstraints { get; set; }

        /// <summary>
        /// Gets or Sets Strategies
        /// </summary>
        [DataMember(Name = "strategies", EmitDefaultValue = false)]
        public AchievementStrategies Strategies { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateAchievementRequest {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  TermsAndConditions: ").Append(TermsAndConditions).Append("\n");
            sb.Append("  Icon: ").Append(Icon).Append("\n");
            sb.Append("  Banner: ").Append(Banner).Append("\n");
            sb.Append("  BannerLowResolution: ").Append(BannerLowResolution).Append("\n");
            sb.Append("  BannerHighResolution: ").Append(BannerHighResolution).Append("\n");
            sb.Append("  Scheduling: ").Append(Scheduling).Append("\n");
            sb.Append("  AchievementLiveStatus: ").Append(AchievementLiveStatus).Append("\n");
            sb.Append("  MaxNumberOfIssues: ").Append(MaxNumberOfIssues).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
            sb.Append("  AchievementDependencies: ").Append(AchievementDependencies).Append("\n");
            sb.Append("  MemberTagsFilter: ").Append(MemberTagsFilter).Append("\n");
            sb.Append("  ProductIds: ").Append(ProductIds).Append("\n");
            sb.Append("  ProductTagsFilter: ").Append(ProductTagsFilter).Append("\n");
            sb.Append("  AddConstraints: ").Append(AddConstraints).Append("\n");
            sb.Append("  RemoveConstraints: ").Append(RemoveConstraints).Append("\n");
            sb.Append("  Strategies: ").Append(Strategies).Append("\n");
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
            return this.Equals(input as UpdateAchievementRequest);
        }

        /// <summary>
        /// Returns true if UpdateAchievementRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateAchievementRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateAchievementRequest input)
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
                ) && 
                (
                    this.Scheduling == input.Scheduling ||
                    (this.Scheduling != null &&
                    this.Scheduling.Equals(input.Scheduling))
                ) && 
                (
                    this.AchievementLiveStatus == input.AchievementLiveStatus ||
                    this.AchievementLiveStatus.Equals(input.AchievementLiveStatus)
                ) && 
                (
                    this.MaxNumberOfIssues == input.MaxNumberOfIssues ||
                    this.MaxNumberOfIssues.Equals(input.MaxNumberOfIssues)
                ) && 
                (
                    this.Constraints == input.Constraints ||
                    this.Constraints != null &&
                    input.Constraints != null &&
                    this.Constraints.SequenceEqual(input.Constraints)
                ) && 
                (
                    this.AchievementDependencies == input.AchievementDependencies ||
                    (this.AchievementDependencies != null &&
                    this.AchievementDependencies.Equals(input.AchievementDependencies))
                ) && 
                (
                    this.MemberTagsFilter == input.MemberTagsFilter ||
                    (this.MemberTagsFilter != null &&
                    this.MemberTagsFilter.Equals(input.MemberTagsFilter))
                ) && 
                (
                    this.ProductIds == input.ProductIds ||
                    this.ProductIds != null &&
                    input.ProductIds != null &&
                    this.ProductIds.SequenceEqual(input.ProductIds)
                ) && 
                (
                    this.ProductTagsFilter == input.ProductTagsFilter ||
                    (this.ProductTagsFilter != null &&
                    this.ProductTagsFilter.Equals(input.ProductTagsFilter))
                ) && 
                (
                    this.AddConstraints == input.AddConstraints ||
                    this.AddConstraints != null &&
                    input.AddConstraints != null &&
                    this.AddConstraints.SequenceEqual(input.AddConstraints)
                ) && 
                (
                    this.RemoveConstraints == input.RemoveConstraints ||
                    this.RemoveConstraints != null &&
                    input.RemoveConstraints != null &&
                    this.RemoveConstraints.SequenceEqual(input.RemoveConstraints)
                ) && 
                (
                    this.Strategies == input.Strategies ||
                    (this.Strategies != null &&
                    this.Strategies.Equals(input.Strategies))
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
                if (this.CustomFields != null)
                    hashCode = hashCode * 59 + this.CustomFields.GetHashCode();
                if (this.Tags != null)
                    hashCode = hashCode * 59 + this.Tags.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.TermsAndConditions != null)
                    hashCode = hashCode * 59 + this.TermsAndConditions.GetHashCode();
                if (this.Icon != null)
                    hashCode = hashCode * 59 + this.Icon.GetHashCode();
                if (this.Banner != null)
                    hashCode = hashCode * 59 + this.Banner.GetHashCode();
                if (this.BannerLowResolution != null)
                    hashCode = hashCode * 59 + this.BannerLowResolution.GetHashCode();
                if (this.BannerHighResolution != null)
                    hashCode = hashCode * 59 + this.BannerHighResolution.GetHashCode();
                if (this.Scheduling != null)
                    hashCode = hashCode * 59 + this.Scheduling.GetHashCode();
                hashCode = hashCode * 59 + this.AchievementLiveStatus.GetHashCode();
                hashCode = hashCode * 59 + this.MaxNumberOfIssues.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
                if (this.AchievementDependencies != null)
                    hashCode = hashCode * 59 + this.AchievementDependencies.GetHashCode();
                if (this.MemberTagsFilter != null)
                    hashCode = hashCode * 59 + this.MemberTagsFilter.GetHashCode();
                if (this.ProductIds != null)
                    hashCode = hashCode * 59 + this.ProductIds.GetHashCode();
                if (this.ProductTagsFilter != null)
                    hashCode = hashCode * 59 + this.ProductTagsFilter.GetHashCode();
                if (this.AddConstraints != null)
                    hashCode = hashCode * 59 + this.AddConstraints.GetHashCode();
                if (this.RemoveConstraints != null)
                    hashCode = hashCode * 59 + this.RemoveConstraints.GetHashCode();
                if (this.Strategies != null)
                    hashCode = hashCode * 59 + this.Strategies.GetHashCode();
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
