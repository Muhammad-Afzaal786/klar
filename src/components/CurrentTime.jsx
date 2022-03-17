import React, { useEffect, useState } from "react";
import moment from "moment";
function CurrentTime() {
 const [cTime, setCtime] = useState(moment(new Date()).format("LT"));

 useEffect(()=>{
     
         setInterval(()=>{
             setCtime(moment(new Date()).format("LT"))
         },1000)
     
     console.log("Hello world")
 })
 return (
  <div className="mt-3">
   <div className="time_setting">
    <h1 className="time_d">{cTime.split(" ")[0]}</h1>
    <h4 className="data_d">{moment().format("MMM DD, YYYY")}</h4>
   </div>
  </div>
 );
}

export default CurrentTime;
