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
    /// UpdateRewardRequest
    /// </summary>
    [DataContract(Name = "UpdateRewardRequest")]
    public partial class UpdateRewardRequest : IEquatable<UpdateRewardRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateRewardRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected UpdateRewardRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateRewardRequest" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="customFields">A list of id&#39;s used to add cutom fields.</param>
        /// <param name="tags">A list of id&#39;s used to tag models.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="name">The name of a reward.</param>
        /// <param name="description">The description of a Reward.</param>
        /// <param name="rewardRank">If used in the context of contest this will associate with the rank of the leaderboard.</param>
        /// <param name="rewardValue">Numerical value of the reward that will be issued based on the reward type.</param>
        /// <param name="rewardTypeId">A unique id of the Reward Type.</param>
        /// <param name="icon">An Icon id that has been pre uploaded to the system to display for reward.</param>
        /// <param name="issueLimit">how many of thsese rewards are.</param>
        /// <param name="delay">Delay of issuing a reward in minutes.</param>
        /// <param name="pointInTime">ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone.</param>
        /// <param name="period">Reward available for a period of time from issuing in minutes.</param>
        /// <param name="addConstraints">Additional constraints.</param>
        /// <param name="removeConstraints">Remove constraints.</param>
        public UpdateRewardRequest(string id = default(string), Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), string name = default(string), string description = default(string), string rewardRank = default(string), double rewardValue = default(double), string rewardTypeId = default(string), string icon = default(string), int issueLimit = default(int), int delay = default(int), DateTime pointInTime = default(DateTime), int period = default(int), List<string> addConstraints = default(List<string>), List<string> removeConstraints = default(List<string>))
        {
            // to ensure "id" is required (not null)
            this.Id = id ?? throw new ArgumentNullException("id is a required property for UpdateRewardRequest and cannot be null");
            this.CustomFields = customFields;
            this.Tags = tags;
            this.Metadata = metadata;
            this.Name = name;
            this.Description = description;
            this.RewardRank = rewardRank;
            this.RewardValue = rewardValue;
            this.RewardTypeId = rewardTypeId;
            this.Icon = icon;
            this.IssueLimit = issueLimit;
            this.Delay = delay;
            this.PointInTime = pointInTime;
            this.Period = period;
            this.AddConstraints = addConstraints;
            this.RemoveConstraints = removeConstraints;
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
        /// The name of a reward
        /// </summary>
        /// <value>The name of a reward</value>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// The description of a Reward
        /// </summary>
        /// <value>The description of a Reward</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// If used in the context of contest this will associate with the rank of the leaderboard
        /// </summary>
        /// <value>If used in the context of contest this will associate with the rank of the leaderboard</value>
        [DataMember(Name = "rewardRank", EmitDefaultValue = false)]
        public string RewardRank { get; set; }

        /// <summary>
        /// Numerical value of the reward that will be issued based on the reward type
        /// </summary>
        /// <value>Numerical value of the reward that will be issued based on the reward type</value>
        [DataMember(Name = "rewardValue", EmitDefaultValue = false)]
        public double RewardValue { get; set; }

        /// <summary>
        /// A unique id of the Reward Type
        /// </summary>
        /// <value>A unique id of the Reward Type</value>
        [DataMember(Name = "rewardTypeId", EmitDefaultValue = false)]
        public string RewardTypeId { get; set; }

        /// <summary>
        /// An Icon id that has been pre uploaded to the system to display for reward
        /// </summary>
        /// <value>An Icon id that has been pre uploaded to the system to display for reward</value>
        [DataMember(Name = "icon", EmitDefaultValue = false)]
        public string Icon { get; set; }

        /// <summary>
        /// how many of thsese rewards are
        /// </summary>
        /// <value>how many of thsese rewards are</value>
        [DataMember(Name = "issueLimit", EmitDefaultValue = false)]
        public int IssueLimit { get; set; }

        /// <summary>
        /// Delay of issuing a reward in minutes
        /// </summary>
        /// <value>Delay of issuing a reward in minutes</value>
        [DataMember(Name = "delay", EmitDefaultValue = false)]
        public int Delay { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Reward is available until a specific point in time. All records are stored in UTC time zone</value>
        [DataMember(Name = "pointInTime", EmitDefaultValue = false)]
        public DateTime PointInTime { get; set; }

        /// <summary>
        /// Reward available for a period of time from issuing in minutes
        /// </summary>
        /// <value>Reward available for a period of time from issuing in minutes</value>
        [DataMember(Name = "period", EmitDefaultValue = false)]
        public int Period { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name = "addConstraints", EmitDefaultValue = false)]
        public List<string> AddConstraints { get; set; }

        /// <summary>
        /// Remove constraints
        /// </summary>
        /// <value>Remove constraints</value>
        [DataMember(Name = "removeConstraints", EmitDefaultValue = false)]
        public List<string> RemoveConstraints { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateRewardRequest {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  RewardRank: ").Append(RewardRank).Append("\n");
            sb.Append("  RewardValue: ").Append(RewardValue).Append("\n");
            sb.Append("  RewardTypeId: ").Append(RewardTypeId).Append("\n");
            sb.Append("  Icon: ").Append(Icon).Append("\n");
            sb.Append("  IssueLimit: ").Append(IssueLimit).Append("\n");
            sb.Append("  Delay: ").Append(Delay).Append("\n");
            sb.Append("  PointInTime: ").Append(PointInTime).Append("\n");
            sb.Append("  Period: ").Append(Period).Append("\n");
            sb.Append("  AddConstraints: ").Append(AddConstraints).Append("\n");
            sb.Append("  RemoveConstraints: ").Append(RemoveConstraints).Append("\n");
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
            return this.Equals(input as UpdateRewardRequest);
        }

        /// <summary>
        /// Returns true if UpdateRewardRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateRewardRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateRewardRequest input)
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
                    this.RewardRank == input.RewardRank ||
                    (this.RewardRank != null &&
                    this.RewardRank.Equals(input.RewardRank))
                ) && 
                (
                    this.RewardValue == input.RewardValue ||
                    this.RewardValue.Equals(input.RewardValue)
                ) && 
                (
                    this.RewardTypeId == input.RewardTypeId ||
                    (this.RewardTypeId != null &&
                    this.RewardTypeId.Equals(input.RewardTypeId))
                ) && 
                (
                    this.Icon == input.Icon ||
                    (this.Icon != null &&
                    this.Icon.Equals(input.Icon))
                ) && 
                (
                    this.IssueLimit == input.IssueLimit ||
                    this.IssueLimit.Equals(input.IssueLimit)
                ) && 
                (
                    this.Delay == input.Delay ||
                    this.Delay.Equals(input.Delay)
                ) && 
                (
                    this.PointInTime == input.PointInTime ||
                    (this.PointInTime != null &&
                    this.PointInTime.Equals(input.PointInTime))
                ) && 
                (
                    this.Period == input.Period ||
                    this.Period.Equals(input.Period)
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
                if (this.RewardRank != null)
                    hashCode = hashCode * 59 + this.RewardRank.GetHashCode();
                hashCode = hashCode * 59 + this.RewardValue.GetHashCode();
                if (this.RewardTypeId != null)
                    hashCode = hashCode * 59 + this.RewardTypeId.GetHashCode();
                if (this.Icon != null)
                    hashCode = hashCode * 59 + this.Icon.GetHashCode();
                hashCode = hashCode * 59 + this.IssueLimit.GetHashCode();
                hashCode = hashCode * 59 + this.Delay.GetHashCode();
                if (this.PointInTime != null)
                    hashCode = hashCode * 59 + this.PointInTime.GetHashCode();
                hashCode = hashCode * 59 + this.Period.GetHashCode();
                if (this.AddConstraints != null)
                    hashCode = hashCode * 59 + this.AddConstraints.GetHashCode();
                if (this.RemoveConstraints != null)
                    hashCode = hashCode * 59 + this.RemoveConstraints.GetHashCode();
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
