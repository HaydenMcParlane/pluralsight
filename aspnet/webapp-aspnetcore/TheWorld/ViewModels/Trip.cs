using System;
using System.ComponentModel.DataAnnotations;

namespace TheWorld.ViewModels{
    public class Trip{
        [Required]
        [StringLength(100, MinimumLength=5)]
        public string Name { get; set; }        
        public string UserName { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
    }
}