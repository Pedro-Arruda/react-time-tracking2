import { useState } from "react";
import { Timer } from "./Timer";
import { TimerForm } from "./TimerForm";

export const EditableTimer = ({
  onFormSubmit,
  id,
  title,
  project,
  elapsed,
  runningSince,
  onTrashClick,
  onStartClick,
  onStopClick,
}) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const closeForm = () => {
    setEditFormOpen(false);
  };

  const handleSubmit = (timer) => {
    onFormSubmit(timer);
    closeForm();
  };

  const handleFormClose = () => {
    closeForm();
  };

  const openForm = () => {
    setEditFormOpen(true);
  };

  const handleEditClick = () => {
    openForm();
  };

  return editFormOpen ? (
    <TimerForm
      id={id}
      title={title}
      project={project}
      onFormSubmit={handleSubmit}
      onFormClose={handleFormClose}
    />
  ) : (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      runningSince={runningSince}
      onEditClick={handleEditClick}
      onTrashClick={onTrashClick}
      onStartClick={onStartClick}
      onStopClick={onStopClick}
    />
  );
};
