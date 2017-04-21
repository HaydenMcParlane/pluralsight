using Microsoft.AspNetCore.Mvc;
using TheWorld;
using AutoMapper;
using Microsoft.Extensions.Logging;
using System;

namespace TheWorld.Controllers{
    [Route("api/trips")]
    public class TripsController : Controller {

        private ILogger<TripsController> _logger;

        public TripsController(ILogger<TripsController> logger)
        {            
            _logger = logger;
        }

        [HttpGet("")]
        public IActionResult GetTrips(){
            try{
                return Ok(new ViewModels.Trip(){ Name = "My Trip"});
            }catch(Exception ex){
                _logger.LogError($"Failed to get trips: {ex}");
                return BadRequest("Get request failed.");
            }            
        }

        [HttpPost("")]        
        public IActionResult InsertTrips([FromBody]ViewModels.Trip tripViewModel){
            if(ModelState.IsValid){
                var trip = Mapper.Map<Models.Trip>(tripViewModel);
                return Created($"api/trips/{tripViewModel.Name}", Mapper.Map<ViewModels.Trip>(trip));
            }
            return BadRequest(ModelState);
        }
    }
}