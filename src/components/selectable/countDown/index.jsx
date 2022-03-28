import React from "react";
import useCountdown from "./useCountdown";

function CountDown() {
 const endTime = new Date().getTime() + 60000 * 8; // 2 minutes
 const [timeLeft] = useCountdown(endTime);

 const minutes = Math.floor(timeLeft / 60000) % 60;
 const seconds = Math.floor(timeLeft / 1000) % 60;
 

 return (
  <>
   <p>{`${minutes}:${seconds}`}</p>
  </>
 );
}

export default CountDown;
