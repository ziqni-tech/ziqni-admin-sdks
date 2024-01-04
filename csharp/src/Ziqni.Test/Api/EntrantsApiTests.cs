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
    ///  Class for testing EntrantsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class EntrantsApiTests
    {
        private EntrantsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new EntrantsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of EntrantsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' EntrantsApi
            //Assert.IsInstanceOf(typeof(EntrantsApi), instance);
        }

        
        /// <summary>
        /// Test ExportEntrantsByQuery
        /// </summary>
        [Test]
        public void ExportEntrantsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest queryRequest = null;
            //var response = instance.ExportEntrantsByQuery(queryRequest);
            //Assert.IsInstanceOf(typeof(EntrantCountResponse), response, "response is EntrantCountResponse");
        }
        
        /// <summary>
        /// Test GetEntrantsByQuery
        /// </summary>
        [Test]
        public void GetEntrantsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest queryRequest = null;
            //var response = instance.GetEntrantsByQuery(queryRequest);
            //Assert.IsInstanceOf(typeof(EntrantResponse), response, "response is EntrantResponse");
        }
        
        /// <summary>
        /// Test UpdateEntrants
        /// </summary>
        [Test]
        public void UpdateEntrantsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //UpdateEntrantRequest body = null;
            //var response = instance.UpdateEntrants(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
    }

}