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
    /// The scoring strategy type. SUMMARY: * \&quot;TotalCumulative\&quot;: The basic strategy where all the points sum up and are shown in the Leaderboard. Depending on the Rules, all the points are Cumulative. * \&quot;SumBest\&quot;: This strategy requires a value to indicate how many highest points will be calculated and shown on the leaderboard * \&quot;LimitedTo\&quot;: This strategy requires a value to indicate how many events will be summed up and shown in the leaderboard. * \&quot;FirstTo\&quot;: This strategy requires a value to indicate how many points have to be received to complete the mission. 
    /// </summary>
    /// <value>The scoring strategy type. SUMMARY: * \&quot;TotalCumulative\&quot;: The basic strategy where all the points sum up and are shown in the Leaderboard. Depending on the Rules, all the points are Cumulative. * \&quot;SumBest\&quot;: This strategy requires a value to indicate how many highest points will be calculated and shown on the leaderboard * \&quot;LimitedTo\&quot;: This strategy requires a value to indicate how many events will be summed up and shown in the leaderboard. * \&quot;FirstTo\&quot;: This strategy requires a value to indicate how many points have to be received to complete the mission. </value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum StrategyType
    {
        /// <summary>
        /// Enum TotalCumulative for value: TotalCumulative
        /// </summary>
        [EnumMember(Value = "TotalCumulative")]
        TotalCumulative = 1,

        /// <summary>
        /// Enum SumBest for value: SumBest
        /// </summary>
        [EnumMember(Value = "SumBest")]
        SumBest = 2,

        /// <summary>
        /// Enum LimitedTo for value: LimitedTo
        /// </summary>
        [EnumMember(Value = "LimitedTo")]
        LimitedTo = 3,

        /// <summary>
        /// Enum FirstTo for value: FirstTo
        /// </summary>
        [EnumMember(Value = "FirstTo")]
        FirstTo = 4

    }

}
