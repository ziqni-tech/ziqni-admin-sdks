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
    /// CreateTransformerRequest
    /// </summary>
    [DataContract]
    public partial class CreateTransformerRequest :  IEquatable<CreateTransformerRequest>, IValidatableObject
    {
        /// <summary>
        /// Gets or Sets SourceLanguage
        /// </summary>
        [DataMember(Name="sourceLanguage", EmitDefaultValue=true)]
        public SourceLanguage SourceLanguage { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateTransformerRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateTransformerRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateTransformerRequest" /> class.
        /// </summary>
        /// <param name="name">The name of the Transformer (required).</param>
        /// <param name="source">Source code.</param>
        /// <param name="sourceLanguage">sourceLanguage (required).</param>
        public CreateTransformerRequest(string name = default(string), string source = default(string), SourceLanguage sourceLanguage = default(SourceLanguage))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for CreateTransformerRequest and cannot be null");
            }
            else
            {
                this.Name = name;
            }

            // to ensure "sourceLanguage" is required (not null)
            if (sourceLanguage == null)
            {
                throw new InvalidDataException("sourceLanguage is a required property for CreateTransformerRequest and cannot be null");
            }
            else
            {
                this.SourceLanguage = sourceLanguage;
            }

            this.Source = source;
        }

        /// <summary>
        /// The name of the Transformer
        /// </summary>
        /// <value>The name of the Transformer</value>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// Source code
        /// </summary>
        /// <value>Source code</value>
        [DataMember(Name="source", EmitDefaultValue=false)]
        public string Source { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateTransformerRequest {\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Source: ").Append(Source).Append("\n");
            sb.Append("  SourceLanguage: ").Append(SourceLanguage).Append("\n");
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
            return this.Equals(input as CreateTransformerRequest);
        }

        /// <summary>
        /// Returns true if CreateTransformerRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateTransformerRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateTransformerRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Source == input.Source ||
                    (this.Source != null &&
                    this.Source.Equals(input.Source))
                ) && 
                (
                    this.SourceLanguage == input.SourceLanguage ||
                    (this.SourceLanguage != null &&
                    this.SourceLanguage.Equals(input.SourceLanguage))
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Source != null)
                    hashCode = hashCode * 59 + this.Source.GetHashCode();
                if (this.SourceLanguage != null)
                    hashCode = hashCode * 59 + this.SourceLanguage.GetHashCode();
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
