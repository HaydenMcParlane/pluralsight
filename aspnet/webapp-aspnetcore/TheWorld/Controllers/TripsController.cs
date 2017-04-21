using Microsoft.AspNetCore.Mvc;
using TheWorld.Models;

namespace TheWorld.Controllers{
    public class TripsController : Controller {
        // public TripsController()
        // {            
        // }

        [HttpGet("api/trips")]
        public IActionResult Get(){
            return Ok(new Trip(){ Name = "My Trip"});
        }

        [HttpPost("api/trips/{id}")]
        public IActionResult Post(int id){
            
        }
    }
}