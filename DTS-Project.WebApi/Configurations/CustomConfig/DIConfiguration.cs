using DTS_Project.Application.Services;
using DTS_Project.Application.Services.Interfaces;
using DTS_Project.Domain.Interfaces;
using DTS_Project.Persistence.Repositories;
using DTS_Project.Shared.Configuration.Database;
using DTS_Project.Shared.Configuration.Database.Interfaces;
using DTS_Project.Shared.Configuration.Options;

namespace DTS_Project.WebApi.Configurations.CustomConfig
{
    public static class DIConfiguration
    {
        public static IServiceCollection AddDependencyInjectionConfiguration(this IServiceCollection services, IConfiguration configuration)
        {
            // Add configuration settings
            services.AddOptions()
                    .Configure<JwtOptions>(configuration.GetSection(OptionsClasses.Jwt))
                    .Configure<CorsOptions>(configuration.GetSection(OptionsClasses.Cors))
                    .Configure<DatabaseOptions>(configuration.GetSection(OptionsClasses.Database))
                    .Configure<EmailOptions>(configuration.GetSection(OptionsClasses.Email))
                    .Configure<ApiFeatureFlagsOptions>(configuration.GetSection(OptionsClasses.FeatureFlags));

            // Add custom services to the container
            services.AddScoped<IDbConnectionFactory, ApiDbConnectionFactory>()
                    .AddScoped<IUnitOfWorkFactory, UnitOfWorkFactory>()
                    .AddScoped<IServiceWrapper, ServiceWrapper>()
                    .AddScoped<IRepositoryWrapper, RepositoryWrapper>();

            // Repositories
            services.AddTransient<IVilleRepository, VilleRepository>();

            // Services
            services.AddTransient<IVilleService, VilleService>();

            return services;
        }
    }
}

