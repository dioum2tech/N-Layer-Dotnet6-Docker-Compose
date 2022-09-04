using DTS_Project.Domain.Interfaces;
using DTS_Project.Shared.Configuration.Database.Interfaces;

namespace DTS_Project.Persistence.Repositories;

public class RepositoryWrapper : IRepositoryWrapper
{
    private readonly Lazy<IVilleRepository> _lazyVilleRepository;

    public RepositoryWrapper(IUnitOfWorkFactory unitOfWorkFactory)
    {
        _lazyVilleRepository = new Lazy<IVilleRepository>(() => new VilleRepository(unitOfWorkFactory));
    }

    public IVilleRepository Villes => _lazyVilleRepository.Value;
}

