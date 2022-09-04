using AutoMapper;
using DTS_Project.Application.DataTransfertObjects;
using DTS_Project.Application.Services.Interfaces;
using DTS_Project.Domain.Interfaces;
using DTS_Project.Domain.Models;

namespace DTS_Project.Application.Services;

public class VilleService: IVilleService
{
    private readonly IRepositoryWrapper _repositoryWrapper;
    private readonly IMapper _mapper;

    public VilleService(IRepositoryWrapper repositoryWrapper, IMapper mapper)
    {
        _mapper = mapper;
        _repositoryWrapper = repositoryWrapper;
    }

    public async Task<IEnumerable<VilleDto>> GetAll()
    {
        IEnumerable<Ville> villes = await _repositoryWrapper.Villes.GetAll();
        if(villes != null)
        {
            return _mapper.Map<IEnumerable<VilleDto>>(villes.ToList());
        }
        return Enumerable.Empty<VilleDto>();
    }

    public Task<bool> Add(VilleDto entity)
    {
        throw new NotImplementedException();
    }

    public Task<VilleDto?> GetById(int id)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Remove(int id)
    {
        throw new NotImplementedException();
    }

    public Task<bool> Update(VilleDto entity)
    {
        throw new NotImplementedException();
    }
}