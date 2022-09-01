
using ByYourTime.Data.Data;
using ByYourTime.Data.Models;

namespace ByYourTime.Data.Repositories
{
    public class EventRepositoryDb : IEventRepository
    {
        private readonly EventDbContext _eventDb;

        public EventRepositoryDb(EventDbContext eventDb)
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
            _eventDb.Events.Remove(GetEventDb(id));
            _eventDb.SaveChanges();
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
    }
}
