import React from "react";
import { Link } from "react-router-dom";
import CurrentTime from "./CurrentTime";
import { ImArrowUp } from "react-icons/im";
import Slider from "./Slider";
function Progress() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 colDiv8">
            <div style={{ fontSize: "20px" }}>
              <CurrentTime />
            </div>
          </div>
          <div
            className="col-lg-8 col-md-8 col-sm-12 col-xs-12 progressiv_div"
            style={{ backgroundColor: "#eeeeee" }}
          >
            <div className="range_bar">
              <Slider />
            </div>

            <div className="text-center">
              <div className="it_start">
                <h1>and it starts at</h1>
              </div>
              <div className="select_focus">
                <select
                  class="form-select form-select-lg mb-3 option-div"
                  aria-label="form-select-lg example"
                >
                  <option selected>Now</option>
                  <option value="1">8am</option>
                  <option value="2">9am</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="text-center ">
              <Link
                to="/select"
                className="btn btn-light"
                style={{ background: "none", border: "none" }}
              >
                <img
                  src="./images/logo.png"
                  className="img-fluid img_btn"
                  alt=""
                />
              </Link>
              <div>
                <ImArrowUp style={{ fontSize: "2.5rem", color: "grey" }} />
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
          </div>
          <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 colDiv8"></div>
        </div>
      </div>
    </div>
  );
}

export default Progress;
