using IMT_lab_server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectA.Infrastructure.Data;

namespace IMT_lab_server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PrestamosController : ControllerBase
    {
        private readonly IMTLabDbContext _context;

        public PrestamosController(IMTLabDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public Loan AddLoan([FromBody] Loan loan)
        {
            _context.Loans.Add(loan);
            _context.SaveChanges();
            return loan;
        }

        [HttpGet]
        public IEnumerable<Loan> GetLoans()
        {
            return _context.Loans.ToList();
        }

        [HttpDelete("{id}")]
        public void DeleteLoans([FromRoute] int id)
        {
            var loan = _context.Loans.FirstOrDefault(c => c.Id == id);
            _context.Loans.Remove(loan);
            _context.SaveChanges();
        }

        [HttpPut("{id}")]
        public Loan UpdateLoanAsync([FromBody] Loan loan, [FromRoute] int id)
        {
            var currentLoan = _context.Loans.FirstOrDefault(c => c.Id == id);
            if (currentLoan != null)
            {
                currentLoan.Name = loan.Name;
                currentLoan.Description = loan.Description;
                currentLoan.Status = loan.Status;
                currentLoan.DateIn = loan.DateIn;
                currentLoan.DateOut = loan.DateOut;
            }
            _context.Loans.Update(currentLoan);
            _context.SaveChanges();
            return currentLoan;
        }
    }
}
