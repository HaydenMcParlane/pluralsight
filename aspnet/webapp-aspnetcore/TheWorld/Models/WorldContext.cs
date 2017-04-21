using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace TheWorld.Models{
    public class WorldContext : DbContext {
        private IConfigurationRoot _appConfig;

        public WorldContext(IConfigurationRoot appConfig, DbContextOptions options) : base(options)
        {
            _appConfig = appConfig;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            base.OnConfiguring(optionsBuilder);                        
            optionsBuilder.UseNpgsql(_appConfig["connectionStrings:worldContextConnection"]);
        }

        public DbSet<Trip> Trips { get; set; }
        public DbSet<Stop> Stops { get; set; }
    }
}