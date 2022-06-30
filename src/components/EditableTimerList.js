import { EditableTimer } from "./EditableTimer";

export const EditableTimerList = ({
  timers,
  onFormSubmit,
  onTrashClick,
  onStartClick,
  onStopClick,
}) => (
  <div id="timers">
    {timers.map((timer) => (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onFormSubmit={onFormSubmit}
        onTrashClick={onTrashClick}
        onStartClick={onStartClick}
        onStopClick={onStopClick}
      />
    ))}
  </div>
);
