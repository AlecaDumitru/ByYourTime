using ByYourTime.Data.Models;
using Microsoft.EntityFrameworkCore;


namespace ByYourTime.Data.Data
{
    public class EventDbContext : DbContext
    {
#pragma warning disable CS8618 // Non-nullable property 'Events' must contain a non-null value when exiting constructor. Consider declaring the property as nullable.
        public EventDbContext(DbContextOptions<EventDbContext> options) : base(options)
#pragma warning restore CS8618 // Non-nullable property 'Events' must contain a non-null value when exiting constructor. Consider declaring the property as nullable.
        {

        }

        public DbSet<EventModel> Events { get; set; }


    }
}
