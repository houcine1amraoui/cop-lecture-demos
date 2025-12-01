import { useEffect, useState } from "react";

function Timer1() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      Timer: {timer}
      <button onClick={() => clearInterval(interval)}>Pause</button>
    </div>
  );
}

export default Timer1;
