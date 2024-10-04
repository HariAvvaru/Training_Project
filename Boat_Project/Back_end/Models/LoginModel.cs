using System.ComponentModel.DataAnnotations;

namespace BoatLifestyle.Models
{
    public class LoginModel
    {
        public class User
        {
            [Key]
            public int UserId { get; set; }
            public string UserName { get; set; }
            public string Password { get; set; }
            public long MobileNo { get; set; }
            public string EmailId { get; set; }
            public string Name { get; set; }
            public string Role { get; set; }
        }

        public class Login
        {
            public string userName { get; set; }
            public string password { get; set; }
        }

    }
}
