using DTS_Project.Domain.Interfaces;
using DTS_Project.Domain.Models;
using DTS_Project.Shared.Configuration.Database.Interfaces;
using DTS_Project.Shared.QueryObjects.Villes;

namespace DTS_Project.Persistence.Repositories;

public class VilleRepository : IVilleRepository
{
    private readonly IUnitOfWorkFactory unitOfWorkFactory;

    public VilleRepository(IUnitOfWorkFactory unitOfWorkFactory)
    {
        this.unitOfWorkFactory = unitOfWorkFactory;
    }

    public async Task<bool> Add(Ville entity)
    {
        //var sql = "INSERT INTO [dbo].[Ville] ([Sku], [Name], [Manufacturer],[Price]) VALUES (@Sku, @Name, @Manufacturer, @Price)";

        //using (var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
        //{
        //    connection.Open();
        //    var result = await connection.ExecuteAsync(sql, entity);
        //    return true;
        //}
        return true;
    }

    public async Task<IEnumerable<Ville>> GetAll()
    {
        using var unitOfWork = this.unitOfWorkFactory.Create();
        GetAllVilles getAllVilles = new();
        return await unitOfWork.QueryAsync(getAllVilles);
    }

    public async Task<Ville?> GetById(int id)
    {
        //SqlBuilder.Template template = BuildQueryGetById(id);
        //using (var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
        //{
        //    connection.Open();
        //    var result = await connection.QuerySingleOrDefaultAsync<Ville>(template.RawSql, template.Parameters);
        //    return result;
        //}
        return null;
    }

    public async Task<bool> Remove(int id)
    {
        //var sql = "DELETE FROM Villes WHERE Id = @Id";
        //using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
        //{
        //    connection.Open();
        //    var result = await connection.ExecuteAsync(sql, new { Id = id });
        //    return true;
        //}
        return true;
    }

    public async Task<bool> Update(Ville entity)
    {
        //var sql = "UPDATE Ville SET Sku = @Sku, Name = @Name, Manufacturer = @Manufacturer, Price = @Price WHERE Id = @Id";

        //using (SqlConnection connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
        //{
        //    connection.Open();
        //    await connection.ExecuteAsync(sql, entity);
        //    return true;
        //}
        return true;
    }
}