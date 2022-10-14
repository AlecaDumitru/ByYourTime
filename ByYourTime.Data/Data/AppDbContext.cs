using ByYourTime.Data.Models;
using Microsoft.EntityFrameworkCore;


namespace ByYourTime.Data.Data
{
    public class AppDbContext : DbContext
    {

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)

        {

        }

        public DbSet<EventModel> Events { get; set; }

        public DbSet<CategoryModel> Categories { get; set; }
    }
}
