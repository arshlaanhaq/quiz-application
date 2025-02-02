import { useEffect, useState } from "react";

export default function Timer  ({ timeLimit, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onTimeUp]);

  return (
    <div className="text-red-500 font-bold">
      ⏳ Time Left: {timeLeft}s
    </div>
  );
};

