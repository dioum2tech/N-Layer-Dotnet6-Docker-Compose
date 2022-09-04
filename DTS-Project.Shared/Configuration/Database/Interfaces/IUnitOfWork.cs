namespace DTS_Project.Shared.Configuration.Database.Interfaces;

/// <summary>
/// Represents a single database unit of work.
/// Uses a single database connection and manages transactions.
/// </summary>
public interface IUnitOfWork : IDisposable
{
    /// <summary>
    /// Executes a <see cref="ICommand{T}"/> query object with the database connection
    /// </summary>
    /// <typeparam name="T">Return type of the query object</typeparam>
    /// <param name="command"><see cref="ICommand{T}"/> object to execute</param>
    /// <returns>The return value of the query object</returns>
    Task<T> ExecuteAsync<T>(ICommand<T> command);

    /// <summary>
    /// Executes a <see cref="IQuery{T}"/> query object with the database connection
    /// </summary>
    /// <typeparam name="T">Return type of the query object</typeparam>
    /// <param name="query"><see cref="IQuery{T}"/> object to execute</param>
    /// <returns>The return value of the query object</returns>
    Task<T> QueryAsync<T>(IQuery<T> query);

    /// <summary>
    /// Commits the current transaction and begin a new one
    /// </summary>
    void Commit();
}