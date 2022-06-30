import { useEffect, useState } from "react";
import { helpers } from "../utils/helpers";
import { TimerActionButton } from "./TimerActionButton";

export const Timer = ({
  onTrashClick,
  onStartClick,
  onStopClick,
  id,
  elapsed,
  title,
  project,
  onEditClick,
  runningSince,
}) => {
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const forceUpdateInterval = setInterval(
      () => forceUpdate((x) => x + 1),
      50
    );

    return () => {
      clearInterval(forceUpdateInterval);
    };
  }, []);

  const handleTrashClick = () => {
    onTrashClick(id);
  };

  const handleStartClick = () => {
    onStartClick(id);
  };
  const handleStopClick = () => {
    onStopClick(id);
  };

  const elapsedString = helpers.renderElapsedString(elapsed, runningSince);

  return (
    <div className="ui centered card">
      <div className="content">
        <div className="header">{title}</div>
        <div className="meta">{project}</div>
        <div className="center aligned description">
          <h2>{elapsedString}</h2>
        </div>
        <div className="extra content">
          <span className="right floated edit icon" onClick={onEditClick}>
            <i className="edit icon" />
          </span>
          <span className="right floated trash icon" onClick={handleTrashClick}>
            <i className="trash icon" />
          </span>
        </div>
      </div>
      <TimerActionButton
        timerIsRunning={!!runningSince}
        onStartClick={handleStartClick}
        onStopClick={handleStopClick}
      />
    </div>
  );
};
