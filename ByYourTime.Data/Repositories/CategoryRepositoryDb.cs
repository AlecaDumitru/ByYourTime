using ByYourTime.Data.Data;
using ByYourTime.Data.Interfaces;
using ByYourTime.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByYourTime.Data.Repositories
{
    public class CategoryRepositoryDb : ICategoryRepository
    {
        private readonly CategoryDbContext _categoryDb;

        public CategoryRepositoryDb(CategoryDbContext categoryDb)
        {
            _categoryDb = categoryDb;
        }
        public List<CategoryModel> GetCategoriesDb()
        {
            throw new NotImplementedException();
        }
    }
}
