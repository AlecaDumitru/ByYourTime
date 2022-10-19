using ByYourTime.Data.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByYourTime.Data.Data
{
    public static class DbInitializer
    {
        public static async Task Initialize(AppDbContext context, UserManager<UserModel> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new UserModel
                {
                    UserName = "Alex",
                    Email = "alex@test.com"
                };
                await userManager.CreateAsync(user, "Pa$$1234");
                await userManager.AddToRoleAsync(user, "Member");

                var admin = new UserModel
                {
                    UserName = "Aleca",
                    Email = "admin@test.com"
                };
                await userManager.CreateAsync(user, "Pa$$1234");
                await userManager.AddToRolesAsync(admin, new[] {"Member", "Admin" });
            }
        }
    }
}
