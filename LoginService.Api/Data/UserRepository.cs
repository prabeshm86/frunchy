using System;
using System.Collections.Generic;
using System.Linq;
using LoginService.Api.Models;

namespace LoginService.Api.Data
{
    public class UserRepository
    {
        public List<User> TestUsers;
        public UserRepository()
        {
            TestUsers = new List<User>
            {
                new User() { Username = "prabesh", Password = "123", Role= UserRole.Admin },
                new User() { Username = "rohit", Password = "123", Role = UserRole.Basic }
            };
        }
        public User GetUser(string username)
        {
            try
            {
                return TestUsers.First(user => user.Username.Equals(username));
            }
            catch
            {
                return null;
            }
        }
    }
}
