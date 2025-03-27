namespace IMT_lab_server.Models
{
    public class Loan
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Status { get; set; }
        public int? ComponentId { get; set; }
        public Component? Component { get; set; }
        public DateTime? DateIn { get; set; }
        public DateTime? DateOut { get; set; }

        public Loan()
        {
            Name = string.Empty;
            Description = string.Empty;
        }
    }
}
