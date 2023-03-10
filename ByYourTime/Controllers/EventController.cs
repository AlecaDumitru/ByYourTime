using ByYourTime.Contracts;
using ByYourTime.Contracts.Responses;
using ByYourTime.Data;
using ByYourTime.Enums;
using ByYourTime.Logic;
using Microsoft.AspNetCore.Mvc;

namespace ByYourTime.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
       
        private readonly ILogger<EventController> _logger;
        private readonly IEventService _eventLogic;

        public EventController(ILogger<EventController> logger, IEventService eventLogic)
        {
            _logger = logger;
            this._eventLogic = eventLogic;
        }
        
        [HttpGet]
        public GetEventsResponse Get()
        {
            return _eventLogic.GetEvents();
        }

        

        [HttpGet("/{id}")]
        public GetEventResponse GetEventById(int id)
        {
            return _eventLogic.GetEvent(id);
        }


        [HttpGet("/events/category/{id}")]
        public async Task<ActionResult<GetEventsResponse>> GetAllEventsByCategoryId([FromRoute]int id)
        {
            var product = _eventLogic.GetAllEventsByCategoriesId(id);
            if (product == null || product.Events.Count == 0) return NotFound();
            return product;
        }


        [HttpPost]
        public void CreateEvent([FromBody] Event newEvent)
        {
            _eventLogic.CreateEvent(newEvent);  
        }

        [HttpPost("/{id}")]
        public void UpdateEvent([FromBody] Event @event, int id)
        {
            _eventLogic.UpdateEvent(@event);
        }

        [HttpDelete("/{id}")]
        public void DeleteEvent(int id)
        {
            _eventLogic.DeleteEvent(id);
        }
    }
}