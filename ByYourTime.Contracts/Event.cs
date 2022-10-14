

using ByYourTime.Enums;

namespace ByYourTime.Contracts
{
    public class Event
    {
        public int Id { get; set; }
        public string Name { get; set; } = default!;
        public string Description { get; set; } = default!;
        public decimal Price { get; set; }
        public string Currency { get; set; }
        public string DateOfEvent { get; set; } = default!;
        public string Location { get; set; } = default!;
        public int NumberOfSeatsAvailable { get; set; }
        public bool IsItOutdoor { get; set; }
        public int CategoryId { get; set; } = default!;
        public DateTime CreatedAt { get; set; } = default!;
        public List<EventCrew> EventCrew { get; set; } = default!;
        public string PictureURL { get; set; } = default!;
    }
}
