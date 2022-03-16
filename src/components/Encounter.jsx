import React from "react";
import { Link } from "react-router-dom";
import CurrentTime from "./CurrentTime";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
function Encounter() {
 return (
  <div>
   <div className="container-fluid lnding_container">
    <div className="row">
     <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 colDiv5" style={{ borderRight: "1px solid #d1ccc0" }}>
      <CurrentTime />
     </div>
     <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 colDiv6" style={{ backgroundColor: "#B0B5b7",padding:"0px" }}>
      <div className="encounter__div ">
       <div className="encounter-row">
        <Link to="/select" style={{ textDecoration: "none" }}>
         <div className="d-flex justify-content-around align-items-center cont_div">
          <GoArrowLeft className="arrow_icon" />
          <h2>Continue Encounter </h2>
          <GoArrowLeft className="arrow_icon" />
         </div>
        </Link>
        <Link to="/instruction" style={{ textDecoration: "none" }}>
         <div className="d-flex justify-content-around align-items-center cont_div2">
          <GoArrowRight className="arrow_icon" />
          <h2>End Encounter </h2>
          <GoArrowRight className="arrow_icon" />
         </div>
        </Link>
       </div>
      </div>
      <div>

      </div>
     </div>
     <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 colDiv5" style={{ borderLeft: "1px solid #d1ccc0" }}>
      <Link to="/encounter" className="btn btn-light" style={{ background: "none", border: "none" }}>
       <img src="./images/Logo_black.png" className="img-fluid img_btn w-100" alt="" />
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Encounter;
