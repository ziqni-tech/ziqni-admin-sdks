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
    /// Defines an even type attached to the message
    /// </summary>
    /// <value>Defines an even type attached to the message</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum EventRefType
    {
        /// <summary>
        /// Enum Competition for value: Competition
        /// </summary>
        [EnumMember(Value = "Competition")]
        Competition = 1,

        /// <summary>
        /// Enum Contest for value: Contest
        /// </summary>
        [EnumMember(Value = "Contest")]
        Contest = 2,

        /// <summary>
        /// Enum Achievement for value: Achievement
        /// </summary>
        [EnumMember(Value = "Achievement")]
        Achievement = 3,

        /// <summary>
        /// Enum User for value: User
        /// </summary>
        [EnumMember(Value = "User")]
        User = 4,

        /// <summary>
        /// Enum MemberMessage for value: MemberMessage
        /// </summary>
        [EnumMember(Value = "MemberMessage")]
        MemberMessage = 5

    }

}
