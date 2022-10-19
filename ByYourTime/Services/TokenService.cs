using ByYourTime.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ByYourTime.Services
{
    public class TokenService
    {
        private readonly UserManager<UserModel> _userManager;
        private readonly IConfiguration _config;
        public TokenService(UserManager<UserModel> userManager, IConfiguration config)
        {
            _userManager = userManager;
            _config = config;
        }

        public async Task<string> GenerateToken(UserModel user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Name, user.UserName)
            };
            var roles = await _userManager.GetRolesAsync(user);
            foreach (var role in roles)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JWTSettings:TokenKey"]));
            
            // the algorithm used to sign the key, HmacSha512 is the strongest available
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);

            var tokenOptions = new JwtSecurityToken(
                issuer: null,
                audience: null,
                claims: claims,
                expires: DateTime.Now.AddDays(7),
                signingCredentials: credentials
                );
            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        }

    }
}
