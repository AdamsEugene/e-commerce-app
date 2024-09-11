import { useState } from "react";
import Countdown, { zeroPad } from "react-countdown";

interface CountdownProps {
  date: Date | string | number;
  onComplete?: () => void;
}

export const useCountdown = ({ date, onComplete }: CountdownProps) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      setIsCompleted(true);
      if (onComplete) onComplete();
      return <span>Time's up!</span>;
    } else {
      return (
        <div className="text-xl text-center flex gap-2">
          <h2>Time Left:</h2>
          <div className="text-center font-bold flex">
            <div className="w-12">{zeroPad(days)}d</div>:
            <div className="w-12">{zeroPad(hours)}h</div>:
            <div className="w-12">{zeroPad(minutes)}m</div>:
            <div className="w-12">{zeroPad(seconds)}s</div>
          </div>
        </div>
      );
    }
  };

  const CountdownComponent = () => (
    <Countdown date={date} renderer={renderer} />
  );

  return { CountdownComponent, isCompleted };
};
