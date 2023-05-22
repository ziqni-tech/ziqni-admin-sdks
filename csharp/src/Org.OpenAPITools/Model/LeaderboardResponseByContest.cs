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
    /// LeaderboardResponseByContest
    /// </summary>
    [DataContract]
    public partial class LeaderboardResponseByContest :  IEquatable<LeaderboardResponseByContest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="LeaderboardResponseByContest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected LeaderboardResponseByContest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="LeaderboardResponseByContest" /> class.
        /// </summary>
        /// <param name="contestId">The id of the contest (required).</param>
        /// <param name="name">A name for the Contest. Can be translated (required).</param>
        /// <param name="round">To what round does the contest belong (required).</param>
        /// <param name="leaderboard">leaderboard.</param>
        public LeaderboardResponseByContest(string contestId = default(string), string name = default(string), int round = default(int), List<Leaderboard> leaderboard = default(List<Leaderboard>))
        {
            // to ensure "contestId" is required (not null)
            if (contestId == null)
            {
                throw new InvalidDataException("contestId is a required property for LeaderboardResponseByContest and cannot be null");
            }
            else
            {
                this.ContestId = contestId;
            }

            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for LeaderboardResponseByContest and cannot be null");
            }
            else
            {
                this.Name = name;
            }

            // to ensure "round" is required (not null)
            if (round == null)
            {
                throw new InvalidDataException("round is a required property for LeaderboardResponseByContest and cannot be null");
            }
            else
            {
                this.Round = round;
            }

            this.Leaderboard = leaderboard;
        }

        /// <summary>
        /// The id of the contest
        /// </summary>
        /// <value>The id of the contest</value>
        [DataMember(Name="contestId", EmitDefaultValue=true)]
        public string ContestId { get; set; }

        /// <summary>
        /// A name for the Contest. Can be translated
        /// </summary>
        /// <value>A name for the Contest. Can be translated</value>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// To what round does the contest belong
        /// </summary>
        /// <value>To what round does the contest belong</value>
        [DataMember(Name="round", EmitDefaultValue=true)]
        public int Round { get; set; }

        /// <summary>
        /// Gets or Sets Leaderboard
        /// </summary>
        [DataMember(Name="leaderboard", EmitDefaultValue=false)]
        public List<Leaderboard> Leaderboard { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class LeaderboardResponseByContest {\n");
            sb.Append("  ContestId: ").Append(ContestId).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Round: ").Append(Round).Append("\n");
            sb.Append("  Leaderboard: ").Append(Leaderboard).Append("\n");
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
            return this.Equals(input as LeaderboardResponseByContest);
        }

        /// <summary>
        /// Returns true if LeaderboardResponseByContest instances are equal
        /// </summary>
        /// <param name="input">Instance of LeaderboardResponseByContest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(LeaderboardResponseByContest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ContestId == input.ContestId ||
                    (this.ContestId != null &&
                    this.ContestId.Equals(input.ContestId))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Round == input.Round ||
                    (this.Round != null &&
                    this.Round.Equals(input.Round))
                ) && 
                (
                    this.Leaderboard == input.Leaderboard ||
                    this.Leaderboard != null &&
                    input.Leaderboard != null &&
                    this.Leaderboard.SequenceEqual(input.Leaderboard)
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
                if (this.ContestId != null)
                    hashCode = hashCode * 59 + this.ContestId.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Round != null)
                    hashCode = hashCode * 59 + this.Round.GetHashCode();
                if (this.Leaderboard != null)
                    hashCode = hashCode * 59 + this.Leaderboard.GetHashCode();
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
