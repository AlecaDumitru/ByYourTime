using ByYourTime.Contracts.Responses;
using ByYourTime.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByYourTime.Logic
{
    public interface ICategoryService
    {
        public GetCategoriesResponse GetCategoriesOfEvents();
    }
}
