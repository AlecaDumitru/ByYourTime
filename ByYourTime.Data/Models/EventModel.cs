using ByYourTime.Contracts;
using ByYourTime.Enums;


namespace ByYourTime.Data.Models
{
    public class EventModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = default!;
        public string Description { get; set; } = default!;
        public decimal Price { get; set; }
        public string DateOfEvent { get; set; } = default!;
        public string Location { get; set; } = default!;
        public int NumberOfSeatsAvailable { get; set; }
        public bool IsItOutdoor { get; set; }
        public string CategoryOfEvent { get; set; } = default!;
        public DateTime CreatedAt { get; set; } = default!;
        public List<EventCrew> EventCrew { get; set; } = default!;
    }
}
