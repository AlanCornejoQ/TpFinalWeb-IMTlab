namespace Core.Domain.Entities
{
    public class Reserva
    {
        public Guid Id { get; private set; }
        public Guid UsuarioId { get; private set; }
        public Guid EspacioId { get; private set; }
        public DateTime FechaInicio { get; private set; }
        public DateTime FechaFin { get; private set; }

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
            // Aquí podrías lanzar un evento: new ReservaCancelada(this.Id);
        }
    }
}
