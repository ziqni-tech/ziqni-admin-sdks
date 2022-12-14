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
    ///  Class for testing RewardTypesApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class RewardTypesApiTests
    {
        private RewardTypesApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new RewardTypesApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of RewardTypesApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' RewardTypesApi
            //Assert.IsInstanceOf(typeof(RewardTypesApi), instance);
        }

        
        /// <summary>
        /// Test CreateRewardTypes
        /// </summary>
        [Test]
        public void CreateRewardTypesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<CreateRewardTypeRequest> body = null;
            //var response = instance.CreateRewardTypes(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteRewardTypes
        /// </summary>
        [Test]
        public void DeleteRewardTypesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //var response = instance.DeleteRewardTypes(id);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteRewardTypesByQuery
        /// </summary>
        [Test]
        public void DeleteRewardTypesByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.DeleteRewardTypesByQuery(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test GetRewardTypes
        /// </summary>
        [Test]
        public void GetRewardTypesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetRewardTypes(id, limit, skip);
            //Assert.IsInstanceOf(typeof(RewardTypeResponse), response, "response is RewardTypeResponse");
        }
        
        /// <summary>
        /// Test GetRewardTypesByQuery
        /// </summary>
        [Test]
        public void GetRewardTypesByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.GetRewardTypesByQuery(body);
            //Assert.IsInstanceOf(typeof(RewardTypeResponse), response, "response is RewardTypeResponse");
        }
        
        /// <summary>
        /// Test UpdateRewardTypes
        /// </summary>
        [Test]
        public void UpdateRewardTypesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<UpdateRewardTypeRequest> body = null;
            //var response = instance.UpdateRewardTypes(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
    }

}
