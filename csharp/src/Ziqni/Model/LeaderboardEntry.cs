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
    /// LeaderboardEntry
    /// </summary>
    [DataContract(Name = "LeaderboardEntry")]
    public partial class LeaderboardEntry : IEquatable<LeaderboardEntry>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LeaderboardEntry" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected LeaderboardEntry() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="LeaderboardEntry" /> class.
        /// </summary>
        /// <param name="rank">The reank of the player (required).</param>
        /// <param name="score">The members current score.</param>
        /// <param name="bestScores">The multiplier to apply to source values received for this product action helper events.</param>
        /// <param name="members">Member details.</param>
        public LeaderboardEntry(int rank = default(int), double score = default(double), List<double> bestScores = default(List<double>), List<LeaderboardMember> members = default(List<LeaderboardMember>))
        {
            this.Rank = rank;
            this.Score = score;
            this.BestScores = bestScores;
            this.Members = members;
        }

        /// <summary>
        /// The reank of the player
        /// </summary>
        /// <value>The reank of the player</value>
        [DataMember(Name = "rank", IsRequired = true, EmitDefaultValue = false)]
        public int Rank { get; set; }

        /// <summary>
        /// The members current score
        /// </summary>
        /// <value>The members current score</value>
        [DataMember(Name = "score", EmitDefaultValue = false)]
        public double Score { get; set; }

        /// <summary>
        /// The multiplier to apply to source values received for this product action helper events
        /// </summary>
        /// <value>The multiplier to apply to source values received for this product action helper events</value>
        [DataMember(Name = "bestScores", EmitDefaultValue = false)]
        public List<double> BestScores { get; set; }

        /// <summary>
        /// Member details
        /// </summary>
        /// <value>Member details</value>
        [DataMember(Name = "members", EmitDefaultValue = false)]
        public List<LeaderboardMember> Members { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class LeaderboardEntry {\n");
            sb.Append("  Rank: ").Append(Rank).Append("\n");
            sb.Append("  Score: ").Append(Score).Append("\n");
            sb.Append("  BestScores: ").Append(BestScores).Append("\n");
            sb.Append("  Members: ").Append(Members).Append("\n");
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
            return this.Equals(input as LeaderboardEntry);
        }

        /// <summary>
        /// Returns true if LeaderboardEntry instances are equal
        /// </summary>
        /// <param name="input">Instance of LeaderboardEntry to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(LeaderboardEntry input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Rank == input.Rank ||
                    this.Rank.Equals(input.Rank)
                ) && 
                (
                    this.Score == input.Score ||
                    this.Score.Equals(input.Score)
                ) && 
                (
                    this.BestScores == input.BestScores ||
                    this.BestScores != null &&
                    input.BestScores != null &&
                    this.BestScores.SequenceEqual(input.BestScores)
                ) && 
                (
                    this.Members == input.Members ||
                    this.Members != null &&
                    input.Members != null &&
                    this.Members.SequenceEqual(input.Members)
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
                hashCode = hashCode * 59 + this.Rank.GetHashCode();
                hashCode = hashCode * 59 + this.Score.GetHashCode();
                if (this.BestScores != null)
                    hashCode = hashCode * 59 + this.BestScores.GetHashCode();
                if (this.Members != null)
                    hashCode = hashCode * 59 + this.Members.GetHashCode();
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
