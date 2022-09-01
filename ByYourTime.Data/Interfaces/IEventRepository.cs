

using ByYourTime.Contracts;
using ByYourTime.Contracts.Responses;

namespace ByYourTime.Data
{
    public interface IEventRepository
    {
        public List<DbEventContext> GetEventsDb();
        public DbEventContext GetEventDb(int id);
        public void CreateEventDb(DbEventContext dbEvent);
        public void UpdateEventDb(DbEventContext dbEvent);
        public void DeleteEventDb(int id);
    }
}
