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
    /// This is a Product model with fewer parameters
    /// </summary>
    [DataContract]
    public partial class ProductReduced :  IEquatable<ProductReduced>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductReduced" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected ProductReduced() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="ProductReduced" /> class.
        /// </summary>
        /// <param name="id">A unique system generated identifier (required).</param>
        /// <param name="spaceName">This is the space name which is linked to the account (required).</param>
        /// <param name="created">ISO8601 timestamp for when a Model was created. All records are stored in UTC time zone (required).</param>
        /// <param name="name">The name of the product.</param>
        /// <param name="productRefId">The reference to this product in your system. The reference identifier can not be changed after the product has been created (required).</param>
        /// <param name="tags">A list of Strings used to tag products with taxonomy terms.</param>
        public ProductReduced(string id = default(string), string spaceName = default(string), DateTime created = default(DateTime), string name = default(string), string productRefId = default(string), List<string> tags = default(List<string>))
        {
            // to ensure "id" is required (not null)
            if (id == null)
            {
                throw new InvalidDataException("id is a required property for ProductReduced and cannot be null");
            }
            else
            {
                this.Id = id;
            }

            // to ensure "spaceName" is required (not null)
            if (spaceName == null)
            {
                throw new InvalidDataException("spaceName is a required property for ProductReduced and cannot be null");
            }
            else
            {
                this.SpaceName = spaceName;
            }

            // to ensure "created" is required (not null)
            if (created == null)
            {
                throw new InvalidDataException("created is a required property for ProductReduced and cannot be null");
            }
            else
            {
                this.Created = created;
            }

            // to ensure "productRefId" is required (not null)
            if (productRefId == null)
            {
                throw new InvalidDataException("productRefId is a required property for ProductReduced and cannot be null");
            }
            else
            {
                this.ProductRefId = productRefId;
            }

            this.Name = name;
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
        /// The name of the product
        /// </summary>
        /// <value>The name of the product</value>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// The reference to this product in your system. The reference identifier can not be changed after the product has been created
        /// </summary>
        /// <value>The reference to this product in your system. The reference identifier can not be changed after the product has been created</value>
        [DataMember(Name="productRefId", EmitDefaultValue=true)]
        public string ProductRefId { get; set; }

        /// <summary>
        /// A list of Strings used to tag products with taxonomy terms
        /// </summary>
        /// <value>A list of Strings used to tag products with taxonomy terms</value>
        [DataMember(Name="tags", EmitDefaultValue=false)]
        public List<string> Tags { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class ProductReduced {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  SpaceName: ").Append(SpaceName).Append("\n");
            sb.Append("  Created: ").Append(Created).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  ProductRefId: ").Append(ProductRefId).Append("\n");
            sb.Append("  Tags: ").Append(Tags).Append("\n");
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
            return this.Equals(input as ProductReduced);
        }

        /// <summary>
        /// Returns true if ProductReduced instances are equal
        /// </summary>
        /// <param name="input">Instance of ProductReduced to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ProductReduced input)
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
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.ProductRefId == input.ProductRefId ||
                    (this.ProductRefId != null &&
                    this.ProductRefId.Equals(input.ProductRefId))
                ) && 
                (
                    this.Tags == input.Tags ||
                    this.Tags != null &&
                    input.Tags != null &&
                    this.Tags.SequenceEqual(input.Tags)
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
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.ProductRefId != null)
                    hashCode = hashCode * 59 + this.ProductRefId.GetHashCode();
                if (this.Tags != null)
                    hashCode = hashCode * 59 + this.Tags.GetHashCode();
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
