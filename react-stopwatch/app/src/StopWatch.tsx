import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './StopWatch.css';

export function StopWatch() {
  const [secondsElapsed, setsecondsElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout>();

  function handleSecondElapsed() {
    setsecondsElapsed((sec) => sec + 1);
  }

  function toggleIsRunning() {
    setIsRunning(!isRunning);
    if (isRunning) {
      clearTimeout(timerId);
      setTimerId(undefined);
    } else {
      const id = setInterval(handleSecondElapsed, 1000);
      setTimerId(id);
    }
  }

  return (
    <>
      <div onClick={() => setsecondsElapsed(0)} className="stopwatch">
        <span>{secondsElapsed}</span>
      </div>
      <div onClick={() => toggleIsRunning()} className="controls">
        {isRunning ? <FaPause /> : <FaPlay />}
      </div>
    </>
  );
}
