using BoatLifestyle.Models;

namespace BoatLifestyle.Services
{
    public interface IProductService
    {
        List<Product> GetAllProducts();
        Product GetProductsById(int id);
        void AddProducts(Product pro);
        void UpdateProducts(Product pro);
        string DeleteProducts(int id);
        List<Product> GetProductByCategory(string category);
        List<string> GetImagesById(int id);
        List<CartModel> GetCartDetailsById(int id);
        void AddCart(CartModel pro);
        void UpdateCart(CartModel pro);


    }
}
