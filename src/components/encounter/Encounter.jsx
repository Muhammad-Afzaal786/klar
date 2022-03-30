import React from "react";
import { Link } from "react-router-dom";
import CurrentTime from "../CurrentTime";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import "./index.css";
function Encounter() {
  return (
    <>
      <div className="encounter_wrappr ">
        <div className="small_encntr">
          <div className="text-white">
            <CurrentTime />
          </div>
        </div>
        <div className="big_encntr">
          <div className="encounter_box">
            <Link
              to="/select"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="_CE">
                <GoArrowLeft className="arrow_icon" />
                <h1>Continue Encounter?</h1>
                <GoArrowLeft className="arrow_icon" />
              </div>
            </Link>
            <Link
              to="/instruction"
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="_CE">
                <GoArrowRight className="arrow_icon" />
                <h1>End Encounter?</h1>
                <GoArrowRight className="arrow_icon" />
              </div>
            </Link>
          </div>
        </div>
        <div className="small_encntr0">
          <div>
            <Link to="/instruction">
              <img
                src="./images/logo.png"
                className="img-fluid Enc-img"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Encounter;
