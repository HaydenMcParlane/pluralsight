using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using TheWorld.Models;
using AutoMapper;

namespace TheWorld
{
    public class Startup
    {
        private IConfigurationRoot _appConfig;
        private IHostingEnvironment _env;

        public Startup(IHostingEnvironment env)
        {
            _env = env;

            var builder = new ConfigurationBuilder()
                .SetBasePath(_env.ContentRootPath)
                .AddJsonFile("appconfig.json")
                .AddEnvironmentVariables();
            
            _appConfig = builder.Build();
        }        

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddSingleton(_appConfig);
            services.AddDbContext<WorldContext>();            
            services.AddTransient<WorldContextSeedData>();
            services.AddScoped<IWorldRepository, WorldRepository>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, 
        WorldContextSeedData seeder, ILoggerFactory loggerFactory)
        {
            // This code is called EVERY TIME a request is made. Equivalent of express middleware concept.
            loggerFactory.AddConsole();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();                
            }
            
            // Order of declarations is important     
            app.UseDefaultFiles();                   
            app.UseStaticFiles();                  
            app.UseMvc(config => {
                config.MapRoute(
                    name: "Default", 
                    template: "{controller}/{action}/{id?}",
                    defaults: new {controller = "App", action="Index"});
            }); 

            Mapper.Initialize(config => 
            {
                config.CreateMap<ViewModels.Trip, Models.Trip>().ReverseMap();
            });                      

            seeder.EnsureSeedData().Wait(); 
        }
    }
}
