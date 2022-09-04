using DTS_Project.Shared.Configuration.Database.Interfaces;
using DTS_Project.Shared.Configuration.Options;
using Microsoft.Extensions.Options;
using StackExchange.Profiling;
using StackExchange.Profiling.Data;
using System.Data;
using System.Data.SqlClient;

namespace DTS_Project.Shared.Configuration.Database;

public class ApiDbConnectionFactory : DbConnectionFactory, IDbConnectionFactory
{
    private readonly ApiFeatureFlagsOptions featureFlags;

    public ApiDbConnectionFactory(IOptions<DatabaseOptions> databaseOptions, IOptions<ApiFeatureFlagsOptions> featureFlagsOptions) : base(databaseOptions)
    {
        this.featureFlags = featureFlagsOptions.Value;
    }

    public override IDbConnection Create()
    {
        var baseConnection = new SqlConnection(this.DatabaseOptions.ConnectionString);

        // If enabled, wrap the connection in a profilable connection used by MiniProfiler
        if (this.featureFlags.EnableMiniProfiler)
        {
            this.DatabaseConnection = new ProfiledDbConnection(baseConnection, MiniProfiler.Current);
        }
        else
        {
            this.DatabaseConnection = baseConnection;
        }

        return this.DatabaseConnection;
    }
}