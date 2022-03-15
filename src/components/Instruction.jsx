import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CurrentTime from "./CurrentTime";
function Instruction() {
 const navigate = useNavigate();
 const backPage = () => {
  navigate("/progress");
 };
 return (
  <div>
   <div className="container-fluid lnding_container">
    <div className="row">
     <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 colDiv5" style={{ borderRight: "1px solid #d1ccc0" }}>
      <CurrentTime />
     </div>
     <div
      className="col-lg-8 col-md-8 col-sm-8 col-xs-12 "
      style={{ backgroundColor: "#eeeeee", display: "flex", justifyContent: "center", alignItems: "center" }}
     >
      <div className="container-fluid text-center ">
       <div className="row">
        <div className="col-10 col-xs-12 mx-auto inst_container">
         <h2 className="text_inst">Sent Patient Instruction</h2>
         <div className="d-flex justify-content-around my-4">
          <input type="text" className="form-control w-75" placeholder="Username" />
          <button className="btn  blue_btn ">Send</button>
         </div>
         <div className="d-flex justify-content-around my-3">
          <input type="text" className="form-control w-75" placeholder="MMS:Phone Number" />
          <button className="btn  blue_btn">Send</button>
         </div>
         <button className="btn  mt-5 blue_btn btn-block" onClick={backPage}>
          Print
         </button>
        </div>
       </div>
      </div>
     </div>
     <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12 colDiv5" style={{ borderLeft: "1px solid #d1ccc0" }}>
      <Link to="/" className="btn btn-light" style={{ background: "none", border: "none" }}>
       <img src="./images/Logo_black.png" className="img-fluid img_btn w-100" alt="" />
      </Link>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Instruction;
