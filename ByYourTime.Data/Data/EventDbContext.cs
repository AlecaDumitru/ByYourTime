using ByYourTime.Data.Models;
using Microsoft.EntityFrameworkCore;


namespace ByYourTime.Data.Data
{
    public class EventDbContext : DbContext
    {

        public EventDbContext(DbContextOptions<EventDbContext> options) : base(options)

        {

        }

        public DbSet<EventModel> Events { get; set; }


    }
}
