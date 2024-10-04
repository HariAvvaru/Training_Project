using BoatLifestyle.Models;
using BoatLifestyle.Repositories;
using Microsoft.EntityFrameworkCore;

namespace BoatLifestyle.Services
{
    public class ProductService:IProductService
    {
        public IProductRepository _repo;

        public ProductService(IProductRepository repo)
        {
            _repo = repo;
        }

        public List<Product> GetAllProducts()
        {
            return _repo.GetAllProducts();
        }

        public Product GetProductsById(int id)
        {
            Product prod = _repo.GetProductsById(id);
            return prod;
        }

        public void AddProducts(Product pro)
        {
            _repo.AddProducts(pro);
        }

        public void UpdateProducts(Product pro)
        {
            _repo.UpdateProducts(pro);
        }

        public string DeleteProducts(int id)
        {
            return _repo.DeleteProducts(id);
        }

        public List<Product> GetProductByCategory(string category)
        {
            List<Product> pro = _repo.GetProductByCategory(category);
            return pro;
        }
        public List<string> GetImagesById(int id)
        {
                List<string> prod = _repo.GetImagesById(id);
                return prod;
        }

        public List<CartModel> GetCartDetailsById(int id)
        {
            List<CartModel> prod = _repo.GetCartDetailsById(id);
            return prod;
        }

        public void AddCart(CartModel pro)
        {
            _repo.AddCart(pro);
            
        }

        public void UpdateCart(CartModel pro)
        {
            _repo.UpdateCart(pro);

        }
    }
}
