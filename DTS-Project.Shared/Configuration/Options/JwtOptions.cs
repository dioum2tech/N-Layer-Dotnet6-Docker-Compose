namespace DTS_Project.Shared.Configuration.Options;

public class JwtOptions
{
    public string ValidIssuer { get; set; } = string.Empty;
    public string ValidAudience { get; set; } = string.Empty;
    public string Secret { get; set; } = string.Empty;
    public string Subject { get; set; } = string.Empty;
}