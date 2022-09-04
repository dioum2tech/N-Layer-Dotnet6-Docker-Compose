using Dapper;
using DTS_Project.Domain.Models;
using DTS_Project.Shared.Configuration.Database.Interfaces;
using System.Data;

namespace DTS_Project.Shared.QueryObjects.Villes;

public class GetAllVilles : IQuery<IEnumerable<Ville>>
{

    public GetAllVilles()
    {
    }

    public Task<IEnumerable<Ville>> QueryAsync(IDbConnection connection)
    {
        SqlBuilder.Template template = this.BuildQuery();

        return connection.QueryAsync<Ville>(template.RawSql, template.Parameters);
    }

    private SqlBuilder.Template BuildQuery()
    {
        const string baseQuery = @"
                SELECT
                     [V].[Id]
                    ,[V].[Nom]
                    ,[V].[Created_at]
                    ,[V].[Updated_at]
                FROM
                    [dbo].[Ville] [V]
                /**where**/";

        var builder = new SqlBuilder();

        return builder.AddTemplate(baseQuery);
    }
}