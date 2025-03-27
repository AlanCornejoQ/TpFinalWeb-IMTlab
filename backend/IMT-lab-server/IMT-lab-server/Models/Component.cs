namespace IMT_lab_server.Models
{
    public class Component
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public Component()
        {
            Name = string.Empty;
            Description = string.Empty;
        }
    }
}
