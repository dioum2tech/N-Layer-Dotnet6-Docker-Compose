using System.Data;

namespace DTS_Project.Shared.Configuration.Database.Interfaces;

public interface IQuery<T>
{
    /// <summary>
    /// Executes a query against a database connection
    /// </summary>
    /// <param name="connection">Database connection</param>
    Task<T> QueryAsync(IDbConnection connection);
}