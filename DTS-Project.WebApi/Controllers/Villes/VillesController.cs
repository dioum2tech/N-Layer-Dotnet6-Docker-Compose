using DTS_Project.Application.DataTransfertObjects;
using DTS_Project.Application.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace DTS_Project.WebApi.Controllers.Villes
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class VillesController : ControllerBase
    {
        private readonly IServiceWrapper _serviceWrapper;

        public VillesController(IServiceWrapper serviceWrapper)
        {
            _serviceWrapper = serviceWrapper;
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<VilleDto>), 200)]
        public async Task<IActionResult> GetAllVilles()
        {
            var villes = await _serviceWrapper.Villes.GetAll();

            return Ok(villes);
        }
    }
}
