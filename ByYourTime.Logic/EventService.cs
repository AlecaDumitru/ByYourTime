
using ByYourTime.Contracts;
using ByYourTime.Contracts.Responses;
using ByYourTime.Data;
using ByYourTime.Data.Models;

namespace ByYourTime.Logic
{
    public class EventService : IEventService
    {
        private readonly IEventRepository _eventRepository;

        public EventService(IEventRepository eventRepository)
        {
            _eventRepository = eventRepository;
        }



        public GetEventsResponse GetEvents()
        {

            var events = _eventRepository.GetEventsDb();
            return new GetEventsResponse()
            {
                Events = events.Select(x => new Event()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Description = x.Description,
                    Price = x.Price,
                    DateOfEvent = x.DateOfEvent,
                    Location = x.Location,
                    NumberOfSeatsAvailable = x.NumberOfSeatsAvailable,
                    IsItOutdoor = x.IsItOutdoor,
                    TypeOfEvent = x.TypeOfEvent,
                    CreatedAt = x.CreatedAt,
                    EventCrew = x.EventCrew
                }).ToList(),
            };
        }

        public GetEventResponse GetEvent(int id)
        {
            var eventContext = _eventRepository.GetEventDb(id);
            return new GetEventResponse()
            {
                Id = eventContext.Id,
                Name = eventContext.Name,
                Description = eventContext.Description,
                Price = eventContext.Price,
                DateOfEvent = eventContext.DateOfEvent,
                Location = eventContext.Location,
                NumberOfSeatsAvailable = eventContext.NumberOfSeatsAvailable,
                IsItOutdoor = eventContext.IsItOutdoor,
                TypeOfEvent = eventContext.TypeOfEvent,
                CreatedAt = eventContext.CreatedAt,
                EventCrew = eventContext.EventCrew,
            };

        }

        public void CreateEvent(Event newEvent)
        {
            var eventDb = new EventModel()
            {
                //Id = newEvent.Id,
                Name=newEvent.Name,
                Description=newEvent.Description,
                Price=newEvent.Price,
                DateOfEvent=newEvent.DateOfEvent,
                Location=newEvent.Location,
                NumberOfSeatsAvailable=newEvent.NumberOfSeatsAvailable,
                IsItOutdoor=newEvent.IsItOutdoor,
                TypeOfEvent=newEvent.TypeOfEvent,
                CreatedAt=newEvent.CreatedAt,
                EventCrew=newEvent.EventCrew,
            };
            _eventRepository.CreateEventDb(eventDb);
            
        }

        public void UpdateEvent(Event newEvent)
        {
            var eventDb = new EventModel()
            {
                // Id = newEvent.Id,
                Name = newEvent.Name,
                Description = newEvent.Description,
                Price = newEvent.Price,
                DateOfEvent = newEvent.DateOfEvent,
                Location = newEvent.Location,
                NumberOfSeatsAvailable = newEvent.NumberOfSeatsAvailable,
                IsItOutdoor = newEvent.IsItOutdoor,
                TypeOfEvent = newEvent.TypeOfEvent,
                CreatedAt = newEvent.CreatedAt,
                EventCrew = newEvent.EventCrew,
            };
            _eventRepository.UpdateEventDb(eventDb);
        }

        public void DeleteEvent(int id)
        {
            _eventRepository.DeleteEventDb(id);
        }
    }
}

