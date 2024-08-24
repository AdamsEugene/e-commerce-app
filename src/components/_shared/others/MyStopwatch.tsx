import React from "react";
import { useStopwatch } from "react-timer-hook";

export default function MyStopwatch() {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true,  });

  return (
    <div className="flex">
      <div className="text-xl font-bold text-center flex">
        <div className="w-8">{days < 10 ? "0" + days : days}</div>:
        <div className="w-8">{hours < 10 ? "0" + hours : hours}</div>:
        <div className="w-8">{minutes < 10 ? "0" + minutes : minutes}</div>:
        <div className="w-8">{seconds < 10 ? "0" + seconds : seconds}</div>
      </div>
    </div>
  );
}
