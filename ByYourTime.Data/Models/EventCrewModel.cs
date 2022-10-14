using ByYourTime.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByYourTime.Data.Models
{
    public class EventCrewModel
    {
      
            public int Id { get; set; }
            public string Name { get; set; } = default!;
            public Occupation Profession { get; set; } = default!;
        
    }
}
