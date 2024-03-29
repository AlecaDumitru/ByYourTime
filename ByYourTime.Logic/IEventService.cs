﻿
using ByYourTime.Contracts;
using ByYourTime.Contracts.Responses;
using ByYourTime.Data;
using ByYourTime.Data.Models;

namespace ByYourTime.Logic
{
    public interface IEventService
    {
        public GetEventsResponse GetEvents();
        public GetEventResponse GetEvent(int id);
        public void CreateEvent(Event newEvent);
        public void UpdateEvent(Event newEvent);
        public void DeleteEvent(int id);
        public GetEventsResponse GetAllEventsByCategoriesId(int id);
    }
}
