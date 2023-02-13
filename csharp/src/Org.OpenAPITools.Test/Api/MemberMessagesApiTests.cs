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
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using Org.OpenAPITools.Client;
using Org.OpenAPITools.Api;
using Org.OpenAPITools.Model;

namespace Org.OpenAPITools.Test
{
    /// <summary>
    ///  Class for testing MemberMessagesApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class MemberMessagesApiTests
    {
        private MemberMessagesApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new MemberMessagesApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of MemberMessagesApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' MemberMessagesApi
            //Assert.IsInstanceOf(typeof(MemberMessagesApi), instance);
        }

        
        /// <summary>
        /// Test CreateMemberMessages
        /// </summary>
        [Test]
        public void CreateMemberMessagesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<CreateMemberMessageRequest> body = null;
            //var response = instance.CreateMemberMessages(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteMemberMessages
        /// </summary>
        [Test]
        public void DeleteMemberMessagesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //var response = instance.DeleteMemberMessages(id);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteMemberMessagesByQuery
        /// </summary>
        [Test]
        public void DeleteMemberMessagesByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.DeleteMemberMessagesByQuery(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test GetMemberMessages
        /// </summary>
        [Test]
        public void GetMemberMessagesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetMemberMessages(id, limit, skip);
            //Assert.IsInstanceOf(typeof(MemberMessageResponse), response, "response is MemberMessageResponse");
        }
        
        /// <summary>
        /// Test GetMemberMessagesByQuery
        /// </summary>
        [Test]
        public void GetMemberMessagesByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.GetMemberMessagesByQuery(body);
            //Assert.IsInstanceOf(typeof(MemberMessageResponse), response, "response is MemberMessageResponse");
        }
        
    }

}
