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
    ///  Class for testing EntityChangesApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class EntityChangesApiTests
    {
        private EntityChangesApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new EntityChangesApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of EntityChangesApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' EntityChangesApi
            //Assert.IsInstanceOf(typeof(EntityChangesApi), instance);
        }

        
        /// <summary>
        /// Test ManageEntityChangeSubscription
        /// </summary>
        [Test]
        public void ManageEntityChangeSubscriptionTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //EntityChangeSubscriptionRequest entityChangeSubscriptionRequest = null;
            //var response = instance.ManageEntityChangeSubscription(entityChangeSubscriptionRequest);
            //Assert.IsInstanceOf(typeof(EntityChangeSubscriptionResponse), response, "response is EntityChangeSubscriptionResponse");
        }
        
    }

}
