
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
            List<Event> eventsList = new List<Event>();
            foreach (var e in events)
            {
                var resultEvent = new Event()
                {

                    Id = e.Id,
                    Name = e.Name,
                    Description = e.Description,
                    Price = e.Price,
                    DateOfEvent = e.DateOfEvent,
                    Location = e.Location,
                    NumberOfSeatsAvailable = e.NumberOfSeatsAvailable,
                    IsItOutdoor = e.IsItOutdoor,
                    CategoryId = e.CategoryId,
                    CreatedAt = e.CreatedAt,
                    //EventCrew = new List<EventCrew>()

                };
                //foreach(var crew in e.EventCrew)
                //{
                //    resultEvent.EventCrew.Add(new EventCrew()
                //    {
                //        Id=crew.Id,
                //        Name=crew.Name,
                //        Profession = crew.Profession,
                //    });
                //}
                eventsList.Add(resultEvent);
            }
            return new GetEventsResponse()
            {
                Events = eventsList
            };
              
        }

        public GetEventsResponse GetAllEventsByCategoriesId(int id)
        {
            var events = _eventRepository.GetEventsByCategoryId(id);
            List<Event> eventsList = new List<Event>();
            foreach (var e in events)
            {
                var resultEvent = new Event()
                {

                    Id = e.Id,
                    Name = e.Name,
                    Description = e.Description,
                    Price = e.Price,
                    DateOfEvent = e.DateOfEvent,
                    Location = e.Location,
                    NumberOfSeatsAvailable = e.NumberOfSeatsAvailable,
                    IsItOutdoor = e.IsItOutdoor,
                    CategoryId = e.CategoryId,
                    CreatedAt = e.CreatedAt,
                    PictureURL = e.PictureURL,
                    Currency = e.Currency,
                    //EventCrew = new List<EventCrew>()

                };
                //foreach(var crew in e.EventCrew)
                //{
                //    resultEvent.EventCrew.Add(new EventCrew()
                //    {
                //        Id=crew.Id,
                //        Name=crew.Name,
                //        Profession = crew.Profession,
                //    });
                //}
                eventsList.Add(resultEvent);
            }
            return new GetEventsResponse()
            {
                Events = eventsList
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
                CategoryId = eventContext.CategoryId,
                CreatedAt = eventContext.CreatedAt,
                PictureURL= eventContext.PictureURL,
                 Currency = eventContext.Currency,
                //EventCrew = eventContext.EventCrew,
            };

        }

        public void CreateEvent(Event newEvent)
        {
            var eventDb = new EventModel()
            {
                
                Name=newEvent.Name,
                Description=newEvent.Description,
                Price=newEvent.Price,
                DateOfEvent=newEvent.DateOfEvent,
                Location=newEvent.Location,
                NumberOfSeatsAvailable=newEvent.NumberOfSeatsAvailable,
                IsItOutdoor=newEvent.IsItOutdoor,
                CategoryId = newEvent.CategoryId,
                CreatedAt=newEvent.CreatedAt,
                EventCrew = new List<EventCrewModel>()
            };
            foreach (var crew  in newEvent.EventCrew)
            {
                eventDb.EventCrew.Add(new EventCrewModel()
                {
                    
                    Name = crew.Name,
                    Profession = crew.Profession,
                });
            }
            _eventRepository.CreateEventDb(eventDb);
            
        }

        public void UpdateEvent(Event newEvent)
        {
            var eventDb = new EventModel()
            {
                
                Name = newEvent.Name,
                Description = newEvent.Description,
                Price = newEvent.Price,
                DateOfEvent = newEvent.DateOfEvent,
                Location = newEvent.Location,
                NumberOfSeatsAvailable = newEvent.NumberOfSeatsAvailable,
                IsItOutdoor = newEvent.IsItOutdoor,
                CategoryId  = newEvent.CategoryId,
                CreatedAt = newEvent.CreatedAt,
                //EventCrew = newEvent.EventCrew,
            };
            _eventRepository.UpdateEventDb(eventDb);
        }

        public void DeleteEvent(int id)
        {
            _eventRepository.DeleteEventDb(id);
        }

        
    }
}

