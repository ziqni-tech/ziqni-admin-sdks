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
    /// Award
    /// </summary>
    [DataContract]
    public partial class Award :  IEquatable<Award>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets EntityType
        /// </summary>
        [DataMember(Name="entityType", EmitDefaultValue=true)]
        public EntityType EntityType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Award" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Award() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Award" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="spaceName">This is the space name which is linked to the account (required).</param>
        /// <param name="created">ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone (required).</param>
        /// <param name="memberId">A unique identifier of a Member (required).</param>
        /// <param name="rewardId">A unique identifier of a Reward (required).</param>
        /// <param name="rewardType">rewardType (required).</param>
        /// <param name="rewardRank">If used in the context of contest this will associate with the rank of the leaderboard (required).</param>
        /// <param name="rewardValue">Numerical value of the reward that will be issued based on the reward type (required).</param>
        /// <param name="delay">Delay of issuing a reward in minutes.</param>
        /// <param name="entityType">entityType (required).</param>
        /// <param name="entityId">The Id of the contest or achievement related to this Award. Dependant on entityType (required).</param>
        /// <param name="pointInTime">ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot;.</param>
        /// <param name="period">Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot;.</param>
        /// <param name="tags">A list of Strings of groups that the reward belongs to..</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="constraints">Additional constraints, if the value is present it means the (required).</param>
        /// <param name="claimedTimestamp">ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. *.</param>
        public Award(string id = default(string), string spaceName = default(string), DateTime created = default(DateTime), string memberId = default(string), string rewardId = default(string), RewardTypeReduced rewardType = default(RewardTypeReduced), string rewardRank = default(string), double rewardValue = default(double), int delay = default(int), EntityType entityType = default(EntityType), string entityId = default(string), DateTime pointInTime = default(DateTime), int period = default(int), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), List<string> constraints = default(List<string>), DateTime claimedTimestamp = default(DateTime))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new InvalidDataException("id is a required property for Award and cannot be null");
            }
            else
            {
                this.Id = id;
            }

            // to ensure "spaceName" is required (not null)
            if (spaceName == null)
            {
                throw new InvalidDataException("spaceName is a required property for Award and cannot be null");
            }
            else
            {
                this.SpaceName = spaceName;
            }

            // to ensure "created" is required (not null)
            if (created == null)
            {
                throw new InvalidDataException("created is a required property for Award and cannot be null");
            }
            else
            {
                this.Created = created;
            }

            // to ensure "memberId" is required (not null)
            if (memberId == null)
            {
                throw new InvalidDataException("memberId is a required property for Award and cannot be null");
            }
            else
            {
                this.MemberId = memberId;
            }

            // to ensure "rewardId" is required (not null)
            if (rewardId == null)
            {
                throw new InvalidDataException("rewardId is a required property for Award and cannot be null");
            }
            else
            {
                this.RewardId = rewardId;
            }

            // to ensure "rewardType" is required (not null)
            if (rewardType == null)
            {
                throw new InvalidDataException("rewardType is a required property for Award and cannot be null");
            }
            else
            {
                this.RewardType = rewardType;
            }

            // to ensure "rewardRank" is required (not null)
            if (rewardRank == null)
            {
                throw new InvalidDataException("rewardRank is a required property for Award and cannot be null");
            }
            else
            {
                this.RewardRank = rewardRank;
            }

            // to ensure "rewardValue" is required (not null)
            if (rewardValue == null)
            {
                throw new InvalidDataException("rewardValue is a required property for Award and cannot be null");
            }
            else
            {
                this.RewardValue = rewardValue;
            }

            // to ensure "entityType" is required (not null)
            if (entityType == null)
            {
                throw new InvalidDataException("entityType is a required property for Award and cannot be null");
            }
            else
            {
                this.EntityType = entityType;
            }

            // to ensure "entityId" is required (not null)
            if (entityId == null)
            {
                throw new InvalidDataException("entityId is a required property for Award and cannot be null");
            }
            else
            {
                this.EntityId = entityId;
            }

            // to ensure "constraints" is required (not null)
            if (constraints == null)
            {
                throw new InvalidDataException("constraints is a required property for Award and cannot be null");
            }
            else
            {
                this.Constraints = constraints;
            }

            this.Delay = delay;
            this.PointInTime = pointInTime;
            this.Period = period;
            this.Tags = tags;
            this.Metadata = metadata;
            this.ClaimedTimestamp = claimedTimestamp;
        }

        /// <summary>
        /// A unique system generated identifier
        /// </summary>
        /// <value>A unique system generated identifier</value>
        [DataMember(Name="id", EmitDefaultValue=true)]
        public string Id { get; set; }

        /// <summary>
        /// This is the space name which is linked to the account
        /// </summary>
        /// <value>This is the space name which is linked to the account</value>
        [DataMember(Name="spaceName", EmitDefaultValue=true)]
        public string SpaceName { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone</value>
        [DataMember(Name="created", EmitDefaultValue=true)]
        public DateTime Created { get; set; }

        /// <summary>
        /// A unique identifier of a Member
        /// </summary>
        /// <value>A unique identifier of a Member</value>
        [DataMember(Name="memberId", EmitDefaultValue=true)]
        public string MemberId { get; set; }

        /// <summary>
        /// A unique identifier of a Reward
        /// </summary>
        /// <value>A unique identifier of a Reward</value>
        [DataMember(Name="rewardId", EmitDefaultValue=true)]
        public string RewardId { get; set; }

        /// <summary>
        /// Gets or Sets RewardType
        /// </summary>
        [DataMember(Name="rewardType", EmitDefaultValue=true)]
        public RewardTypeReduced RewardType { get; set; }

        /// <summary>
        /// If used in the context of contest this will associate with the rank of the leaderboard
        /// </summary>
        /// <value>If used in the context of contest this will associate with the rank of the leaderboard</value>
        [DataMember(Name="rewardRank", EmitDefaultValue=true)]
        public string RewardRank { get; set; }

        /// <summary>
        /// Numerical value of the reward that will be issued based on the reward type
        /// </summary>
        /// <value>Numerical value of the reward that will be issued based on the reward type</value>
        [DataMember(Name="rewardValue", EmitDefaultValue=true)]
        public double RewardValue { get; set; }

        /// <summary>
        /// Delay of issuing a reward in minutes
        /// </summary>
        /// <value>Delay of issuing a reward in minutes</value>
        [DataMember(Name="delay", EmitDefaultValue=false)]
        public int Delay { get; set; }


        /// <summary>
        /// The Id of the contest or achievement related to this Award. Dependant on entityType
        /// </summary>
        /// <value>The Id of the contest or achievement related to this Award. Dependant on entityType</value>
        [DataMember(Name="entityId", EmitDefaultValue=true)]
        public string EntityId { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot;
        /// </summary>
        /// <value>ISO8601 timestamp for when an Award is available until a specific point in time. All records are stored in UTC time zone. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot;</value>
        [DataMember(Name="pointInTime", EmitDefaultValue=false)]
        public DateTime PointInTime { get; set; }

        /// <summary>
        /// Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot;
        /// </summary>
        /// <value>Claimable duration in minutes, this value will set the controls until when the award is claimable. * There can only be one time definition used for claim period either \&quot;pointInTime\&quot; or \&quot;period\&quot;</value>
        [DataMember(Name="period", EmitDefaultValue=false)]
        public int Period { get; set; }

        /// <summary>
        /// A list of Strings of groups that the reward belongs to.
        /// </summary>
        /// <value>A list of Strings of groups that the reward belongs to.</value>
        [DataMember(Name="tags", EmitDefaultValue=false)]
        public List<string> Tags { get; set; }

        /// <summary>
        /// Gets or Sets Metadata
        /// </summary>
        [DataMember(Name="metadata", EmitDefaultValue=false)]
        public Dictionary<string, string> Metadata { get; set; }

        /// <summary>
        /// Additional constraints, if the value is present it means the
        /// </summary>
        /// <value>Additional constraints, if the value is present it means the</value>
        [DataMember(Name="constraints", EmitDefaultValue=true)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. *
        /// </summary>
        /// <value>ISO8601 timestamp for when an Award is claimed. All records are stored in UTC time zone. *</value>
        [DataMember(Name="claimedTimestamp", EmitDefaultValue=false)]
        public DateTime ClaimedTimestamp { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Award {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SpaceName: ").Append(SpaceName).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  MemberId: ").Append(MemberId).Append("\n");
            sb.Append("  RewardId: ").Append(RewardId).Append("\n");
            sb.Append("  RewardType: ").Append(RewardType).Append("\n");
            sb.Append("  RewardRank: ").Append(RewardRank).Append("\n");
            sb.Append("  RewardValue: ").Append(RewardValue).Append("\n");
            sb.Append("  Delay: ").Append(Delay).Append("\n");
            sb.Append("  EntityType: ").Append(EntityType).Append("\n");
            sb.Append("  EntityId: ").Append(EntityId).Append("\n");
            sb.Append("  PointInTime: ").Append(PointInTime).Append("\n");
            sb.Append("  Period: ").Append(Period).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
            sb.Append("  ClaimedTimestamp: ").Append(ClaimedTimestamp).Append("\n");
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
            return this.Equals(input as Award);
        }

        /// <summary>
        /// Returns true if Award instances are equal
        /// </summary>
        /// <param name="input">Instance of Award to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Award input)
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
                    this.MemberId == input.MemberId ||
                    (this.MemberId != null &&
                    this.MemberId.Equals(input.MemberId))
                ) && 
                (
                    this.RewardId == input.RewardId ||
                    (this.RewardId != null &&
                    this.RewardId.Equals(input.RewardId))
                ) && 
                (
                    this.RewardType == input.RewardType ||
                    (this.RewardType != null &&
                    this.RewardType.Equals(input.RewardType))
                ) && 
                (
                    this.RewardRank == input.RewardRank ||
                    (this.RewardRank != null &&
                    this.RewardRank.Equals(input.RewardRank))
                ) && 
                (
                    this.RewardValue == input.RewardValue ||
                    (this.RewardValue != null &&
                    this.RewardValue.Equals(input.RewardValue))
                ) && 
                (
                    this.Delay == input.Delay ||
                    (this.Delay != null &&
                    this.Delay.Equals(input.Delay))
                ) && 
                (
                    this.EntityType == input.EntityType ||
                    (this.EntityType != null &&
                    this.EntityType.Equals(input.EntityType))
                ) && 
                (
                    this.EntityId == input.EntityId ||
                    (this.EntityId != null &&
                    this.EntityId.Equals(input.EntityId))
                ) && 
                (
                    this.PointInTime == input.PointInTime ||
                    (this.PointInTime != null &&
                    this.PointInTime.Equals(input.PointInTime))
                ) && 
                (
                    this.Period == input.Period ||
                    (this.Period != null &&
                    this.Period.Equals(input.Period))
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
                    this.Constraints == input.Constraints ||
                    this.Constraints != null &&
                    input.Constraints != null &&
                    this.Constraints.SequenceEqual(input.Constraints)
                ) && 
                (
                    this.ClaimedTimestamp == input.ClaimedTimestamp ||
                    (this.ClaimedTimestamp != null &&
                    this.ClaimedTimestamp.Equals(input.ClaimedTimestamp))
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
                if (this.MemberId != null)
                    hashCode = hashCode * 59 + this.MemberId.GetHashCode();
                if (this.RewardId != null)
                    hashCode = hashCode * 59 + this.RewardId.GetHashCode();
                if (this.RewardType != null)
                    hashCode = hashCode * 59 + this.RewardType.GetHashCode();
                if (this.RewardRank != null)
                    hashCode = hashCode * 59 + this.RewardRank.GetHashCode();
                if (this.RewardValue != null)
                    hashCode = hashCode * 59 + this.RewardValue.GetHashCode();
                if (this.Delay != null)
                    hashCode = hashCode * 59 + this.Delay.GetHashCode();
                if (this.EntityType != null)
                    hashCode = hashCode * 59 + this.EntityType.GetHashCode();
                if (this.EntityId != null)
                    hashCode = hashCode * 59 + this.EntityId.GetHashCode();
                if (this.PointInTime != null)
                    hashCode = hashCode * 59 + this.PointInTime.GetHashCode();
                if (this.Period != null)
                    hashCode = hashCode * 59 + this.Period.GetHashCode();
                if (this.Tags != null)
                    hashCode = hashCode * 59 + this.Tags.GetHashCode();
                if (this.Metadata != null)
                    hashCode = hashCode * 59 + this.Metadata.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
                if (this.ClaimedTimestamp != null)
                    hashCode = hashCode * 59 + this.ClaimedTimestamp.GetHashCode();
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
