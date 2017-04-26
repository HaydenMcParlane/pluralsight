using System.Collections.Generic;

namespace TheWorld.Models{
    public interface IWorldRepository{
        IEnumerable<Trip> GetTrips();
    }
}