using System.Data;

namespace DTS_Project.Shared.Configuration.Database.Interfaces;

public interface IDbConnectionFactory
{
    public IDbConnection Create();
}