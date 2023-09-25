using System.Collections.Generic;
using System.Diagnostics;
using Ziqni.Api;
using Ziqni.Model;

namespace Ziqni.Sample
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            var auth = new ZiqniAuth();
            var token = auth.passwordGrantTypeLogin("YOUR SPACE NAME", "YOUR USER NAME", "YOUR PASSWORD");
            token.Wait();
            
            Configuration.Default.BasePath = "https://api.ziqni.com";
            Configuration.Default.AccessToken = token.Result.AccessToken;
            
            var apiInstance = new CompetitionsApi(Configuration.Default);
            
            var body = new QueryRequest();
            body.Skip = 0;
            body.Limit = 20;

            var greaterThanEqual = new QuerySingle();
            greaterThanEqual.QueryField = "scheduledStartDate";
            greaterThanEqual.QueryValue = "2023-07-10T10:55:38.308Z";
            body.Gte.Add(greaterThanEqual);
            
            var lessThanEqual = new QuerySingle();
            lessThanEqual.QueryField = "scheduledStartDate";
            lessThanEqual.QueryValue = "2024-07-10T10:55:38.308Z";
            body.Lte.Add(lessThanEqual);
            

            try
            {
                var result = apiInstance.GetCompetitionsByQuery(body);
                Debug.WriteLine(result);
            }
            catch (ApiException e)
            {
                Debug.Print("Exception when calling CompetitionsApi.CreateCompetitions: " + e.Message );
                Debug.Print("Status Code: "+ e.ErrorCode);
                Debug.Print(e.StackTrace);
            }
            
            
        }
    }
}