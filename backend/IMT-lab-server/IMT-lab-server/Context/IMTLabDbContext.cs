using IMT_lab_server.Models;
using Microsoft.EntityFrameworkCore;

namespace ProjectA.Infrastructure.Data
{
    public class IMTLabDbContext : DbContext
    {
        //private readonly IContextService _contextService;

        public IMTLabDbContext(DbContextOptions<IMTLabDbContext> options)
            : base(options) { }

        public DbSet<Student> Students { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().ToTable("Student");
        }
    }
}
