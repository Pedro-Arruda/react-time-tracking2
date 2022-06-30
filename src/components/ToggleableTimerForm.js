import { useState } from "react";
import { TimerForm } from "./TimerForm";

export const ToggleableTimerForm = ({ onFormSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = () => {
    setIsOpen(true);
  };

  const handleFormClose = () => {
    setIsOpen(false);
  };

  const handleFormSubmit = (timer) => {
    onFormSubmit(timer);
    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <TimerForm
        onFormSubmit={handleFormSubmit}
        onFormClose={handleFormClose}
      />
    );
  } else {
    return (
      <div className="ui basic content center aligned segment">
        <button className="ui basic button icon" onClick={handleFormOpen}>
          <i className="plus icon" />
        </button>
      </div>
    );
  }
};
