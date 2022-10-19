using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ByYourTime.Contracts
{
    public class Register : Login
    {
        public string Email { get; set; }
    }
}
