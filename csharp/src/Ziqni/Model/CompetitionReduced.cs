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
    /// CompetitionReduced
    /// </summary>
    [DataContract]
    public partial class CompetitionReduced :  IEquatable<CompetitionReduced>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets CompetitionType
        /// </summary>
        [DataMember(Name="competitionType", EmitDefaultValue=true)]
        public CompetitionType CompetitionType { get; set; }
        /// <summary>
        /// Gets or Sets Status
        /// </summary>
        [DataMember(Name="status", EmitDefaultValue=true)]
        public CompetitionStatus Status { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CompetitionReduced" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CompetitionReduced() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CompetitionReduced" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="spaceName">This is the space name which is linked to the account (required).</param>
        /// <param name="created">ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone (required).</param>
        /// <param name="competitionType">competitionType (required).</param>
        /// <param name="numberOfRounds">Number of rounds to be played in a competition (required).</param>
        /// <param name="name">A name or a name of a competition. Can be translated (required).</param>
        /// <param name="status">status (required).</param>
        /// <param name="dependantOn">dependantOn (required).</param>
        /// <param name="entrantMemberType">entrantMemberType.</param>
        /// <param name="scheduledStartDate">ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone (required).</param>
        /// <param name="scheduledEndDate">ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone (required).</param>
        /// <param name="tags">A list of id&#39;s used to tag.</param>
        /// <param name="constraints">Additional constraints (required).</param>
        public CompetitionReduced(string id = default(string), string spaceName = default(string), DateTime created = default(DateTime), CompetitionType competitionType = default(CompetitionType), int numberOfRounds = default(int), string name = default(string), CompetitionStatus status = default(CompetitionStatus), List<Dependancy> dependantOn = default(List<Dependancy>), string entrantMemberType = default(string), DateTime scheduledStartDate = default(DateTime), DateTime scheduledEndDate = default(DateTime), List<string> tags = default(List<string>), List<string> constraints = default(List<string>))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new InvalidDataException("id is a required property for CompetitionReduced and cannot be null");
            }
            else
            {
                this.Id = id;
            }

            // to ensure "spaceName" is required (not null)
            if (spaceName == null)
            {
                throw new InvalidDataException("spaceName is a required property for CompetitionReduced and cannot be null");
            }
            else
            {
                this.SpaceName = spaceName;
            }

            // to ensure "created" is required (not null)
            if (created == null)
            {
                throw new InvalidDataException("created is a required property for CompetitionReduced and cannot be null");
            }
            else
            {
                this.Created = created;
            }

            // to ensure "competitionType" is required (not null)
            if (competitionType == null)
            {
                throw new InvalidDataException("competitionType is a required property for CompetitionReduced and cannot be null");
            }
            else
            {
                this.CompetitionType = competitionType;
            }

            // to ensure "numberOfRounds" is required (not null)
            if (numberOfRounds == null)
            {
                throw new InvalidDataException("numberOfRounds is a required property for CompetitionReduced and cannot be null");
            }
            else
            {
                this.NumberOfRounds = numberOfRounds;
            }

            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for CompetitionReduced and cannot be null");
            }
            else
            {
                this.Name = name;
            }

            // to ensure "status" is required (not null)
            if (status == null)
            {
                throw new InvalidDataException("status is a required property for CompetitionReduced and cannot be null");
            }
            else
            {
                this.Status = status;
            }

            // to ensure "dependantOn" is required (not null)
            if (dependantOn == null)
            {
                throw new InvalidDataException("dependantOn is a required property for CompetitionReduced and cannot be null");
            }
            else
            {
                this.DependantOn = dependantOn;
            }

            // to ensure "scheduledStartDate" is required (not null)
            if (scheduledStartDate == null)
            {
                throw new InvalidDataException("scheduledStartDate is a required property for CompetitionReduced and cannot be null");
            }
            else
            {
                this.ScheduledStartDate = scheduledStartDate;
            }

            // to ensure "scheduledEndDate" is required (not null)
            if (scheduledEndDate == null)
            {
                throw new InvalidDataException("scheduledEndDate is a required property for CompetitionReduced and cannot be null");
            }
            else
            {
                this.ScheduledEndDate = scheduledEndDate;
            }

            // to ensure "constraints" is required (not null)
            if (constraints == null)
            {
                throw new InvalidDataException("constraints is a required property for CompetitionReduced and cannot be null");
            }
            else
            {
                this.Constraints = constraints;
            }

            this.EntrantMemberType = entrantMemberType;
            this.Tags = tags;
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
        /// Number of rounds to be played in a competition
        /// </summary>
        /// <value>Number of rounds to be played in a competition</value>
        [DataMember(Name="numberOfRounds", EmitDefaultValue=true)]
        public int NumberOfRounds { get; set; }

        /// <summary>
        /// A name or a name of a competition. Can be translated
        /// </summary>
        /// <value>A name or a name of a competition. Can be translated</value>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }


        /// <summary>
        /// The code of the competition
        /// </summary>
        /// <value>The code of the competition</value>
        [DataMember(Name="statusCode", EmitDefaultValue=true)]
        public int StatusCode { get; private set; }

        /// <summary>
        /// Gets or Sets DependantOn
        /// </summary>
        [DataMember(Name="dependantOn", EmitDefaultValue=true)]
        public List<Dependancy> DependantOn { get; set; }

        /// <summary>
        /// Gets or Sets EntrantMemberType
        /// </summary>
        [DataMember(Name="entrantMemberType", EmitDefaultValue=false)]
        public string EntrantMemberType { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Competition should start. All records are stored in UTC time zone</value>
        [DataMember(Name="scheduledStartDate", EmitDefaultValue=true)]
        public DateTime ScheduledStartDate { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Competition should end. All records are stored in UTC time zone</value>
        [DataMember(Name="scheduledEndDate", EmitDefaultValue=true)]
        public DateTime ScheduledEndDate { get; set; }

        /// <summary>
        /// ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Competition started. All records are stored in UTC time zone</value>
        [DataMember(Name="actualStartDate", EmitDefaultValue=false)]
        public DateTime ActualStartDate { get; private set; }

        /// <summary>
        /// ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone
        /// </summary>
        /// <value>ISO8601 timestamp for when a Competition ended. All records are stored in UTC time zone</value>
        [DataMember(Name="actualEndDate", EmitDefaultValue=false)]
        public DateTime ActualEndDate { get; private set; }

        /// <summary>
        /// A list of id&#39;s used to tag
        /// </summary>
        /// <value>A list of id&#39;s used to tag</value>
        [DataMember(Name="tags", EmitDefaultValue=false)]
        public List<string> Tags { get; set; }

        /// <summary>
        /// Additional constraints
        /// </summary>
        /// <value>Additional constraints</value>
        [DataMember(Name="constraints", EmitDefaultValue=true)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CompetitionReduced {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SpaceName: ").Append(SpaceName).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  CompetitionType: ").Append(CompetitionType).Append("\n");
            sb.Append("  NumberOfRounds: ").Append(NumberOfRounds).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Status: ").Append(Status).Append("\n");
            sb.Append("  StatusCode: ").Append(StatusCode).Append("\n");
            sb.Append("  DependantOn: ").Append(DependantOn).Append("\n");
            sb.Append("  EntrantMemberType: ").Append(EntrantMemberType).Append("\n");
            sb.Append("  ScheduledStartDate: ").Append(ScheduledStartDate).Append("\n");
            sb.Append("  ScheduledEndDate: ").Append(ScheduledEndDate).Append("\n");
            sb.Append("  ActualStartDate: ").Append(ActualStartDate).Append("\n");
            sb.Append("  ActualEndDate: ").Append(ActualEndDate).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
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
            return this.Equals(input as CompetitionReduced);
        }

        /// <summary>
        /// Returns true if CompetitionReduced instances are equal
        /// </summary>
        /// <param name="input">Instance of CompetitionReduced to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CompetitionReduced input)
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
                    this.CompetitionType == input.CompetitionType ||
                    (this.CompetitionType != null &&
                    this.CompetitionType.Equals(input.CompetitionType))
                ) && 
                (
                    this.NumberOfRounds == input.NumberOfRounds ||
                    (this.NumberOfRounds != null &&
                    this.NumberOfRounds.Equals(input.NumberOfRounds))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Status == input.Status ||
                    (this.Status != null &&
                    this.Status.Equals(input.Status))
                ) && 
                (
                    this.StatusCode == input.StatusCode ||
                    (this.StatusCode != null &&
                    this.StatusCode.Equals(input.StatusCode))
                ) && 
                (
                    this.DependantOn == input.DependantOn ||
                    this.DependantOn != null &&
                    input.DependantOn != null &&
                    this.DependantOn.SequenceEqual(input.DependantOn)
                ) && 
                (
                    this.EntrantMemberType == input.EntrantMemberType ||
                    (this.EntrantMemberType != null &&
                    this.EntrantMemberType.Equals(input.EntrantMemberType))
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
                    this.ActualStartDate == input.ActualStartDate ||
                    (this.ActualStartDate != null &&
                    this.ActualStartDate.Equals(input.ActualStartDate))
                ) && 
                (
                    this.ActualEndDate == input.ActualEndDate ||
                    (this.ActualEndDate != null &&
                    this.ActualEndDate.Equals(input.ActualEndDate))
                ) && 
                (
                    this.Tags == input.Tags ||
                    this.Tags != null &&
                    input.Tags != null &&
                    this.Tags.SequenceEqual(input.Tags)
                ) && 
                (
                    this.Constraints == input.Constraints ||
                    this.Constraints != null &&
                    input.Constraints != null &&
                    this.Constraints.SequenceEqual(input.Constraints)
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
                if (this.CompetitionType != null)
                    hashCode = hashCode * 59 + this.CompetitionType.GetHashCode();
                if (this.NumberOfRounds != null)
                    hashCode = hashCode * 59 + this.NumberOfRounds.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Status != null)
                    hashCode = hashCode * 59 + this.Status.GetHashCode();
                if (this.StatusCode != null)
                    hashCode = hashCode * 59 + this.StatusCode.GetHashCode();
                if (this.DependantOn != null)
                    hashCode = hashCode * 59 + this.DependantOn.GetHashCode();
                if (this.EntrantMemberType != null)
                    hashCode = hashCode * 59 + this.EntrantMemberType.GetHashCode();
                if (this.ScheduledStartDate != null)
                    hashCode = hashCode * 59 + this.ScheduledStartDate.GetHashCode();
                if (this.ScheduledEndDate != null)
                    hashCode = hashCode * 59 + this.ScheduledEndDate.GetHashCode();
                if (this.ActualStartDate != null)
                    hashCode = hashCode * 59 + this.ActualStartDate.GetHashCode();
                if (this.ActualEndDate != null)
                    hashCode = hashCode * 59 + this.ActualEndDate.GetHashCode();
                if (this.Tags != null)
                    hashCode = hashCode * 59 + this.Tags.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
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
