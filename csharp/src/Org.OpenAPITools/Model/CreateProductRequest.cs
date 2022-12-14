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
    /// This is a request for Product creation
    /// </summary>
    [DataContract]
    public partial class CreateProductRequest :  IEquatable<CreateProductRequest>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateProductRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected CreateProductRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="CreateProductRequest" /> class.
        /// </summary>
        /// <param name="customFields">A list of custom field entries.</param>
        /// <param name="tags">A list of id&#39;s used to tag models.</param>
        /// <param name="metadata">metadata.</param>
        /// <param name="name">The name of the product (required).</param>
        /// <param name="description">The description of the product for your reference.</param>
        /// <param name="adjustmentFactor">The multiplier to apply to source values received for this product events (required).</param>
        /// <param name="productRefId">The reference to this product in your system. The reference identifier can not be changed after the product has been created (required).</param>
        /// <param name="actionTypeAdjustmentFactors">actionTypeAdjustmentFactors.</param>
        /// <param name="translations">translations.</param>
        public CreateProductRequest(Dictionary<string, Object> customFields = default(Dictionary<string, Object>), List<string> tags = default(List<string>), Dictionary<string, string> metadata = default(Dictionary<string, string>), string name = default(string), string description = default(string), double adjustmentFactor = default(double), string productRefId = default(string), List<ActionTypeAdjustmentFactor> actionTypeAdjustmentFactors = default(List<ActionTypeAdjustmentFactor>), List<Translation> translations = default(List<Translation>))
        {
            // to ensure "name" is required (not null)
            if (name == null)
            {
                throw new InvalidDataException("name is a required property for CreateProductRequest and cannot be null");
            }
            else
            {
                this.Name = name;
            }

            // to ensure "adjustmentFactor" is required (not null)
            if (adjustmentFactor == null)
            {
                throw new InvalidDataException("adjustmentFactor is a required property for CreateProductRequest and cannot be null");
            }
            else
            {
                this.AdjustmentFactor = adjustmentFactor;
            }

            // to ensure "productRefId" is required (not null)
            if (productRefId == null)
            {
                throw new InvalidDataException("productRefId is a required property for CreateProductRequest and cannot be null");
            }
            else
            {
                this.ProductRefId = productRefId;
            }

            this.CustomFields = customFields;
            this.Tags = tags;
            this.Metadata = metadata;
            this.Description = description;
            this.ActionTypeAdjustmentFactors = actionTypeAdjustmentFactors;
            this.Translations = translations;
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
        /// The name of the product
        /// </summary>
        /// <value>The name of the product</value>
        [DataMember(Name="name", EmitDefaultValue=true)]
        public string Name { get; set; }

        /// <summary>
        /// The description of the product for your reference
        /// </summary>
        /// <value>The description of the product for your reference</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// The multiplier to apply to source values received for this product events
        /// </summary>
        /// <value>The multiplier to apply to source values received for this product events</value>
        [DataMember(Name="adjustmentFactor", EmitDefaultValue=true)]
        public double AdjustmentFactor { get; set; }

        /// <summary>
        /// The reference to this product in your system. The reference identifier can not be changed after the product has been created
        /// </summary>
        /// <value>The reference to this product in your system. The reference identifier can not be changed after the product has been created</value>
        [DataMember(Name="productRefId", EmitDefaultValue=true)]
        public string ProductRefId { get; set; }

        /// <summary>
        /// Gets or Sets ActionTypeAdjustmentFactors
        /// </summary>
        [DataMember(Name="actionTypeAdjustmentFactors", EmitDefaultValue=false)]
        public List<ActionTypeAdjustmentFactor> ActionTypeAdjustmentFactors { get; set; }

        /// <summary>
        /// Gets or Sets Translations
        /// </summary>
        [DataMember(Name="translations", EmitDefaultValue=false)]
        public List<Translation> Translations { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class CreateProductRequest {\n");
            sb.Append("  CustomFields: ").Append(CustomFields).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
            sb.Append("  Metadata: ").Append(Metadata).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  AdjustmentFactor: ").Append(AdjustmentFactor).Append("\n");
            sb.Append("  ProductRefId: ").Append(ProductRefId).Append("\n");
            sb.Append("  ActionTypeAdjustmentFactors: ").Append(ActionTypeAdjustmentFactors).Append("\n");
            sb.Append("  Translations: ").Append(Translations).Append("\n");
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
            return this.Equals(input as CreateProductRequest);
        }

        /// <summary>
        /// Returns true if CreateProductRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of CreateProductRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(CreateProductRequest input)
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
                    this.AdjustmentFactor == input.AdjustmentFactor ||
                    (this.AdjustmentFactor != null &&
                    this.AdjustmentFactor.Equals(input.AdjustmentFactor))
                ) && 
                (
                    this.ProductRefId == input.ProductRefId ||
                    (this.ProductRefId != null &&
                    this.ProductRefId.Equals(input.ProductRefId))
                ) && 
                (
                    this.ActionTypeAdjustmentFactors == input.ActionTypeAdjustmentFactors ||
                    this.ActionTypeAdjustmentFactors != null &&
                    input.ActionTypeAdjustmentFactors != null &&
                    this.ActionTypeAdjustmentFactors.SequenceEqual(input.ActionTypeAdjustmentFactors)
                ) && 
                (
                    this.Translations == input.Translations ||
                    this.Translations != null &&
                    input.Translations != null &&
                    this.Translations.SequenceEqual(input.Translations)
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.AdjustmentFactor != null)
                    hashCode = hashCode * 59 + this.AdjustmentFactor.GetHashCode();
                if (this.ProductRefId != null)
                    hashCode = hashCode * 59 + this.ProductRefId.GetHashCode();
                if (this.ActionTypeAdjustmentFactors != null)
                    hashCode = hashCode * 59 + this.ActionTypeAdjustmentFactors.GetHashCode();
                if (this.Translations != null)
                    hashCode = hashCode * 59 + this.Translations.GetHashCode();
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
