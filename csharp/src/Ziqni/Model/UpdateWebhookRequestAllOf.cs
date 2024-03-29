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
    /// UpdateWebhookRequestAllOf
    /// </summary>
    [DataContract]
    public partial class UpdateWebhookRequestAllOf :  IEquatable<UpdateWebhookRequestAllOf>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UpdateWebhookRequestAllOf" /> class.
        /// </summary>
        /// <param name="postToUrl">A URL to post the webhook to.</param>
        /// <param name="triggers">A list of event triggers.</param>
        /// <param name="description">The description of a Webhook.</param>
        /// <param name="name">The name of a Webhook.</param>
        /// <param name="headers">headers.</param>
        public UpdateWebhookRequestAllOf(string postToUrl = default(string), List<string> triggers = default(List<string>), string description = default(string), string name = default(string), Dictionary<string, string> headers = default(Dictionary<string, string>))
        {
            this.PostToUrl = postToUrl;
            this.Triggers = triggers;
            this.Description = description;
            this.Name = name;
            this.Headers = headers;
        }

        /// <summary>
        /// A URL to post the webhook to
        /// </summary>
        /// <value>A URL to post the webhook to</value>
        [DataMember(Name="postToUrl", EmitDefaultValue=false)]
        public string PostToUrl { get; set; }

        /// <summary>
        /// A list of event triggers
        /// </summary>
        /// <value>A list of event triggers</value>
        [DataMember(Name="triggers", EmitDefaultValue=false)]
        public List<string> Triggers { get; set; }

        /// <summary>
        /// The description of a Webhook
        /// </summary>
        /// <value>The description of a Webhook</value>
        [DataMember(Name="description", EmitDefaultValue=false)]
        public string Description { get; set; }

        /// <summary>
        /// The name of a Webhook
        /// </summary>
        /// <value>The name of a Webhook</value>
        [DataMember(Name="name", EmitDefaultValue=false)]
        public string Name { get; set; }

        /// <summary>
        /// Gets or Sets Headers
        /// </summary>
        [DataMember(Name="headers", EmitDefaultValue=false)]
        public Dictionary<string, string> Headers { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class UpdateWebhookRequestAllOf {\n");
            sb.Append("  PostToUrl: ").Append(PostToUrl).Append("\n");
            sb.Append("  Triggers: ").Append(Triggers).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Headers: ").Append(Headers).Append("\n");
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
            return this.Equals(input as UpdateWebhookRequestAllOf);
        }

        /// <summary>
        /// Returns true if UpdateWebhookRequestAllOf instances are equal
        /// </summary>
        /// <param name="input">Instance of UpdateWebhookRequestAllOf to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(UpdateWebhookRequestAllOf input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.PostToUrl == input.PostToUrl ||
                    (this.PostToUrl != null &&
                    this.PostToUrl.Equals(input.PostToUrl))
                ) && 
                (
                    this.Triggers == input.Triggers ||
                    this.Triggers != null &&
                    input.Triggers != null &&
                    this.Triggers.SequenceEqual(input.Triggers)
                ) && 
                (
                    this.Description == input.Description ||
                    (this.Description != null &&
                    this.Description.Equals(input.Description))
                ) && 
                (
                    this.Name == input.Name ||
                    (this.Name != null &&
                    this.Name.Equals(input.Name))
                ) && 
                (
                    this.Headers == input.Headers ||
                    this.Headers != null &&
                    input.Headers != null &&
                    this.Headers.SequenceEqual(input.Headers)
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
                if (this.PostToUrl != null)
                    hashCode = hashCode * 59 + this.PostToUrl.GetHashCode();
                if (this.Triggers != null)
                    hashCode = hashCode * 59 + this.Triggers.GetHashCode();
                if (this.Description != null)
                    hashCode = hashCode * 59 + this.Description.GetHashCode();
                if (this.Name != null)
                    hashCode = hashCode * 59 + this.Name.GetHashCode();
                if (this.Headers != null)
                    hashCode = hashCode * 59 + this.Headers.GetHashCode();
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
