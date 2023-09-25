using System;
using System.Net.Http;
using System.Threading.Tasks;
using IdentityModel.Client;

namespace Ziqni
{
    public class ZiqniAuth
    {
        public async Task<TokenResponse> passwordGrantTypeLogin(String spaceName, String username, String password)
        {
            var client = new HttpClient();
            var response = await client.RequestPasswordTokenAsync(new PasswordTokenRequest
            {
                Address = "https://identity.ziqni.com/realms/ziqni/protocol/openid-connect/token",
                ClientId = spaceName + ".ziqni.app",
                UserName = username,
                Password = password
            });
            
            return response;
        }
        
        public async Task refreshTokenGrantType(String spaceName, String refreshToken)
        {
            var client = new HttpClient();
            var response = await client.RequestRefreshTokenAsync(new RefreshTokenRequest
            {
                Address = "https://identity.ziqni.com/realms/ziqni/protocol/openid-connect/token",
                ClientId = spaceName + ".ziqni.app",
                RefreshToken = refreshToken
            });
        }
    }   
}