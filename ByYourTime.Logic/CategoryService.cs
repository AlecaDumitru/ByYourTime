using ByYourTime.Contracts;
using ByYourTime.Contracts.Responses;
using ByYourTime.Data.Interfaces;
using ByYourTime.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByYourTime.Logic
{
    public class CategoryService : ICategoryService
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryService(ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;
        }
        public GetCategoriesResponse GetCategoriesOfEvents()
        {
            var categories = _categoryRepository.GetCategoriesDb();
            List<Category> categoriesList = new List<Category>();
            foreach (var c in categories)
            {
                var resultCategory = new Category()
                {
                    Name = c.Name,
                    Id = c.Id,
                };
                categoriesList.Add(resultCategory);
            }
            return new GetCategoriesResponse()
            {
                Categories = categoriesList
            };


        }

    }
}