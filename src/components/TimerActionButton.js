export const TimerActionButton = ({
  timerIsRunning,
  onStartClick,
  onStopClick,
}) =>
  timerIsRunning ? (
    <div className="ui bottom attached red basic button" onClick={onStopClick}>
      Stop
    </div>
  ) : (
    <div
      className="ui bottom attached green basic button"
      onClick={onStartClick}
    >
      Start
    </div>
  );
