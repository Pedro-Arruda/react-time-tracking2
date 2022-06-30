import { useEffect, useState } from "react";
import { client } from "../utils/client";
import { helpers } from "../utils/helpers";
import { EditableTimerList } from "./EditableTimerList";
import { ToggleableTimerForm } from "./ToggleableTimerForm";

export const TimersDashboard = () => {
  const [timers, setTimers] = useState([]);

  useEffect(() => {
    loadTimersFromServer();
    setInterval(loadTimersFromServer, 5000);
  }, []);

  const handleStartClick = (timerId) => {
    startTimer(timerId);
  };

  const handleStopClick = (timerId) => {
    stopTimer(timerId);
  };

  const handleTrashClick = (timerId) => {
    deleteTimer(timerId);
  };

  const handleEditFormSubmit = (attrs) => {
    updateTimer(attrs);
  };

  const handleCreateFormSubmit = (timer) => {
    createTimer(timer);
  };

  const createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    setTimers(timers.concat(t));
    client.createTimer(t);
  };

  const updateTimer = (attrs) => {
    setTimers(
      timers.map((timer) => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      })
    );

    client.updateTimer(attrs);
  };

  const loadTimersFromServer = () => {
    client.getTimers((serverTimers) => setTimers(serverTimers));
  };

  const startTimer = (timerId) => {
    const now = Date.now();
    setTimers(
      timers.map((timer) => {
        if (timer.id === timerId) {
          return Object.assign({}, timer, {
            runningSince: now,
          });
        } else {
          return timer;
        }
      })
    );
    client.startTimer({ id: timerId, start: now });
  };

  const stopTimer = (timerId) => {
    const now = Date.now();
    setTimers(
      timers.map((timer) => {
        if (timer.id === timerId) {
          const lastElapsed = now - timer.runningSince;
          return Object.assign({}, timer, {
            elapsed: timer.elapsed + lastElapsed,
            runningSince: null,
          });
        } else {
          return timer;
        }
      })
    );
    client.stopTimer({ id: timerId, stop: now });
  };

  const deleteTimer = (timerId) => {
    setTimers(timers.filter((t) => t.id !== timerId));

    client.deleteTimer({ id: timerId });
  };

  return (
    <div className="ui three column centered grid">
      <div className="column">
        <EditableTimerList
          timers={timers}
          onFormSubmit={handleEditFormSubmit}
          onTrashClick={handleTrashClick}
          onStartClick={handleStartClick}
          onStopClick={handleStopClick}
        />
        <ToggleableTimerForm onFormSubmit={handleCreateFormSubmit} />
      </div>
    </div>
  );
};
