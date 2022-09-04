using AutoMapper;
using DTS_Project.Application.Services.Interfaces;
using DTS_Project.Domain.Interfaces;

namespace DTS_Project.Application.Services;

public class ServiceWrapper: IServiceWrapper
{
    private readonly Lazy<IVilleService> _lazyVilleService;

    public ServiceWrapper(IRepositoryWrapper repositoryWrapper, IMapper mapper)
    {
        _lazyVilleService = new Lazy<IVilleService>(() => new VilleService(repositoryWrapper, mapper));
    }

    IVilleService IServiceWrapper.Villes => _lazyVilleService.Value;
}