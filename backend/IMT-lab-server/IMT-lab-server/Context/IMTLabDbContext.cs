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
        public DbSet<Loan> Loans { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Student>().ToTable("Student");
            modelBuilder.Entity<Component>().ToTable("Component");
            modelBuilder.Entity<Loan>().ToTable("Loan");
            modelBuilder
                .Entity<Component>()
                .HasMany(x => x.Loans)
                .WithOne(x => x.Component)
                .HasForeignKey(x => x.ComponentId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
