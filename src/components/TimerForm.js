import { useState } from "react";

export const TimerForm = ({
  id,
  onFormClose,
  title,
  project,
  onFormSubmit,
}) => {
  const [fields, setFields] = useState({
    title: title || "",
    project: project || "",
  });

  const handleTitleChange = (e) => {
    setFields({ ...fields, title: e.target.value });
  };

  const handleProjectChange = (e) => {
    setFields({ ...fields, project: e.target.value });
  };

  const handleSubmit = () => {
    onFormSubmit({
      id: id,
      title: fields.title,
      project: fields.project,
    });
  };

  const submitText = id ? "Update" : "Create";
  return (
    <div className="ui centered card">
      <div className="content">
        <div className="ui form">
          <div className="field">
            <label>Title</label>
            <input
              type="text"
              value={fields.title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="field">
            <label>Project</label>
            <input
              type="text"
              value={fields.project}
              onChange={handleProjectChange}
            />
          </div>
          <div className="ui two bottom attached buttons">
            <button className="ui basic blue button" onClick={handleSubmit}>
              {submitText}
            </button>
            <button className="ui basic red button" onClick={onFormClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
