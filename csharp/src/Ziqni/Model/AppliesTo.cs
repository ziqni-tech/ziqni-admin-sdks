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
    /// To which model does the custom field applies to
    /// </summary>
    /// <value>To which model does the custom field applies to</value>
    
    [JsonConverter(typeof(StringEnumConverter))]
    
    public enum AppliesTo
    {
        /// <summary>
        /// Enum Member for value: Member
        /// </summary>
        [EnumMember(Value = "Member")]
        Member = 1,

        /// <summary>
        /// Enum Product for value: Product
        /// </summary>
        [EnumMember(Value = "Product")]
        Product = 2,

        /// <summary>
        /// Enum Achievement for value: Achievement
        /// </summary>
        [EnumMember(Value = "Achievement")]
        Achievement = 3,

        /// <summary>
        /// Enum Repository for value: Repository
        /// </summary>
        [EnumMember(Value = "Repository")]
        Repository = 4,

        /// <summary>
        /// Enum FileObject for value: FileObject
        /// </summary>
        [EnumMember(Value = "FileObject")]
        FileObject = 5,

        /// <summary>
        /// Enum Language for value: Language
        /// </summary>
        [EnumMember(Value = "Language")]
        Language = 6,

        /// <summary>
        /// Enum MemberMessage for value: MemberMessage
        /// </summary>
        [EnumMember(Value = "MemberMessage")]
        MemberMessage = 7,

        /// <summary>
        /// Enum Reward for value: Reward
        /// </summary>
        [EnumMember(Value = "Reward")]
        Reward = 8,

        /// <summary>
        /// Enum MemberAward for value: MemberAward
        /// </summary>
        [EnumMember(Value = "MemberAward")]
        MemberAward = 9,

        /// <summary>
        /// Enum Award for value: Award
        /// </summary>
        [EnumMember(Value = "Award")]
        Award = 10,

        /// <summary>
        /// Enum Message for value: Message
        /// </summary>
        [EnumMember(Value = "Message")]
        Message = 11,

        /// <summary>
        /// Enum RewardType for value: RewardType
        /// </summary>
        [EnumMember(Value = "RewardType")]
        RewardType = 12,

        /// <summary>
        /// Enum ActionType for value: ActionType
        /// </summary>
        [EnumMember(Value = "ActionType")]
        ActionType = 13,

        /// <summary>
        /// Enum UnitOfMeasure for value: UnitOfMeasure
        /// </summary>
        [EnumMember(Value = "UnitOfMeasure")]
        UnitOfMeasure = 14,

        /// <summary>
        /// Enum Competition for value: Competition
        /// </summary>
        [EnumMember(Value = "Competition")]
        Competition = 15,

        /// <summary>
        /// Enum Contest for value: Contest
        /// </summary>
        [EnumMember(Value = "Contest")]
        Contest = 16,

        /// <summary>
        /// Enum SqsConnection for value: SqsConnection
        /// </summary>
        [EnumMember(Value = "SqsConnection")]
        SqsConnection = 17,

        /// <summary>
        /// Enum KafkaConnection for value: KafkaConnection
        /// </summary>
        [EnumMember(Value = "KafkaConnection")]
        KafkaConnection = 18,

        /// <summary>
        /// Enum RabbitMqConnection for value: RabbitMqConnection
        /// </summary>
        [EnumMember(Value = "RabbitMqConnection")]
        RabbitMqConnection = 19,

        /// <summary>
        /// Enum Event for value: Event
        /// </summary>
        [EnumMember(Value = "Event")]
        Event = 20,

        /// <summary>
        /// Enum Webhook for value: Webhook
        /// </summary>
        [EnumMember(Value = "Webhook")]
        Webhook = 21,

        /// <summary>
        /// Enum Attachment for value: Attachment
        /// </summary>
        [EnumMember(Value = "Attachment")]
        Attachment = 22,

        /// <summary>
        /// Enum Rule for value: Rule
        /// </summary>
        [EnumMember(Value = "Rule")]
        Rule = 23,

        /// <summary>
        /// Enum APIKey for value: APIKey
        /// </summary>
        [EnumMember(Value = "APIKey")]
        APIKey = 24,

        /// <summary>
        /// Enum Connection for value: Connection
        /// </summary>
        [EnumMember(Value = "Connection")]
        Connection = 25

    }

}