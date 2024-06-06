using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace sitemate_server.Controllers;

[ApiController]
[Route("[controller]")]
public class IssueController : ControllerBase
{
    private readonly ILogger<IssueController> _logger;

    public IssueController(ILogger<IssueController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Issue> Get()
    {
        return Storage.GetIssues();
    }

    [HttpPut("issue")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Response))]
    public OkObjectResult Put(Issue issue)
    {
        bool result = Storage.AddOrUpdateIssue(issue);

        return Ok(new Response(result));
    }

    [HttpDelete("id")]
    [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Response))]
    public OkObjectResult Delete(Guid? id)
    {
        bool result = Storage.DeleteIssue(id);

        return Ok(new Response(result));
    }
}

public class Response { 
    [JsonProperty("result")]
    public string? Result { get; set; }

    public Response(bool value)
    {
        Result = value ? "ok" : "nok";
    }
}