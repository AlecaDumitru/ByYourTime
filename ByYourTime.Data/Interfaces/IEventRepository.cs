

using ByYourTime.Contracts;
using ByYourTime.Contracts.Responses;
using ByYourTime.Data.Models;

namespace ByYourTime.Data
{
    public interface IEventRepository
    {
        public List<EventModel> GetEventsDb();
        public EventModel GetEventDb(int id);
        public void CreateEventDb(EventModel dbEvent);
        public void UpdateEventDb(EventModel dbEvent);
        public void DeleteEventDb(int id);
    }
}
