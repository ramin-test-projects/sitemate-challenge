"use client";

import { useEffect, useState } from "react";
import { Issue, ServerResponse } from "./IssuesPage.types";
import { IssueItem } from "../IssueItem/IssueItem";
import { addOrUpdateIssue, deleteIssue, getIssues } from "@/api/issue-api";

export const IssuesPage = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    (async () => {
      const list = await getIssues();
      setIssues(list);
    })();
  }, []);

  const handleAddIssue = (item: Issue) => {
    (async () => {
      const res = await addOrUpdateIssue(item);
      if (res.result === "ok") setIssues([...issues, item]);
    })();
  };

  const handleUpdateIssue = (item: Issue) => {
    (async () => {
      const res = await addOrUpdateIssue(item);
      if (res.result === "ok")
        setIssues(issues.map((i) => (i.id === item.id ? item : i)));
    })();
  };

  const handleDeleteIssue = (item: Issue) => {
    (async () => {
      const res = await deleteIssue(item.id ?? "");
      if (res.result === "ok")
        setIssues(issues.filter((i) => i.id !== item.id));
    })();
  };

  return (
    <div>
      <h2>Issues</h2>
      <div>
        {issues.map((issue) => (
          <IssueItem
            key={issue.id}
            issue={issue}
            onAdd={handleAddIssue}
            onUpdate={handleUpdateIssue}
            onDelete={handleDeleteIssue}
          />
        ))}
      </div>
      <h2>New Issue</h2>
      <IssueItem
        issue={{}}
        isEditMode={true}
        onAdd={handleAddIssue}
        onUpdate={handleUpdateIssue}
        onDelete={handleDeleteIssue}
      />
    </div>
  );
};
