using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace webApi.Models
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options)
           : base(options)
        {
        }
        public DbSet<Product> Products { get; set; }
    }

   
}
