import React from "react";
import useCountdown from "./useCountdown";

function CountDown() {
  const endTime = new Date().getTime() + 60000 * 8; // 2 minutes
  const [timeLeft] = useCountdown(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;

  return (
    <>
      <h2 className="countdTime">{`${minutes}:${seconds}`}</h2>
    </>
  );
}

export default CountDown;
