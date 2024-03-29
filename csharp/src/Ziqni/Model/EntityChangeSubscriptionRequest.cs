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
    /// EntityChangeSubscriptionRequest
    /// </summary>
    [DataContract]
    public partial class EntityChangeSubscriptionRequest :  IEquatable<EntityChangeSubscriptionRequest>, IValidatableObject
    {
        /// <summary>
        /// Either subscribe or unsubscribe from the data feed
        /// </summary>
        /// <value>Either subscribe or unsubscribe from the data feed</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum ActionEnum
        {
            /// <summary>
            /// Enum Subscribe for value: Subscribe
            /// </summary>
            [EnumMember(Value = "Subscribe")]
            Subscribe = 1,

            /// <summary>
            /// Enum Unsubscribe for value: Unsubscribe
            /// </summary>
            [EnumMember(Value = "Unsubscribe")]
            Unsubscribe = 2

        }

        /// <summary>
        /// Either subscribe or unsubscribe from the data feed
        /// </summary>
        /// <value>Either subscribe or unsubscribe from the data feed</value>
        [DataMember(Name="action", EmitDefaultValue=true)]
        public ActionEnum Action { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="EntityChangeSubscriptionRequest" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected EntityChangeSubscriptionRequest() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="EntityChangeSubscriptionRequest" /> class.
        /// </summary>
        /// <param name="entityType">What you are subscribing to, like Competition, Contest, Member, Award etc. (required).</param>
        /// <param name="constraints">Constraints of this subscription..</param>
        /// <param name="callback">The callback operation you are subscribing too. Like entityChanged or entityStateChanged (required).</param>
        /// <param name="action">Either subscribe or unsubscribe from the data feed (required).</param>
        public EntityChangeSubscriptionRequest(string entityType = default(string), List<string> constraints = default(List<string>), string callback = default(string), ActionEnum action = default(ActionEnum))
        {
            // to ensure "entityType" is required (not null)
            if (entityType == null)
            {
                throw new InvalidDataException("entityType is a required property for EntityChangeSubscriptionRequest and cannot be null");
            }
            else
            {
                this.EntityType = entityType;
            }

            // to ensure "callback" is required (not null)
            if (callback == null)
            {
                throw new InvalidDataException("callback is a required property for EntityChangeSubscriptionRequest and cannot be null");
            }
            else
            {
                this.Callback = callback;
            }

            // to ensure "action" is required (not null)
            if (action == null)
            {
                throw new InvalidDataException("action is a required property for EntityChangeSubscriptionRequest and cannot be null");
            }
            else
            {
                this.Action = action;
            }

            this.Constraints = constraints;
        }

        /// <summary>
        /// What you are subscribing to, like Competition, Contest, Member, Award etc.
        /// </summary>
        /// <value>What you are subscribing to, like Competition, Contest, Member, Award etc.</value>
        [DataMember(Name="entityType", EmitDefaultValue=true)]
        public string EntityType { get; set; }

        /// <summary>
        /// Constraints of this subscription.
        /// </summary>
        /// <value>Constraints of this subscription.</value>
        [DataMember(Name="constraints", EmitDefaultValue=false)]
        public List<string> Constraints { get; set; }

        /// <summary>
        /// The callback operation you are subscribing too. Like entityChanged or entityStateChanged
        /// </summary>
        /// <value>The callback operation you are subscribing too. Like entityChanged or entityStateChanged</value>
        [DataMember(Name="callback", EmitDefaultValue=true)]
        public string Callback { get; set; }


        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EntityChangeSubscriptionRequest {\n");
            sb.Append("  EntityType: ").Append(EntityType).Append("\n");
            sb.Append("  Constraints: ").Append(Constraints).Append("\n");
            sb.Append("  Callback: ").Append(Callback).Append("\n");
            sb.Append("  Action: ").Append(Action).Append("\n");
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
            return this.Equals(input as EntityChangeSubscriptionRequest);
        }

        /// <summary>
        /// Returns true if EntityChangeSubscriptionRequest instances are equal
        /// </summary>
        /// <param name="input">Instance of EntityChangeSubscriptionRequest to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EntityChangeSubscriptionRequest input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.EntityType == input.EntityType ||
                    (this.EntityType != null &&
                    this.EntityType.Equals(input.EntityType))
                ) && 
                (
                    this.Constraints == input.Constraints ||
                    this.Constraints != null &&
                    input.Constraints != null &&
                    this.Constraints.SequenceEqual(input.Constraints)
                ) && 
                (
                    this.Callback == input.Callback ||
                    (this.Callback != null &&
                    this.Callback.Equals(input.Callback))
                ) && 
                (
                    this.Action == input.Action ||
                    (this.Action != null &&
                    this.Action.Equals(input.Action))
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
                if (this.EntityType != null)
                    hashCode = hashCode * 59 + this.EntityType.GetHashCode();
                if (this.Constraints != null)
                    hashCode = hashCode * 59 + this.Constraints.GetHashCode();
                if (this.Callback != null)
                    hashCode = hashCode * 59 + this.Callback.GetHashCode();
                if (this.Action != null)
                    hashCode = hashCode * 59 + this.Action.GetHashCode();
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
