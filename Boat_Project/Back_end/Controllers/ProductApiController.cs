using BoatLifestyle.Models;
using BoatLifestyle.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BoatLifestyle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductApiController : ControllerBase
    {
        public IProductService _serv;

        public ProductApiController(IProductService serv)
        {
            _serv = serv;
        }

        [HttpGet]
        public IActionResult GetAllProducts()
        {
            return Ok(_serv.GetAllProducts());
        }

        [HttpGet("{id}")]
        public IActionResult GetProductsById(int id)
        {
            if (_serv.GetProductsById(id) == null)
            {
                return NotFound(new { result = "No such record found " });
            }
            else
            {
                return Ok(_serv.GetProductsById(id));
            }
        }

        [HttpPost]
        public IActionResult AddProducts(Product pro)
        {
            _serv.AddProducts(pro);
            return Ok(new { Result = "Products added successfully" });
        }

        [HttpPut]
        public IActionResult UpdateProducts(Product pro)
        {
            _serv.UpdateProducts(pro);
            return Ok(new { Result = "Products updated successfully" });
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProducts(int id)
        {
            string r = _serv.DeleteProducts(id);
            if (r == "Null")
            {
                return NotFound(new { result = "No such record found to delete" });
            }
            else
            {
                return Ok(new { result = "Deleted successfully" });
            }
        }

        [HttpGet]
        [Route("Category/{category}")]

        public IActionResult GetProductByCategory(string category)
        {
            if (_serv.GetProductByCategory(category) == null)
            {
                return NotFound(new { result = "No such record found " });
            }
            else
            {
                return Ok(_serv.GetProductByCategory(category));
            }
        }

        [HttpGet]
        [Route("Images/{id}")]
        public IActionResult GetImagesById(int id)
        {
            if (_serv.GetImagesById(id) == null)
            {
                return NotFound(new { result = "No such record found " });
            }
            else
            {
                return Ok(_serv.GetImagesById(id));
            }
        }

        [HttpGet]
        [Route("Cart/{id}")]
        public IActionResult GetCartById(int id)
        {
            if (_serv.GetCartDetailsById(id) == null)
            {
                return NotFound(new { result = "No such record found " });
            }
            else
            {
                return Ok(_serv.GetCartDetailsById(id));
            }
        }

        [HttpPost]
        [Route("Cart")]
        public IActionResult AddCart(CartModel pro)
        {
            _serv.AddCart(pro);
            return Ok(new { Result = "Products added successfully" });
        }

        [HttpPut]
        [Route("Cart")]
        public IActionResult UpdateCart(CartModel pro)
        {
            _serv.UpdateCart(pro);
            return Ok(new { Result = "Products added successfully" });
        }

    }
}
