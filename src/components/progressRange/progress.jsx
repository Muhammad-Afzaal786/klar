import React from "react";
import { Link } from "react-router-dom";
import CurrentTime from "../CurrentTime";
import { ImArrowUp } from "react-icons/im";
import Slider from "./Slider";
import "./index.css";
function Progress() {
  return (
    <div>
      <div>
        <div className="main_wrappr2">
          <div className="small_clm2">
            <div className="text-white">
              <CurrentTime />
            </div>
          </div>
          <div className="progrs_clm">
            <Slider />
            <h2 className="apointment_div d-flex justify-content-center">and it starts at</h2>
            <div className="select_focus">
              <select
                class="form-select form-select-lg mb-3 option-div"
                aria-label="form-select-lg example"
              >
                <option selected>Now</option>
                <option value="1">7am</option>
                <option value="2">7:15am</option>
                <option value="3">7:15am</option>
              </select>
            </div>
            <div className="img-box">
              <Link
                to="/select"
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
            <div className="text-center">
              <div>
                {" "}
                <ImArrowUp style={{ fontSize: "2.5rem", color: "grey" }} />
              </div>
              <h3
                className="touch_"
                style={{
                  fontSize: "2.5rem",
                  color: "grey",
                  fontWeight: "900",
                  marginTop: "10px",
                }}
              >
                Touch to continue
              </h3>
            </div>
          </div>
          <div className="small_clm2"></div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
