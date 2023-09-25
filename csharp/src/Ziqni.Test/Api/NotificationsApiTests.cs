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
    ///  Class for testing NotificationsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class NotificationsApiTests
    {
        private NotificationsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new NotificationsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of NotificationsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOf' NotificationsApi
            //Assert.IsInstanceOf(typeof(NotificationsApi), instance);
        }

        
        /// <summary>
        /// Test CreateNotifications
        /// </summary>
        [Test]
        public void CreateNotificationsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<CreateNotificationRequest> body = null;
            //var response = instance.CreateNotifications(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteNotifications
        /// </summary>
        [Test]
        public void DeleteNotificationsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //var response = instance.DeleteNotifications(id);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test DeleteNotificationsByQuery
        /// </summary>
        [Test]
        public void DeleteNotificationsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.DeleteNotificationsByQuery(body);
            //Assert.IsInstanceOf(typeof(ApiResponse), response, "response is ApiResponse");
        }
        
        /// <summary>
        /// Test GetNotifications
        /// </summary>
        [Test]
        public void GetNotificationsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> id = null;
            //int? limit = null;
            //int? skip = null;
            //var response = instance.GetNotifications(id, limit, skip);
            //Assert.IsInstanceOf(typeof(NotificationResponse), response, "response is NotificationResponse");
        }
        
        /// <summary>
        /// Test GetNotificationsByQuery
        /// </summary>
        [Test]
        public void GetNotificationsByQueryTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //QueryRequest body = null;
            //var response = instance.GetNotificationsByQuery(body);
            //Assert.IsInstanceOf(typeof(NotificationResponse), response, "response is NotificationResponse");
        }
        
    }

}
