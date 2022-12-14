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
    /// The status of contest
    /// </summary>
    /// <value>The status of contest</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum ContestStatus
    {
        /// <summary>
        /// Enum Unknown for value: Unknown
        /// </summary>
        [EnumMember(Value = "Unknown")]
        Unknown = 1,

        /// <summary>
        /// Enum Deleting for value: Deleting
        /// </summary>
        [EnumMember(Value = "Deleting")]
        Deleting = 2,

        /// <summary>
        /// Enum Deleted for value: Deleted
        /// </summary>
        [EnumMember(Value = "Deleted")]
        Deleted = 3,

        /// <summary>
        /// Enum Draft for value: Draft
        /// </summary>
        [EnumMember(Value = "Draft")]
        Draft = 4,

        /// <summary>
        /// Enum Template for value: Template
        /// </summary>
        [EnumMember(Value = "Template")]
        Template = 5,

        /// <summary>
        /// Enum Preparing for value: Preparing
        /// </summary>
        [EnumMember(Value = "Preparing")]
        Preparing = 6,

        /// <summary>
        /// Enum Ready for value: Ready
        /// </summary>
        [EnumMember(Value = "Ready")]
        Ready = 7,

        /// <summary>
        /// Enum Starting for value: Starting
        /// </summary>
        [EnumMember(Value = "Starting")]
        Starting = 8,

        /// <summary>
        /// Enum Active for value: Active
        /// </summary>
        [EnumMember(Value = "Active")]
        Active = 9,

        /// <summary>
        /// Enum Finishing for value: Finishing
        /// </summary>
        [EnumMember(Value = "Finishing")]
        Finishing = 10,

        /// <summary>
        /// Enum Finished for value: Finished
        /// </summary>
        [EnumMember(Value = "Finished")]
        Finished = 11,

        /// <summary>
        /// Enum Cancelling for value: Cancelling
        /// </summary>
        [EnumMember(Value = "Cancelling")]
        Cancelling = 12,

        /// <summary>
        /// Enum Cancelled for value: Cancelled
        /// </summary>
        [EnumMember(Value = "Cancelled")]
        Cancelled = 13,

        /// <summary>
        /// Enum Finalising for value: Finalising
        /// </summary>
        [EnumMember(Value = "Finalising")]
        Finalising = 14,

        /// <summary>
        /// Enum Finalised for value: Finalised
        /// </summary>
        [EnumMember(Value = "Finalised")]
        Finalised = 15

    }

}
