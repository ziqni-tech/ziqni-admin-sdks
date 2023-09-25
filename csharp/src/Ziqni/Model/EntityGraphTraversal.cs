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
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;

namespace Ziqni.Model
{
    /// <summary>
    /// The status of award
    /// </summary>
    /// <value>The status of award</value>
    [JsonConverter(typeof(StringEnumConverter))]
    public enum EntityGraphTraversal
    {
        /// <summary>
        /// Enum DEPTHFIRST for value: DEPTH_FIRST
        /// </summary>
        [EnumMember(Value = "DEPTH_FIRST")]
        DEPTHFIRST = 1,

        /// <summary>
        /// Enum BREADTHFIRST for value: BREADTH_FIRST
        /// </summary>
        [EnumMember(Value = "BREADTH_FIRST")]
        BREADTHFIRST = 2

    }

}
