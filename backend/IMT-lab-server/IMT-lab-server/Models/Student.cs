namespace IMT_lab_server.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Cellphone { get; set; }

        public Student()
        {
            Name = string.Empty;
            Email = string.Empty;
            Address = string.Empty;
            Cellphone = string.Empty;
        }
    }
}
