using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByYourTime.Data.Models
{
    public class CategoryModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = default!;
        public EventModel Event { get; set; } = default!;
    }
}
