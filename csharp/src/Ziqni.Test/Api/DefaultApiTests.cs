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

namespace Ziqni.Test
{
    /// <summary>
    ///  Class for testing DefaultApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class DefaultApiTests
    {
        private DefaultApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new DefaultApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of DefaultApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' DefaultApi
            //Assert.IsInstanceOf(typeof(DefaultApi), instance);
        }

        
        /// <summary>
        /// Test DeleteSpace
        /// </summary>
        [Test]
        public void DeleteSpaceTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string name = null;
            //instance.DeleteSpace(name);
            
        }
        
        /// <summary>
        /// Test UnsubscribeFromEntityChanges
        /// </summary>
        [Test]
        public void UnsubscribeFromEntityChangesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string subscriptionId = null;
            //instance.UnsubscribeFromEntityChanges(subscriptionId);
            
        }
        
    }

}