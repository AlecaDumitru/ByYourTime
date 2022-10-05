using ByYourTime.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByYourTime.Data.Data
{
    public class CategoryDbContext : DbContext
    {

        public CategoryDbContext(DbContextOptions<CategoryDbContext> options) : base(options)

        {

        }

        public DbSet<CategoryModel> CategoryOfEvent{ get; set; }
    }
}
