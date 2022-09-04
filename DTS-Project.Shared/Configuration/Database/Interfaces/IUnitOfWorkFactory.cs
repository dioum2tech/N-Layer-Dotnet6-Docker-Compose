namespace DTS_Project.Shared.Configuration.Database.Interfaces;

/// <summary>
/// Creates units of work, passing in the database connection
/// </summary>
public interface IUnitOfWorkFactory
{
    /// <summary>
    /// Creates a new unit of work.
    /// </summary>
    /// <param name="closeConnection">If set to true, the unit of work will close the connection on dispose</param>
    /// <returns><see cref="IUnitOfWork" /></returns>
    IUnitOfWork Create(bool closeConnection = true);

    /// <summary>
    /// Creates a new unit of work.
    /// </summary>
    /// <param name="closeConnection">If set to true, the unit of work will close the connection on dispose</param>
    /// <param name="timeout">Set the transaction scope timeout</param>
    /// <returns><see cref="IUnitOfWork" /></returns>
    public IUnitOfWork Create(bool closeConnection, TimeSpan timeout);
}