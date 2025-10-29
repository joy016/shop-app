using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Threading.Tasks;
using webApi.Models;

namespace webApi.Controllers
{
    [Route("product/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase

    {
        private readonly DatabaseContext _context;

        // Inject your DbContext using dependency injection
        public ProductController(DatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()   
        {
            try
            {
                var productList = await _context.Products.ToListAsync();
                return Ok(productList);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }

 
        }
    }
}
