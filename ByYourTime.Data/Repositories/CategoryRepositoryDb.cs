using ByYourTime.Data.Data;
using ByYourTime.Data.Interfaces;
using ByYourTime.Data.Models;



namespace ByYourTime.Data.Repositories
{
    public class CategoryRepositoryDb : ICategoryRepository
    {
        private readonly AppDbContext _categoryDb;

        public CategoryRepositoryDb(AppDbContext categoryDb)
        {
            _categoryDb = categoryDb;
        }
        public List<CategoryModel> GetCategoriesDb()
        {
            var allCategories = _categoryDb.Categories.ToList();
            return allCategories;
        }
    }
}
