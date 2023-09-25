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
    ///  Class for testing AchievementsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class AchievementsApiTests
    {
        private AchievementsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new AchievementsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of AchievementsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' AchievementsApi
            //Assert.IsInstanceOf(typeof(AchievementsApi), instance);
        }

        
        /// <summary>
        /// Test CreateAchievements
        /// </summary>
        [Test]
        public void CreateAchievementsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<CreateAchievementRequest> body = null;
            //var response = instance.CreateAchievements(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteAchievements
        /// </summary>
        [Test]
        public void DeleteAchievementsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //var response = instance.DeleteAchievements(id);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteAchievementsByQuery
        /// </summary>
        [Test]
        public void DeleteAchievementsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.DeleteAchievementsByQuery(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test GetAchievementToClone
        /// </summary>
        [Test]
        public void GetAchievementToCloneTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string id = null;
            //var response = instance.GetAchievementToClone(id);
            //Assert.IsInstanceOf(typeof(CloneAchievementResponse), response, "response is CloneAchievementResponse");
        }
        
        /// <summary>
        /// Test GetAchievements
        /// </summary>
        [Test]
        public void GetAchievementsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetAchievements(id, limit, skip);
            //Assert.IsInstanceOf(typeof(AchievementResponse), response, "response is AchievementResponse");
        }
        
        /// <summary>
        /// Test GetAchievementsByQuery
        /// </summary>
        [Test]
        public void GetAchievementsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.GetAchievementsByQuery(body);
            //Assert.IsInstanceOf(typeof(AchievementResponse), response, "response is AchievementResponse");
        }
        
        /// <summary>
        /// Test GetAntecendentsForAchievement
        /// </summary>
        [Test]
        public void GetAntecendentsForAchievementTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetAntecendentsForAchievement(id, limit, skip);
            //Assert.IsInstanceOf(typeof(AchievementResponse), response, "response is AchievementResponse");
        }
        
        /// <summary>
        /// Test GetIssuedAchievementsCountById
        /// </summary>
        [Test]
        public void GetIssuedAchievementsCountByIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string id = null;
            //var response = instance.GetIssuedAchievementsCountById(id);
            //Assert.IsInstanceOf(typeof(AchievementIssuedResponse), response, "response is AchievementIssuedResponse");
        }
        
        /// <summary>
        /// Test GetMembersAchievementsDetails
        /// </summary>
        [Test]
        public void GetMembersAchievementsDetailsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string id = null;
            //string memberId = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetMembersAchievementsDetails(id, memberId, limit, skip);
            //Assert.IsInstanceOf(typeof(MemberAchievementIssuedResponse), response, "response is MemberAchievementIssuedResponse");
        }
        
        /// <summary>
        /// Test UpdateAchievements
        /// </summary>
        [Test]
        public void UpdateAchievementsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<UpdateAchievementRequest> body = null;
            //var response = instance.UpdateAchievements(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test UpdateAchievementsLiveStatus
        /// </summary>
        [Test]
        public void UpdateAchievementsLiveStatusTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<AchievementLiveStatusRequest> body = null;
            //var response = instance.UpdateAchievementsLiveStatus(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
    }

}
