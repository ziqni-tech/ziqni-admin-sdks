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
    /// The status of the message
    /// </summary>
    /// <value>The status of the message</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum MessageStatus
    {
        /// <summary>
        /// Enum New for value: New
        /// </summary>
        [EnumMember(Value = "New")]
        New = 1,

        /// <summary>
        /// Enum Read for value: Read
        /// </summary>
        [EnumMember(Value = "Read")]
        Read = 2,

        /// <summary>
        /// Enum Draft for value: Draft
        /// </summary>
        [EnumMember(Value = "Draft")]
        Draft = 3,

        /// <summary>
        /// Enum Sent for value: Sent
        /// </summary>
        [EnumMember(Value = "Sent")]
        Sent = 4,

        /// <summary>
        /// Enum CollaborationRequest for value: CollaborationRequest
        /// </summary>
        [EnumMember(Value = "CollaborationRequest")]
        CollaborationRequest = 5,

        /// <summary>
        /// Enum Actioned for value: Actioned
        /// </summary>
        [EnumMember(Value = "Actioned")]
        Actioned = 6,

        /// <summary>
        /// Enum Claimed for value: Claimed
        /// </summary>
        [EnumMember(Value = "Claimed")]
        Claimed = 7,

        /// <summary>
        /// Enum Expired for value: Expired
        /// </summary>
        [EnumMember(Value = "Expired")]
        Expired = 8,

        /// <summary>
        /// Enum Canceled for value: Canceled
        /// </summary>
        [EnumMember(Value = "Canceled")]
        Canceled = 9,

        /// <summary>
        /// Enum Deleted for value: Deleted
        /// </summary>
        [EnumMember(Value = "Deleted")]
        Deleted = 10

    }

}
