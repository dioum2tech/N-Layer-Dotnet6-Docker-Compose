using DTS_Project.Shared.Configuration.Database.Interfaces;

namespace DTS_Project.Shared.Configuration.Database;

/// <summary>
/// Creates units of work, passing in the requested database connection
/// </summary>
public class UnitOfWorkFactory : IUnitOfWorkFactory
{
    private readonly IDbConnectionFactory connectionFactory;

    /// <summary>
    /// Initializes a new <see cref="UnitOfWorkFactory"/> instance
    /// </summary>
    /// <param name="connectionFactory"><see cref="IDbConnectionFactory"/> instance</param>
    public UnitOfWorkFactory(IDbConnectionFactory connectionFactory)
    {
        this.connectionFactory = connectionFactory;
    }

    /// <summary>
    /// Creates a new unit of work.
    /// </summary>
    /// <returns><see cref="IUnitOfWork" /></returns>
    public IUnitOfWork Create()
    {
        var connection = this.connectionFactory.Create();
        return new UnitOfWork(connection, true, TimeSpan.FromMinutes(1));
    }

    /// <summary>
    /// Creates a new unit of work.
    /// </summary>
    /// <param name="closeConnection">If set to true, the unit of work will close the connection on dispose</param>
    /// <returns><see cref="IUnitOfWork" /></returns>
    public IUnitOfWork Create(bool closeConnection = true)
    {
        var connection = this.connectionFactory.Create();
        return new UnitOfWork(connection, closeConnection, TimeSpan.FromMinutes(1));
    }

    /// <summary>
    /// Creates a new unit of work.
    /// </summary>
    /// <param name="closeConnection">If set to true, the unit of work will close the connection on dispose</param>
    /// <param name="timeout">Set the transaction scope timeout</param>
    /// <returns><see cref="IUnitOfWork" /></returns>
    public IUnitOfWork Create(bool closeConnection, TimeSpan timeout)
    {
        var connection = this.connectionFactory.Create();
        return new UnitOfWork(connection, closeConnection, timeout);
    }
}