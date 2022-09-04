namespace DTS_Project.Shared.Configuration.Options;

public class ApiFeatureFlagsOptions : FeatureFlagsOptions
{
    public bool EnableMiniProfiler { get; set; }

    public bool EnableSwagger { get; set; }
}