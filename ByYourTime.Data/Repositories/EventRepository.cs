
//using ByYourTime.Contracts;
//using ByYourTime.Enums;

//namespace ByYourTime.Data
//{
//    public class EventRepository : IEventRepository
//    {

//        public List<DbEventDetails> _dbEvents;

//        public EventRepository()
//        {
//            _dbEvents = new List<DbEventDetails>();
//            for (int i = 0; i < 10; i++)
//            {
//                _dbEvents.Add(new DbEventDetails
//                {
//                    Id = i,
//                    Name = "Bookfest",
//                    Description = "book fair",
//                    Price = 50,
//                    DateOfEvent = "27.11.2022",
//                    Location = "Bucuresti",
//                    NumberOfSeatsAvailable = 10,
//                    IsItOutdoor = true,
//                    TypeOfEvent = CategoriesOfEvents.Fairs,
//                    CreatedAt = DateTime.Now,
//                    EventCrew = new List<EventCrew>
//                    {
//                        new EventCrew
//                        {
//                            Id =i,
//                            Name = "Sara",
//                            Profession = Occupation.Musician,
//                        }
//                    }
//                });
//                ;
//            }
//        }

//        public List<DbEventDetails> GetEventsDb()
//        {
//            return _dbEvents.OrderByDescending(x => x.CreatedAt).ToList();
//        }

//#pragma warning disable CS8766 // Nullability of reference types in return type of 'DbEventDetails? EventRepository.GetEventDb(int id)' doesn't match implicitly implemented member 'DbEventDetails IEventRepository.GetEventDb(int id)' (possibly because of nullability attributes).
//        public DbEventDetails? GetEventDb(int id)
//#pragma warning restore CS8766 // Nullability of reference types in return type of 'DbEventDetails? EventRepository.GetEventDb(int id)' doesn't match implicitly implemented member 'DbEventDetails IEventRepository.GetEventDb(int id)' (possibly because of nullability attributes).
//        {
//            return _dbEvents.FirstOrDefault(x => x.Id == id);
//        }

//        public void CreateEventDb(DbEventDetails dbEvent)
//        {
//            _dbEvents.Add(dbEvent);

//        }

//        public void UpdateEventDb(DbEventDetails dbEvent)
//        {
//            var eventDbById = _dbEvents.Where(x => x.Id == dbEvent.Id).FirstOrDefault();
//            if (eventDbById != null)
//            {
//                eventDbById = dbEvent;
//            }
//            else
//            {
//                throw new Exception("Event was not found.");
//            }

//        }

//        public void DeleteEventDb(int id)
//        {

//#pragma warning disable CS8604 // Possible null reference argument for parameter 'item' in 'bool List<DbEventDetails>.Remove(DbEventDetails item)'.
//            _dbEvents.Remove(GetEventDb(id));
//#pragma warning restore CS8604 // Possible null reference argument for parameter 'item' in 'bool List<DbEventDetails>.Remove(DbEventDetails item)'.
//        }
//    }
//}
