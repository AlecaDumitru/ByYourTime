using ByYourTime.Contracts.Responses;
using ByYourTime.Enums;
using ByYourTime.Logic;
using Microsoft.AspNetCore.Mvc;

namespace ByYourTime.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase
    {

        private readonly ILogger<CategoryController> _logger;
        private readonly ICategoryService _categoryLogic;

        public CategoryController(ILogger<CategoryController> logger, ICategoryService categoryLogic)
        {
            _logger = logger;
            this._categoryLogic = categoryLogic;
        }

        [HttpGet]
        public GetCategoriesResponse getCategories()
        {
            return _categoryLogic.GetCategoriesOfEvents();

        }
    }
}
