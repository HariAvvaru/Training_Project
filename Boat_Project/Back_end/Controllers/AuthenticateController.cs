using BoatLifestyle.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using static BoatLifestyle.Models.LoginModel;

namespace BoatLifestyle.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticateController : ControllerBase
    {
        public ProductDbContext _context;

        public AuthenticateController(ProductDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("Login")]
        public IActionResult Login(Login requestUser)
        {
            User userObj = _context.Users.Where(x => x.UserName == requestUser.userName && x.Password == requestUser.password).FirstOrDefault();

            if (userObj != null)
            {
                string tokenStr = GenerateJSONWebToken(userObj);
                return Ok(new { token = tokenStr });
            }
            else
            {
                return BadRequest("Invalid user id or password");
            }
        }

        [HttpPost]
        [Route("UserDet")]
        public IActionResult GetUser(Login requestUser)
        {
            User userObj = _context.Users.Where(x => x.UserName == requestUser.userName && x.Password == requestUser.password).FirstOrDefault();

            if (userObj != null)
            {
                return Ok(new { ub = userObj});
            }
            else
            {
                return BadRequest("Invalid user id or password");
            }
        }

        [HttpPost]
        [Route("Register")]
        public IActionResult Register(User user)
        {
            if (user != null)
            {
                // Check if the user already exists
                var existingUser = _context.Users
                    .FirstOrDefault(u => u.UserName == user.UserName || u.EmailId == user.EmailId);

                if (existingUser != null)
                {
                    return BadRequest("User with this username or email already exists");
                }

                // Add the new user to the database
                _context.Users.Add(user);
                _context.SaveChanges();

                return Ok(new { result = "Registered Successfully" });
            }
            else
            {
                return BadRequest("Invalid user data");
            }
        }


        private string GenerateJSONWebToken(User userObj)
        {
            SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("this is jwt token required secret key used to generate jwt token required for authentiation"));
            SigningCredentials credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);


            List<Claim> authClaims = new List<Claim>
        {
                new Claim(ClaimTypes.NameIdentifier,Convert.ToString(userObj.UserId)),
                new Claim(ClaimTypes.Name, userObj.UserName),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),  // (JWT ID) Claim
                new Claim(ClaimTypes.Role, userObj.Role)
         };

            JwtSecurityToken token = new JwtSecurityToken(
                        issuer: "mySystem",
                        audience: "myUsers",
                        claims: authClaims,
                        expires: DateTime.Now.AddMinutes(10),
                        signingCredentials: credentials);

            string tokenString = new JwtSecurityTokenHandler().WriteToken(token);

            return tokenString;
        }
    }
}
