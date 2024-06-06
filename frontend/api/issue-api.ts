import {
  Issue,
  ServerResponse,
} from "@/components/IssuesPage/IssuesPage.types";

const baseUrl = "https://localhost:32770";

export const getIssues = async () => {
  const res = await fetch(`${baseUrl}/issue`);
  const data = (await res.json()).data;

  return data as Issue[];
};

export const addOrUpdateIssue = async (
  issue: Issue
): Promise<ServerResponse> => {
  const res = await fetch(`${baseUrl}/Issue/issue`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(issue),
  });

  const data = (await res.json()).data;

  return data as ServerResponse;
};

export const deleteIssue = async (id: string): Promise<ServerResponse> => {
  const res = await fetch(`${baseUrl}/Issue/id?id=${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = (await res.json()).data;

  return data as ServerResponse;
};
