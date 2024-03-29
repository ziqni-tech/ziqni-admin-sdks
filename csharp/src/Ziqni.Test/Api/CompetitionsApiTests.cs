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
    ///  Class for testing CompetitionsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class CompetitionsApiTests
    {
        private CompetitionsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new CompetitionsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of CompetitionsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' CompetitionsApi
            //Assert.IsInstanceOf(typeof(CompetitionsApi), instance);
        }

        
        /// <summary>
        /// Test CreateCompetitions
        /// </summary>
        [Test]
        public void CreateCompetitionsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //CreateCompetitionRequest body = null;
            //var response = instance.CreateCompetitions(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test CreateSimpleCompetitions
        /// </summary>
        [Test]
        public void CreateSimpleCompetitionsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //CreateSimpleCompetitionRequest body = null;
            //var response = instance.CreateSimpleCompetitions(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test GetCompetitions
        /// </summary>
        [Test]
        public void GetCompetitionsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetCompetitions(id, limit, skip);
            //Assert.IsInstanceOf(typeof(CompetitionResponse), response, "response is CompetitionResponse");
        }
        
        /// <summary>
        /// Test GetCompetitionsByQuery
        /// </summary>
        [Test]
        public void GetCompetitionsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.GetCompetitionsByQuery(body);
            //Assert.IsInstanceOf(typeof(CompetitionResponse), response, "response is CompetitionResponse");
        }
        
        /// <summary>
        /// Test GetCompetitionsToClone
        /// </summary>
        [Test]
        public void GetCompetitionsToCloneTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string id = null;
            //var response = instance.GetCompetitionsToClone(id);
            //Assert.IsInstanceOf(typeof(CloneCompetitionResponse), response, "response is CloneCompetitionResponse");
        }
        
        /// <summary>
        /// Test GetLeaderboardByCompetitionId
        /// </summary>
        [Test]
        public void GetLeaderboardByCompetitionIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetLeaderboardByCompetitionId(id, limit, skip);
            //Assert.IsInstanceOf(typeof(CompetitionLeaderboardResponse), response, "response is CompetitionLeaderboardResponse");
        }
        
        /// <summary>
        /// Test UpdateCompetitions
        /// </summary>
        [Test]
        public void UpdateCompetitionsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //UpdateCompetitionRequest body = null;
            //var response = instance.UpdateCompetitions(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test UpdateCompetitionsState
        /// </summary>
        [Test]
        public void UpdateCompetitionsStateTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<UpdateCompetitionStatusRequest> body = null;
            //var response = instance.UpdateCompetitionsState(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
    }

}
