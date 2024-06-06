import { useState } from "react";
import { Issue } from "../IssuesPage/IssuesPage.types";
import { TextInput } from "../TextInput/TextInput";
import { generateUUID } from "@/util/generate-uuid";

export const IssueItem = ({
  issue,
  isEditMode,
  onAdd,
  onUpdate,
  onDelete,
}: {
  issue: Issue;
  isEditMode?: boolean;
  onAdd: (item: Issue) => void;
  onUpdate: (item: Issue) => void;
  onDelete: (item: Issue) => void;
}) => {
  const [editMode, setEditMode] = useState<boolean>(isEditMode ?? false);

  const [titleInputValue, setTitleInputValue] = useState<string>("");
  const [descriptionInputValue, setDescriptionInputValue] =
    useState<string>("");

  const handleEditButtonClick = () => {
    setEditMode(true);
    setTitleInputValue(issue.title ?? "");
    setDescriptionInputValue(issue.description ?? "");
  };

  const handleDeleteButtonClick = () => {
    onDelete(issue);
    setEditMode(false);
  };

  const handleSaveIssue = () => {
    const newIssue: Issue = {
      id: issue.id || generateUUID(),
      title: titleInputValue,
      description: descriptionInputValue,
    };

    if (issue.id) onUpdate(newIssue);
    else onAdd(newIssue);

    if (!isEditMode) {
      setEditMode(false);
    } else {
      setTitleInputValue("");
      setDescriptionInputValue("");
    }
  };

  return (
    <div className="flex flex-row gap-4">
      {!editMode && (
        <>
          <div className="flex flex-row">
            <div className="flex-grow flex-shrink">{issue.title}</div>
            <div className="flex-grow-0 flex-shrink-0 cursor-pointer">
              <span className="m-4" onClick={handleEditButtonClick}>
                edit
              </span>
              <span onClick={handleDeleteButtonClick}>delete</span>
            </div>
          </div>
          <div>{issue.description}</div>
        </>
      )}
      {editMode && (
        <div className="flex flex-col gap-2">
          <TextInput
            title="Title"
            value={titleInputValue}
            onChange={(val) => setTitleInputValue(val)}
          />
          <TextInput
            title="Description"
            value={descriptionInputValue}
            onChange={(val) => setDescriptionInputValue(val)}
          />
          <div onClick={handleSaveIssue}>Save</div>
        </div>
      )}
    </div>
  );
};
