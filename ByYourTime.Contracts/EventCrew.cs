

using ByYourTime.Enums;

namespace ByYourTime.Contracts
{
    public class EventCrew
    {
        public int Id { get; set; }
        public string Name { get; set; } = default!;
        public Occupation Profession { get; set; } = default!;
    }
}
