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
    /// Leaderboard
    /// </summary>
    [DataContract(Name = "Leaderboard")]
    public partial class Leaderboard : IEquatable<Leaderboard>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Leaderboard" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Leaderboard() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Leaderboard" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="spaceName">This is the space name which is linked to the account (required).</param>
        /// <param name="created">ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone (required).</param>
        /// <param name="leaderboardEntries">leaderboardEntries.</param>
        /// <param name="constraints">Additional constraints (required).</param>
        /// <param name="sequence">how many changes were made to teh leaderboard.</param>
        public Leaderboard(string id = default(string), string spaceName = default(string), DateTime created = default(DateTime), List<LeaderboardEntry> leaderboardEntries = default(List<LeaderboardEntry>), List<string> constraints = default(List<string>), int sequence = default(int))
        {
            // to ensure "id" is required (not null)
            this.Id = id ?? throw new ArgumentNullException("id is a required property for Leaderboard and cannot be null");
            // to ensure "spaceName" is required (not null)
            this.SpaceName = spaceName ?? throw new ArgumentNullException("spaceName is a required property for Leaderboard and cannot be null");
            this.Created = created;
            // to ensure "constraints" is required (not null)
            this.Constraints = constraints ?? throw new ArgumentNullException("constraints is a required property for Leaderboard and cannot be null");
            this.LeaderboardEntries = leaderboardEntries;
            this.Sequence = sequence;
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
        /// Gets or Sets LeaderboardEntries
        /// </summary>
        [DataMember(Name = "leaderboardEntries", EmitDefaultValue = false)]
        public List<LeaderboardEntry> LeaderboardEntries { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name = "constraints", IsRequired = true, EmitDefaultValue = false)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// how many changes were made to teh leaderboard
        /// </summary>
        /// <value>how many changes were made to teh leaderboard</value>
        [DataMember(Name = "sequence", EmitDefaultValue = false)]
        public int Sequence { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Leaderboard {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SpaceName: ").Append(SpaceName).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  LeaderboardEntries: ").Append(LeaderboardEntries).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
            sb.Append("  Sequence: ").Append(Sequence).Append("\n");
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
            return this.Equals(input as Leaderboard);
        }

        /// <summary>
        /// Returns true if Leaderboard instances are equal
        /// </summary>
        /// <param name="input">Instance of Leaderboard to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Leaderboard input)
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
                    this.LeaderboardEntries == input.LeaderboardEntries ||
                    this.LeaderboardEntries != null &&
                    input.LeaderboardEntries != null &&
                    this.LeaderboardEntries.SequenceEqual(input.LeaderboardEntries)
                ) && 
                (
                    this.Constraints == input.Constraints ||
                    this.Constraints != null &&
                    input.Constraints != null &&
                    this.Constraints.SequenceEqual(input.Constraints)
                ) && 
                (
                    this.Sequence == input.Sequence ||
                    this.Sequence.Equals(input.Sequence)
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
                if (this.LeaderboardEntries != null)
                    hashCode = hashCode * 59 + this.LeaderboardEntries.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
                hashCode = hashCode * 59 + this.Sequence.GetHashCode();
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
