namespace sitemate_server;

public class Storage
{
    private static List<Issue> Issues = new List<Issue>();

    public static List<Issue> GetIssues()
    {
        return Issues;
    }

    public static bool AddOrUpdateIssue(Issue issue)
    {
        if (Issues.Any(i => i.ID == issue.ID))
        {
            Issues.Where(i => i.ID == issue.ID).ToList().ForEach(i =>
            {
                i.Title = issue.Title;
                i.Description = issue.Description;
            });
        }
        else Issues.Add(issue);

        return true;
    }

    public static bool DeleteIssue(Guid? id)
    {
        bool issueExist = id.HasValue && Issues.Any(i => i.ID == id);

        if (issueExist)
        {
            Issues = Issues.Where(i => i.ID != id).ToList();
            return true;
        }

        return false;
    }
}