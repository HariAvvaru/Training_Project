using BoatLifestyle.Models;

namespace BoatLifestyle.Repositories
{
    public class ProductRepository:IProductRepository
    {
        public ProductDbContext _context;
        public ProductRepository(ProductDbContext context)
        {
            _context = context;
        }

        public List<Product> GetAllProducts()
        {
            List<Product> prod = _context.Products.ToList();
            return prod;
        }

        public Product GetProductsById(int id)
        {
            Product prod = _context.Products.Find(id);
            return prod;
        }

        public void AddProducts(Product pro)
        {
            _context.Products.Add(pro);
            _context.SaveChanges();
        }
        public void UpdateProducts(Product pro)
        {
            _context.Products.Update(pro);
            _context.SaveChanges();
        }
        public string DeleteProducts(int id)
        {
            Product obj = _context.Products.Find(id);
            if (obj == null)
            {
                return "Null";
            }
            else
            {
                _context.Products.Remove(obj);
                _context.SaveChanges();
                return "Success";
            }
        }

        public List<Product> GetProductByCategory(string category)
        {
            if (string.IsNullOrEmpty(category))
            {
                return new List<Product>();
            }

            List<Product> dt = _context.Products.Where(product => product.Category == category).ToList();
            return dt;
        }

        public List<string> GetImagesById(int id)
        {
                List<string> prod = _context.Images.Where(product => product.ProductId == id).Select(x=>x.ImageUrl).ToList();
                return prod;
        }

        public List<CartModel> GetCartDetailsById(int id)
        {
            List<CartModel> prod = _context.Cart.Where(product => product.UserId == id).ToList();
            return prod;
        }

        public void AddCart(CartModel pro)
        {
            _context.Cart.Add(pro);
            _context.SaveChanges();
        }

        public void UpdateCart(CartModel pro)
        {
            _context.Cart.Update(pro);
            _context.SaveChanges();

        }

    }
}
