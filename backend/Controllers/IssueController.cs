using Microsoft.AspNetCore.Mvc;

namespace sitemate_server.Controllers;

[ApiController]
[Route("[controller]")]
public class IssueController : ControllerBase
{
    private static readonly List<Issue> Issues = new List<Issue>();

    private readonly ILogger<IssueController> _logger;

    public IssueController(ILogger<IssueController> logger)
    {
        _logger = logger;
    }

    [HttpGet]
    public IEnumerable<Issue> Get()
    {
        return Issues;
    }
}