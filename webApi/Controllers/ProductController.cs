using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Threading.Tasks;
using webApi.DTO.product;
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

        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] CreateProduct createProductDto)
        {
            try {
                //map or convert dto to product model
                var productModel = new Product
                {
                    Name = createProductDto.Name,
                    Description = createProductDto.Description,
                    Price = createProductDto.Price,
                    PictureUrl = createProductDto.PictureUrl,
                    Category = createProductDto.Category,
                    Brand = createProductDto.Brand,
                    QuantityStocks = createProductDto.QuantityStocks

                };

                // use model to create product

                await _context.Products.AddAsync(productModel);
                await _context.SaveChangesAsync();
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet]
        [Route("{Id:Guid}")]
        public async Task<ActionResult<Product>> GetProductById([FromRoute]Guid Id)
        {
            var productItem = await _context.Products.FindAsync(Id);
            if(productItem == null)
            {
                return NotFound();
            }

            return Ok(productItem);
        }

    }
}
 