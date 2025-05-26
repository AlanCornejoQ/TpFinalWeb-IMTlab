namespace Core.Domain.Entities
{
    public class Reserva
    {
        public Guid Id { get; private set; }
        public Guid UsuarioId { get; private set; }
        public Guid EspacioId { get; private set; }
        public DateTime FechaInicio { get; private set; }
        public DateTime FechaFin { get; private set; }
        public string Estado { get; private set; } = "Activa";
        public DateTime? FechaCancelacion { get; private set; }
        
        public Reserva(Guid usuarioId, Guid espacioId, DateTime inicio, DateTime fin)
        {
            Id = Guid.NewGuid();
            UsuarioId = usuarioId;
            EspacioId = espacioId;
            FechaInicio = inicio;
            FechaFin = fin;
        }

        public bool EstaActiva()
        {
            return FechaInicio <= DateTime.Now && FechaFin >= DateTime.Now;
        }

        public void Cancelar()
        {
            if (FechaInicio <= DateTime.Now)
                throw new InvalidOperationException("No se puede cancelar una reserva que ya ha comenzado.");

            Estado = "Cancelada";
            FechaCancelacion = DateTime.Now;
        }
    }
}
