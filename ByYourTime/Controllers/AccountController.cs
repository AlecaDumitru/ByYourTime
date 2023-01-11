using ByYourTime.Contracts;
using ByYourTime.Data.Models;
using ByYourTime.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace ByYourTime.Controllers
{
    public class AccountController : ControllerBase
    {
        private readonly UserManager<UserModel> _userManager;
        private readonly TokenService _tokenService;
        public AccountController(UserManager<UserModel> userManager, TokenService tokenService)
        {
            _userManager = userManager;
            _tokenService = tokenService;
        }



        [HttpPost("login")]
        public async Task<ActionResult<User>> Login([FromBody] Login login)
        {
            var user = await _userManager.FindByNameAsync(login.UserName);
            if (user == null || !await _userManager.CheckPasswordAsync(user, login.Password))
                return Unauthorized();
            return new User
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user)
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] Register register)
        {
            var user = new UserModel { UserName = register.UserName, Email = register.Email };
            var result = await _userManager.CreateAsync(user, register.Password);
            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }
                return ValidationProblem();
            }
            await _userManager.AddToRoleAsync(user, "Member");
            return StatusCode(201);
        }

        //use the token to get the user from the database and return a user with the token
        [Authorize]
        [HttpGet("currentUser")]
        public async Task<ActionResult<User>> GetCurrentUser()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);
            return new User
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user)
            };
        }
    }
}

