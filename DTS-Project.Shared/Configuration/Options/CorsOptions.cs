namespace DTS_Project.Shared.Configuration.Options;

public class CorsOptions
{
    public string[] AllowedOrigins { get; set; }

    public CorsOptions()
    {
        this.AllowedOrigins = Array.Empty<string>();
    }
}