using IMT_lab_server.Models;
using Microsoft.EntityFrameworkCore;

namespace ProjectA.Infrastructure.Data
{
    public class IMTLabDbContext : DbContext
    {
        public IMTLabDbContext(DbContextOptions<IMTLabDbContext> options)
            : base(options) { }

        public DbSet<Student> Students { get; set; }
        public DbSet<Component> Components { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().ToTable("Student");
            modelBuilder.Entity<Component>().ToTable("Component");
        }
    }
}
