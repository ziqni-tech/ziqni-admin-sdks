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
    /// Connection States
    /// </summary>
    /// <value>Connection States</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum ConnectionState
    {
        /// <summary>
        /// Enum Start for value: Start
        /// </summary>
        [EnumMember(Value = "Start")]
        Start = 1,

        /// <summary>
        /// Enum Stop for value: Stop
        /// </summary>
        [EnumMember(Value = "Stop")]
        Stop = 2

    }

}
