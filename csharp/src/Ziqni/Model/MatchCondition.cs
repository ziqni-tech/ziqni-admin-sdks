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
    /// Whether the rules must all evaluate as True or False or at least one of the rules must be True or False to satisfy the rule
    /// </summary>
    /// <value>Whether the rules must all evaluate as True or False or at least one of the rules must be True or False to satisfy the rule</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum MatchCondition
    {
        /// <summary>
        /// Enum All for value: All
        /// </summary>
        [EnumMember(Value = "All")]
        All = 1,

        /// <summary>
        /// Enum Any for value: Any
        /// </summary>
        [EnumMember(Value = "Any")]
        Any = 2

    }

}
