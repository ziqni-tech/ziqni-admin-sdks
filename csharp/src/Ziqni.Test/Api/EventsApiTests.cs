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
    ///  Class for testing EventsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class EventsApiTests
    {
        private EventsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new EventsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of EventsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' EventsApi
            //Assert.IsInstanceOf(typeof(EventsApi), instance);
        }

        
        /// <summary>
        /// Test CreateEvents
        /// </summary>
        [Test]
        public void CreateEventsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<CreateEventRequest> body = null;
            //var response = instance.CreateEvents(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test GetEvents
        /// </summary>
        [Test]
        public void GetEventsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetEvents(id, limit, skip);
            //Assert.IsInstanceOf(typeof(EventResponse), response, "response is EventResponse");
        }
        
        /// <summary>
        /// Test GetEventsByQuery
        /// </summary>
        [Test]
        public void GetEventsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.GetEventsByQuery(body);
            //Assert.IsInstanceOf(typeof(EventResponse), response, "response is EventResponse");
        }
        
    }

}
