using Newtonsoft.Json;

namespace sitemate_server;

public class Issue
{
    [JsonProperty("id")]
    public Guid? ID { get; set; }

    [JsonProperty("title")]
    public string? Title { get; set; }

    [JsonProperty("description")]
    public string? Description { get; set; }
}