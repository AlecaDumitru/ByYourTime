
using ByYourTime.Data.Data;
using ByYourTime.Data.Models;

namespace ByYourTime.Data.Repositories
{
    public class EventRepositoryDb : IEventRepository
    {
        private readonly AppDbContext _eventDb;

        public EventRepositoryDb(AppDbContext eventDb)
        {
            _eventDb = eventDb;
        }

        public void CreateEventDb(EventModel dbEvent)
        {
            _eventDb.Events.Add(dbEvent);
            _eventDb.SaveChanges();
        }


        public void DeleteEventDb(int id)
        {
            var dbEvent = _eventDb.Events.FirstOrDefault(e => e.Id == id);
            if (dbEvent != null)
            {
                _eventDb.Events.Remove(dbEvent);
                _eventDb.SaveChanges();
            }
            else
            {
                throw new Exception("Event was not found.");
            }
            
            
            
        }

        public EventModel GetEventDb(int id)
        {
            return _eventDb.Events.FirstOrDefault(e => e.Id == id);
        }

        public List<EventModel> GetEventsDb()
        {
            return _eventDb.Events.OrderBy(x=>x.Id).ToList();
        }

        public void UpdateEventDb(EventModel dbEvent)
        {
            _eventDb.Events.Update(dbEvent);
            _eventDb.SaveChanges();
        }


        public List<EventModel> GetEventsByCategoryId(int id)
        {

            var eventsByCategoryId = _eventDb.Events.Where(x=>x.CategoryId == id).OrderByDescending(x=>x.CreatedAt).ToList();
            return eventsByCategoryId;
        }
    }
}
