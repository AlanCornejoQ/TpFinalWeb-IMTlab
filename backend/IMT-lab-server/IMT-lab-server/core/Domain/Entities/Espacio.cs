namespace Core.Domain.Entities
{
    public class Espacio
    {
        public Guid Id { get; set; }
        public string Nombre { get; set; }
        public string Tipo { get; set; }
        public bool Disponible { get; set; }
    }
}
