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
    ///  Class for testing GraphsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class GraphsApiTests
    {
        private GraphsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new GraphsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of GraphsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' GraphsApi
            //Assert.IsInstanceOf(typeof(GraphsApi), instance);
        }

        
        /// <summary>
        /// Test GetGraph
        /// </summary>
        [Test]
        public void GetGraphTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //EntityGraphRequest entityGraphRequest = null;
            //var response = instance.GetGraph(entityGraphRequest);
            //Assert.IsInstanceOf(typeof(EntityGraphResponse), response, "response is EntityGraphResponse");
        }
        
    }

}
