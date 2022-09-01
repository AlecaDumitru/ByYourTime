
using ByYourTime.Contracts;
using ByYourTime.Enums;

namespace ByYourTime.Data
{
    public class EventRepository : IEventRepository
    {
        List<DbEventContext> _dbEvents;

        public EventRepository()
        {
            _dbEvents = new List<DbEventContext>();
            for(int i=0; i<10; i++)
            {
                _dbEvents.Add(new DbEventContext
                {
                    Id = i,
                    Name = "Bookfest",
                    Description = "book fair",
                    Price = 50,
                    DateOfEvent = "27.11.2022",
                    Location = "Bucuresti",
                    NumberOfSeatsAvailable = 10,
                    IsItOutdoor = true,
                    TypeOfEvent = CategoriesOfEvents.Fairs,
                    CreatedAt = DateTime.Now,
                    EventCrew = new List<EventCrew>
                    {
                        new EventCrew
                        {
                            Id =i,
                            Name = "Sara",
                            Profession = Occupation.Musician,
                        }
                    }
                });
                ;
            }
        }

        public List<DbEventContext> GetEventsDb()
        {
            return _dbEvents.OrderByDescending(x=>x.CreatedAt).ToList();
        }

        public DbEventContext? GetEventDb(int id)
        {
            return _dbEvents.FirstOrDefault(x => x.Id == id);
        }

        public void CreateEventDb(DbEventContext dbEvent)
        {
            _dbEvents.Add(dbEvent);
              
        }

        public void UpdateEventDb(DbEventContext dbEvent)
        {
            var eventDbById = _dbEvents.Where(x=> x.Id == dbEvent.Id).FirstOrDefault();
            if (eventDbById != null)
            {
                eventDbById = dbEvent;
            }
            else
            {
                throw new Exception("Event was not found.");
            }

        }

        public void DeleteEventDb(int id)
        {

            _dbEvents.Remove(GetEventDb(id));
        }
    }
}
