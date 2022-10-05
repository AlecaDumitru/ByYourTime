using ByYourTime.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByYourTime.Data.Interfaces
{
    public interface ICategoryRepository
    {
        public List<CategoryModel> GetCategoriesDb();
    }
}
