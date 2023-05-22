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
    /// DependantOn
    /// </summary>
    [DataContract]
    public partial class DependantOn :  IEquatable<DependantOn>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DependantOn" /> class.
        /// </summary>
        /// <param name="must">A rule indicating that it has to be included. Players that are in the EU group with a MUST rule - that means only players that have that group can participate.</param>
        /// <param name="mustNot">A rule indicating that it will not be included. Players that are in the EU group with a MUST-NOT rule - that means that players that have that group can NOT participate.</param>
        /// <param name="should">A rule indicating that some of them have to be included. Dependancy on shouldMatchAtLeast parameter. Players that are in the EU and DE groups with a SHOULD rule and a shouldMatchAtLeast with a value of 1 - that means that players that have 1 of the groups can participate.</param>
        /// <param name="shouldMatchAtLeast">Dependant on should. Triggered when 2 or more should parameters selected.</param>
        public DependantOn(List<string> must = default(List<string>), List<string> mustNot = default(List<string>), List<string> should = default(List<string>), int shouldMatchAtLeast = default(int))
        {
            this.Must = must;
            this.MustNot = mustNot;
            this.Should = should;
            this.ShouldMatchAtLeast = shouldMatchAtLeast;
        }

        /// <summary>
        /// A rule indicating that it has to be included. Players that are in the EU group with a MUST rule - that means only players that have that group can participate
        /// </summary>
        /// <value>A rule indicating that it has to be included. Players that are in the EU group with a MUST rule - that means only players that have that group can participate</value>
        [DataMember(Name="must", EmitDefaultValue=false)]
        public List<string> Must { get; set; }

        /// <summary>
        /// A rule indicating that it will not be included. Players that are in the EU group with a MUST-NOT rule - that means that players that have that group can NOT participate
        /// </summary>
        /// <value>A rule indicating that it will not be included. Players that are in the EU group with a MUST-NOT rule - that means that players that have that group can NOT participate</value>
        [DataMember(Name="mustNot", EmitDefaultValue=false)]
        public List<string> MustNot { get; set; }

        /// <summary>
        /// A rule indicating that some of them have to be included. Dependancy on shouldMatchAtLeast parameter. Players that are in the EU and DE groups with a SHOULD rule and a shouldMatchAtLeast with a value of 1 - that means that players that have 1 of the groups can participate
        /// </summary>
        /// <value>A rule indicating that some of them have to be included. Dependancy on shouldMatchAtLeast parameter. Players that are in the EU and DE groups with a SHOULD rule and a shouldMatchAtLeast with a value of 1 - that means that players that have 1 of the groups can participate</value>
        [DataMember(Name="should", EmitDefaultValue=false)]
        public List<string> Should { get; set; }

        /// <summary>
        /// Dependant on should. Triggered when 2 or more should parameters selected
        /// </summary>
        /// <value>Dependant on should. Triggered when 2 or more should parameters selected</value>
        [DataMember(Name="shouldMatchAtLeast", EmitDefaultValue=false)]
        public int ShouldMatchAtLeast { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class DependantOn {\n");
            sb.Append("  Must: ").Append(Must).Append("\n");
            sb.Append("  MustNot: ").Append(MustNot).Append("\n");
            sb.Append("  Should: ").Append(Should).Append("\n");
            sb.Append("  ShouldMatchAtLeast: ").Append(ShouldMatchAtLeast).Append("\n");
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
            return this.Equals(input as DependantOn);
        }

        /// <summary>
        /// Returns true if DependantOn instances are equal
        /// </summary>
        /// <param name="input">Instance of DependantOn to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(DependantOn input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Must == input.Must ||
                    this.Must != null &&
                    input.Must != null &&
                    this.Must.SequenceEqual(input.Must)
                ) && 
                (
                    this.MustNot == input.MustNot ||
                    this.MustNot != null &&
                    input.MustNot != null &&
                    this.MustNot.SequenceEqual(input.MustNot)
                ) && 
                (
                    this.Should == input.Should ||
                    this.Should != null &&
                    input.Should != null &&
                    this.Should.SequenceEqual(input.Should)
                ) && 
                (
                    this.ShouldMatchAtLeast == input.ShouldMatchAtLeast ||
                    (this.ShouldMatchAtLeast != null &&
                    this.ShouldMatchAtLeast.Equals(input.ShouldMatchAtLeast))
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
                if (this.Must != null)
                    hashCode = hashCode * 59 + this.Must.GetHashCode();
                if (this.MustNot != null)
                    hashCode = hashCode * 59 + this.MustNot.GetHashCode();
                if (this.Should != null)
                    hashCode = hashCode * 59 + this.Should.GetHashCode();
                if (this.ShouldMatchAtLeast != null)
                    hashCode = hashCode * 59 + this.ShouldMatchAtLeast.GetHashCode();
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
