import React from "react";
import { Link } from "react-router-dom";
import CurrentTime from "./CurrentTime";
function landing() {
 return (
  <div>
   <div className="container-fluid lnding_container">
    <div className="row">
     <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12 colDiv3">
     <div className="time_dist">
     <CurrentTime />
     </div>
     </div>
     <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 colDiv6">
      <form className="form__div">
       <div className="form-row">
        <div className="col form_main">
         <input type="text" className="form-control main_input" placeholder="username" style={{fontSize:"2rem"}} />
        </div>
        <div className="col my-4">
         <input type="password" className="form-control main_input" placeholder="password" />
        </div>
       </div>
       <Link to="/progress" className="btn btn-light" style={{ background: "none", border: "none" }}>
        <img src="./images/logo.png" className="img-fluid img_btn" alt="" />
       </Link>
      </form>
     </div>
     <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12 colDiv3"></div>
    </div>
   </div>
  </div>
 );
}

export default landing;
