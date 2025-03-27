using IMT_lab_server.Models;
using Microsoft.AspNetCore.Mvc;
using ProjectA.Infrastructure.Data;

namespace IMT_lab_server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ComponentController : ControllerBase
    {
        private readonly IMTLabDbContext _context;

        public ComponentController(IMTLabDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public Component AddComponent([FromBody] Component component)
        {
            var comp = _context.Components.Add(component);
            _context.SaveChanges();
            return component;
        }

        [HttpGet]
        public IEnumerable<Component> GetComponents()
        {
            return _context.Components.ToList();
        }

        [HttpDelete("{id}")]
        public void DeleteComponent([FromRoute] int id)
        {
            var component = _context.Components.FirstOrDefault(c => c.Id == id);
            _context.Components.Remove(component);
            _context.SaveChanges();
        }
    }
}
