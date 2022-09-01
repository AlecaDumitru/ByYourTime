

using ByYourTime.Enums;

namespace ByYourTime.Contracts.Requests
{
    public class UpdateEventRequest
    {
    
        public string Name { get; set; } = default!;
        public string Description { get; set; } = default!;
        public decimal Price { get; set; }
        public string DateOfEvent { get; set; } = default!;
        public string Location { get; set; } = default!;
        public int NumberOfSeatsAvailable { get; set; }
        public bool IsItOutdoor { get; set; }
        public CategoriesOfEvents TypeOfEvent  { get; set; } = default!;
        public List<EventCrew> EventCrew { get; set; } = default!;
    }
}
