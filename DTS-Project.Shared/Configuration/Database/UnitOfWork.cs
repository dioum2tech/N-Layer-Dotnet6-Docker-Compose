using DTS_Project.Shared.Configuration.Database.Interfaces;
using System.Data;
using System.Transactions;

namespace DTS_Project.Shared.Configuration.Database;

/// <summary>
/// Represents a single database unit of work.
/// Uses a single database connection and manages transactions.
/// </summary>
public class UnitOfWork : IUnitOfWork
{
    private bool disposed = false;

    private readonly IDbConnection connection;

    private TransactionScope transactionScope;

    private readonly bool closeConnection;

    private readonly TimeSpan transactionTimeout;

    /// <summary>
    /// Initializes a new <see cref="UnitOfWork"/> instance.
    /// </summary>
    /// <param name="connection"><see cref="IDbConnection"/> instance. The connection will be opened if necessary</param>
    /// <param name="closeConnection">Specifies if the connection should be closed at the end of the <see cref="UnitOfWork"/>'s lifetime</param>
    /// <param name="timeout">Specifies the timeout to allow on the unit of work</param>
    public UnitOfWork(IDbConnection connection, bool closeConnection, TimeSpan timeout)
    {
        this.closeConnection = closeConnection;
        this.transactionTimeout = timeout;

        this.transactionScope = this.StartTransactionScope();

        // Open connection and start a new transaction
        if (connection.State != ConnectionState.Open)
        {
            connection.Open();
        }

        this.connection = connection;
    }

    /// <summary>
    /// Commits the current transaction and begin a new one
    /// </summary>
    public void Commit()
    {
        try
        {
            this.transactionScope?.Complete();
        }
        finally
        {
            this.transactionScope?.Dispose();
            this.transactionScope = this.StartTransactionScope();
        }
    }

    /// <summary>
    /// Executes a <see cref="ICommand{T}"/> query object with the database connection
    /// </summary>
    /// <typeparam name="T">Return type of the query object</typeparam>
    /// <param name="command"><see cref="ICommand{T}"/> object to execute</param>
    /// <returns>The return value of the query object</returns>
    public Task<T> ExecuteAsync<T>(ICommand<T> command)
    {
        return command.ExecuteAsync(this.connection);
    }

    /// <summary>
    /// Executes a <see cref="IQuery{T}"/> query object with the database connection
    /// </summary>
    /// <typeparam name="T">Return type of the query object</typeparam>
    /// <param name="query"><see cref="IQuery{T}"/> object to execute</param>
    /// <returns>The return value of the query object</returns>
    public Task<T> QueryAsync<T>(IQuery<T> query)
    {
        return query.QueryAsync(this.connection);
    }

    /// <summary>
    /// Creates a new nested async transaction scope
    /// </summary>
    /// <returns>New <see cref="TransactionScope"/> instance</returns>
    private TransactionScope StartTransactionScope()
    {
        return new TransactionScope(TransactionScopeOption.RequiresNew, this.transactionTimeout, TransactionScopeAsyncFlowOption.Enabled);
    }

    #region IDisposable Support

    /// <summary>
    /// Disposes managed resources.
    /// Rollbacks any unfinished transactions and closes the connection.
    /// </summary>
    /// <param name="disposing"></param>
    protected virtual void Dispose(bool disposing)
    {
        if (!this.disposed)
        {
            if (disposing)
            {
                // IDbTransaction.Dispose() rollbacks an uncomitted transaction
                this.transactionScope?.Dispose();

                // The connection is not disposed here, this is the DI container responsability
                if (this.closeConnection)
                {
                    this.connection?.Close();
                }
            }

            this.disposed = true;
        }
    }

    // This code added to correctly implement the disposable pattern.
    public void Dispose()
    {
        // Do not change this code. Put cleanup code in Dispose(bool disposing) above.
        this.Dispose(true);
        GC.SuppressFinalize(this);
    }

    #endregion
}