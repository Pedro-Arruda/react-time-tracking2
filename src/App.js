import { TimersDashboard } from "./components/TimersDashboard";

export const App = () => {
  return (
    <div id="main" className="main ui">
      <h1 className="ui dividing centered header">Timers</h1>
      <TimersDashboard />
    </div>
  );
};
