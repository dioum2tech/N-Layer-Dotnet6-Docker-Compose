using System.Data;

namespace DTS_Project.Shared.Configuration.Database.Interfaces;

/// <summary>
/// Represents a command to execute against a database connection.
/// </summary>
public interface ICommand<T>
{
    /// <summary>
    /// Executes a command against a database connection
    /// </summary>
    /// <param name="connection">Database connection</param>
    /// <returns>The value returned by the query object</returns>
    Task<T> ExecuteAsync(IDbConnection connection);
}