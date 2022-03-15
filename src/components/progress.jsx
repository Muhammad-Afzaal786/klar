import React, { useState } from "react";
import { Link } from "react-router-dom";
import CurrentTime from "./CurrentTime";
import { ImArrowUp } from "react-icons/im";
function Progress() {
 const [inputs, setInputs] = useState(20);
 return (
  <div>
   <div className="container-fluid">
    <div className="row">
     <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 colDiv3">
      <CurrentTime />
     </div>
     <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 py-5" style={{ backgroundColor: "#eeeeee" ,height:"100vh"}}>
      <h2 style={{ color: "grey" }}>
       My next appoinment in {inputs}
       <span>min</span>
      </h2>
      <div>
       <input
        type="range"
        value={inputs}
        onChange={(e) => setInputs(e.target.value)}
        class="form-range"
        min="20"
        max="75"
        step="5"
        id="customRange3"
       />
      </div>
      <div className="d-flex justify-content-between" style={{ color: "grey" }}>
       <span>{inputs}min</span>
       <span>75min</span>
      </div>
      <div className="text-center" style={{ color: "grey" }}>
       <h1>and it start at</h1>
       <div>
        <select
        
         style={{
          width: "150px",
          height: "30px",
          border: "none",
          outline: "none",
          borderRadius: "5px",
          marginTop: "20px",
         }}
        >
         <option value="1">Now</option>
         <option value="2">8am</option>
         <option value="3">12am</option>
        </select>
       </div>
      </div>
      <div className="text-center ">
       <Link to="/select" className="btn btn-light" style={{ background: "none", border: "none" }}>
        <img src="./images/Logo_black.png" className="img-fluid img_btn" alt="" />
       </Link>
       <div>
        <ImArrowUp style={{ fontSize: "2.5rem", color: "grey" }} />
        <h3 style={{ fontSize: "2.5rem", color: "grey", fontWeight: "800", marginTop: "10px" }}>Touch To Start</h3>
       </div>
      </div>
     </div>
     <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 colDiv3"></div>
    </div>
   </div>
  </div>
 );
}

export default Progress;
