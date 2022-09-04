namespace DTS_Project.Application.Services.Interfaces;

public interface IGenericService<T> where T : class
{
    Task<T?> GetById(int id);
    Task<IEnumerable<T>> GetAll();
    Task<bool> Add(T entity);
    Task<bool> Remove(int id);
    Task<bool> Update(T entity);
}