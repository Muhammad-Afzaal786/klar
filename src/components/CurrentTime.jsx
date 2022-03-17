import React, { useState } from "react";
import moment from "moment";
function CurrentTime() {
 let time = new Date();
 let date = new Date();
 const [cTime, setCtime] = useState(time);
 const [cDate, setCdate] = useState(date);

 const UpdateTime = () => {
  time = new Date().toLocaleTimeString();
  setCtime(cTime);
 };
 const UpdateDate = () => {
  date = new Date().toLocaleDateString();
  setCdate(cDate);
 };
 setInterval(UpdateDate);
 setInterval(UpdateTime, 500);
 return (
  <div className="mt-3">
  <div className="time_setting">
  <h1 className="time_d">{ moment().format("hh:MM")}</h1>
   <h4 className="data_d">{moment().format("MMM DD, YYYY")}</h4>
  </div>
  </div>
 );
}

export default CurrentTime;
