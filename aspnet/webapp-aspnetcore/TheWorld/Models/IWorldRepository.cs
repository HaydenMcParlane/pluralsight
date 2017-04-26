using System.Collections.Generic;

namespace TheWorld.Models{
    public interface IWorldRepository{
        IEnumerable<Trip> GetTrips();
        bool AddTrips(IEnumerable<Trip> newTrips);
        bool AddTrip(Trip newTrip);
    }
}