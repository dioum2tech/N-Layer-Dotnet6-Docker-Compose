using AutoMapper;
using DTS_Project.Application.DataTransfertObjects;
using DTS_Project.Domain.Models;

namespace DTS_Project.Application.Configurations.Helpers;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<Ville, VilleDto>().ReverseMap();

        //CreateMap<User, UserNameViewModel>()
        //    .ForMember(dest => dest.FName, opt => opt.MapFrom(src => src.FirstName))
        //    .ForMember(dest => dest.LName, opt => opt.MapFrom(src => src.LastName))
        //    .ForMember(dest => dest.Description, opt => opt.Ignore())
        //    .AfterMap((_, dest) =>
        //    {
        //        dest.DateCreated = DateTime.Now;
        //    })
        //    .ReverseMap();
    }
}