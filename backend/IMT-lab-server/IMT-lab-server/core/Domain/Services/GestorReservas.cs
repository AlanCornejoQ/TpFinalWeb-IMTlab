using Core.Domain.Entities;

namespace Core.Domain.Services
{
    public class GestorReservas
    {
        public bool VerificarDisponibilidad(Espacio espacio, DateTime inicio, DateTime fin)
        {
            return espacio.Disponible;
        }

        public Reserva CrearReserva(Guid usuarioId, Guid espacioId, DateTime inicio, DateTime fin)
        {
            return new Reserva(usuarioId, espacioId, inicio, fin);
        }
    }
}
