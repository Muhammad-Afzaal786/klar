import React from "react";
import { Link } from "react-router-dom";
import CurrentTime from "../CurrentTime";
import "./index.css";
function landing() {
  return (
    <>
      <div className="main_wrappr">
        <div className="small_clm">
          <div className="text-white">
            <CurrentTime />
          </div>
        </div>
        <div className="big_clm">
          <input type="text" className="input_div" placeholder="username" />
          <input type="password" className="input_div" placeholder="password" />
          <Link
            to="/progress"
            className="btn btn-light"
            style={{ background: "none", border: "none" }}
          >
            <img
              src="./images/logo.png"
              className="img-fluid klar-img"
              alt=""
            />
          </Link>
        </div>
        <div className="small_clm"></div>
      </div>
    </>
  );
}

export default landing;
