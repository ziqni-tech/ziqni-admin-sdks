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
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using Ziqni.Client;
using Ziqni.Api;
using Ziqni.Model;

namespace Ziqni.Test
{
    /// <summary>
    ///  Class for testing RewardsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class RewardsApiTests
    {
        private RewardsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new RewardsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of RewardsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' RewardsApi
            //Assert.IsInstanceOf(typeof(RewardsApi), instance);
        }

        
        /// <summary>
        /// Test CreateRewards
        /// </summary>
        [Test]
        public void CreateRewardsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<CreateEntityRewardRequest> body = null;
            //var response = instance.CreateRewards(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteRewards
        /// </summary>
        [Test]
        public void DeleteRewardsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //var response = instance.DeleteRewards(id);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteRewardsByQuery
        /// </summary>
        [Test]
        public void DeleteRewardsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.DeleteRewardsByQuery(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test GetRewards
        /// </summary>
        [Test]
        public void GetRewardsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetRewards(id, limit, skip);
            //Assert.IsInstanceOf(typeof(RewardResponse), response, "response is RewardResponse");
        }
        
        /// <summary>
        /// Test GetRewardsByQuery
        /// </summary>
        [Test]
        public void GetRewardsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.GetRewardsByQuery(body);
            //Assert.IsInstanceOf(typeof(RewardResponse), response, "response is RewardResponse");
        }
        
        /// <summary>
        /// Test UpdateRewards
        /// </summary>
        [Test]
        public void UpdateRewardsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<UpdateEntityRewardRequest> body = null;
            //var response = instance.UpdateRewards(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
    }

}