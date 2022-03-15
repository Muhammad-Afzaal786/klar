import React, { useState } from "react";

function CurrentTime() {
 let time = new Date().toLocaleTimeString();
 let date = new Date().toLocaleDateString();
 const [cTime, setCtime] = useState(time);
 const [cDate, setCdate] = useState(date);

 const UpdateTime = () => {
  time = new Date().toLocaleTimeString();
  setCtime(time);
 };
 const UpdateDate = () => {
  date = new Date().toLocaleDateString();
  setCdate(date);
 };
 setInterval(UpdateDate);
 setInterval(UpdateTime, 500);
 return (
  <div>
   <h1 className="time_d">{cTime}</h1>
   <h4 className="data_d">{cDate}</h4>
  </div>
 );
}

export default CurrentTime;
