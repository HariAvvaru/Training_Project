using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static BoatLifestyle.Models.LoginModel;

namespace BoatLifestyle.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ProductDescription { get; set; }
        public string ProductSpecification { get; set; }
        public int UnitPrice { get; set; }
        public int Quantity { get; set; }
        public string Category { get; set; }
        public int ReviewsCount { get; set; }
        public int Discount { get; set; }
        public double Rating { get; set; }
        public string ImgUrl { get; set; }
    }
    public class Image
    {

        public int ImageId { get; set; }
        public int ProductId { get; set; }
        public string ImageUrl { get; set; }
    }

    public class CartModel
    {
        [Key]
        public int CartId { get; set; }
        public int ProductId{ get; set; }
	    public int UserId { get; set; }
        public int Quantity { get; set; }
    }
    public class ProductDbContext : DbContext
    {
        // This property refer the databse table 
        // Multiple tables required multiple properties

        public DbSet<Product> Products { get; set; }

        public DbSet<Image> Images { get; set; }

        public DbSet<User> Users { get; set; }

        public DbSet<CartModel> Cart { get; set; }
        public ProductDbContext(DbContextOptions<ProductDbContext> options)
         : base(options)
        {

        }


    }
}
