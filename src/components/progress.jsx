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
     <div
      className="col-lg-8 col-md-8 col-sm-12 col-xs-12 progressiv_div"
      style={{ backgroundColor: "#eeeeee", height: "100vh" }}
     >
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
       <h1>and it starts at</h1>
       <div className="select_focus">
        <select class="form-select form-select-lg mb-3 option-div" aria-label=".form-select-lg example">
         <option selected>Now</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
        </select>
       </div>
      </div>
      <div className="text-center ">
       <Link to="/select" className="btn btn-light" style={{ background: "none", border: "none" }}>
        <img src="./images/Logo_black.png" className="img-fluid img_btn" alt="" />
       </Link>
       <div>
        <ImArrowUp style={{ fontSize: "2.5rem", color: "grey" }} />
        <h3 className="touch_" style={{ fontSize: "2.5rem", color: "grey", fontWeight: "900", marginTop: "10px" }}>Touch To Continue</h3>
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
