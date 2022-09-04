using DTS_Project.Shared.Configuration.Database.Interfaces;
using DTS_Project.Shared.Configuration.Options;
using Microsoft.Extensions.Options;
using System.Data;
using System.Data.SqlClient;

namespace DTS_Project.Shared.Configuration.Database;

public class DbConnectionFactory : IDbConnectionFactory, IDisposable
{
    private bool disposed = false;

    protected DatabaseOptions DatabaseOptions { get; init; }

    protected IDbConnection? DatabaseConnection { get; set; }

    public DbConnectionFactory(IOptions<DatabaseOptions> databaseOptions)
    {
        this.DatabaseOptions = databaseOptions.Value;
    }

    public virtual IDbConnection Create()
    {
        this.DatabaseConnection = new SqlConnection(this.DatabaseOptions.ConnectionString);
        return this.DatabaseConnection;
    }

    protected virtual void Dispose(bool disposing)
    {
        if (!this.disposed)
        {
            if (disposing)
            {
                this.DatabaseConnection?.Dispose();
            }

            this.disposed = true;
        }
    }

    public void Dispose()
    {
        // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        this.Dispose(true);
        GC.SuppressFinalize(this);
    }
}