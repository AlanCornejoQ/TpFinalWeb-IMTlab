namespace Core.Domain.Events
{
    public class ReservaCreada
    {
        public Guid ReservaId { get; }

        public ReservaCreada(Guid reservaId)
        {
            ReservaId = reservaId;
        }
    }
}
