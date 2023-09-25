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
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading;
using RestSharp;
using Ziqni.Client;
using Ziqni.Model;

namespace Ziqni.Api
{
    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public interface IEntrantsApi : IApiAccessor
    {
        #region Synchronous Operations
        /// <summary>
        /// Get entrants by query
        /// </summary>
        /// <remarks>
        /// Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <returns>EntrantCountResponse</returns>
        EntrantCountResponse ExportEntrantsByQuery (QueryRequest queryRequest = default(QueryRequest));

        /// <summary>
        /// Get entrants by query
        /// </summary>
        /// <remarks>
        /// Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <returns>ApiResponse of EntrantCountResponse</returns>
        ApiResponse<EntrantCountResponse> ExportEntrantsByQueryWithHttpInfo (QueryRequest queryRequest = default(QueryRequest));
        /// <summary>
        /// Get entrants by query
        /// </summary>
        /// <remarks>
        /// Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <returns>EntrantResponse</returns>
        EntrantResponse GetEntrantsByQuery (QueryRequest queryRequest = default(QueryRequest));

        /// <summary>
        /// Get entrants by query
        /// </summary>
        /// <remarks>
        /// Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <returns>ApiResponse of EntrantResponse</returns>
        ApiResponse<EntrantResponse> GetEntrantsByQueryWithHttpInfo (QueryRequest queryRequest = default(QueryRequest));
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Updates the status of the Entrants for a Competition id provided
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Updates the status of the Entrants (optional)</param>
        /// <returns>ApiResponse</returns>
        ApiResponse UpdateEntrants (UpdateEntrantRequest body = default(UpdateEntrantRequest));

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Updates the status of the Entrants for a Competition id provided
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Updates the status of the Entrants (optional)</param>
        /// <returns>ApiResponse of ApiResponse</returns>
        ApiResponse<ApiResponse> UpdateEntrantsWithHttpInfo (UpdateEntrantRequest body = default(UpdateEntrantRequest));
        #endregion Synchronous Operations
        #region Asynchronous Operations
        /// <summary>
        /// Get entrants by query
        /// </summary>
        /// <remarks>
        /// Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of EntrantCountResponse</returns>
        System.Threading.Tasks.Task<EntrantCountResponse> ExportEntrantsByQueryAsync (QueryRequest queryRequest = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Get entrants by query
        /// </summary>
        /// <remarks>
        /// Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (EntrantCountResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<EntrantCountResponse>> ExportEntrantsByQueryWithHttpInfoAsync (QueryRequest queryRequest = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken));
        /// <summary>
        /// Get entrants by query
        /// </summary>
        /// <remarks>
        /// Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of EntrantResponse</returns>
        System.Threading.Tasks.Task<EntrantResponse> GetEntrantsByQueryAsync (QueryRequest queryRequest = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// Get entrants by query
        /// </summary>
        /// <remarks>
        /// Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (EntrantResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<EntrantResponse>> GetEntrantsByQueryWithHttpInfoAsync (QueryRequest queryRequest = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken));
        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Updates the status of the Entrants for a Competition id provided
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Updates the status of the Entrants (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse</returns>
        System.Threading.Tasks.Task<ApiResponse> UpdateEntrantsAsync (UpdateEntrantRequest body = default(UpdateEntrantRequest), CancellationToken cancellationToken = default(CancellationToken));

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>
        /// Updates the status of the Entrants for a Competition id provided
        /// </remarks>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Updates the status of the Entrants (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (ApiResponse)</returns>
        System.Threading.Tasks.Task<ApiResponse<ApiResponse>> UpdateEntrantsWithHttpInfoAsync (UpdateEntrantRequest body = default(UpdateEntrantRequest), CancellationToken cancellationToken = default(CancellationToken));
        #endregion Asynchronous Operations
    }

    /// <summary>
    /// Represents a collection of functions to interact with the API endpoints
    /// </summary>
    public partial class EntrantsApi : IEntrantsApi
    {
        private Ziqni.Client.ExceptionFactory _exceptionFactory = (name, response) => null;

        /// <summary>
        /// Initializes a new instance of the <see cref="EntrantsApi"/> class.
        /// </summary>
        /// <returns></returns>
        public EntrantsApi(String basePath)
        {
            this.Configuration = new Ziqni.Client.Configuration { BasePath = basePath };

            ExceptionFactory = Ziqni.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EntrantsApi"/> class
        /// </summary>
        /// <returns></returns>
        public EntrantsApi()
        {
            this.Configuration = Ziqni.Client.Configuration.Default;

            ExceptionFactory = Ziqni.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="EntrantsApi"/> class
        /// using Configuration object
        /// </summary>
        /// <param name="configuration">An instance of Configuration</param>
        /// <returns></returns>
        public EntrantsApi(Ziqni.Client.Configuration configuration = null)
        {
            if (configuration == null) // use the default one in Configuration
                this.Configuration = Ziqni.Client.Configuration.Default;
            else
                this.Configuration = configuration;

            ExceptionFactory = Ziqni.Client.Configuration.DefaultExceptionFactory;
        }

        /// <summary>
        /// Gets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        public String GetBasePath()
        {
            return this.Configuration.ApiClient.RestClient.BaseUrl.ToString();
        }

        /// <summary>
        /// Sets the base path of the API client.
        /// </summary>
        /// <value>The base path</value>
        [Obsolete("SetBasePath is deprecated, please do 'Configuration.ApiClient = new ApiClient(\"http://new-path\")' instead.")]
        public void SetBasePath(String basePath)
        {
            // do nothing
        }

        /// <summary>
        /// Gets or sets the configuration object
        /// </summary>
        /// <value>An instance of the Configuration</value>
        public Ziqni.Client.Configuration Configuration {get; set;}

        /// <summary>
        /// Provides a factory method hook for the creation of exceptions.
        /// </summary>
        public Ziqni.Client.ExceptionFactory ExceptionFactory
        {
            get
            {
                if (_exceptionFactory != null && _exceptionFactory.GetInvocationList().Length > 1)
                {
                    throw new InvalidOperationException("Multicast delegate for ExceptionFactory is unsupported.");
                }
                return _exceptionFactory;
            }
            set { _exceptionFactory = value; }
        }

        /// <summary>
        /// Gets the default header.
        /// </summary>
        /// <returns>Dictionary of HTTP header</returns>
        [Obsolete("DefaultHeader is deprecated, please use Configuration.DefaultHeader instead.")]
        public IDictionary<String, String> DefaultHeader()
        {
            return new ReadOnlyDictionary<string, string>(this.Configuration.DefaultHeader);
        }

        /// <summary>
        /// Add default header.
        /// </summary>
        /// <param name="key">Header field name.</param>
        /// <param name="value">Header field value.</param>
        /// <returns></returns>
        [Obsolete("AddDefaultHeader is deprecated, please use Configuration.AddDefaultHeader instead.")]
        public void AddDefaultHeader(string key, string value)
        {
            this.Configuration.AddDefaultHeader(key, value);
        }

        /// <summary>
        /// Get entrants by query Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <returns>EntrantCountResponse</returns>
        public EntrantCountResponse ExportEntrantsByQuery (QueryRequest queryRequest = default(QueryRequest))
        {
             ApiResponse<EntrantCountResponse> localVarResponse = ExportEntrantsByQueryWithHttpInfo(queryRequest);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Get entrants by query Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <returns>ApiResponse of EntrantCountResponse</returns>
        public ApiResponse<EntrantCountResponse> ExportEntrantsByQueryWithHttpInfo (QueryRequest queryRequest = default(QueryRequest))
        {

            var localVarPath = "/entrants/export";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (queryRequest != null && queryRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(queryRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = queryRequest; // byte array
            }

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("ExportEntrantsByQuery", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<EntrantCountResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (EntrantCountResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(EntrantCountResponse)));
        }

        /// <summary>
        /// Get entrants by query Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of EntrantCountResponse</returns>
        public async System.Threading.Tasks.Task<EntrantCountResponse> ExportEntrantsByQueryAsync (QueryRequest queryRequest = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken))
        {
             ApiResponse<EntrantCountResponse> localVarResponse = await ExportEntrantsByQueryWithHttpInfoAsync(queryRequest, cancellationToken);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Get entrants by query Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (EntrantCountResponse)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<EntrantCountResponse>> ExportEntrantsByQueryWithHttpInfoAsync (QueryRequest queryRequest = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken))
        {

            var localVarPath = "/entrants/export";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (queryRequest != null && queryRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(queryRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = queryRequest; // byte array
            }

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType, cancellationToken);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("ExportEntrantsByQuery", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<EntrantCountResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (EntrantCountResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(EntrantCountResponse)));
        }

        /// <summary>
        /// Get entrants by query Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <returns>EntrantResponse</returns>
        public EntrantResponse GetEntrantsByQuery (QueryRequest queryRequest = default(QueryRequest))
        {
             ApiResponse<EntrantResponse> localVarResponse = GetEntrantsByQueryWithHttpInfo(queryRequest);
             return localVarResponse.Data;
        }

        /// <summary>
        /// Get entrants by query Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <returns>ApiResponse of EntrantResponse</returns>
        public ApiResponse<EntrantResponse> GetEntrantsByQueryWithHttpInfo (QueryRequest queryRequest = default(QueryRequest))
        {

            var localVarPath = "/entrants/query";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (queryRequest != null && queryRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(queryRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = queryRequest; // byte array
            }

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("GetEntrantsByQuery", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<EntrantResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (EntrantResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(EntrantResponse)));
        }

        /// <summary>
        /// Get entrants by query Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of EntrantResponse</returns>
        public async System.Threading.Tasks.Task<EntrantResponse> GetEntrantsByQueryAsync (QueryRequest queryRequest = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken))
        {
             ApiResponse<EntrantResponse> localVarResponse = await GetEntrantsByQueryWithHttpInfoAsync(queryRequest, cancellationToken);
             return localVarResponse.Data;

        }

        /// <summary>
        /// Get entrants by query Retrieve ConteEntrants from Ziqni database by unique Contests ID&#39;s or any other POST body parameters using the POST method
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="queryRequest"> (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (EntrantResponse)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<EntrantResponse>> GetEntrantsByQueryWithHttpInfoAsync (QueryRequest queryRequest = default(QueryRequest), CancellationToken cancellationToken = default(CancellationToken))
        {

            var localVarPath = "/entrants/query";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (queryRequest != null && queryRequest.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(queryRequest); // http body (model) parameter
            }
            else
            {
                localVarPostBody = queryRequest; // byte array
            }

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType, cancellationToken);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("GetEntrantsByQuery", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<EntrantResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (EntrantResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(EntrantResponse)));
        }

        /// <summary>
        ///  Updates the status of the Entrants for a Competition id provided
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Updates the status of the Entrants (optional)</param>
        /// <returns>ApiResponse</returns>
        public ApiResponse UpdateEntrants (UpdateEntrantRequest body = default(UpdateEntrantRequest))
        {
             ApiResponse<ApiResponse> localVarResponse = UpdateEntrantsWithHttpInfo(body);
             return localVarResponse.Data;
        }

        /// <summary>
        ///  Updates the status of the Entrants for a Competition id provided
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Updates the status of the Entrants (optional)</param>
        /// <returns>ApiResponse of ApiResponse</returns>
        public ApiResponse<ApiResponse> UpdateEntrantsWithHttpInfo (UpdateEntrantRequest body = default(UpdateEntrantRequest))
        {

            var localVarPath = "/entrants";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (body != null && body.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(body); // http body (model) parameter
            }
            else
            {
                localVarPostBody = body; // byte array
            }

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) this.Configuration.ApiClient.CallApi(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("UpdateEntrants", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<ApiResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (ApiResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(ApiResponse)));
        }

        /// <summary>
        ///  Updates the status of the Entrants for a Competition id provided
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Updates the status of the Entrants (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse</returns>
        public async System.Threading.Tasks.Task<ApiResponse> UpdateEntrantsAsync (UpdateEntrantRequest body = default(UpdateEntrantRequest), CancellationToken cancellationToken = default(CancellationToken))
        {
             ApiResponse<ApiResponse> localVarResponse = await UpdateEntrantsWithHttpInfoAsync(body, cancellationToken);
             return localVarResponse.Data;

        }

        /// <summary>
        ///  Updates the status of the Entrants for a Competition id provided
        /// </summary>
        /// <exception cref="Ziqni.Client.ApiException">Thrown when fails to make API call</exception>
        /// <param name="body">Updates the status of the Entrants (optional)</param>
        /// <param name="cancellationToken">Cancellation Token to cancel request (optional) </param>
        /// <returns>Task of ApiResponse (ApiResponse)</returns>
        public async System.Threading.Tasks.Task<ApiResponse<ApiResponse>> UpdateEntrantsWithHttpInfoAsync (UpdateEntrantRequest body = default(UpdateEntrantRequest), CancellationToken cancellationToken = default(CancellationToken))
        {

            var localVarPath = "/entrants";
            var localVarPathParams = new Dictionary<String, String>();
            var localVarQueryParams = new List<KeyValuePair<String, String>>();
            var localVarHeaderParams = new Dictionary<String, String>(this.Configuration.DefaultHeader);
            var localVarFormParams = new Dictionary<String, String>();
            var localVarFileParams = new Dictionary<String, FileParameter>();
            Object localVarPostBody = null;

            // to determine the Content-Type header
            String[] localVarHttpContentTypes = new String[] {
                "application/json"
            };
            String localVarHttpContentType = this.Configuration.ApiClient.SelectHeaderContentType(localVarHttpContentTypes);

            // to determine the Accept header
            String[] localVarHttpHeaderAccepts = new String[] {
                "application/json"
            };
            String localVarHttpHeaderAccept = this.Configuration.ApiClient.SelectHeaderAccept(localVarHttpHeaderAccepts);
            if (localVarHttpHeaderAccept != null)
                localVarHeaderParams.Add("Accept", localVarHttpHeaderAccept);

            if (body != null && body.GetType() != typeof(byte[]))
            {
                localVarPostBody = this.Configuration.ApiClient.Serialize(body); // http body (model) parameter
            }
            else
            {
                localVarPostBody = body; // byte array
            }

            // authentication (OAuth2) required
            // oauth required
            if (!String.IsNullOrEmpty(this.Configuration.AccessToken))
            {
                localVarHeaderParams["Authorization"] = "Bearer " + this.Configuration.AccessToken;
            }

            // make the HTTP request
            IRestResponse localVarResponse = (IRestResponse) await this.Configuration.ApiClient.CallApiAsync(localVarPath,
                Method.POST, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarFileParams,
                localVarPathParams, localVarHttpContentType, cancellationToken);

            int localVarStatusCode = (int) localVarResponse.StatusCode;

            if (ExceptionFactory != null)
            {
                Exception exception = ExceptionFactory("UpdateEntrants", localVarResponse);
                if (exception != null) throw exception;
            }

            return new ApiResponse<ApiResponse>(localVarStatusCode,
                localVarResponse.Headers.ToDictionary(x => x.Name, x => string.Join(",", x.Value)),
                (ApiResponse) this.Configuration.ApiClient.Deserialize(localVarResponse, typeof(ApiResponse)));
        }

    }
}
