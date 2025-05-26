using Core.Domain.Entities;

namespace Core.Domain.Repositories
{
    public interface IReservaRepository
    {
        Task<List<Reserva>> ListarReservasAsync();
        Task GuardarReservaAsync(Reserva reserva);
        Task<Reserva?> ObtenerPorIdAsync(Guid id);
    }
}
