using System.Collections.Generic;
using System.Linq;

namespace TheWorld.Models{
    public class WorldRepository : IWorldRepository{
        private WorldContext _worldContext;

        public WorldRepository(WorldContext WorldContext)
        {
            _worldContext = WorldContext;
        }

        public IEnumerable<Trip> GetTrips(){
            return _worldContext.Trips.ToList();
        }
        public bool AddTrip(Trip newTrip){
            return AddTrips( new List<Trip>(){ newTrip });
        }
        public bool AddTrips(IEnumerable<Trip> newTrips){
            _worldContext.Trips.AddRange(newTrips);
            return _worldContext.SaveChanges() > 0;
        }
    }
}